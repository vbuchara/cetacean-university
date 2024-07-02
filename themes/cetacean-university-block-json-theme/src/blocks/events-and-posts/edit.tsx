import { EditorWrapper } from "@components/editor-wrapper";

import { RecentPosts } from "./components/recent-posts";
import { UpcomingEvents } from "./components/upcoming-events";

export function EditComponent(){

    return (
    <EditorWrapper>
        <div 
            className="full-width-split group"
        >
            <UpcomingEvents 
                isOnEditor={true}
            />
            <RecentPosts
                isOnEditor={true}
            />
        </div>
    </EditorWrapper>
    );
}