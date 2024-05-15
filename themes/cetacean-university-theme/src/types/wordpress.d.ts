declare module "wordpress-types" {
    export type PostTypes = 
        | "post" 
        | "page" 
        | "program"
        | "professor"
        | "event"
        | "campus"
        | "note";

    export interface WP_Post {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        status: string;
        type: string;
        link: string;
        title: Guid;
        content: Content;
        excerpt: Content;
        author: number;
        featured_media: number;
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        template: string;
        format: string;
        meta: Meta;
        categories: number[];
        tags: unknown[];
        acf: unknown[];
        authorName?: string;
        _links: Links;
    }

    export interface Links {
        self: About[];
        collection: About[];
        about: About[];
        author: Author[];
        replies: Author[];
        "version-history": VersionHistory[];
        "predecessor-version": PredecessorVersion[];
        "wp:attachment": About[];
        "wp:term": WpTerm[];
        curies: Cury[];
    }

    export interface About {
        href: string;
    }

    export interface Author {
        embeddable: boolean;
        href: string;
    }

    export interface Cury {
        name: string;
        href: string;
        templated: boolean;
    }

    export interface PredecessorVersion {
        id: number;
        href: string;
    }

    export interface VersionHistory {
        count: number;
        href: string;
    }

    export interface WpTerm {
        taxonomy: string;
        embeddable: boolean;
        href: string;
    }

    export interface Content {
        rendered: string;
        protected: boolean;
        raw?: string;
    }

    export interface Guid {
        rendered: string;
        raw?: string;
    }

    export interface Meta {
        _acf_changed: boolean;
        footnotes: string;
    }

    export interface Note extends WP_Post {
        hasReachedLimit: boolean;
    }

    export interface SearchGet {
        postAndPage: (SearchGet.Post | SearchGet.Page)[];
        professor: SearchGet.Professor[];
        program: SearchGet.Program[];
        event: SearchGet.Event[];
        campus: SearchGet.Campus[];
    }

    export namespace SearchGet {
        interface BasePost {
            type: PostTypes;
            title: string;
            permalink: string;
            excerpt?: string;
            authorName?: string;
            imageSrc?: string;
            month?: number;
            day?: number;
        }

        interface Post extends BasePost {
            type: "post";
            authorName: string;
            excerpt: string;
        }

        interface Page extends BasePost {
            type: "page";
            excerpt: string;
        }

        interface Program extends BasePost {
            type: "program";
            excerpt: string;
        }

        interface Professor extends BasePost {
            type: "professor";
            imageSrc: string;
        }

        interface Event extends BasePost {
            type: "event";
            excerpt: string;
            month: number;
            day: number;
        }

        interface Campus extends BasePost {
            type: "campus";
        }

        interface Note extends BasePost {
            type: "note";
            authorName: string;
        }

        type AllTypes = 
            | Post
            | Page
            | Program
            | Professor
            | Event
            | Campus
            | Note;
    }

    export interface LikePost {
        professor_id: number;
        professor_likes_count: number;
        like: "added" | "removed";
    }

    export interface WP_ErrorResponse {
        code: string;
        message: string;
        data: {
            status: number;
        };
    }
}