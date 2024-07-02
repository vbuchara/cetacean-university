
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { format } from "date-fns";
import type { EventPost } from "wordpress-types/event";

import { Placeholders } from "@classes/Placeholders";
import { Event } from "@components/event";
import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";

import type { UpcomingEventsAttributeType } from "./upcoming-events";
import { UpcomingEventsInspectorControls } from "./components/controls";

export type UpcomingEventsEditComponentProps = BlockEditProps<UpcomingEventsAttributeType>;

export function EditComponent(props: UpcomingEventsEditComponentProps){
    const { attributes, setAttributes } = props;

    const dateNow = new Date();
    const placeholderEvents = Placeholders.getPlaceholderEvents(4);
    const upcomingEvents = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "event",
            {
                orderby: "meta_value",
                meta_key: "event_date",
                order: "asc",
                meta_query_key: "event_date",
                meta_query_value: format(dateNow, "yyyyMMddHHmmss"),
                meta_query_compare: ">=",
                meta_query_type: "DATE"
            }
        ) as EventPost[] | null;
    }, []);

    return (
    <EditorWrapper>
        <UpcomingEventsInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div className="container container--narrow page-section">
            {(upcomingEvents || placeholderEvents).map(event => {
                return (<Event key={event.id} event={event} isOnEditor={true} />);
            })}
            {!attributes.enablePastEventsLink ? "" : (
            <>
                <hr className="section-break"/>
                <p>
                    <EditorAnchor>
                        See Past Events
                    </EditorAnchor>
                </p>
            </>
            )}
        </div>
    </EditorWrapper>
    );
}