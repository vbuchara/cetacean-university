import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type BlogBannerAttributeType = {
    title: string;
    subtitle: string;
    bannerImageId: number;
};

registerBlockType<BlogBannerAttributeType>(CetaceanUniversityBlocks.BlogBanner, {
    title: "Blog Banner",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "archive",
    attributes: {
        title: {
            type: "string",
            default: "Our Blog"
        },
        subtitle: {
            type: "string",
            default: "Check out our latest posts!"
        },
        bannerImageId: {
            type: "number",
            default: 0
        },
    },
    edit: EditComponent,
});