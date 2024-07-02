import { registerBlockType } from "@wordpress/blocks";
import { type WPLinkControlValue } from "@wordpress/block-editor";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { WordpressColorsPresets } from "@classes/WordpressColorsPresets";

export type ButtonSize = "large" | "medium" |"small";

export type ButtonAnimation = "slide-from-top" | "slide-from-bottom" | "slide-from-left" | "slide-from-right" | "none";

export type ButtonAnimationsObject = {
    onHover: ButtonAnimation
};

export type ButtonAttributesType = {
    text: string,
    size?: ButtonSize,
    backgroundColor: string,
    color: string,
    animations: ButtonAnimationsObject,
    linkObject?: WPLinkControlValue
};

const block = (await import("./block.json")).default as BlockJson<ButtonAttributesType>;

registerBlockType<ButtonAttributesType>(block.name, {
    ...block,
    icon: "button",
    attributes: {
        ...block.attributes,
        backgroundColor: {
            type: "string",
            default: `var(${WordpressColorsPresets.Primary})`,
        },
        color: {
            type: "string",
            default: `var(${WordpressColorsPresets.White})`,
        },
    },
    edit: EditComponent,
    save: SaveComponent
});