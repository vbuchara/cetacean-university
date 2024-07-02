import { type BlockEditProps } from "@wordpress/blocks";
import { EditorAnchor } from "@components/editor-anchor";
import { type GetRecordsHttpQuery, store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { format } from "date-fns";
import type { EventPost } from "wordpress-types";

import { Event } from "@components/event";
import { EditorWrapper } from "@components/editor-wrapper";

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
    <EditorWrapper>
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
                <EditorAnchor>
                    See Upcoming Events
                </EditorAnchor>
            </p>
        </div>
    </EditorWrapper>
    );
}