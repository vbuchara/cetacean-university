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
import type { WP_Page } from "wordpress-types";
import type { SetRequired } from "type-fest";
import { format } from "date-fns";

import { EditorSelect } from '@components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { BannerPageInfo } from "../page-banner";

export type PostBannerInspectorControlsProps = {
    pageInfoPreview: BannerPageInfo | undefined;
    setPageInfoPreview: React.Dispatch<React.SetStateAction<BannerPageInfo | undefined>>;
};

export interface PageSelectOption extends BannerPageInfo{
    value: number;
    label: string;
};

type WP_PageWithEmbedded = SetRequired<WP_Page, "_embedded">;

export function PageBannerInspectorControls({
    pageInfoPreview,
    setPageInfoPreview
}: PostBannerInspectorControlsProps){
    const pages = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "page",
            {
                per_page: -1,
                _embed: true
            }
        ) as WP_PageWithEmbedded[] | null;
    }, []);
    const pageOptions = pages?.map<PageSelectOption>(post => ({ 
        label: getTitle(post),
        value: post.id,
        title: post.title.rendered,
        subtitle: post.acf.page_banner_subtitle,
        bannerImageId: post.acf.page_banner_background_image,
        pageParent: !post._embedded.up?.[0] ? undefined : {
            title: post._embedded.up?.[0].title.rendered,
            link: post._embedded.up?.[0].link
        }
    }));

    function onPageSelected(post: SingleValue<BannerPageInfo>){
        setPageInfoPreview(post ? post : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Page Preview"
            initialOpen={true}
        >
            <PanelRow>
                <EditorSelect
                    name="page"
                    isLoading={!pages}
                    value={pageInfoPreview}
                    onChange={onPageSelected}
                    options={pageOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}