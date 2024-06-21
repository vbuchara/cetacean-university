

import { registerBlockType } from "@wordpress/blocks";
import { menu } from "@wordpress/icons";

import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type MenuAttributeType = {};

registerBlockType<MenuAttributeType>(CetaceanUniversityBlocks.Menu, {
    title: "Menu",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: menu,
    attributes: {},
    edit: EditComponent,
});