import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type HeadingSize = "large" | "medium" | "small" | "tiny";

export type HeadingAttributesType = {
    text: string,
    size: HeadingSize,
};

registerBlockType<HeadingAttributesType>(CetaceanUniversityBlocks.Heading, {
    title: "Cetacean University Heading",
    icon: "heading",
    category: "common",
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