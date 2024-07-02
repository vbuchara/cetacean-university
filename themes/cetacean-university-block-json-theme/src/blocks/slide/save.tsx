import { InnerBlocks } from "@wordpress/block-editor";
import { type BlockSaveProps } from "@wordpress/blocks";

import { type SlideAttributeType } from "./slide";

export type SlideSaveComponentProps = BlockSaveProps<SlideAttributeType>;

export function SaveComponent(_: SlideSaveComponentProps){

    return (<InnerBlocks.Content />);
}