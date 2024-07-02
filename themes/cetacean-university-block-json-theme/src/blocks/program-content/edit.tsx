import { useState } from "react";
import type { BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import { format } from "date-fns";
import type { CampusPost, EventPost, ProfessorPostWithEmbedded } from "wordpress-types";

import { Event } from "@components/event";
import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import defaultAvatarSrc from "@images/default-user-landscape.png";
import { getTitle } from "@utils/getTitle";
import { getThumbnail } from "@utils/getThumbnail";

import { ProgramContentInspectorControls } from "./components/controls";

import type { ProgramContentInfo } from "./program-content";

export type ProgramContentEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: ProgramContentEditComponentProps){
    const { attributes, setAttributes } = props;

    const dateNow = new Date();
    const defaultProgram = {
        id: 0,
        title: "{Program Title}",
        content: "{Program Content}",
        relatedProfessors: [{
            id: 0,
            title: "{Professor Name}",
            link: "/",
            thumbnailUrl: defaultAvatarSrc
        }],
        relatedEvents: [{
            id: 0,
            title: {
                rendered: "{Event Title}"
            },
            content: {
                rendered: "{Event Content}",
                protected: false
            },
            excerpt: {
                rendered: "{Event Excerpt}",
                protected: false
            },
            link: "/",
            acf: {
                event_date: format(dateNow, "yyyy-MM-dd HH:mm:ss")
            }
        }],
        relatedCampusesIds: [0],
        relatedCampuses: [{
            id: 0,
            title: "{Campus Name}",
            link: "/",
        }]
    } as const satisfies ProgramContentInfo;

    const [programInfoPreview, setProgramInfoPreview] = useState<ProgramContentInfo | undefined>();

    const relatedProfessors = useSelect((select): ProfessorPostWithEmbedded[] | null => {
        if(!programInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "professor",
            {
                per_page: -1,
                orderby: "title",
                order: "asc",
                meta_query_key: "related_programs",
                meta_query_value: `"${programInfoPreview.id}"`,
                meta_query_compare: "LIKE",
                _embed: true
            }
        );
    }, [programInfoPreview?.id]);

    const relatedEvents = useSelect((select): EventPost[] | null => {
        if(!programInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "event",
            {
                per_page: -1,
                orderby: "meta_value",
                order: "asc",
                meta_key: "event_date",
                meta_query_key: "related_programs",
                meta_query_compare: "LIKE",
                meta_query_value: `"${programInfoPreview.id}"`,
                meta_query_key_2: "event_date",
                meta_query_value_2: format(dateNow, "yyyyMMddHHmmss"),
                meta_query_compare_2: ">=",
                meta_query_type_2: "DATE"
            }
        );
    }, [programInfoPreview?.id]);

    const relatedCampuses = useSelect((select): CampusPost[] | null => {
        if(!programInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "campus",
            {
                per_page: -1,
                include: programInfoPreview?.relatedCampusesIds
            }
        );
    }, [programInfoPreview?.relatedCampusesIds.reduce((result, id) => result + id, "")]);

    const program: ProgramContentInfo = {
        ...defaultProgram,
        ...programInfoPreview,
        relatedProfessors: !relatedProfessors
            ? defaultProgram.relatedProfessors
            : relatedProfessors.map((professor) => ({
                id: professor.id,
                title: getTitle(professor),
                link: professor.link,
                thumbnailUrl: getThumbnail(professor, { size: "professor-landscape" })
            })),
        relatedEvents: relatedEvents?.map(event => {
            return {
                id: event.id,
                title: event.title,
                link: event.link,
                content: event.content,
                excerpt: event.excerpt,
                acf: event.acf
            };
        }) || defaultProgram.relatedEvents,
        relatedCampuses: !relatedCampuses 
            ? defaultProgram.relatedCampuses 
            : relatedCampuses.map((campus) => ({
                id: campus.id,
                title: getTitle(campus),
                link: campus.link
            })),
        
    };
    const {
        relatedProfessors: programRelatedProfessors,
        relatedEvents: programRelatedEvents,
        relatedCampuses: programRelatedCampuses
    } = program;

    return (
    <EditorWrapper>
        <ProgramContentInspectorControls
            programInfoPreview={programInfoPreview}
            setProgramInfoPreview={setProgramInfoPreview}
        />
        <div className="container container--narrow page-section">
            <RawHTML className="generic-content">
                {program.content}
            </RawHTML>
            {!programRelatedProfessors || programRelatedProfessors.length === 0 ? "" : (
            <>
                <hr className="section-break" />
                <h2 className="headline headline--medium">
                    {program.title} Professors
                </h2>
                
                <ul className="professor-cards" >
                    {programRelatedProfessors.map((professor) => (
                    <li 
                        key={professor.id}
                        className="professor-card__list-item"
                    >
                        <EditorAnchor
                            className="professor-card"
                            href={professor.link}
                        >
                            <img
                                className="professor-card__image"
                                src={professor.thumbnailUrl}
                                alt={`Image of Professor ${professor.title}`}
                            />
                            <span className="professor-card__name">
                                {professor.title}
                            </span>
                        </EditorAnchor>
                    </li>
                    ))}
                </ul>
            </>
            )}
            {!programRelatedEvents || programRelatedEvents.length === 0 ? "" : (
            <>
                <hr className="section-break" />
                <h2 className="headline headline--medium">
                    Upcoming {program.title} Events
                </h2>

                {programRelatedEvents.map((event) => (
                <Event
                    key={event.id}
                    event={event}
                    isOnEditor={true}
                />
                ))}
            </>
            )}
            {!programRelatedCampuses || programRelatedCampuses.length === 0 ? "" : (
            <>
                <hr className="section-break" />
                <h2 className="headline headline--medium">
                    Campuses Offering
                </h2>
        
                <ul className="link-list min-list">
                    {programRelatedCampuses.map((campus) => (
                    <li
                        key={campus.id}
                    >
                        <EditorAnchor
                            href={campus.link}
                        >
                            {campus.title}
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