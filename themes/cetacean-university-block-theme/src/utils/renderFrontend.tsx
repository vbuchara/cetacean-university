import { createRoot } from "react-dom/client";
import type { BlockSaveProps } from "@wordpress/blocks";

import { parseDataset } from "./parseDataset";

export function renderFrontend(
    rootClassName: string,
    Component: (props: BlockSaveProps<Record<string, any>>) => JSX.Element
){
    const blocksRoots = document.querySelectorAll<HTMLElement>(`.${rootClassName}`);

    blocksRoots.forEach((div) => {
        const dataset = parseDataset(div.dataset);
        
        const attributes: Record<string, any> = dataset;
        const reactRoot = createRoot(div);

        reactRoot.render(
            <Component
                className={rootClassName} 
                attributes={attributes}
            />
        );

        Array.from(div.attributes).forEach(attr => {
            if(attr.name.startsWith("data-")) div.removeAttribute(attr.name);
        });
    });
}