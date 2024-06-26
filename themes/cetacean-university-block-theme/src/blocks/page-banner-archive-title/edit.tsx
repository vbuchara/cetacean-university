import { RichText } from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import { PageBannerArchiveTitleAttributeType } from "./page-banner-archive-title";

export type PageBannerArchiveTitleEditComponentProps = BlockEditProps<PageBannerArchiveTitleAttributeType>;

export function EditComponent(props: PageBannerArchiveTitleEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <h1 className="page-banner__title">
        {"{Archive Title}"}
    </h1>
    );
}