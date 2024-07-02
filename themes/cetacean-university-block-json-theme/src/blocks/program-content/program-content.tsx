

import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";
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

const block = (await import("./block.json")).default as BlockJson<ProgramContentAttributeType>;

registerBlockType<ProgramContentAttributeType>(block.name, {
    ...block,
    icon: "welcome-learn-more",
    edit: EditComponent,
});