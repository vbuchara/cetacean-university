import { useEffect, useMemo, useState, type MouseEventHandler } from "react";
import { link } from "@wordpress/icons";
import { 
    BlockControls, 
    ColorPalette, 
    InspectorControls,
    __experimentalLinkControl as LinkControl
} from "@wordpress/block-editor";
import { 
    Button, 
    PanelBody, 
    PanelRow, 
    SelectControl, 
    ToolbarButton, 
    ToolbarGroup,
    Popover,
    Flex,
    __experimentalGrid as Grid,
    ColorIndicator,
} from "@wordpress/components";

import type { ButtonAnimation, ButtonSize } from "../button";
import type { ButtonEditComponentProps } from "../edit";
import { ColorButton } from "./color-button";

import { WordpressColorsPresets } from "@src/classes/WordpressColorsPresets";
import { ColorPalettePopover } from "./color-palette-popover";

export function ButtonInspectorControls({
    attributes,
    setAttributes
}: ButtonEditComponentProps){
    const [isBackgroundColorPaletteVisible, setIsBackgroundColorPaletteVisible] = useState(false);
    const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);

    function onChangeAnimationsOnHover(value: ButtonAnimation){
        setAttributes({
            animations: {
               ...attributes.animations,
                onHover: value
            }
        });
    };

    return (
    <>
        <InspectorControls
            group="styles"
        >
            <PanelBody 
                title="Colors"
                initialOpen={true}
            >
                <PanelRow>
                    <Flex
                        direction="column"
                        gap={0}
                        style={{ flex: 1 }}
                    >
                        <ColorButton
                            colorValue={attributes.backgroundColor}
                            onClick={() => setIsBackgroundColorPaletteVisible((prev) => !prev)}
                            style={{ borderBottom: 0 }}
                        >
                            Background
                        </ColorButton>
                        <ColorButton
                            colorValue={attributes.color}
                            onClick={() => setIsColorPaletteVisible((prev) => !prev)}
                        >
                            Text
                        </ColorButton>
                    </Flex>
                </PanelRow>
                {!isBackgroundColorPaletteVisible ? "" : (
                <ColorPalettePopover
                    value={attributes.backgroundColor}
                    onChange={(color) => setAttributes({ backgroundColor: color })}
                    onClose={() => setIsBackgroundColorPaletteVisible(false)}
                />
                )}
                {!isColorPaletteVisible ? "" : (
                <ColorPalettePopover
                    value={attributes.color}
                    onChange={(color) => setAttributes({ color: color })}
                    onClose={() => setIsColorPaletteVisible(false)}
                />
                )}
            </PanelBody>
            <PanelBody 
                title="Animations"
                initialOpen={true}
            >
                <PanelRow>
                    <Grid columns={1} style={{ flex: 1 }}>
                        <SelectControl
                            label="On Hover"
                            value={attributes.animations.onHover}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: 'Slide from Top', value: 'slide-from-top' },
                                { label: 'Slide from Bottom', value:'slide-from-bottom' },
                                { label: 'Slide from Left', value:'slide-from-left' },
                                { label: 'Slide from Right', value:'slide-from-right' },
                            ]}
                            onChange={onChangeAnimationsOnHover}
                        />
                    </Grid>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    </>
    );
}

export function ButtonBlockControls({
    attributes,
    setAttributes
}: ButtonEditComponentProps){
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

    function isSizeButtonPressed(buttonSizeType: ButtonSize): boolean{
        return buttonSizeType === attributes.size;
    }

    function getOnSizeButtonPressed(buttonSizeType: ButtonSize): MouseEventHandler<HTMLButtonElement>{
        return () => setAttributes({ size: buttonSizeType });
    }

    function onLinkButtonClick(){
        setIsLinkPickerVisible((isLinkPickerVisible) => !isLinkPickerVisible);
    }

    return (
    <>
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    onClick={onLinkButtonClick}
                    icon={link}
                />
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarButton
                    isPressed={isSizeButtonPressed("large")}
                    onClick={getOnSizeButtonPressed("large")}
                >
                    Large
                </ToolbarButton>
                <ToolbarButton
                    isPressed={isSizeButtonPressed("small")}
                    onClick={getOnSizeButtonPressed("small")}
                >
                    Small
                </ToolbarButton>
            </ToolbarGroup>
        </BlockControls>
        {!isLinkPickerVisible ? "" : (
        <Popover
            position="middle center"
            onClose={() => setIsLinkPickerVisible(false)}
        >
            <LinkControl
                settings={[]}
                value={attributes.linkObject}
                onChange={(value) => setAttributes({ linkObject: value })}
                renderControlBottom={() => (
                <Flex
                    justify="center"
                    style={{ paddingBottom: "10px" }}
                >
                    <Button
                        variant="primary"
                        onClick={() => setIsLinkPickerVisible(false)}
                    >
                        Confirm Link
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setAttributes({ linkObject: undefined })}
                    >
                        Clear Link
                    </Button>
                </Flex>
                )}
            />
        </Popover>
        )}
    </>
    );
};