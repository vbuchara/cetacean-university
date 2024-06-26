import { registerBlockType } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import type { BannerPostInfo } from "../post-banner";

import { EditComponent } from "./edit";

export type CampusBannerAttributeType = {};

export interface BannerCampusInfo extends BannerPostInfo {
    autor?: undefined;
    category?: undefined;
    date?: undefined;
};

registerBlockType<CampusBannerAttributeType>(CetaceanUniversityBlocks.CampusBanner, {
    title: "Campus Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "location",
    attributes: {},
    edit: EditComponent,
});