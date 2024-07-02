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
import type { CampusPost } from "wordpress-types";

import { EditorSelect } from '@src/components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { CampusContentInfo } from "../campus-content";

export type CampusContentInspectorControlsProps = {
    campusInfoPreview: CampusContentInfo | undefined;
    setCampusInfoPreview: React.Dispatch<React.SetStateAction<CampusContentInfo | undefined>>;
};

export interface CampusSelectOption extends CampusContentInfo{
    value: number;
    label: string;
};

export function CampusContentInspectorControls({
    campusInfoPreview,
    setCampusInfoPreview
}: CampusContentInspectorControlsProps){
    const campuses = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "campus",
            {
                per_page: -1,
            }
        ) as CampusPost[] | null;
    }, []);
    const campusOptions = campuses?.map<CampusSelectOption>(campus => ({ 
        label: getTitle(campus),
        value: campus.id,
        title: campus.title,
        content: campus.content.rendered,
        id: campus.id,
        link: campus.link,
        acf: campus.acf
    }));

    function onCampusSelected(campus: SingleValue<CampusContentInfo>){
        setCampusInfoPreview(campus ? campus : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Campus Preview"
            initialOpen={true}
        >
            <PanelRow>
                <EditorSelect
                    name="campus"
                    isLoading={!campuses}
                    value={campusInfoPreview}
                    onChange={onCampusSelected}
                    options={campusOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}