import { useCallback, useState } from "react";
import { 
    type WPLinkControlProps,
    type WPLinkControlValue,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { 
    BaseControl,
    __experimentalGrid as Grid,
} from "@wordpress/components";
import { useMutationObserverRef } from "rooks";

import { isHTMLElement } from "@utils/typeCheck";

export type WrapperDivProps = Omit<
    React.ComponentProps<typeof Grid>,
    "children" | "ref" | "key"
>;

export interface PanelLinkControl extends WPLinkControlProps {
    label?: string;
    wrapperDivProps?: WrapperDivProps
}

export function PanelLinkControl({
    label,
    wrapperDivProps: { style, className, ...wrapperDivProps } = {},
    ...props
}: PanelLinkControl){
    
    const [hasChanged, setHasChanged] = useState(false);

    const [linkControlRef] = useMutationObserverRef((mutations) => {
        const targetMutated = mutations[0]?.target;
        if(!targetMutated) return;

        const elementMutated = targetMutated instanceof Element
            ? targetMutated
            : targetMutated.parentElement;

        if(!elementMutated || !isHTMLElement(elementMutated)) return;

        const linkControl = elementMutated.classList.contains("block-editor-link-control")
            ? elementMutated
            : elementMutated.closest(".block-editor-link-control");

        if(!linkControl || !isHTMLElement(linkControl)) return;

        adjustLinkControlStyle(linkControl);
    });

    const setLinkControlRef = useCallback((element: HTMLDivElement | null) => {
        if(!element) return;

        const linkControlElement = element
            .getElementsByClassName("block-editor-link-control")
            .item(0);

        if(!linkControlElement || !isHTMLElement(linkControlElement)) return;

        linkControlRef(linkControlElement);

        if(!linkControlElement) return;

        adjustLinkControlStyle(linkControlElement);
    }, [props.value, hasChanged]);

    function adjustLinkControlStyle(linkControl: HTMLElement){
        linkControl.style.setProperty("min-width", "unset");

        const otherElementsWithMinWidthSetBreakingTheStyle = linkControl
            .querySelectorAll<HTMLSpanElement>(".components-menu-item__item");
        
        Array.from(otherElementsWithMinWidthSetBreakingTheStyle).forEach(element => {
            element.style.setProperty("min-width", "unset");
            element.style.setProperty("white-space", "unset");
            element.style.setProperty("overflow-wrap", "anywhere");
        });

        const inputField = linkControl
            .querySelectorAll<HTMLElement>(".block-editor-link-control__field");

        Array.from(inputField).forEach(element => {
            element.style.setProperty("margin-left", "0px");
            element.style.setProperty("margin-right", "0px");
        });

        const searchResults = linkControl
            .querySelectorAll<HTMLElement>(".block-editor-link-control__search-results");

        Array.from(searchResults).forEach(element => {
            element.style.setProperty("padding-left", "0px");
            element.style.setProperty("padding-right", "0px");
        });

        const searchItem = linkControl
            .querySelectorAll<HTMLElement>(".block-editor-link-control__search-item");

        Array.from(searchItem).forEach(element => {
            element.style.setProperty("padding-left", "0px");
            element.style.setProperty("padding-right", "0px");
        });

        const componentGroup = linkControl
            .querySelector<HTMLElement>(".block-editor-link-control__search-results > .components-menu-group");

        if(componentGroup){
            componentGroup.style.setProperty("padding-inline", "1.5px");
        }

        const menuItemShortcut = linkControl
            .querySelectorAll<HTMLElement>(".components-menu-item__shortcut");

        Array.from(menuItemShortcut).forEach(element => {
            element.style.setProperty("padding-left", "0px");
        });
    }

    function onLinkChanged(value: WPLinkControlValue){
        props.onChange?.(value);
        setHasChanged(true);
    }
    
    return (
    <Grid
        {...wrapperDivProps}
        ref={setLinkControlRef}
        className={`link-control-wrapper ${className ? className : ""}}`}
        columns={wrapperDivProps.columns ? wrapperDivProps.columns : 1}
        style={{
            flex: 1,
            ...style,
        }}
    >
        <BaseControl label={label}>
            <LinkControl
                {...props}
                onChange={onLinkChanged}
            />
        </BaseControl>
    </Grid>
    );
}