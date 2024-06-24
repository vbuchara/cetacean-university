
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type PostContentInfo = {
    content: string;
};

export type PostContentAttributeType = {};

registerBlockType<PostContentAttributeType>(CetaceanUniversityBlocks.PostContent, {
    title: "Post Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "admin-post",
    attributes: {},
    edit: EditComponent,
});
