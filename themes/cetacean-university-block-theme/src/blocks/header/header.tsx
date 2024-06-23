import { registerBlockType } from "@wordpress/blocks";
import { header } from "@wordpress/icons";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type HeaderAtributesType = {
    siteAnchor: string;
};

registerBlockType<HeaderAtributesType>(CetaceanUniversityBlocks.Header, {
    title: "Header",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: header,
    attributes: {
        siteAnchor: {
            type: "string",
            default: CetaceanUniversityHeaderData.site_name
        }
    },
    edit: EditComponent,
    save: SaveComponent
});