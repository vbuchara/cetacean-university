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
        acf: PostCustomFields;
        authorName?: string;
        _links: Links;
        _embedded?: PostEmbedded;
        isPlaceholder?: boolean;
    }

    export interface WP_PostWithEmbedded extends WP_Post {
        _embedded: PostEmbedded;
    }

    export interface Links {
        self: LinkObject[];
        collection: LinkObject[];
        about: LinkObject[];
        author: Author[];
        replies: Author[];
        "version-history": VersionHistory[];
        "predecessor-version": PredecessorVersion[];
        "wp:attachment": LinkObject[];
        "wp:term": WpTerm[];
        curies: Cury[];
    }

    export interface LinkObject {
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

    export interface PostEmbedded {
        "wp:featuredmedia": WpFeaturedmedia[];
        author: [Author];
        "wp:term": [Category[], WpTerm[]];
    }
    
    export interface WpFeaturedmedia {
        id:             number;
        date:           Date;
        slug:           string;
        type:           string;
        link:           string;
        title:          Caption;
        author:         number;
        featured_media: number;
        acf:            any[];
        caption:        Caption;
        alt_text:       string;
        media_type:     string;
        mime_type:      string;
        media_details:  MediaDetails;
        source_url:     string;
        _links:         Links;
    }

    export interface Caption {
        rendered: string;
    }
    
    export interface MediaDetails {
        width:      number;
        height:     number;
        file:       string;
        filesize:   number;
        sizes:      ImageSizes;
        image_meta: ImageMeta;
    }
    
    export interface ImageMeta {
        aperture:          string;
        credit:            string;
        camera:            string;
        caption:           string;
        created_timestamp: string;
        copyright:         string;
        focal_length:      string;
        iso:               string;
        shutter_speed:     string;
        title:             string;
        orientation:       string;
        keywords:          string[];
    }
    
    export interface ImageSizes {
        thumbnail:             ImageInfo;
        medium:                ImageInfo;
        medium_large:          ImageInfo;
        large:                 ImageInfo;
        "professor-landscape": ImageInfo;
        "professor-portrait":  ImageInfo;
        full:                  ImageInfo;
        "page-banner": ImageInfo;
    }
    
    export interface ImageInfo {
        file:       string;
        width:      number;
        height:     number;
        mime_type:  string;
        source_url: string;
        filesize?:  number;
    }

    export interface Author {
        id:          number;
        name:        string;
        url:         string;
        description: string;
        link:        string;
        slug:        string;
        avatar_urls: { [key: string]: string };
        acf:         any[];
        _links:      AuthorLinks;
    }
    
    export interface AuthorLinks {
        self:       Collection[];
        collection: Collection[];
    }
    
    export interface Collection {
        href: string;
    }
    
    export interface Category {
        id:       number;
        link:     string;
        name:     string;
        slug:     string;
        taxonomy: "category";
        acf:      any[];
        _links:   WpTermLinks;
    }
    
    export interface WpTermLinks {
        self:           Collection[];
        collection:     Collection[];
        about:          Collection[];
        "wp:post_type": Collection[];
        curies:         Cury[];
    }
    
    export interface Cury {
        name:      string;
        href:      string;
        templated: boolean;
    }

    export interface PostCustomFields {
        page_banner_subtitle?: string;
        page_banner_background_image?: number;
    }

    export interface WP_Page extends WP_Post {
        parent: number;
        _embedded?: PageEmbedded;
        hasChildren?: boolean;
    }

    export interface PageEmbedded {
        "wp:featuredmedia": WpFeaturedmedia[];
        author: [Author];
        up?: [WP_Page];
        "wp:term": never;
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

    export * from "wordpress-types/professor";
    export * from "wordpress-types/event";
    export * from "wordpress-types/campus";
}

declare module "wordpress-types/professor"{
    import { WP_Post, PostCustomFields } from "wordpress-types";

    export interface ProfessorPost extends WP_Post {
        acf: ProfessorCustomFields;
    }

    export interface ProfessorCustomFields extends PostCustomFields{
        related_programs: number[]
    }
}

declare module "wordpress-types/event"{
    import { WP_Post, PostCustomFields } from "wordpress-types";

    export interface EventPost extends WP_Post {
        acf: EventCustomFields;
    }

    export interface EventCustomFields extends PostCustomFields {
        event_date: string,
        related_programs: number[]
    }
}

declare module "wordpress-types/campus"{
    import { WP_Post, PostCustomFields } from "wordpress-types";

    export interface CampusPost extends WP_Post {
        acf: CampusCustomFields;
    }

    export interface CampusCustomFields extends PostCustomFields {
        map_location: {
            address: string,
            lat: number,
            lng: number,
            zoom: number,
            place_id: string
        },
    }
}