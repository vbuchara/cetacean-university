import "@styles/blocks/cup-featured-professor-block.scss";

import { 
    useEffect 
    } from "react";
import { useUnmount } from "react-use";
import { 
    registerBlockType,
    type BlockInstance,
    type Block,
    type BlockEditProps,
    type BlockSaveProps,
} from "@wordpress/blocks";
import { 
    useSelect,
    useDispatch,
    select
} from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import { createI18n, I18n, getLocaleData } from '@wordpress/i18n';
import { I18nProvider } from "@wordpress/react-i18n";
import type { ProfessorPost } from 'wordpress-types';

import { FeaturedProfessorsSelect } from "@components/FeaturedProfessorsSelect";
import { FeaturedProfessor } from "@components/FeaturedProfessor";

export type CupFeaturedProfessorBlockAttributes = {
    professorFeaturedId: string;
}

export type CupFeaturedProfessorBlockType = Block<CupFeaturedProfessorBlockAttributes>;

export type CupFeaturedProfessorBlockInstance = BlockInstance<CupFeaturedProfessorBlockAttributes>;

export type CupFeaturedProfessorEditBlockProps = BlockEditProps<CupFeaturedProfessorBlockAttributes>;

export type CupFeaturedProfessorSaveBlockProps = BlockSaveProps<CupFeaturedProfessorBlockAttributes>;

export class CupFeaturedProfessorBlock {
    public static i18n: I18n = createI18n(getLocaleData("cupdomain"));

    public attributes: CupFeaturedProfessorBlockType["attributes"] = {
        professorFeaturedId: {
            type: "string",
        }
    } as const; 

    public constructor(){
        registerBlockType<CupFeaturedProfessorBlockAttributes>(
            "cetacean-university-plugin/featured-professor",
            {
                title: "Featured Professor",
                category: "common",
                description: "Feature a professor in your post.",
                icon: "businessperson",
                attributes: this.attributes,
                edit: this.EditComponent,
            }
        );
    }

    public EditComponent(props: CupFeaturedProfessorEditBlockProps){
        const {
            attributes,
        } = props;
        const {
            professorFeaturedId
        } = attributes;

        const { editPost } = useDispatch(editorStore);

        const professorsMap = useSelect((select) => {
            const professorsArray = select(coreStore).getEntityRecords(
                "postType",
                "professor",
                { 
                    per_page: -1,
                    context: "view",
                    "_embed": true
                }
            ) as ProfessorPost[];

            if(!professorsArray) return null;

            return new Map(professorsArray.map((professor) => {
                return [String(professor.id), professor];
            }));
        }, []);

        function updateMetadata(){
            const professorsArray = select(editorStore).getBlocks()
                .filter(block => block.name === "cetacean-university-plugin/featured-professor")
                .map((block: CupFeaturedProfessorBlockInstance) => block.attributes.professorFeaturedId)
                .filter((professorId) => professorId)
                .map((professorId) => professorId.trim());
            const professorFeaturedIds = new Set(professorsArray);
            
            editPost({
                meta: {
                    featuredProfessor: Array.from(professorFeaturedIds.values())
                }
            });
        }

        useEffect(() => {
            updateMetadata();
        }, [professorFeaturedId]);

        useUnmount(() => {
            updateMetadata();
        });
        
        if(!professorsMap) return (
        <CupFeaturedProfessorBlock.LoadComponent/>
        );

        return (
        <I18nProvider i18n={CupFeaturedProfessorBlock.i18n}>
            <div className="cup-featured-professor-edit-block">
                <FeaturedProfessorsSelect
                    professors={Array.from(professorsMap.values())}
                    {...props}
                />
                {professorFeaturedId && professorsMap.has(professorFeaturedId) ? (
                <FeaturedProfessor
                    professor={professorsMap.get(professorFeaturedId)!}
                />
                ): ""}
            </div>
        </I18nProvider>
        );
    }

    public static SaveComponent(props: CupFeaturedProfessorSaveBlockProps){
        const {
            attributes
        } = props;

        const professor = useSelect((select) => {
            return select(coreStore).getEntityRecord(
                "postType",
                "professor",
                attributes.professorFeaturedId,
                {
                    context: "view",
                    "_embed": true
                }
            ) as ProfessorPost | null;
        }, []);

        if(!professor) return (
        <CupFeaturedProfessorBlock.LoadComponent/>
        );

        return (
        <I18nProvider i18n={CupFeaturedProfessorBlock.i18n}>
            <div className="cup-featured-professor-save-block">
                <FeaturedProfessor
                    professor={professor}
                />
            </div>
        </I18nProvider>
        );
    }

    public static LoadComponent(){
        return (
        <div className='cup-featured-professor-block-loading'>
            Loading Professors
        </div>
        );
    }
}