

import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

export type CampusesMapAttributeType = {};

registerBlockType<CampusesMapAttributeType>(CetaceanUniversityBlocks.CampusesMap, {
    title: "Campuses Map",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: () => <FontAwesomeIcon icon={faMapLocationDot}/>,
    attributes: {},
    edit: EditComponent,
});