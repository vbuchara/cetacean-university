import { RichText } from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import { PageBannerTitleAttributeType } from "./page-banner-title";

export type PageBannerTitleEditComponentProps = BlockEditProps<PageBannerTitleAttributeType>;

export function EditComponent(props: PageBannerTitleEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <RichText
        tagName="h1"
        className="page-banner__title"
        onChange={(value) => setAttributes({ text: value })}
        value={attributes.text}
    />
    );
}