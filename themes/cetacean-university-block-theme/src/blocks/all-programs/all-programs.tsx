
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type AllProgramsAttributeType = {};

registerBlockType<AllProgramsAttributeType>(CetaceanUniversityBlocks.AllPrograms, {
    title: "All Programs",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "welcome-learn-more",
    attributes: {},
    edit: EditComponent,
});