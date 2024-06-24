import { useMemo, useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { RawHTML } from "@wordpress/element";

import { EditorAnchor } from "@src/components/editor-anchor";

import { PageContentInspectorControls } from "./components/controls";

import type { PageContentAttributeType, PageContentInfo } from "./page-content";

export type PageContentEditComponentProps = BlockEditProps<PageContentAttributeType>;

export function EditComponent(_: PageContentEditComponentProps){
    const defaultPage = {
        id: 0,
        content: "{Page Content}",
        title: "{Page Title}",
        link: "/",
        pageParent: {
            id: 0,
            link: "/",
            title: "{Page Parent}"
        },
        pageChildren: [
            {
                id: -1,
                title: "{Page Children 1}",
                link: "/"
            },
            {
                id: -2,
                title: "{Page Children 2}",
                link: "/"
            }
        ]
    } satisfies PageContentInfo;

    const [pageInfoPreview, setPageInfoPreview] = useState<PageContentInfo | undefined>();

    const page: PageContentInfo = {
        ...defaultPage,
        ...pageInfoPreview
    };

    const pageChildrenDependency = page.pageChildren?.reduce(
        (dep, { id, link, title }) => dep + id + link + title,
        ""
    );

    const PageLinks = useMemo(() => {
        return () => (
        <div className="page-links">
            <h2 className="page-links__title">
                <EditorAnchor href={page.pageParent ? page.pageParent.link : page.link}>
                    {page.pageParent ? page.pageParent.title : page.title}
                </EditorAnchor>
            </h2>
            <ul className="min-list">
                {!page.pageChildren ? "" : page.pageChildren.map(childPage => (
                <li className={`page-item ${childPage.id === page.id ? "current_page_item" : ""}`}>
                    <EditorAnchor href={childPage.link}>
                        {childPage.title}
                    </EditorAnchor>
                </li>
                ))}
            </ul>
        </div>
        );
    }, [
        page.pageParent?.link, 
        page.pageParent?.title,
        pageChildrenDependency,
        page.id
    ]);
    
    return (
   <> 
        <PageContentInspectorControls
            pageInfoPreview={pageInfoPreview}
            setPageInfoPreview={setPageInfoPreview}
        />
        <div className="container container--narrow page-section">
            {!page.pageParent || !page.pageChildren ? "" : (<PageLinks/>)}
            <div className="generic-content">
                <RawHTML>
                    {page.content}
                </RawHTML>
            </div>
        </div>
    </>
    );
}