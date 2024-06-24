import { useEffect, useMemo, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import { type BlockEditProps } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { format } from "date-fns";
import type { WpFeaturedmedia } from "wordpress-types";

import { EditorAnchor } from "@src/components/editor-anchor";

import { PageBannerInspectorControls } from "./components/controls";

import type { BannerPageInfo, PageBannerAttributeType } from "./page-banner";

export type PageBannerEditComponentProps = BlockEditProps<PageBannerAttributeType>;

export function EditComponent(props: PageBannerEditComponentProps){
    const metaboxClasses = [
        "metabox",
        "metabox--position-down",
        "metabox--align-with-post",
        "metabox--with-home-link",
        "metabox--editor",
    ];
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

    const [bannerImage, setBannerImage] = useState("");
    const [pageInfoPreview, setPostInfoPreview] = useState<BannerPageInfo | undefined>();

    const page: BannerPageInfo = {
        ...defaultPage,
        ...pageInfoPreview
    };

    const Metabox = useMemo(() => {
        const { title, pageParent } = page;
        if(!pageParent) return () => <></>;

        return () => (
        <div 
            className={metaboxClasses.join(" ")}
        >
            <p>
                <EditorAnchor 
                    className="metabox__blog-home-link" 
                    href={pageParent.link}
                >
                    <FontAwesomeIcon
                        icon={faHome}
                        height="1rem"
                        width="1rem"
                    />
                    Back to {pageParent.title}
                </EditorAnchor>
                <span className="metabox__main">
                    {title}
                </span>
            </p>
        </div>
        )
    }, [page.pageParent?.title, page.pageParent?.link, page.title]);

    useEffect(() => {
        if(!page.bannerImageId){
            setBannerImage(defaultBannerImage);
            return;
        }

        (async() => {
            try{
                const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                    path: `/wp/v2/media/${page.bannerImageId}` 
                });
                const pageBannerSize = media_details.sizes['page-banner'];  
   
                if(!pageBannerSize && !source_url) throw new Error("No image found.");
                if(!pageBannerSize) return setBannerImage(source_url);
                
                setBannerImage(pageBannerSize.source_url);
            } catch(error){
                setBannerImage(defaultBannerImage);
                console.error(error);
            }
        })();
    }, [page.bannerImageId]);

    return (
    <>
        <PageBannerInspectorControls
            pageInfoPreview={pageInfoPreview}
            setPageInfoPreview={setPostInfoPreview}
        />
        <div className="page-banner">
            <div 
                className="page-banner__bg-image" 
                style={{
                    "--bg-image": `url(${bannerImage})`
                }}
                >
            </div>
            <div className="page-banner__content container container--narrow">
                <h1 className="page-banner__title">
                    {page.title}
                </h1>
                {!page.subtitle ? "" : (
                <div className="page-banner__intro">
                    <p>
                        {page.subtitle}
                    </p>
                </div>
                )}
            </div>
            {<Metabox/>}
        </div>
    </>
    );
}