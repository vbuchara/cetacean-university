import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type SearchFormAttributeType = {
    formActionLink: string;
};

const block = (await import("./block.json")).default as BlockJson<SearchFormAttributeType>;

registerBlockType<SearchFormAttributeType>(block.name, {
    ...block,
    icon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
    attributes: {
        ...block.attributes,
        formActionLink: {
            type: "string",
            default: CetaceanUniversitySearchFormData.search_form_action_link,
        },
    },
    edit: EditComponent,
    save: SaveComponent
});