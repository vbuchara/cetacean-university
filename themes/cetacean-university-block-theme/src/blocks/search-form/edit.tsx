
import { type BlockEditProps } from "@wordpress/blocks";

import { SearchFormBlock } from "./components/block";
import { SearchFormInspectorControls } from "./components/controls";

import type { SearchFormAttributeType } from "./search-form";

export type SearchFormEditComponentProps = BlockEditProps<SearchFormAttributeType>;

export function EditComponent(props: SearchFormEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <>
        <SearchFormInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <SearchFormBlock
            searchAction={attributes.formActionLink}
        />
    </>
    );
}