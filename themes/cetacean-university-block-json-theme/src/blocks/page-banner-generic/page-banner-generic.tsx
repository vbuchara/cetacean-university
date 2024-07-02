import { registerBlockType } from "@wordpress/blocks";
import type { WPLinkControlValue } from "@wordpress/block-editor";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export interface HomeLinkObject extends WPLinkControlValue {
    type?: string;
}

export type PageBannerGenericAttributeType = {
    bannerImageId: number;
    enableMetabox: boolean;
    metaboxInfo: {
        homeLinkText: string;
        mainText: string;
        homeLinkObject?: HomeLinkObject;
        showConditionalVariables: string[];
    }
};

const block = (await import("./block.json")).default as BlockJson<PageBannerGenericAttributeType>;

registerBlockType<PageBannerGenericAttributeType>(block.name, {
    ...block,
    icon: "cover-image",
    edit: EditComponent,
    save: SaveComponent
});