import { registerBlockType } from "@wordpress/blocks";
import { header } from "@wordpress/icons";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type HeaderAtributesType = {
    siteAnchor: {
        text: string;
        href: string;
    }
};

registerBlockType<HeaderAtributesType>(CetaceanUniversityBlocks.Header, {
    title: "Header",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: header,
    attributes: {
        siteAnchor: {
            type: "object",
            default: {
                text: CetaceanUniversityHeaderData.site_name,
                href: CetaceanUniversityHeaderData.site_url
            }
        }
    },
    edit: EditComponent,
    save: SaveComponent
});