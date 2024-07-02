import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import { type HeaderAtributesType } from "./header";

export type HeaderSaveComponentProps = BlockSaveProps<HeaderAtributesType>;

export function SaveComponent(_: HeaderSaveComponentProps){    
    return (<InnerBlocks.Content />);
}