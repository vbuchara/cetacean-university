import { useEffect, useMemo, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import type { WpFeaturedmedia } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";

import type { BannerPageInfo } from "../page-banner";

export type PageBannerBlockRenderProps = {
    divClassName: string;
};

export type PageBannerBlockRenderComponent = (props: PageBannerBlockRenderProps) => React.ReactNode;

export type PageBannerBlockProps = {
    page: BannerPageInfo, 
    defaultBannerImage: string,
    renderMetabox?: PageBannerBlockRenderComponent,
    renderTitle?: PageBannerBlockRenderComponent,
    renderSubtitle?: PageBannerBlockRenderComponent
};

export { BannerPageInfo };

export function PageBannerBlock(props: PageBannerBlockProps){
    const { 
        page, 
        defaultBannerImage,
        renderMetabox: PropsMetabox,
        renderTitle: PropsTitle,
        renderSubtitle: PropsSubtitle
    } = props;

    const metaboxClasses = [
        "metabox",
        "metabox--position-down",
        "metabox--align-with-post",
        "metabox--with-home-link",
        "metabox--editor",
    ];

    const [bannerImage, setBannerImage] = useState("");

    const Title = useMemo(() => {
        return () => (
            <h1 className="page-banner__title">
                {page.title}
            </h1>
        )
    }, [page.title]);

    const Subtitle = useMemo(() => {        
        return () => (
        <>
            {!page.subtitle ? "" : (
            <div className="page-banner__intro">
                <p>
                    {page.subtitle}
                </p>
            </div>
            )}
        </>
        );
    }, [page.subtitle])

    const Metabox = useMemo<PageBannerBlockRenderComponent>(() => {
        const { title, pageParent } = page;
        if(!pageParent) return () => "";

        return ({ divClassName }) => (
        <div 
            className={divClassName}
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
    }, [
        page.pageParent?.title, 
        page.pageParent?.link, 
        page.title,
        PropsMetabox
    ]);

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
    }, [page.bannerImageId, defaultBannerImage]);
    
    return (
    <div className="page-banner">
        <div 
            className="page-banner__bg-image" 
            style={{
                "--bg-image": `url(${bannerImage})`
            }}
            >
        </div>
        <div className="page-banner__content container container--narrow">
            {PropsTitle ? (
                <PropsTitle divClassName="page-banner__title" />
            ) : <Title/>}
            <div className="page-banner__intro">
                {PropsSubtitle? (
                    <PropsSubtitle divClassName="" />
                ) : <Subtitle/>}
            </div>
        </div>
        {PropsMetabox ? (
            <PropsMetabox divClassName={metaboxClasses.join(" ")} />
        ) : <Metabox divClassName={metaboxClasses.join(" ")} />}
    </div>
    );
}