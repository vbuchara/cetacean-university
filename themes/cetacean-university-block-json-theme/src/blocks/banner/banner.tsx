import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type BannerAttributesType = {
    bannerImageId: number,
    bannerImageUrl: string
};

registerBlockType<BannerAttributesType>(CetaceanUniversityBlocks.Banner, {
    title: "Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "cover-image",
    attributes: {
        bannerImageId: {
            type: "number",
            default: 0
        },
        bannerImageUrl: {
            type: "string",
            default: CetaceanUniversityBannerData.theme_path + "/images/library-hero.jpg"
        }
    },
    edit: EditComponent,
    save: SaveComponent
});