import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type HeadingSize = "large" | "medium" | "small" | "tiny";

export type HeadingAttributesType = {
    text: string,
    size: HeadingSize,
};

registerBlockType<HeadingAttributesType>(CetaceanUniversityBlocks.Heading, {
    title: "Heading",
    icon: "heading",
    category: CetaceanUniversityBlocks.BlockCategory,
    attributes: {
        text: {
            type: "string",
        },
        size: {
            type: "string",
            default: "large",
        },
    },
    edit: EditComponent,
    save: SaveComponent
});