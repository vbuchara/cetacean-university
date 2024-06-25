import { useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";

import { PageBannerInspectorControls } from "./components/controls";

import type { BannerPageInfo, PageBannerAttributeType } from "./page-banner";
import { PageBannerBlock } from "./components/block";

export type PageBannerEditComponentProps = BlockEditProps<PageBannerAttributeType>;

export function EditComponent(props: PageBannerEditComponentProps){
    const defaultBannerImage = CetaceanUniversityPageBannerData.theme_path + "/images/ocean.jpg";
    const defaultPage = {
        title: "{Page Title}",
        subtitle: "{Page Subtitle}",
        bannerImageId: 0,
        pageParent: {
            link: "/",
            title: "{Page Parent}"
        }
    } as const satisfies BannerPageInfo;

    const [pageInfoPreview, setPostInfoPreview] = useState<BannerPageInfo | undefined>();

    const page: BannerPageInfo = {
        ...defaultPage,
        ...pageInfoPreview
    };

    return (
    <>
        <PageBannerInspectorControls
            pageInfoPreview={pageInfoPreview}
            setPageInfoPreview={setPostInfoPreview}
        />
        <PageBannerBlock
            page={page}
            defaultBannerImage={defaultBannerImage}
        />
    </>
    );
}