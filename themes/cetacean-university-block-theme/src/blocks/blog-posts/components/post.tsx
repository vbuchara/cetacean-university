import { useMemo } from "react";
import type { WP_PostWithEmbedded } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";

import { getTitle } from "@utils/getTitle";
import { getExcerpt } from "@utils/getExcerpt";
import { getDate } from "@utils/getDate";

export type PostProps = {
    post: WP_PostWithEmbedded
};

export function Post({
    post
}: PostProps){

    const autor = post._embedded.author[0];
    const categories = post._embedded["wp:term"][0].map((category) => {
        return {
            name: category.name,
            id: category.id,
            link: category.link
        }
    });
    const categoriesDependency = categories.reduce((result, { id, link, name }) => result + id + link + name, "");

    const AutorLink = useMemo(() => {
        return () => (
        <EditorAnchor 
            href={autor.link}
            title={`Posted by ${autor.name}`}
            rel="author"
        >
            {autor.name}
        </EditorAnchor>
        );
    }, [autor.name, autor.link]);

    const CategoryLinks = useMemo(() => {
        return () => (
        <>
            {categories.reduce<React.ReactNode>((CategoriesLinks, category) => {
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

    return (
    <div className="post-item">
        <h2 className="headline headline--medium headline--post-title">
            <EditorAnchor href={post.link}>
                {getTitle(post)}
            </EditorAnchor>
        </h2>
        <div className="metabox">
            <p>
                Posted by <AutorLink/>{" "}
                on {getDate(post) + " "}
                in <CategoryLinks/>
            </p>
        </div>

        <div className="generic-content">
            <p>
                {getExcerpt(post)}
            </p>
            <p>
                <EditorAnchor className="btn btn--primary btn--slide-from-top" href={post.link}>
                    Continue reading &raquo;
                </EditorAnchor>
            </p>
        </div>
    </div>
    );
}