import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import type { Guid } from "wordpress-types";

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

const block = (await import("./block.json")).default as BlockJson<CampusContentAttributeType>;

registerBlockType<CampusContentAttributeType>(block.name, {
    ...block,
    icon: "location",
    edit: EditComponent,
});