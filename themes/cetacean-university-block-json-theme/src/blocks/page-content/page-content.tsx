
import { registerBlockType } from "@wordpress/blocks";
import type { WP_Page } from "wordpress-types";

import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

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

const block = (await import("./block.json")).default as BlockJson<PageContentAttributeType>;

registerBlockType<PageContentAttributeType>(block.name, {
    ...block,
    icon: "admin-page",
    edit: EditComponent,
});
