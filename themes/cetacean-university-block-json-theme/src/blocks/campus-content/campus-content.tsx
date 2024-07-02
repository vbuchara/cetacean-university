import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import type { Guid } from "wordpress-types";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";
import type { EventInfo } from "@components/event";

import type { CampusMapInfo } from "../campuses-map/components/campus-map";

export type CampusContentAttributeType = {};

export interface CampusContentInfo extends CampusMapInfo{
    content: string;
    relatedPrograms?: {
        id: number;
        title: Guid;
        link: string;
    }[];
    relatedEvents?: (EventInfo & { id: number })[];
};

registerBlockType<CampusContentAttributeType>(CetaceanUniversityBlocks.CampusContent, {
    title: "Campus Content",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "location",
    attributes: {},
    edit: EditComponent,
});