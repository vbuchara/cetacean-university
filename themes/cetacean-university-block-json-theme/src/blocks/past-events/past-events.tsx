
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type PastEventsAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<PastEventsAttributeType>;

registerBlockType<PastEventsAttributeType>(block.name, {
    ...block,
    icon: "calendar",
    edit: EditComponent,
});