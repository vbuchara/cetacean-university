
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type BannerPageInfo = {
    title: string;
    subtitle?: string;
    bannerImageId?: number;
    pageParent?: {
        link: string;
        title: string;
    };
};

export type PageBannerAttributeType = {};

registerBlockType<PageBannerAttributeType>(CetaceanUniversityBlocks.PageBanner, {
    title: "Page Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "admin-page",
    attributes: {},
    edit: EditComponent
});