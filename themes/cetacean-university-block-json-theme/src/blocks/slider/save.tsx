import { InnerBlocks } from "@wordpress/block-editor";
import { type BlockSaveProps } from "@wordpress/blocks";

export type SliderSaveComponentProps = BlockSaveProps<{}>;

export function SaveComponent(props: SliderSaveComponentProps){
    return (
    <div className="hero-slider">
        <div data-glide-el="track" className="glide__track">
            <div className="glide__slides">
                <InnerBlocks.Content />
            </div>
            <div className="slider__bullets glide__bullets" data-glide-el="controls[nav]"></div>
        </div>
    </div>
    );
}