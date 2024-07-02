import { InnerBlocks } from "@wordpress/block-editor";

import { type BlockSaveProps } from "@wordpress/blocks";

import { type BannerAttributesType } from "./banner";

export type BannerSaveComponentProps = BlockSaveProps<BannerAttributesType>;

export function SaveComponent({
    attributes
}: BannerSaveComponentProps){
    return (
    <InnerBlocks.Content />
    );
}