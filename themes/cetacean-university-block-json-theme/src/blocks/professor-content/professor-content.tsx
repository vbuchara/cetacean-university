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

const block = (await import("./block.json")).default as BlockJson<ProfessorContentAttributeType>;

registerBlockType<ProfessorContentAttributeType>(block.name, {
    ...block,
    icon: "businessman",
    edit: EditComponent,
});