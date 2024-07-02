import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";

import type { UpcomingEventsEditComponentProps } from "../edit";

export type UpcomingEventsInspectorControlsProps = Pick<
    UpcomingEventsEditComponentProps,
    "attributes" | "setAttributes"
>;

export function UpcomingEventsInspectorControls(props: UpcomingEventsInspectorControlsProps){
    const { attributes, setAttributes } = props; 

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Options"
            initialOpen={true}
        >
            <PanelRow>
                <ToggleControl
                    label="Enable Past Events link"
                    checked={attributes.enablePastEventsLink}
                    onChange={(value) => setAttributes({ enablePastEventsLink: value })}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}