
import { registerBlockType } from "@wordpress/blocks";
import type { WP_Page } from "wordpress-types";

import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type PageContentInfo = {
    id: number;
    title: string;
    content: string;
    link: string;
    pageParent?: {
        id: number;
        link: string;
        title: string;
    };
    pageChildren?: {
        id: number;
        link: string;
        title: string;
    }[];
};

export interface WP_PageWithChildren extends WP_Page {
    children?: WP_Page[];
}

export type PageContentAttributeType = {};

registerBlockType<PageContentAttributeType>(CetaceanUniversityBlocks.PageContent, {
    title: "Page Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "admin-page",
    attributes: {},
    edit: EditComponent,
});
