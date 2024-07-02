

import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import type { PageBannerGenericAttributeType } from "./page-banner-generic";

export type PageBannerGenericSaveComponentProps = BlockSaveProps<PageBannerGenericAttributeType>;

export function SaveComponent(props: PageBannerGenericSaveComponentProps){
    return (<InnerBlocks.Content/>);
}