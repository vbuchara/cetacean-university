import { useMemo, useState } from "react";
import { MultiValue, SingleValue } from "react-select";
import { BlockControls, InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    Popover, 
    ToolbarButton, 
    ToolbarGroup,
    __experimentalGrid as Grid,
    PanelRow,
    BaseControl
} from "@wordpress/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";
import stringInsert from "voca/insert";
import type { EditorVariablesGet } from "wordpress-types";

import { EditorSelect } from "@src/components/editor-select";

import type { PageBannerSubtitleEditComponentProps } from "../edit";

export type PageBannerSubtitleCommonControlsProps = Pick<
    PageBannerSubtitleEditComponentProps,
    "attributes" | "setAttributes"
> & {
    loading: boolean;
    response: EditorVariablesGet | undefined
};

export interface VariableOptions {
    label: string;
    value: string;
}

export interface PageBannerSubtitleInspectorControlsProps extends PageBannerSubtitleCommonControlsProps{}

export function PageBannerSubtitleInspectorControls(props: PageBannerSubtitleInspectorControlsProps){
    const { loading, response } = props;

    const variablesOptions = useMemo<VariableOptions[]>(() => {
        if(!response) return [];
        const { variables, indicator } = response;

        return variables.map((variable) => {
            return {
                label: variable,
                value: indicator.replace("variable", variable)
            };
        })
    }, [loading, response]);
    const variablesOptionsSelected = props.attributes.showConditionalVariables.map((
        variableSelected
    ) => {
        return variablesOptions.find(variable => variable.value === variableSelected);
    }).filter((variable): variable is VariableOptions => typeof variable !== undefined);


    function onChangeVariable(variables: MultiValue<VariableOptions>){
        props.setAttributes({
            showConditionalVariables: variables.map(({ value }) => value)
        });
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Exhibition"
        >
            <PanelRow>
                <Grid 
                    columns={1}
                    style={{ flex: 1 }}
                >
                    <BaseControl label="Show only if variable(s) is set">
                        <EditorSelect
                            name="subtitle-variable-show-condition"
                            isLoading={loading}
                            options={variablesOptions}
                            value={variablesOptionsSelected}
                            isMulti={true}
                            onChange={onChangeVariable}
                        />
                    </BaseControl>
                </Grid>
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface PageBannerSubtitleBlockControlsProps extends PageBannerSubtitleCommonControlsProps{
    textSelectionOffset: number;
}

export function PageBannerSubtitleBlockControls(props: PageBannerSubtitleBlockControlsProps){
    const { loading, response, textSelectionOffset } = props;
    
    const [isVariablePopoverVisible, setIsVariablePopoverVisible] = useState(false);
    const [variableButtonTrigger, setVariableButtonTrigger] = useState<Element | null>(null);

    const variablesOptions = useMemo<VariableOptions[]>(() => {
        if(!response) return [];
        const { variables, indicator } = response;

        return variables.map((variable) => {
            return {
                label: variable,
                value: indicator.replace("variable", variable)
            };
        })
    }, [loading, response]);

    function onClickVariableButton(){
        setIsVariablePopoverVisible(true);
    }

    function onChangeVariable(variable: SingleValue<VariableOptions>){
        if(!variable) return;

        props.setAttributes({
            text: props.attributes.text
                ? stringInsert(props.attributes.text, variable.value, textSelectionOffset) 
                : variable.value
        });

        setIsVariablePopoverVisible(false);
    }

    return (
    <>
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon={() => <FontAwesomeIcon icon={faSliders} />}
                    onClick={onClickVariableButton}
                    title="Add a variable"
                    ref={setVariableButtonTrigger}
                />
            </ToolbarGroup>
        </BlockControls>
        {!isVariablePopoverVisible ? "" : (
        <Popover
            placement="bottom"
            onClose={() => setIsVariablePopoverVisible(false)}
            anchor={variableButtonTrigger}
        >
            <EditorSelect
                name="subtitle-variable"
                isLoading={loading}
                options={variablesOptions}
                onChange={onChangeVariable}
                menuPortalTarget={document.body}
                styles={{
                    container: (base) => ({
                        ...base,
                        width: "200px"
                    }),
                    menu: (base) => ({
                        ...base,
                        marginTop: 0
                    })
                }}
            />
        </Popover>
        )}
    </>
    );
}