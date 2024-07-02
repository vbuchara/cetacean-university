import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

export type SearchResultsAttributeType = {};

registerBlockType<SearchResultsAttributeType>(CetaceanUniversityBlocks.SearchResults, {
    title: "Search Results",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon:  () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
    attributes: {},
    edit: EditComponent,
});