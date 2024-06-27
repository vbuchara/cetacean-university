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

import type { EventContentInfo } from "../event-content";

export type EventContentInspectorControlsProps = {
    eventInfoPreview: EventContentInfo | undefined;
    setEventInfoPreview: React.Dispatch<React.SetStateAction<EventContentInfo | undefined>>;
};

export interface EventSelectOption extends EventContentInfo{
    value: number;
    label: string;
};

export function EventContentInspectorControls({
    eventInfoPreview,
    setEventInfoPreview
}: EventContentInspectorControlsProps){
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
        content: event.content,
        relatedProgramsIds: event.acf.related_programs || []
    }));

    function onEventSelected(event: SingleValue<EventContentInfo>){
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