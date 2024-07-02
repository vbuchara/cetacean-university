import { useState } from "react";
import useAsync from "react-use/lib/useAsync";
import apiFetch from "@wordpress/api-fetch";
import { RichText } from "@wordpress/block-editor";
import type { BlockEditProps } from "@wordpress/blocks";
import type { EditorVariablesGet } from "wordpress-types";

import { EditorWrapper } from "@components/editor-wrapper";

import { PageBannerTitleBlockControls, PageBannerTitleInspectorControls } from "./components/controls";

import type { PageBannerTitleAttributeType } from "./page-banner-title";

export type PageBannerTitleEditComponentProps = BlockEditProps<PageBannerTitleAttributeType>;

export function EditComponent(props: PageBannerTitleEditComponentProps){
    const { attributes, setAttributes } = props;

    const [textSelectionOffset, setTextSelectionOffset] = useState(0);

    const { loading, value: response } = useAsync(async() => {
        const response = await apiFetch<EditorVariablesGet>({
            path: "/cetacean-university/v1/editor/variables",
            method: "GET"
        });

        return response;
    }, []);

    function onSelectText(event: React.SyntheticEvent<HTMLHeadingElement>){
        const eventDocument = event.currentTarget.getRootNode() as Document;
        const selection = eventDocument.getSelection();

        if(!selection) return;

        setTextSelectionOffset(selection.focusOffset);
    }
    
    return (
    <EditorWrapper>
        <PageBannerTitleInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
        />
        <PageBannerTitleBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
            textSelectionOffset={textSelectionOffset}
        />
        <RichText
            tagName="h1"
            allowedFormats={["core/bold", "core/italic"]}
            className="page-banner__title"
            onChange={(value) => setAttributes({ text: value })}
            value={attributes.text}
            onSelect={onSelectText as unknown as React.ReactEventHandler<"h1">}
        />
    </EditorWrapper>
    );
}