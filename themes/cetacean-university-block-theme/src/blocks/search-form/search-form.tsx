import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type SearchFormAttributeType = {
    formActionLink: string;
};

registerBlockType<SearchFormAttributeType>(CetaceanUniversityBlocks.SearchForm, {
    title: "Search Form",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
    attributes: {
        formActionLink: {
            type: "string",
            default: CetaceanUniversitySearchFormData.search_form_action_link,
        },
    },
    edit: EditComponent,
    save: SaveComponent
});