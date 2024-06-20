import { AnchorHTMLAttributes, useMemo, type MouseEvent } from "react";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import type { WP_Post } from "wordpress-types";

import { getExcerpt } from "@src/utils/getExcerpt";
import { getTitle } from "@src/utils/getTitle";

export type BlogPostProps = {
    post: WP_Post;
    isOnEditor?: boolean;
};

export function BlogPost({
    post,
    isOnEditor
}: BlogPostProps){
    const postLink = !isOnEditor ? post.link : "";

    function cancelRedirect(event: MouseEvent<HTMLAnchorElement>){
        event.preventDefault();
    }

    const EventSummaryPlaceholder = useMemo(() => {
        return () => (
        <Skeleton
            containerClassName="event-summary__date event-summary__date--alt t-center event-summary__date--loading"
            circle={true}
            height={"100%"}
            width={"100%"}
        />
        );
    }, [post.isPlaceholder]);

    const TitlePlaceholder = useMemo(() => {
        return () => (<Skeleton count={0.5} />);
    }, [post.isPlaceholder]);

    const ExcerptPlaceholder = useMemo(() => {
        return () => (
        <p>
            <Skeleton count={3}/>
        </p>
        );
    }, [post.isPlaceholder]);

    const PostLink = useMemo(() => {
        return (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
            return (
            <a 
                href={postLink}
                onClick={!postLink ? cancelRedirect : undefined}
                {...props}
            >
                {props.children}
            </a>
            );
        }
    }, [postLink]);

    return (
    <div className="event-summary">
        {post.isPlaceholder ? <EventSummaryPlaceholder/> : (
        <PostLink
            className="event-summary__date event-summary__date--alt t-center" 
        >
            <span className="event-summary__month">
                {format(post.date, "MMM")}
            </span>
            <span className="event-summary__day">
                {format(post.date, "dd")}
            </span>
        </PostLink>
        )}
        <div className="event-summary__content">
            <h5 className="event-summary__title headline headline--tiny">
                {post.isPlaceholder ? <TitlePlaceholder/> : (
                <PostLink>
                    {getTitle(post)}
                </PostLink>
                )}
            </h5>
            {post.isPlaceholder ? <ExcerptPlaceholder/> : (
            <p>
                {getExcerpt(post, { trimWords: 20 }) + " "}
                <PostLink 
                    className="nu text-color--dark-gray"
                >
                    Read more
                </PostLink>
            </p>
            )}
        </div>
    </div>
    );
}