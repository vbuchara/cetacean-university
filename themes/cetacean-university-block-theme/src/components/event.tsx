import { 
    type AnchorHTMLAttributes, 
    type MouseEvent,
    useMemo 
} from "react";
import { format, parse } from "date-fns";
import type { EventPost } from "wordpress-types/event";

import { getTitle } from "@src/utils/getTitle";
import { getExcerpt } from "@src/utils/getExcerpt";
import Skeleton from "react-loading-skeleton";

export type EventProps = {
    event: EventPost;
    isOnEditor?: boolean;
};

export function Event({
    event,
    isOnEditor,
}: EventProps){
    const eventDate = parse(event.acf.event_date, "yyyy-MM-dd HH:mm:ss", new Date());
    const eventLink = !isOnEditor ? event.link : "";

    function cancelRedirect(event: MouseEvent<HTMLAnchorElement>){
        event.preventDefault();
    }

    const EventSummaryPlaceholder = useMemo(() => {
        return () => (
        <Skeleton
            containerClassName="event-summary__date t-center event-summary__date--loading"
            circle={true}
            height={"100%"}
            width={"100%"}
        />
        );
    }, [event.isPlaceholder]);

    const TitlePlaceholder = useMemo(() => {
        return () => (<Skeleton count={0.5} />);
    }, [event.isPlaceholder]);

    const ExcerptPlaceholder = useMemo(() => {
        return () => (
        <p>
            <Skeleton count={3}/>
        </p>
        );
    }, [event.isPlaceholder]);

    const EventLink = useMemo(() => {
        return (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
            return (
            <a 
                href={eventLink}
                onClick={!eventLink ? cancelRedirect : undefined}
                {...props}
            >
                {props.children}
            </a>
            );
        }
    }, [eventLink]);

    return (
    <div className="event-summary">
        {event.isPlaceholder ? <EventSummaryPlaceholder/> : (
        <EventLink
            className="event-summary__date t-center" 
        >
            <span className="event-summary__month">
                {format(eventDate, "MMM")}
            </span>
            <span className="event-summary__day">
                {format(eventDate, "dd")}
            </span>
        </EventLink>
        )}
        <div className="event-summary__content">
            <h5 className="event-summary__title headline headline--tiny">
                {event.isPlaceholder ? <TitlePlaceholder/> : (
                <EventLink>
                    {getTitle(event)}
                </EventLink>
                )}
            </h5>
            {event.isPlaceholder ? <ExcerptPlaceholder/> : (
            <p>
                {getExcerpt(event, { trimWords: 20 }) + " "}
                <EventLink className="nu gray">
                    Learn more
                </EventLink>
            </p>
            )}
        </div>
    </div>
    );
}