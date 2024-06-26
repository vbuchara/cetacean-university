import { registerBlockType } from "@wordpress/blocks";
import { type WPLinkControlValue } from "@wordpress/block-editor";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";
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

registerBlockType<ButtonAttributesType>(CetaceanUniversityBlocks.Button, {
    title: "Button",
    icon: "button",
    category: CetaceanUniversityBlocks.BlockCategory,
    attributes: {
        text: {
            type: "string",
        },
        size: {
            type: "string",
            default: "large",
        },
        backgroundColor: {
            type: "string",
            default: `var(${WordpressColorsPresets.Primary})`,
        },
        color: {
            type: "string",
            default: `var(${WordpressColorsPresets.White})`,
        },
        animations: {
            type: "object",
            default: {}
        },
        linkObject: {
            type: "object",
            default: {}
        }
    },
    edit: EditComponent,
    save: SaveComponent
});