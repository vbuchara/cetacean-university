

import { registerBlockType } from "@wordpress/blocks";
import { menu } from "@wordpress/icons";

import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type MenuAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<MenuAttributeType>;

registerBlockType<MenuAttributeType>(block.name, {
    ...block,
    icon: menu,
    ancestor: [CetaceanUniversityBlocks.Header], 
    edit: EditComponent,
});