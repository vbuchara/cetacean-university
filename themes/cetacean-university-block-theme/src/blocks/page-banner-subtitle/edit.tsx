import { type BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import type { PageBannerSubtitleAttributeType } from "./page-banner-subtitle";

export type PageBannerSubtitleEditComponentProps = BlockEditProps<PageBannerSubtitleAttributeType>;

export function EditComponent(props: PageBannerSubtitleEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <div className="page-banner__intro">
        <RichText
            tagName="p"
            value={attributes.text}
            onChange={(value) => setAttributes({ text: value })}
        />
    </div>
    );
}