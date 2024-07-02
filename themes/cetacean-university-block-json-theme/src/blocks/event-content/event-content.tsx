
import { registerBlockType } from "@wordpress/blocks";
import type { Content, Guid } from "wordpress-types";

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

const block = (await import("./block.json")).default as BlockJson<EventContentAttributeType>;

registerBlockType<EventContentAttributeType>(block.name, {
    ...block,
    icon: "calendar",
    edit: EditComponent
});