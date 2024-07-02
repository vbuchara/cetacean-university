import { useState } from "react";
import { useAsync } from "react-use";
import apiFetch from "@wordpress/api-fetch";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faFilledHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import type { LikeCheckGet, LikeCountGet, ProgramPost } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import defaultAvatarSrc from "@images/default-user-portrait.png";
import { getTitle } from "@utils/getTitle";

import { ProfessorContentInspectorControls } from "./components/controls";

import type { ProfessorContentInfo } from "./professor-content";

export type ProfessorContentEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: ProfessorContentEditComponentProps){
    const { attributes, setAttributes } = props;

    const defaultProfessor = {
        id: 0,
        content: "{Professor Content}",
        hasLiked: false,
        likeCount: 0,
        thumbnailUrl: defaultAvatarSrc,
        relatedProgramsIds: [0],
        relatedPrograms: [{
            id: 0,
            title: "{Program Title}",
            link: "/"
        }]
    } as const satisfies ProfessorContentInfo;

    const [professorInfoPreview, setProfessorInfoPreview] = useState<ProfessorContentInfo | undefined>();

    const relatedPrograms = useSelect((select): ProgramPost[] | null => {
        if(!professorInfoPreview) return null;

        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                per_page: -1,
                include: professorInfoPreview?.relatedProgramsIds
            }
        );
    }, [professorInfoPreview?.relatedProgramsIds.reduce((result, id) => result + id, "")]);

    const { value: likeCount } = useAsync(async() => {
        if(!professorInfoPreview) return undefined;

        const { likes_count } = await apiFetch<LikeCountGet>({
            path: `university/v1/like/count/${professorInfoPreview.id}`,
            method: "GET",
        });

        return likes_count;
    }, [professorInfoPreview?.id]);

    const { value: hasLiked } = useAsync(async() => {
        if(!professorInfoPreview) return undefined;

        const { has_logged_user_liked } = await apiFetch<LikeCheckGet>({
            path: `university/v1/like/check/${professorInfoPreview.id}`,
            method: "GET",
        });

        return has_logged_user_liked;
    }, [professorInfoPreview?.id]);

    const professor: ProfessorContentInfo = {
        ...defaultProfessor,
        ...professorInfoPreview,
        likeCount: typeof likeCount !== "undefined" ? likeCount : defaultProfessor.likeCount,
        hasLiked: typeof hasLiked !== "undefined" ? hasLiked : defaultProfessor.hasLiked,
        relatedPrograms: relatedPrograms?.map(program => {
            return {
                id: program.id,
                title: getTitle(program),
                link: program.link,
            };
        }) || defaultProfessor.relatedPrograms
    };
    const {
        relatedPrograms: professorRelatedPrograms,
        likeCount: professorLikeCount,
        hasLiked: professorHasLiked
    } = professor;

    return (
    <EditorWrapper>
        <ProfessorContentInspectorControls
            professorInfoPreview={professorInfoPreview}
            setProfessorInfoPreview={setProfessorInfoPreview}
        />
        <div className="container container--narrow page-section">
            <div className="generic-content">
                <div className="row group">
                    <div className="one-third">
                        <img
                            width={480}
                            height={650}
                            className="attachment-professor-portrait size-professor-portrait wp-post-image"
                            src={professor.thumbnailUrl}
                        />
                    </div>
                    <div className="two-thirds">
                        <button 
                            className="like-box"
                            data-exists={professorHasLiked ? "yes" : "no"}
                            data-professor-id={professor.id}
                        >
                            <FontAwesomeIcon
                                icon={faEmptyHeart}
                                className="like-box__empty-heart"
                                width={"1rem"}
                                height={"1rem"}
                            />
                            <FontAwesomeIcon
                                icon={faFilledHeart}
                                className="like-box__filled-heart"
                                width={"1rem"}
                                height={"1rem"}
                            />
                            <span className="like-count">
                                {professorLikeCount}
                            </span>
                        </button>
                        <RawHTML>
                            {professor.content}
                        </RawHTML>
                    </div>
                </div>
            </div>
            {!professorRelatedPrograms || professorRelatedPrograms.length === 0 ? "" : (
            <>
                <hr className="section-break"/>
                <h2 className="headline headline--medium">
                    Subject(s) Taught
                </h2>
                <ul className="link-list min-list" >
                    {professorRelatedPrograms.map((program) => (
                    <li
                        key={program.id}
                    >
                        <EditorAnchor
                            href={program.link}
                        >
                            {program.title}
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