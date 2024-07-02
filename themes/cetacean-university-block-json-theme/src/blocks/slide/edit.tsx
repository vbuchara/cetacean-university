import { useEffect } from "react";
import { InnerBlocks } from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { SlideInspectorControls } from "./components/controls";

import type { SlideAttributeType } from "./slide";

export type SlideEditComponentProps = BlockEditProps<SlideAttributeType>;

export function EditComponent(props: SlideEditComponentProps){
    const { attributes, setAttributes } = props;
    const imageUrl = attributes.imageUrl 
        ? attributes.imageUrl 
        : CetaceanUniversitySlideData.theme_path + attributes.imageDefault;

    return (
    <>
        <SlideInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div 
            className="hero-slider__slide" 
            style={{
                "--bg-image": `url(${imageUrl})`
            }}
        >
            <div className="hero-slider__interior container">
                <div className="hero-slider__overlay t-center">
                    <InnerBlocks
                        allowedBlocks={[
                            CetaceanUniversityBlocks.Heading,
                            CetaceanUniversityBlocks.Button,
                            "core/paragraph",
                        ]}
                    />
                </div>
            </div>
        </div>
    </>
    );
}