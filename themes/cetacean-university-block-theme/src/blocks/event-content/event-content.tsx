
import { registerBlockType } from "@wordpress/blocks";
import type { Content, Guid } from "wordpress-types";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

export type EventContentAttributeType = {};

export type EventContentInfo = {
    content: Content,
    relatedProgramsIds: number[]
    relatedPrograms?: {
        id: number,
        title: Guid,
        link: string
    }[]
};

registerBlockType<EventContentAttributeType>(CetaceanUniversityBlocks.EventContent, {
    title: "Event Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "calendar",
    attributes: {},
    edit: EditComponent
});