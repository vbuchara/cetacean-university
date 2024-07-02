import { RecentPosts } from "./components/recent-posts";
import { UpcomingEvents } from "./components/upcoming-events";

export function EditComponent(){

    return (
    <div 
        className="full-width-split group"
    >
        <UpcomingEvents 
            eventsArchiveLink={CetaceanUniversityEventsAndPostsData.events_archive_link}
            isOnEditor={true}
        />
        <RecentPosts
            blogLink={CetaceanUniversityEventsAndPostsData.blog_link}
            isOnEditor={true}
        />
    </div>
    );
}