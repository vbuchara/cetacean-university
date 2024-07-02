import { type BlockEditProps } from "@wordpress/blocks";

import { EditorAnchor } from "@components/editor-anchor";
import { Event } from "@components/event";
import { type GetRecordsHttpQuery, store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { format } from "date-fns";
import type { EventPost } from "wordpress-types";

export type PastEventsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: PastEventsEditComponentProps){
    const { attributes, setAttributes } = props;

    const dateNow = new Date();
    const pastEvents = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "event",
            {
                orderby: "meta_value",
                order: "asc",
                meta_key: "event_date",
                meta_query_key: "event_date",
                meta_query_value: format(dateNow, "yyyyMMddHHmmss"),
                meta_query_compare: "<",
                meta_query_type: "DATE"

            } satisfies GetRecordsHttpQuery
        ) as EventPost[] | null;
    }, []);

    return (
    <div className="container container--narrow page-section">
        {!pastEvents ? "" : pastEvents.map(event => (
        <Event
            key={event.id}
            event={event}
            isOnEditor={true}
        />
        ))}
        <hr className="section-break"/>
        <p>
            <EditorAnchor
                href={CetaceanUniversityPastEventsData.events_archive_link}
            >
                See Upcoming Events
            </EditorAnchor>
        </p>
    </div>
    );
}