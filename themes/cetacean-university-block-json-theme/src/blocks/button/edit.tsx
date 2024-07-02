import { 
    useEffect,
    useState,
    type MouseEvent
} from "react";
import { 
    RichText 
} from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import type { 
    ButtonAnimation,
    ButtonAttributesType, 
    ButtonSize
} from "./button";
import { ButtonBlockControls, ButtonInspectorControls } from "./components/controls";

export type ButtonEditComponentProps = BlockEditProps<ButtonAttributesType>;

export const buttonSizeClasses = new Map<ButtonSize, string>([
    ["small", "btn--small"],
    ["medium", "btn--medium"],
    ["large", "btn--large"],
]);

export const buttonAnimationsOnHoverClasses = new Map<ButtonAnimation, string>([
    ["none", ""],
    ["slide-from-top", "btn--slide-from-top"],
    ["slide-from-bottom", "btn--slide-from-bottom"],
    ["slide-from-left", "btn--slide-from-left"],
    ["slide-from-right", "btn--slide-from-right"],
]);

export function EditComponent(props: ButtonEditComponentProps){
    const { attributes, setAttributes } = props;
    const [buttonClassNames, setButtonClassNames] = useState(new Set(["btn"]));

    useEffect(() => {
        setButtonClassNames((classNames) => {
            const sizeClassName = attributes.size ? buttonSizeClasses.get(attributes.size) : undefined;
            const animationOnHoverClassName = buttonAnimationsOnHoverClasses.get(attributes.animations.onHover);

            if(sizeClassName){
                buttonSizeClasses.forEach(className => {
                    classNames.delete(className);
                });
                classNames.add(sizeClassName);
            }
            
            if(typeof animationOnHoverClassName === "string"){
                buttonAnimationsOnHoverClasses.forEach(className => {
                    classNames.delete(className);
                });
                classNames.add(animationOnHoverClassName);
            }

            return new Set(classNames);
        });
    }, [attributes.size, attributes.backgroundColor, attributes.animations.onHover]);

    return (
    <>
        <ButtonInspectorControls {...props} />
        <ButtonBlockControls {...props} />
        <RichText
            tagName="a"
            className={Array.from(buttonClassNames).join(" ")}
            allowedFormats={[]}
            value={attributes.text}
            onChange={(value) => setAttributes({ text: value })}
            style={{
                "--background-color": attributes.backgroundColor,
                "--color": attributes.color,
            }}
        />
    </>
    );
}