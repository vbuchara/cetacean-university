import { registerBlockType } from "@wordpress/blocks";
import { header } from "@wordpress/icons";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type HeaderAtributesType = {
    siteAnchor: string;
};

const block = (await import("./block.json")).default as BlockJson<HeaderAtributesType>;

registerBlockType<HeaderAtributesType>(block.name, {
    ...block,
    icon: header,
    edit: EditComponent,
    save: SaveComponent
});