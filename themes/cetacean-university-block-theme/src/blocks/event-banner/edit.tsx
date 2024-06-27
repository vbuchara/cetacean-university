import { useMemo, useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

import { EditorAnchor } from "@components/editor-anchor";

import { PostBannerBlock, type PostBannerBlockPropsRender } from "../post-banner/components/block";

import { EventBannerInspectorControls } from "./components/controls";

import type { BannerEventInfo } from "./event-banner";

export type EventBannerEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: EventBannerEditComponentProps){
    const defaultBannerImage = CetaceanUniversityEventBannerData.theme_path + "/images/ocean.jpg";
    const defaultEvent = {
        title: "{Event Title}",
        subtitle: "{Event Subtitle}",
        bannerImageId: 0,
    } as const satisfies BannerEventInfo;

    const [eventInfoPreview, setEventInfoPreview] = useState<BannerEventInfo | undefined>();

    const event: BannerEventInfo = {
        ...defaultEvent,
        ...eventInfoPreview
    };

    const Metabox = useMemo<PostBannerBlockPropsRender>(() => {
        return ({ classNames }) => {
            return (
            <div className={classNames}>
                <p>
                    <EditorAnchor 
                        className="metabox__blog-home-link" 
                        href={CetaceanUniversityEventBannerData.events_archive_link}
                    >
                        <FontAwesomeIcon
                            icon={faHome}
                            height="1rem"
                            width="1rem"
                        />
                        All Upcoming Events
                    </EditorAnchor>
                    <span className="metabox__main">
                        {event.title}
                    </span>
                </p>
            </div>
            );
        };
    }, [event.title]);

    return (
    <>
        <EventBannerInspectorControls
            eventInfoPreview={eventInfoPreview}
            setEventInfoPreview={setEventInfoPreview}
        />
        <PostBannerBlock
            defaultBannerImage={defaultBannerImage}
            post={event}
            renderMetabox={Metabox}
        />
    </>
    );
}