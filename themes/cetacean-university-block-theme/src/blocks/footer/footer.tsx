import { code } from "@wordpress/icons";
import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";
import { registerBlockType } from "@wordpress/blocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import type { SocialLinks } from "./components/social-menu";

export interface FooterCustomLinks extends SocialLinks{
    phoneNumber?: string;
};

export type FooterAttributeType = {
    siteAnchor: string,
    siteAnchorWithLink: boolean,
    phoneNumber?: string,
    links: FooterCustomLinks
};

registerBlockType<FooterAttributeType>(CetaceanUniversityBlocks.Footer, {
    title: "Footer",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: code,
    attributes: {
        siteAnchor: {
            type: "string",
            default: CetaceanUniversityFooterData.site_name
        },
        siteAnchorWithLink: {
            type: "boolean",
            default: true
        },
        phoneNumber: {
            type: "string",
        },
        links: {
            type: "object",
            default: {}
        }
    },
    edit: EditComponent,
    save: SaveComponent
});