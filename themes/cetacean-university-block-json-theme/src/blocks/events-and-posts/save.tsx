import { useEffect, useState } from "react";
import type { BlockSaveProps } from "@wordpress/blocks";

import { UpcomingEvents } from "./components/upcoming-events";
import { RecentPosts } from "./components/recent-posts";

export type EventsAndPostsSaveAttributes = {
    eventsArchiveLink: string,
    blogLink: string
};

export type EventsAndPostsSaveComponentProps = BlockSaveProps<EventsAndPostsSaveAttributes>;

export function SaveComponent({
    attributes,
}: EventsAndPostsSaveComponentProps){
    const {
        eventsArchiveLink,
        blogLink
    } = attributes;

    const [mainDiv, setMainDiv] = useState<HTMLDivElement | null>(null);
    const [hasLoadEventsFinish, setHasLoadEventsFinish] = useState(false);
    const [hasLoadPostsFinish, setHasLoadPostsFinish] = useState(false);

    function onLoadEventsFinish(){
        setHasLoadEventsFinish(true);
    }

    function onLoadPostsFinish(){
        setHasLoadPostsFinish(true);
    }

    function adjustParentHeight(){
        if(!mainDiv) return;

        const height = getComputedStyle(mainDiv).height;
        const rootDiv = mainDiv.parentElement;

        if(!rootDiv) return;

        rootDiv.style.setProperty("--height", height);
    }

    function onLoadFinish(){
        if(!hasLoadEventsFinish || !hasLoadPostsFinish || !mainDiv) return;
        
        const rootDiv = mainDiv.parentElement;

        if(!rootDiv) return;

        rootDiv.style.setProperty("--height", "auto");
    }

    useEffect(() => {
        adjustParentHeight();
        onLoadFinish();
    }, [mainDiv, hasLoadEventsFinish, hasLoadPostsFinish]);

    return (
    <div 
        ref={setMainDiv} 
        className="full-width-split group"
    >
        <UpcomingEvents 
            eventsArchiveLink={eventsArchiveLink}
            onLoadFinish={onLoadEventsFinish} 
        />
        <RecentPosts
            blogLink={blogLink}
            onLoadFinish={onLoadPostsFinish}
        />
    </div>
    );
}