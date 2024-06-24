import { type SingleValue } from 'react-select';
import { 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
} from "@wordpress/components";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import { 
    useSelect 
} from "@wordpress/data";
import type { SelectFunction } from '@wordpress/data/build-types/types';
import type { WP_Page, WP_Post } from "wordpress-types";

import { EditorSelect } from '@components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { PageContentInfo, WP_PageWithChildren } from "../page-content";

function selectPagesWithChildren(select: SelectFunction): WP_PageWithChildren[] | null{
    const pages = select(coreStore).getEntityRecords(
        "postType",
        "page",
        {
            per_page: -1,
            _embed: true,
            withHasChildren: true
        }
    ) as WP_Page[] | null;

    if(!pages) return null;

    const pagesWithChildren = pages.map((page) => {
        if(!page.hasChildren && !page.parent) return page as WP_PageWithChildren;

        const childrenPages = select(coreStore).getEntityRecords(
            "postType",
            "page",
            {
                per_page: -1,
                parent: page.hasChildren ? page.id : page.parent
            }
        ) as WP_Page[] | null;

        return {
            ...page,
            children: childrenPages ? childrenPages : undefined,
        } as WP_PageWithChildren;
    });

    return pagesWithChildren;
}

export type PageBannerInspectorControlsProps = {
    pageInfoPreview: PageContentInfo | undefined;
    setPageInfoPreview: React.Dispatch<React.SetStateAction<PageContentInfo | undefined>>;
};

export interface PostSelectOption extends PageContentInfo{
    value: number;
    label: string;
};

export function PageContentInspectorControls({
    pageInfoPreview,
    setPageInfoPreview
}: PageBannerInspectorControlsProps){
    const pages = useSelect(selectPagesWithChildren, []);
    const pageOptions = pages?.map<PostSelectOption>(page => ({ 
        id: page.id,
        label: getTitle(page),
        value: page.id,
        title: getTitle(page),
        link: page.link,
        content: page.content.rendered,
        pageParent: getParent(page),
        pageChildren: page.children?.map(page => ({
            id: page.id,
            title: getTitle(page),
            link: page.link
        }))
    }));

    function getParent(page: WP_PageWithChildren): PostSelectOption["pageParent"]{
        if(page.hasChildren) return {
            id: page.id,
            title: getTitle(page),
            link: page.link,
        };

        return !page._embedded?.up ? undefined : {
            id: page._embedded.up[0].id,
            title: getTitle(page._embedded.up[0]),
            link: page._embedded.up[0].link
        };
    }

    function onPageSelected(page: SingleValue<PageContentInfo>){
        setPageInfoPreview(page ? page : undefined);
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