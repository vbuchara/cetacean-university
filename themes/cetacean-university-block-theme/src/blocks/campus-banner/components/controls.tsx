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

import { EditorSelect } from '@components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { BannerCampusInfo } from "../campus-banner";

export type CampusBannerInspectorControlsProps = {
    campusInfoPreview: BannerCampusInfo | undefined;
    setCampusInfoPreview: React.Dispatch<React.SetStateAction<BannerCampusInfo | undefined>>;
};

export interface CampusSelectOption extends BannerCampusInfo{
    value: number;
    label: string;
};

export function CampusBannerInspectorControls({
    campusInfoPreview,
    setCampusInfoPreview
}: CampusBannerInspectorControlsProps){
    const campuses = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "campus",
            {
                per_page: -1,
            }
        ) as CampusPost[] | null;
    }, []);
    const postOptions = campuses?.map<CampusSelectOption>(campus => ({ 
        label: getTitle(campus),
        value: campus.id,
        bannerImageId: campus.acf.page_banner_background_image,
        title: campus.title.rendered,
        subtitle: campus.acf.page_banner_subtitle,
    }));

    function onCampusSelected(campus: SingleValue<BannerCampusInfo>){
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
                    options={postOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}