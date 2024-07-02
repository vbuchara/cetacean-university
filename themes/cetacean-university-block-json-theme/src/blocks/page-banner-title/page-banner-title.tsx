
import { registerBlockType } from "@wordpress/blocks";
import { title } from "@wordpress/icons";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type PageBannerTitleAttributeType = {
    text: string;
    showConditionalVariables: string[];
};

const block = (await import("./block.json")).default as BlockJson<PageBannerTitleAttributeType>;

registerBlockType<PageBannerTitleAttributeType>(block.name, {
    ...block,
    icon: title,
    edit: EditComponent,
    save: SaveComponent,
    parent: [CetaceanUniversityBlocks.PageBannerGeneric],
});