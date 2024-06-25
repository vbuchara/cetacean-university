import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type BlogContentAttributeType = {};

registerBlockType<BlogContentAttributeType>(CetaceanUniversityBlocks.BlogContent, {
    title: "Blog Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "archive",
    attributes: {},
    edit: EditComponent,
});