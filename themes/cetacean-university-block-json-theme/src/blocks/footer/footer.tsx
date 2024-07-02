import { registerBlockType } from "@wordpress/blocks";
import { footer } from "@wordpress/icons";

import type { SocialLinks } from "./components/social-menu";

import { EditComponent } from "./edit";

export interface FooterCustomLinks extends SocialLinks{
    phoneNumber?: string;
};

export type FooterAttributeType = {
    siteAnchor: string,
    siteAnchorWithLink: boolean,
    phoneNumber?: string,
    links: FooterCustomLinks
};

const block = (await import("./block.json")).default as BlockJson<FooterAttributeType>;

registerBlockType<FooterAttributeType>(block.name, {
    ...block,
    icon: footer,
    edit: EditComponent
});