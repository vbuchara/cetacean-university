import { registerBlockType } from "@wordpress/blocks";
import { title } from "@wordpress/icons";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type PageBannerSubtitleAttributeType = {
    text: string;
};

registerBlockType<PageBannerSubtitleAttributeType>(CetaceanUniversityBlocks.PageBannerSubtitle, {
    title: "Page Banner Subtitle",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: title,
    attributes: {
        text: {
            type: "string",
            default: "Page Banner Subtitle"
        }
    },
    edit: EditComponent,
    save: SaveComponent,
    parent: [CetaceanUniversityBlocks.PageBannerGeneric],
});