import { 
    type Dispatch,
    type SetStateAction
} from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";

import type { MenuEditComponentProps } from "../edit";

export type MenuInspectorControlsProps = Pick<
    MenuEditComponentProps,
    'attributes' | 'setAttributes'
> & {
    showLoggedMenu: boolean,
    setShowLoggedMenu: Dispatch<SetStateAction<boolean>>
};

export function MenuInspectorControls({
    showLoggedMenu,
    setShowLoggedMenu
}: MenuInspectorControlsProps){
    return (
    <InspectorControls>
        <PanelBody
            title="Exhibition"
            initialOpen={true}
        >
            <PanelRow>
                <ToggleControl
                    label="Show logged user (Editor only)"
                    checked={showLoggedMenu}
                    onChange={setShowLoggedMenu}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}