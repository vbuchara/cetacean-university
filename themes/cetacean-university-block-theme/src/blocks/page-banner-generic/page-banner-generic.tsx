import { registerBlockType } from "@wordpress/blocks";
import type { WPLinkControlValue } from "@wordpress/block-editor";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

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

registerBlockType<PageBannerGenericAttributeType>(CetaceanUniversityBlocks.PageBannerGeneric, {
    title: "Page Banner Generic",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "cover-image",
    attributes: {
        bannerImageId: {
            type: "number",
            default: 0
        },
        enableMetabox: {
            type: "boolean",
            default: false
        },
        metaboxInfo: {
            type: "object",
            default: {
                homeLinkText: "Home Link",
                mainText: "Main Metabox",
                showConditionalVariables: [] as string[]
            } satisfies PageBannerGenericAttributeType["metaboxInfo"]
        },
    },
    edit: EditComponent,
    save: SaveComponent
});