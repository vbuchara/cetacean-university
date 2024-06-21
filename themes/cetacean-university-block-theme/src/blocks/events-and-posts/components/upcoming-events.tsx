import { 
    store 
} from "@wordpress/core-data";
import { 
    useSelect
} from "@wordpress/data";
import { format } from "date-fns";
import { useEffect, useLayoutEffect } from "react";
import type { EventPost } from "wordpress-types/event";

import { SaveComponent as Button } from "@src/blocks/button/save";
import { WordpressColorsPresets } from "@src/classes/WordpressColorsPresets";
import { Event } from "@src/components/event";
import Skeleton from "react-loading-skeleton";
import { Placeholders } from "@src/classes/Placeholders";

export type UpcomingEventsProps = {
    eventsArchiveLink: string;
    onLoadFinish?: () => void;
    onLayoutChange?: () => void;
    isOnEditor?: boolean;
};

export function UpcomingEvents({
    eventsArchiveLink,
    onLoadFinish,
    onLayoutChange,
    isOnEditor
}: UpcomingEventsProps){
    const dateNow = new Date();
    const placeholderEvents = Placeholders.getPlaceholderEvents();
    const events = useSelect((select) => {
        return select(store).getEntityRecords(
            "postType",
            "event",
            {
                context: "view", 
                per_page: 2,
                orderby: "meta_value",
                order: "asc",
                meta_key: "event_date",
                meta_query_key: "event_date",
                meta_query_value: format(dateNow, "yyyyMMddHHmmss"),
                meta_query_compare: ">=",
                meta_query_type: "DATE"
            },
        ) as EventPost[] | null;
    }, []);

    useEffect(() => {
        if(events){
            onLoadFinish && onLoadFinish();
        }
    }, [events]);

    useLayoutEffect(() => {
        onLayoutChange && onLayoutChange();
    });

    return (
    <div className="full-width-split__one">
        <div className="full-width-split__inner">
            <h2 className="headline headline--small-plus t-center">Upcoming Events</h2>
            
            {(events || placeholderEvents).map((event) => {
                return (<Event key={event.id} event={event} isOnEditor={isOnEditor} />);
            })}

            <p className="t-center no-margin">
                <Button
                    className=""
                    attributes={{
                        animations: {
                            onHover: "slide-from-top"
                        },
                        backgroundColor: `var(${WordpressColorsPresets.Primary})`,
                        color: `var(${WordpressColorsPresets.White})`,
                        text: "View All Events",
                        linkObject: {
                            url: !isOnEditor ? eventsArchiveLink : "" 
                        }
                    }}
                />
            </p>
        </div>
    </div>
    );
}