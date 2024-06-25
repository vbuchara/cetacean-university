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
    const metaboxClasses = [
        "metabox",
        "metabox--position-down",
        "metabox--align-with-post",
        "metabox--with-home-link",
        "metabox--editor",
    ];
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

    const [bannerImage, setBannerImage] = useState("");
    const [postInfoPreview, setPostInfoPreview] = useState<BannerPostInfo | undefined>();

    const post: BannerPostInfo = {
        ...defaultPost,
        ...postInfoPreview
    };

    const categoriesDependency = post.category.reduce((result, { id, link, name }) => result + id + link + name, "");

    const AutorLink = useMemo(() => {
        return () => (
        <EditorAnchor 
            href={post.autor.link}
            title={`Posted by ${post.autor.name}`}
            rel="author"
        >
            {post.autor.name}
        </EditorAnchor>
        );
    }, [post.autor.name, post.autor.link]);

    const CategoryLinks = useMemo(() => {
        return () => (
        <>
            {post.category.reduce<React.ReactNode>((CategoriesLinks, category) => {
                return (
                <>
                    {CategoriesLinks}
                    {CategoriesLinks ? ", " : ""}
                    <EditorAnchor
                        key={category.id}
                        href={category.link}
                        rel="category tag"
                    >
                        {category.name}
                    </EditorAnchor>
                </>
                );
            }, "")}
        </>
        );
    }, [categoriesDependency]);

    useEffect(() => {
        if(!post.bannerImageId){
            setBannerImage(defaultBannerImage);
            return;
        }

        (async() => {
            try{
                const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                    path: `/wp/v2/media/${post.bannerImageId}` 
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
    }, [post.bannerImageId]);

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