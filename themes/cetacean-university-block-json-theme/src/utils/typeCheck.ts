


export function isString(value: any): value is string {
    return typeof value === "string";
}

export function isHTMLElement(value: any): value is HTMLElement {
    return typeof value !== "undefined"
        && value instanceof HTMLElement
        && value !== null;
}

export function isHTMLDivElement(value: any): value is HTMLDivElement {
    return isHTMLElement(value)
        && value instanceof HTMLDivElement;
}