
import { useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import type { WP_Post } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import { getTitle } from "@utils/getTitle";

import { EventContentInspectorControls } from "./components/controls";

import type { EventContentInfo } from "./event-content";

export type EventContentEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: EventContentEditComponentProps){
    const { attributes, setAttributes } = props;

    const defaultEvent = {
        content: {
            rendered: "{Event Content}",
            protected: false,
        },
        relatedProgramsIds: [0],
        relatedPrograms: [{
            id: 0,
            title: {
                rendered: "{Program Title}"
            },
            link: "/"
        }]
    } as const satisfies EventContentInfo;

    const [eventInfoPreview, setEventInfoPreview] = useState<EventContentInfo | undefined>();

    const relatedPrograms = useSelect((select): WP_Post[] | null => {
        if(!eventInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                per_page: -1,
                include: eventInfoPreview?.relatedProgramsIds
            }
        );
    }, [eventInfoPreview?.relatedProgramsIds.reduce((result, id) => result + id, "")]);

    const event: EventContentInfo = {
        ...defaultEvent,
        ...eventInfoPreview,
        relatedPrograms: relatedPrograms || defaultEvent.relatedPrograms
    };
    const {
        relatedPrograms: eventRelatedPrograms
    } = event;

    return (
    <EditorWrapper>
        <EventContentInspectorControls
            eventInfoPreview={eventInfoPreview}
            setEventInfoPreview={setEventInfoPreview}
        />
        <div className="container container--narrow page-section">
            <RawHTML className="generic-content">
                {event.content.rendered}
            </RawHTML>
            {!eventRelatedPrograms || eventRelatedPrograms.length === 0 ? "" : (
            <>
                <hr className="section-break"/>
                <h2 className="headline headline--medium">
                    Related Program(s)
                </h2>
                <ul className="link-list min-list" >
                    {eventRelatedPrograms.map(program => (
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
        </div>
    </EditorWrapper>
    );
}