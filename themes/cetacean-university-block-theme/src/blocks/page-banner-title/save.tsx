import { type BlockSaveProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import type { PageBannerTitleAttributeType } from "./page-banner-title";

export type PageBannerTitleSaveComponentProps = BlockSaveProps<PageBannerTitleAttributeType>;

export function SaveComponent(props: PageBannerTitleSaveComponentProps){
    return (
    <RichText.Content
        tagName="h1"
        className="page-banner__title"
        value={props.attributes.text}
    />
    );
}