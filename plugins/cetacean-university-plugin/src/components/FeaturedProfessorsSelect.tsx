import { 
    forwardRef, 
    useState,
    useEffect
} from 'react';
import { useI18n } from '@wordpress/react-i18n';
import type { ProfessorPost } from 'wordpress-types';

import { 
    type CupFeaturedProfessorEditBlockProps 
} from "@blocks/CupFeaturedProfessorBlock";
import { supportsHasSelector } from '@utils/cssSupports';
import { getTitle } from '@utils/getTitle';

export type FeaturedProfessorsSelectProps = {
    professors: ProfessorPost[],
} & Pick<CupFeaturedProfessorEditBlockProps, "attributes" | "setAttributes">;

function FeaturedProfessorsSelectComponent({
    attributes,
    setAttributes,
    professors
}: FeaturedProfessorsSelectProps, ref: React.Ref<HTMLSelectElement>){
    const [selectClasses, setSelectClasses] = useState(
        new Set(["cup-featured-professor-edit-block__select"])
    );

    const { __ } = useI18n();

    function onProfessorSelected(event: React.FormEvent<HTMLSelectElement>){
        setAttributes({
            professorFeaturedId: event.currentTarget.value
        });
    }

    function isProfessorSelected(id: string){
        return attributes.professorFeaturedId === id;
    }

    useEffect(() => {
        const { professorFeaturedId } = attributes;

        if(supportsHasSelector()) return;

        if(!professorFeaturedId){
            setSelectClasses((classes) => {
                classes.add("cup-featured-professor-edit-block__select--blank");
                return new Set(classes);
            });
        } else {
            setSelectClasses((classes) => {
                classes.delete("cup-featured-professor-edit-block__select--blank");
                return new Set(classes);
            });
        };
    }, [attributes.professorFeaturedId]);

    return (
    <select 
        ref={ref}
        className={Array.from(selectClasses).join(" ")}
        onInput={onProfessorSelected}
    >
        <option 
            className="cup-featured-professor-edit-block__select-blank"
            value=""
        >
            {__('Select the professor to be featured')}
        </option>
        {professors.map((professor) => {
            return (
            <option 
                key={professor.id}
                value={professor.id} 
                selected={isProfessorSelected(String(professor.id))} 
            >
                {getTitle(professor)}
            </option>
            );
        })}
    </select>
    );
}

export const FeaturedProfessorsSelect = forwardRef(FeaturedProfessorsSelectComponent);