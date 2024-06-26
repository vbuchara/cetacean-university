import { useEffect, useMemo, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import { type BlockEditProps } from "@wordpress/blocks";
import { RawHTML } from "@wordpress/element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { format } from "date-fns";
import type { WpFeaturedmedia } from "wordpress-types";

import { EditorAnchor } from "@src/components/editor-anchor";

import { PostBannerInspectorControls } from "./components/controls";

import type { BannerPostInfo, PostBannerAttributeType } from "./post-banner";
import { PostBannerBlock } from "./components/block";

export type PostBannerEditComponentProps = BlockEditProps<PostBannerAttributeType>;

export function EditComponent(_: PostBannerEditComponentProps){
    const defaultBannerImage = CetaceanUniversityPostBannerData.theme_path + "/images/ocean.jpg";
    const defaultPost = {
        title: "{Post Title}",
        subtitle: "{Post Subtitle}",
        bannerImageId: 0,
        autor: {
            name: "{Author}",
            link: "",
        },
        date: format(new Date(), "dd/MM/yyyy"),
        category: [{
            id: 0,
            name: "{Category}",
            link: "",
        }],
    } as const satisfies BannerPostInfo;

    const [postInfoPreview, setPostInfoPreview] = useState<BannerPostInfo | undefined>();

    const post: BannerPostInfo = {
        ...defaultPost,
        ...postInfoPreview
    };

    return (
    <>
        <PostBannerInspectorControls
            postInfoPreview={postInfoPreview}
            setPostInfoPreview={setPostInfoPreview}
        />
        <PostBannerBlock
            post={post}
            defaultBannerImage={defaultBannerImage}
        />
    </>
    );
}