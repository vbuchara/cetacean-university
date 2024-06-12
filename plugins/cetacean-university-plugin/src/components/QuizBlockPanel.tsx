import {
    PanelBody,
    PanelRow,
    ColorPicker
} from "@wordpress/components";

import {
    InspectorControls 
} from "@wordpress/block-editor";

import type { 
    CupQuizBlockAttributes 
} from "@blocks/CupQuizBlock";

export type QuizBlockPanelProps = {
   attributes: CupQuizBlockAttributes,
   setAttributes: (attrs: Partial<CupQuizBlockAttributes>) => void
}

export function QuizBlockPanel({
    attributes,
    setAttributes
}: QuizBlockPanelProps){

    return(
    <InspectorControls>
        <PanelBody 
            title="Background Color"
            initialOpen={true}
        >
            <PanelRow>
                <ColorPicker
                    color={attributes.styles.backgroundColor}
                    onChange={(color) => setAttributes({
                        styles: {
                            ...attributes.styles,
                            backgroundColor: color
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}