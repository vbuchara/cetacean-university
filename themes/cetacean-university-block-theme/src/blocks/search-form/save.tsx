import { type BlockSaveProps } from "@wordpress/blocks";

import { SearchFormBlock } from "./components/block";

import type { SearchFormAttributeType } from "./search-form";

export type SearchFormSaveComponentProps = BlockSaveProps<SearchFormAttributeType>;

export function SaveComponent(props: SearchFormSaveComponentProps){
    return (
    <SearchFormBlock
        searchAction={props.attributes.formActionLink}
    />
    );
}