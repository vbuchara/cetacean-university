
import { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { type BlockEditProps } from "@wordpress/blocks";
import { 
    useSelect 
} from "@wordpress/data";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import { RawHTML } from "@wordpress/element";
import type { EventPost, WP_Post } from "wordpress-types";
import { format } from "date-fns";

import { Event } from "@components/event";
import { getTitle } from "@utils/getTitle";

import { CampusMap } from "../campuses-map/components/campus-map";

import { CampusContentInspectorControls } from "./components/controls";

import { CampusContentInfo } from "./campus-content";
import { EditorAnchor } from "@src/components/editor-anchor";

export type CampusContentEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: CampusContentEditComponentProps){
    const { attributes, setAttributes } = props;

    const dateNow = new Date();
    const defaultCampus = {
        id: 0,
        title: {
            rendered: "{Campus Title}"
        },
        link: "/",
        content: "{Campus Content}",
        acf: {
            map_location: {
                address: "{Address}",
                lat: 0,
                lng: 0,
                zoom: 10,
                place_id: "{id}"
            }            
        },
        relatedPrograms: [{
            id: 0,
            title: {
                rendered: "{Program Title}"
            },
            link: "/",
        }],
        relatedEvents: [{
            id: 0,
            title: {
                rendered: "{Event Title}"
            },
            link: "/",
            content: {
                rendered: "{Event Content}",
                protected: false
            },
            excerpt: {
                rendered: "{Event Excerpt}",
                protected: false
            },
            acf: {
                event_date: format(dateNow, "yyyy-MM-dd HH:mm:ss"),
                related_programs: []
            }
        }]
    } as const satisfies CampusContentInfo;

    const [campusInfoPreview, setCampusInfoPreview] = useState<CampusContentInfo | undefined>();

    const relatedPrograms = useSelect((select): WP_Post[] | null => {
        if(!campusInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                per_page: -1,
                orderby: "title",
                order: "asc",
                meta_query_key: "related_campus",
                meta_query_compare: "LIKE",
                meta_query_value: `"${campusInfoPreview.id}"`
            }
        );
    }, [campusInfoPreview?.id]);

    const relatedEvents = useSelect((select): EventPost[] | null => {
        if(!campusInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "event",
            {
                per_page: -1,
                orderby: "meta_value",
                order: "asc",
                meta_key: "event_date",
                meta_query_key: "related_campus",
                meta_query_compare: "LIKE",
                meta_query_value: `"${campusInfoPreview.id}"`,
                meta_query_key_2: "event_date",
                meta_query_value_2: format(dateNow, "yyyyMMddHHmmss"),
                meta_query_compare_2: ">=",
                meta_query_type_2: "DATE"
            }
        );
    }, [campusInfoPreview?.id]);

    const campus: CampusContentInfo = {
        ...defaultCampus,
        ...campusInfoPreview,
        relatedPrograms: relatedPrograms?.map(program => {
            return {
                id: program.id,
                title: program.title,
                link: program.link,
            };
        }) || defaultCampus.relatedPrograms,
        relatedEvents: relatedEvents?.map(event => {
            return {
                id: event.id,
                title: event.title,
                link: event.link,
                content: event.content,
                excerpt: event.excerpt,
                acf: event.acf
            };
        }) || defaultCampus.relatedEvents
    };
    const {
        relatedPrograms: campusRelatedPrograms,
        relatedEvents: campusRelatedEvents,
    } = campus;

    return (
    <APIProvider
        apiKey={process.env.GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Google Maps API Loaded")}
    >
        <CampusContentInspectorControls
            campusInfoPreview={campusInfoPreview}
            setCampusInfoPreview={setCampusInfoPreview}
        />
        <div className="container container--narrow page-section">
            <RawHTML className="generic-content">
                {campus.content}
            </RawHTML>
            <CampusMap
                campuses={[campus]}
                isSingle={true}
            />
            {!campusRelatedPrograms || campusRelatedPrograms.length === 0 ? "" : (
            <>
                <hr className="section-break" />
                <h2 className="headline headline--medium">
                    Offered Programs 
                </h2>
                <ul className="link-list min-list" >
                    {campusRelatedPrograms.map(program => (
                    <li
                        key={program.id}
                    >
                        <EditorAnchor href={program.link}>
                            {getTitle(program)}
                        </EditorAnchor>
                    </li>
                    ))}
                </ul>
            </>
            )}
            {!campusRelatedEvents || campusRelatedEvents.length === 0 ? "" : (
            <>
                <hr className="section-break" />
                <h2 className="headline headline--medium">
                    Upcoming Events on the Campus
                </h2>
                {campusRelatedEvents.map(event => (
                <Event
                    key={event.id}
                    event={event}
                    isOnEditor={true}
                />
                ))}
            </>
            )}
        </div>
    </APIProvider>
    );
}