import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type ProfessorContentAttributeType = {};

export interface ProfessorContentInfo {
    id: number;
    content: string;
    thumbnailUrl: string;
    hasLiked: boolean;
    likeCount: number;
    relatedProgramsIds: number[];
    relatedPrograms?: {
        id: number;
        title: string;
        link: string;
    }[]
}

registerBlockType<ProfessorContentAttributeType>(CetaceanUniversityBlocks.ProfessorContent, {
    title: "Professor Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "businessman",
    attributes: {},
    edit: EditComponent,
});