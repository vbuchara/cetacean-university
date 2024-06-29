

import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";
import type { EventInfo } from "@components/event";

export type ProgramContentAttributeType = {};

export interface ProgramContentInfo {
    id: number;
    title: string;
    content: string;
    relatedProfessors?: {
        id: number;
        title: string;
        link: string;
        thumbnailUrl: string;
    }[];
    relatedEvents?: (EventInfo & { id: number })[];
    relatedCampusesIds: number[],
    relatedCampuses?: {
        id: number;
        title: string;
        link: string;
    }[]
}

registerBlockType<ProgramContentAttributeType>(CetaceanUniversityBlocks.ProgramContent, {
    title: "Program Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "welcome-learn-more",
    attributes: {},
    edit: EditComponent,
});