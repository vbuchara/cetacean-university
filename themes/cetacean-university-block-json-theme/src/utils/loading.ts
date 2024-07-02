
export type DisableLoadingOptions = {
    height?: string;
    width?: string;
    rootClassName: string
};

export function disableLoading(options: DisableLoadingOptions){
    const {
        height,
        width,
        rootClassName
    } = options;

    const rootDiv = document.querySelector<HTMLDivElement>(`.${rootClassName}`);

    if(!rootDiv) return;

    if(typeof height === "string") rootDiv.style.setProperty("--height", height);
    if(typeof width === "string") rootDiv.style.setProperty("--width", width);

    rootDiv.style.setProperty("--opacity", "0");

    const transitionsToExecute = new Set<string>(["height", "width", "opacity"]);
    const transitionsToEnd = new Set<string>([]);

    const onRootDivTransitionStart = (event: TransitionEvent) => {
        console.log(event.propertyName);
        if(transitionsToExecute.has(event.propertyName)){
            transitionsToEnd.add(`${event.propertyName}.${event.pseudoElement}`);
        }
    };

    const onRootDivTransitionEnd = (event: TransitionEvent) => {
        console.log(event.propertyName);
        transitionsToEnd.delete(`${event.propertyName}.${event.pseudoElement}`);
        if(transitionsToEnd.size > 0) return;

        rootDiv.classList.remove(`${rootClassName}--loading`);
        rootDiv.style.removeProperty("--height");
        rootDiv.style.removeProperty("--width");
        rootDiv.style.removeProperty("--opacity");
        
        rootDiv.removeEventListener("transitionstart", onRootDivTransitionStart);
        rootDiv.removeEventListener("transitionend", onRootDivTransitionEnd);
    };

    rootDiv.addEventListener("transitionstart", onRootDivTransitionStart);
    rootDiv.addEventListener("transitionend", onRootDivTransitionEnd)
}