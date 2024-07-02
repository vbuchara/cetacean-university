
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type PostContentInfo = {
    content: string;
};

export type PostContentAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<PostContentAttributeType>;

registerBlockType<PostContentAttributeType>(block.name, {
    ...block,
    icon: "admin-post",
    edit: EditComponent,
});
