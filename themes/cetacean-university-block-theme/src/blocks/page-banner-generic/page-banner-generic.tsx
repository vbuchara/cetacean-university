import { registerBlockType } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type PageBannerGenericAttributeType = {
    bannerImageId: number;
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
    },
    edit: EditComponent,
    save: SaveComponent
});