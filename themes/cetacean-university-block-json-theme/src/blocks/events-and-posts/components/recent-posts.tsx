import { useEffect, useLayoutEffect } from "react";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { WP_Post } from "wordpress-types";

import { SaveComponent as Button } from "@src/blocks/button/save";
import { Placeholders } from "@classes/Placeholders";
import { WordpressColorsPresets } from "@classes/WordpressColorsPresets";

import { BlogPost } from "./blog-post";

export type RecentPostsProps = {
    blogLink?: string;
    onLoadFinish?: () => void;
    onLayoutChange?: () => void;
    isOnEditor?: boolean;
};

export function RecentPosts({
    blogLink,
    onLoadFinish,
    onLayoutChange,
    isOnEditor,
}: RecentPostsProps){
    const placeholderPosts = Placeholders.getPlaceholderPosts();

    const posts = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "post",
            {
                context: "view", 
                per_page: 2,
            }
        ) as WP_Post[] | null;
    }, []);

    useEffect(() => {
        if(posts){
            onLoadFinish && onLoadFinish();
        }
    }, [posts]);

    useLayoutEffect(() => {
        onLayoutChange && onLayoutChange();
    });

    return (
    <div className="full-width-split__two">
        <div className="full-width-split__inner">
            <h2 className="headline headline--small-plus t-center">From Our Blogs</h2>

            {(posts || placeholderPosts).map((post) => {
                return (<BlogPost key={post.id} post={post} isOnEditor={isOnEditor} />);
            })}

            <p className="t-center no-margin">
                <Button
                    className=""
                    attributes={{
                        animations: {
                            onHover: "slide-from-top"
                        },
                        backgroundColor: `var(${WordpressColorsPresets.Secondary})`,
                        color: `var(${WordpressColorsPresets.White})`,
                        text: "View All Blog Posts",
                        linkObject: {
                            url: !isOnEditor && blogLink ? blogLink : ""
                        }
                    }}
                />
            </p>
        </div>
    </div>
    );
}