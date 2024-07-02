import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

export type SearchResultsAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<SearchResultsAttributeType>;

registerBlockType<SearchResultsAttributeType>(block.name, {
    ...block,
    icon:  () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
    edit: EditComponent,
});