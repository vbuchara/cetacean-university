import { type CSSProperties } from "react";
import { ColorPalette, Popover } from "@wordpress/components";

import { WordpressColorsPresets } from "@classes/WordpressColorsPresets";

export type ColorPalettePopoverProps = {
    value: string,
    onChange: (newColor?: string, index?: number) => void
    onClose?: () => void,
    style?: CSSProperties
};

export function ColorPalettePopover({
    value,
    onChange,
    onClose,
    style
}: ColorPalettePopoverProps){
    const colors = WordpressColorsPresets.getColorsList();

    return (
    <Popover
        expandOnMobile={true}
        placement="left-start"
        onClose={onClose}
    >
        <ColorPalette
            colors={colors}
            value={value}
            onChange={onChange}
            style={{ 
                padding: 15,
                ...style
            }}
        />
    </Popover>
    );
}