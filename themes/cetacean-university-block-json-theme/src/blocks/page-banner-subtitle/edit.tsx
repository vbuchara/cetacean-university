import { useState } from "react";
import useAsync from "react-use/lib/useAsync";
import apiFetch from "@wordpress/api-fetch";
import type { BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import type { EditorVariablesGet } from "wordpress-types";

import { PageBannerSubtitleBlockControls, PageBannerSubtitleInspectorControls } from "./components/controls";

import type { PageBannerSubtitleAttributeType } from "./page-banner-subtitle";

export type PageBannerSubtitleEditComponentProps = BlockEditProps<PageBannerSubtitleAttributeType>;

export function EditComponent(props: PageBannerSubtitleEditComponentProps){
    const { attributes, setAttributes } = props;
    
    const [textSelectionOffset, setTextSelectionOffset] = useState(0);

    const { loading, value: response } = useAsync(async() => {
        const response = await apiFetch<EditorVariablesGet>({
            path: "/cetacean-university/v1/editor/variables",
            method: "GET"
        });

        return response;
    }, []);

    function onSelectText(event: React.SyntheticEvent<HTMLParagraphElement>){
        const eventDocument = event.currentTarget.getRootNode() as Document;
        const selection = eventDocument.getSelection();

        if(!selection) return;

        setTextSelectionOffset(selection.focusOffset);
    }

    return (
    <>
        <PageBannerSubtitleInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
        />
        <PageBannerSubtitleBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
            textSelectionOffset={textSelectionOffset}
        />
        <div className="page-banner__intro">
            <RichText
                tagName="p"
                allowedFormats={["core/bold", "core/italic"]}
                value={attributes.text}
                onChange={(value) => setAttributes({ text: value })}
                onSelect={onSelectText as unknown as React.ReactEventHandler<"p">}
            />
        </div>
    </>
    );
}