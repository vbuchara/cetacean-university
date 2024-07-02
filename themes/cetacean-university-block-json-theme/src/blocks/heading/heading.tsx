import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type HeadingSize = "large" | "medium" | "small" | "tiny";

export type HeadingAttributesType = {
    text: string,
    size: HeadingSize,
};

const block = (await import("./block.json")).default as BlockJson<HeadingAttributesType>;

registerBlockType<HeadingAttributesType>(block.name, {
    ...block,
    icon: "heading",
    edit: EditComponent,
    save: SaveComponent
});