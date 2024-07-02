import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

export type NoteManagerAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<NoteManagerAttributeType>;

registerBlockType<NoteManagerAttributeType>(block.name, {
    ...block,
    icon: "format-aside",
    edit: EditComponent,
});