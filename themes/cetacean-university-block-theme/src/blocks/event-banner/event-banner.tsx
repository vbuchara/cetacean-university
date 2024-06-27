import { registerBlockType } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import type { BannerPostInfo } from "../post-banner";

import { EditComponent } from "./edit";

export type EventBannerAttributeType = {};

export interface BannerEventInfo extends BannerPostInfo {
    autor?: undefined;
    category?: undefined;
    date?: undefined;
};

registerBlockType<EventBannerAttributeType>(CetaceanUniversityBlocks.EventBanner, {
    title: "Event Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "calendar",
    attributes: {},
    edit: EditComponent,
});