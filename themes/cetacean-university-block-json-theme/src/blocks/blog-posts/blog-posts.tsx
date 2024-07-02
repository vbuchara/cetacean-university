import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type BlogPostsAttributeType = {};

registerBlockType<BlogPostsAttributeType>(CetaceanUniversityBlocks.BlogPosts, {
    title: "Blog Posts",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "admin-post",
    attributes: {},
    edit: EditComponent,
});