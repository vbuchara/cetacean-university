import { LinkObject, Cury, Author, VersionHistory, PredecessorVersion, WpTerm, WP_Post } from "wordpress-types";
import type { EventPost } from "wordpress-types/event";

export class Placeholders {
    public static readonly PostPlaceholder: Omit<WP_Post, 'id'> = {
        isPlaceholder: true,
        date: new Date(),
        date_gmt: new Date(),
        guid: {
            rendered: "guid"
        },
        modified: new Date(),
        modified_gmt: new Date(),
        slug: "slug",
        status: "publish",
        type: "event",
        link: "",
        title: {
            rendered: "Title Placeholder"
        },
        content: {
            rendered: "Description",
            protected: false
        },
        excerpt: {
            rendered: "Description",
            protected: false
        },
        template: "",
        acf: {},
        _links: {
            "self": [] as LinkObject[],
            "collection": [] as LinkObject[],
            "about": [] as LinkObject[],
            "wp:attachment": [] as LinkObject[],
            "curies": [] as Cury[],
            author: [] as Author[],
            replies: [] as Author[],
            "version-history": [] as VersionHistory[],
            "predecessor-version": [] as PredecessorVersion[],
            "wp:term": [] as WpTerm[],
        },
        author: -1,
        featured_media: -1,
        comment_status: "status",
        ping_status: "status",
        sticky: false,
        format: "format",
        meta: {
            _acf_changed: false,
            footnotes: ""
        },
        categories: [],
        tags: []
    };
    
    
    public static getPlaceholderPosts(
        quantity: number = 2
    ): WP_Post[]{
        return Array.from({ length: quantity }, (_, index) => {
            return {
                ...Placeholders.PostPlaceholder,
                id: index + 1
            };
        })
    }

    public static getPlaceholderEvents(
        quantity: number = 2
    ): EventPost[]{
        return Array.from({ length: quantity }, (_, index) => {
            return {
               ...Placeholders.PostPlaceholder,
                id: index + 1,
                acf: {                    
                    event_date: "2024-06-28 15:00:00",
                    related_programs: []
                }
            };
        })
    }
}
