import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type NoteManagerAttributeType = {};

registerBlockType<NoteManagerAttributeType>(CetaceanUniversityBlocks.NoteManager, {
    title: "Note Manager",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "format-aside",
    attributes: {},
    edit: EditComponent,
});