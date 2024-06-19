import { InnerBlocks } from "@wordpress/block-editor";

import { type BlockSaveProps } from "@wordpress/blocks";

import { type BannerAttributesType } from "./banner";

export type BannerSaveComponentProps = BlockSaveProps<BannerAttributesType>;

export function SaveComponent({
    attributes
}: BannerSaveComponentProps){
    return (
    <div className="page-banner">
        <div 
            className="page-banner__bg-image" 
            style={{
                "--bg-image": `url(${attributes.bannerImageUrl})`
            }}
        ></div>
        <div className="page-banner__content container t-center c-white">
            <InnerBlocks.Content />
        </div>
    </div>
    );
}