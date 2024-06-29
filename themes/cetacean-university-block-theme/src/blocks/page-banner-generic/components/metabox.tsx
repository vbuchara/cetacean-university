import { useMemo } from "react";
import { RichText } from "@wordpress/block-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

import { EditorAnchor } from "@components/editor-anchor";

import type { PageBannerGenericEditComponentProps } from "../edit";

export type MetaboxProps = Pick<
    PageBannerGenericEditComponentProps,
    "attributes" | "setAttributes"
> & {
    onSelectHomeLinkText: React.ReactEventHandler<HTMLSpanElement>,
    onSelectMainText: React.ReactEventHandler<HTMLSpanElement>;
};

export function Metabox(props: MetaboxProps){
    const { 
        attributes, 
        setAttributes,
        onSelectHomeLinkText,
        onSelectMainText
    } = props;
    const { metaboxInfo } = attributes;

    const metaboxClasses = [
        "metabox", 
        "metabox--position-down", 
        "metabox--align-with-post", 
        "metabox--with-home-link",
        "metabox--editor"
    ];

    const metaboxHomeLinkUrl = useMemo(() => {
        if(!metaboxInfo.homeLinkObject) return undefined;
        const { url, type, title } = metaboxInfo.homeLinkObject;

        return type === "Variable" ? title : url;
    }, []);

    function onChangeHomeLinkText(value: string){
        setAttributes({
            metaboxInfo: {
                ...metaboxInfo,
                homeLinkText: value
            }
        });
    }

    function onChangeMainText(value: string){
        setAttributes({
            metaboxInfo: {
                ...metaboxInfo,
                mainText: value
            }
        });
    }

    return (
    <div className={metaboxClasses.join(" ")}>
        <p>
            <EditorAnchor 
                className="metabox__blog-home-link" 
                href={metaboxHomeLinkUrl}
            >
                <FontAwesomeIcon
                    icon={faHome}
                    width="0.9rem"
                    height="0.9rem"
                />
                <RichText
                    tagName="span"
                    allowedFormats={["core/italic", "core/bold"]}
                    value={metaboxInfo.homeLinkText}
                    onChange={onChangeHomeLinkText}
                    onSelect={onSelectHomeLinkText as unknown as React.ReactEventHandler<"span">}
                />
            </EditorAnchor> 
            <RichText
                tagName="span"
                className="metabox__main"
                allowedFormats={["core/italic", "core/bold"]}
                value={metaboxInfo.mainText}
                onChange={onChangeMainText}
                onSelect={onSelectMainText as unknown as React.ReactEventHandler<"span">}
            />
        </p>
    </div>
    );
}