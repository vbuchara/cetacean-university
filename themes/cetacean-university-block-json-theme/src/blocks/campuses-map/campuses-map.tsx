

import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";

import { EditComponent } from "./edit";

export type CampusesMapAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<CampusesMapAttributeType>;

registerBlockType<CampusesMapAttributeType>(block.name, {
    ...block,
    icon: () => <FontAwesomeIcon icon={faMapLocationDot}/>,
    edit: EditComponent,
});