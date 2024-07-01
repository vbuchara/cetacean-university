
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type PastEventsAttributeType = {};

registerBlockType<PastEventsAttributeType>(CetaceanUniversityBlocks.PastEvents, {
    title: "Past Events",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "calendar",
    attributes: {},
    edit: EditComponent,
});