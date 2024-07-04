import {
    InspectorControls 
} from "@wordpress/block-editor";
import {
    PanelBody,
    PanelRow,
    ColorPicker
} from "@wordpress/components";
import { lighten } from "polished";

import type { 
    InteractiveQuizEditProps 
} from "@blocks/interactive-quiz/edit";

export type QuizBlockPanelProps = Pick<
    InteractiveQuizEditProps,
    "attributes" | "setAttributes"
> & {
    backgroundColor: string
};

export function QuizInspectorControls({
    attributes,
    setAttributes,
    backgroundColor
}: QuizBlockPanelProps){

    return(
    <InspectorControls>
        <PanelBody 
            title="Background Color"
            initialOpen={true}
        >
            <PanelRow>
                <ColorPicker
                    color={backgroundColor}
                    onChange={(color) => setAttributes({
                        styles: {
                            ...attributes.styles,
                            backgroundColor: color,
                            borderColor: lighten(-0.25)(color)
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}