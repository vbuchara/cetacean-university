import Select, { type SingleValue } from 'react-select';
import { 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
} from "@wordpress/components";
import { 
    useSelect 
} from "@wordpress/data";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import type { ProfessorPost } from "wordpress-types";

import { EditorSelect } from '@src/components/editor-select';
import defaultAvatarSrc from "@images/default-user-portrait.png";
import { getTitle } from "@utils/getTitle";
import { getThumbnail } from '@utils/getThumbnail';

import type { ProfessorContentInfo } from "../professor-content";

export type ProfessorContentInspectorControlsProps = {
    professorInfoPreview: ProfessorContentInfo | undefined;
    setProfessorInfoPreview: React.Dispatch<React.SetStateAction<ProfessorContentInfo | undefined>>;
};

export interface ProfessorSelectOption extends ProfessorContentInfo{
    value: number;
    label: string;
};

export function ProfessorContentInspectorControls({
    professorInfoPreview,
    setProfessorInfoPreview
}: ProfessorContentInspectorControlsProps){
    const professor = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "professor",
            {
                per_page: -1,
                _embed: true
            }
        ) as ProfessorPost[] | null;
    }, []);
    const professorOptions = professor?.map<ProfessorSelectOption>(professor => ({ 
        label: getTitle(professor),
        value: professor.id,
        id: professor.id,
        content: professor.content.rendered,
        thumbnailUrl: getThumbnail(professor, { 
            size: "professor-portrait",
            defaultImg: defaultAvatarSrc 
        }),
        hasLiked: false,
        likeCount: 0,
        relatedProgramsIds: professor.acf.related_programs,
    }));

    function onProfessorSelected(program: SingleValue<ProfessorContentInfo>){
        setProfessorInfoPreview(program ? program : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Professor Preview"
            initialOpen={true}
        >
            <PanelRow>
                <EditorSelect
                    name="professor"
                    isLoading={!professor}
                    value={professorInfoPreview}
                    onChange={onProfessorSelected}
                    options={professorOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}