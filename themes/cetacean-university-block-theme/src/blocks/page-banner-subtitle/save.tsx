import { RichText } from "@wordpress/block-editor";
import { type BlockSaveProps } from "@wordpress/blocks";

import type { PageBannerSubtitleAttributeType } from "./page-banner-subtitle";

export type PageBannerSubtitleSaveComponentProps = BlockSaveProps<PageBannerSubtitleAttributeType>;

export function SaveComponent(props: PageBannerSubtitleSaveComponentProps){
    return (
    <div className="page-banner__intro">
        <RichText.Content
            tagName="p"
            value={props.attributes.text}
        />
    </div>
    );
}