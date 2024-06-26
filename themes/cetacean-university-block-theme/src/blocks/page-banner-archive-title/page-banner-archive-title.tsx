
import { registerBlockType } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

export type PageBannerArchiveTitleAttributeType = {};

registerBlockType<PageBannerArchiveTitleAttributeType>(CetaceanUniversityBlocks.PageBannerArchiveTitle, {
    title: "Page Banner Archive Title",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "archive",
    attributes: {},
    edit: EditComponent,
    parent: [CetaceanUniversityBlocks.PageBannerGeneric],
});