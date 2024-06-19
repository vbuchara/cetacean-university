import { type BlockSaveProps } from "@wordpress/blocks";

import { type ButtonAttributesType } from "./button";
import { buttonAnimationsOnHoverClasses, buttonSizeClasses } from "./edit";

export type ButtonSaveComponentProps = BlockSaveProps<ButtonAttributesType>;

export function SaveComponent(props: ButtonSaveComponentProps){
    const buttonClassNames = new Set([
        "btn",
        buttonSizeClasses.get(props.attributes.size) || "",
        buttonAnimationsOnHoverClasses.get(props.attributes.animations.onHover) || "",
    ]);

    return (
    <a
        href={props.attributes.linkObject?.url}
        className={Array.from(buttonClassNames).join(" ")}
        style={{
            "--background-color": props.attributes.backgroundColor,
            "--color": props.attributes.color,
        }}
    >
        {props.attributes.text}
    </a>
    );
}