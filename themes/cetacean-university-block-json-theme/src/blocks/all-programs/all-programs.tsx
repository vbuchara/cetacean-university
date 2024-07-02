
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type AllProgramsAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<AllProgramsAttributeType>;

registerBlockType<AllProgramsAttributeType>(block.name, {
    ...block,
    icon: "welcome-learn-more",
    edit: EditComponent,
});