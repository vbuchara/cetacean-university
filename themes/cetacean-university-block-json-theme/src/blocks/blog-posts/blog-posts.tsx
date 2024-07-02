import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type BlogPostsAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<BlogPostsAttributeType>;

registerBlockType<BlogPostsAttributeType>(block.name, {
    ...block,
    icon: "admin-post",
    edit: EditComponent,
});