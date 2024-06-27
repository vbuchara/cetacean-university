import Select, { type SingleValue } from 'react-select';
import { 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
} from "@wordpress/components";
import { 
    useSelect 
} from "@wordpress/data";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import type { EventPost } from "wordpress-types";

import { EditorSelect } from '@components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { BannerEventInfo } from "../event-banner";

export type EventBannerInspectorControlsProps = {
    eventInfoPreview: BannerEventInfo | undefined;
    setEventInfoPreview: React.Dispatch<React.SetStateAction<BannerEventInfo | undefined>>;
};

export interface EventSelectOption extends BannerEventInfo{
    value: number;
    label: string;
};

export function EventBannerInspectorControls({
    eventInfoPreview,
    setEventInfoPreview
}: EventBannerInspectorControlsProps){
    const events = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "event",
            {
                per_page: -1,
            }
        ) as EventPost[] | null;
    }, []);
    const eventOptions = events?.map<EventSelectOption>(event => ({ 
        label: getTitle(event),
        value: event.id,
        bannerImageId: event.acf.page_banner_background_image,
        title: event.title.rendered,
        subtitle: event.acf.page_banner_subtitle,
    }));

    function onEventSelected(event: SingleValue<BannerEventInfo>){
        setEventInfoPreview(event ? event : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Event Preview"
            initialOpen={true}
        >
            <PanelRow>
                <EditorSelect
                    name="event"
                    isLoading={!events}
                    value={eventInfoPreview}
                    onChange={onEventSelected}
                    options={eventOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}