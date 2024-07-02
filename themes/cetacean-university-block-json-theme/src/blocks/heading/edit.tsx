import { 
    useEffect, 
    useState,
    type MouseEventHandler
} from "react";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { RichText, BlockControls } from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import { EditorWrapper } from "@components/editor-wrapper";

import type { HeadingSize, HeadingAttributesType } from "./heading";

export type HeadingEditComponentProps = BlockEditProps<HeadingAttributesType>;

export const headingSizeClasses = new Map<HeadingSize, string>([
    ["tiny", "headline--tiny"],
    ["small", "headline--small"],
    ["medium", "headline--medium"],
    ["large", "headline--large"],
]);

export const headingSizeTagNames = new Map<HeadingSize, keyof HTMLElementTagNameMap>([
    ["tiny", "h4"],
    ["small", "h3"],
    ["medium", "h2"],
    ["large", "h1"],
]);

export function EditComponent(props: HeadingEditComponentProps){
    const { attributes, setAttributes } = props;
    const [headingClassNames, setHeadingClassNames] = useState(new Set(["headline"]));
    const [headingTagName, setHeadingTagName] = useState<keyof HTMLElementTagNameMap>("h1");

    function isButtonPressed(buttonSizeType: HeadingSize): boolean{
        return buttonSizeType === attributes.size;
    }

    function getOnButtonPressed(buttonSizeType: HeadingSize): MouseEventHandler<HTMLButtonElement>{
        return () => setAttributes({ size: buttonSizeType });
    }

    useEffect(() => {
        setHeadingClassNames((classNames) => {
            const sizeClassName = headingSizeClasses.get(attributes.size);

            if(sizeClassName){
                headingSizeClasses.forEach(className => {
                    classNames.delete(className);
                });
                classNames.add(sizeClassName);
            }

            return new Set(classNames);
        });
        setHeadingTagName(() => {
            return headingSizeTagNames.get(attributes.size) || "h1";
        });
    }, [attributes.size]);

    return (
    <EditorWrapper>
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    isPressed={isButtonPressed("large")}
                    onClick={getOnButtonPressed("large")}
                >
                    Large
                </ToolbarButton>
                <ToolbarButton
                    isPressed={isButtonPressed("medium")}
                    onClick={getOnButtonPressed("medium")}
                >
                    Medium
                </ToolbarButton>
                <ToolbarButton
                    isPressed={isButtonPressed("small")}
                    onClick={getOnButtonPressed("small")}
                >
                    Small
                </ToolbarButton>
            </ToolbarGroup>
        </BlockControls>
        <RichText
            tagName={headingTagName}
            className={Array.from(headingClassNames).join(" ")}
            allowedFormats={["core/bold", "core/italic"]}
            value={attributes.text}
            onChange={(value) => setAttributes({ text: value })}
        />
    </EditorWrapper>
    );
}