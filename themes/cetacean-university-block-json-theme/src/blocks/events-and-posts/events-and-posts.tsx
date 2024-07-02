import { registerBlockType } from "@wordpress/blocks";

import { EditComponent } from "./edit";

export type EventsAndPostsAttributesType = {};

const block = (await import("./block.json")).default as BlockJson<EventsAndPostsAttributesType>;

registerBlockType(block.name, {
    ...block,
    icon: "calendar-alt",
    edit: EditComponent
});