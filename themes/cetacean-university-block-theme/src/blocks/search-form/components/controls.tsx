

import { 
    InspectorControls, 
    type WPLinkControlValue 
} from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";

import { PanelLinkControl } from "@components/panel-link-control";

import type { SearchFormEditComponentProps } from "../edit";

export type SearchFormInspectorControlsProps = Pick<
    SearchFormEditComponentProps,
    "attributes" | "setAttributes"
>;

export function SearchFormInspectorControls({
    attributes,
    setAttributes
}: SearchFormInspectorControlsProps){

    function onChangeSearchFormActionLink(value: WPLinkControlValue){
        setAttributes({
            formActionLink: value.url
        });
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Form Settings"
            initialOpen={true}
        >
            <PanelRow>
                <PanelLinkControl
                    label={"Form Action Link"}
                    settings={[]}
                    value={{
                        url: attributes.formActionLink
                    }}
                    onChange={onChangeSearchFormActionLink}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}