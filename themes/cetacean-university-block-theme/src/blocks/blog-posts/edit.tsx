import { type BlockEditProps } from "@wordpress/blocks";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { WP_PostWithEmbedded } from "wordpress-types";

import { Post } from "./components/post";

export type BlogPostsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: BlogPostsEditComponentProps){
    const { attributes, setAttributes } = props;

    const postsPerPage = Number(CetaceanUniversityBlogPostsData.posts_per_page);
    const posts = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "post",
            {
                per_page: postsPerPage ? postsPerPage : 10,
                _embed: true
            }
        ) as WP_PostWithEmbedded[] | null;
    }, []);

    return (
    <div className="container container--narrow page-section">
        {posts?.map((post) => <Post key={post.id} post={post} />)}
    </div>
    );
}