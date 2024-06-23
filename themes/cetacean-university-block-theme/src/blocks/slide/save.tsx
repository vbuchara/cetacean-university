import { InnerBlocks } from "@wordpress/block-editor";
import { type BlockSaveProps } from "@wordpress/blocks";

import { type SlideAttributeType } from "./slide";

export type SlideSaveComponentProps = BlockSaveProps<SlideAttributeType>;

export function SaveComponent(props: SlideSaveComponentProps){
    const {
        attributes
    } = props;

    return (
    <div 
        className="hero-slider__slide" 
        style={{
            "--bg-image": `url(${attributes.imageUrl})`
        }}
    >
        <div className="hero-slider__interior container">
            <div className="hero-slider__overlay t-center">
                <InnerBlocks.Content />
            </div>
        </div>
    </div>
    );
}