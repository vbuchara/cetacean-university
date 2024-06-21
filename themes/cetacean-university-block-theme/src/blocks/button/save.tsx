import { type BlockSaveProps } from "@wordpress/blocks";

import { cancelRedirect } from "@src/utils/cancelRedirect";

import { type ButtonAttributesType } from "./button";
import { buttonAnimationsOnHoverClasses, buttonSizeClasses } from "./edit";

export type ButtonSaveComponentProps = BlockSaveProps<ButtonAttributesType>;

export function SaveComponent(props: ButtonSaveComponentProps){
    const {
        attributes
    } = props;

    const buttonLink = attributes.linkObject?.url ? attributes.linkObject?.url : undefined;
    const buttonClassNames = new Set([
        "btn",
        attributes.size ? (buttonSizeClasses.get(attributes.size) || "") : "",
        buttonAnimationsOnHoverClasses.get(attributes.animations.onHover) || "",
    ]);

    return (
    <a
        href={buttonLink}
        onClick={!buttonLink ? cancelRedirect : undefined}
        className={Array.from(buttonClassNames).join(" ")}
        style={{
            "--background-color": attributes.backgroundColor,
            "--color": attributes.color,
        }}
    >
        {attributes.text}
    </a>
    );
}