
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type BannerPostInfo = {
    title: string;
    subtitle?: string;
    bannerImageId?: number;
    autor: {
        name: string;
        link: string;
    };
    date: string;
    category: {
        id: number;
        name: string;
        link: string;
    }[];
};

export type PostBannerAttributeType = {};

registerBlockType<PostBannerAttributeType>(CetaceanUniversityBlocks.PostBanner, {
    title: "Post Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "admin-post",
    attributes: {},
    edit: EditComponent
});