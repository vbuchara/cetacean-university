
import { registerBlockType } from "@wordpress/blocks";
import { title } from "@wordpress/icons";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type PageBannerTitleAttributeType = {
    text: string;
};

registerBlockType<PageBannerTitleAttributeType>(CetaceanUniversityBlocks.PageBannerTitle, {
    title: "Page Banner Title",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: title,
    attributes: {
        text: {
            type: "string",
            default: "Page Banner Title"
        }
    },
    edit: EditComponent,
    save: SaveComponent,
    parent: [CetaceanUniversityBlocks.PageBannerGeneric],
});