import { RichText } from "@wordpress/block-editor";
import { type BlockSaveProps } from "@wordpress/blocks";

import { type HeadingAttributesType } from "./heading";
import { headingSizeClasses, headingSizeTagNames } from "./edit";

export type HeadingSaveComponentProps = BlockSaveProps<HeadingAttributesType>;

export function SaveComponent(props: HeadingSaveComponentProps){
    const headingClassNames = new Set([
        "headline",
        headingSizeClasses.get(props.attributes.size) || ""
    ]);
    const headingTagName = headingSizeTagNames.get(props.attributes.size) || "h1";

    return (
    <RichText.Content
        tagName={headingTagName}
        className={Array.from(headingClassNames).join(" ")}
        value={props.attributes.text}
    />
    );
}