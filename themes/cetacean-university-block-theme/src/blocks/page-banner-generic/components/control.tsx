import { useMemo, useState } from "react";
import useAsync from "react-use/lib/useAsync";
import { SingleValue, type MultiValue } from "react-select";
import apiFetch from "@wordpress/api-fetch";
import { 
    InspectorControls,
    MediaUpload, 
    MediaUploadCheck,
    type WPLinkControlValue,
    BlockControls,
} from "@wordpress/block-editor";
import { 
    BaseControl,
    Button, 
    Flex, 
    PanelBody, 
    PanelRow, 
    ToggleControl,
    __experimentalGrid as Grid,
    ToolbarGroup,
    ToolbarButton,
    Popover,
} from "@wordpress/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";
import stringInsert from "voca/insert";
import type { EditorVariablesGet } from "wordpress-types";

import { EditorSelect } from "@components/editor-select"; 
import { PanelLinkControl } from "@components/panel-link-control";

import type { MetaboxSelectionType, PageBannerGenericEditComponentProps } from "../edit";

export type PageBannerGenericCommonControlsProps = Pick<
    PageBannerGenericEditComponentProps,
    'attributes' | 'setAttributes'
> & {
    loading: boolean,
    response: EditorVariablesGet | undefined
};
export interface VariableOptions {
    label: string;
    value: string;
}

export interface PageBannerGenericInspectorControlsProps extends PageBannerGenericCommonControlsProps {};

export function PageBannerGenericInspectorControls({
    attributes,
    setAttributes
}: PageBannerGenericInspectorControlsProps){

    const { loading, value: response } = useAsync(async() => {
        const response = await apiFetch<EditorVariablesGet>({
            path: "/cetacean-university/v1/editor/variables",
            method: "GET"
        });

        return response;
    }, []);

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

    const variablesOptionsSelected = attributes.metaboxInfo.showConditionalVariables.map((
        variableSelected
    ) => {
        return variablesOptions.find(variable => variable.value === variableSelected);
    }).filter((variable): variable is VariableOptions => typeof variable !== undefined);


    function onChangeVariable(variables: MultiValue<VariableOptions>){
        setAttributes({
            metaboxInfo: {
                ...attributes.metaboxInfo,
                showConditionalVariables: variables.map(({ value }) => value)
            }
        });
    }

    function onSelectMedia(media: MediaUpload.MediaSelected) {
        setAttributes({
            bannerImageId: media.id
        });
    }

    function onClickSetToDefault(){
        setAttributes({
            bannerImageId: 0
        });
    }

    function onChangeMetaboxHomeLink(value: WPLinkControlValue){
        setAttributes({
            metaboxInfo: {
                ...attributes.metaboxInfo,
                homeLinkObject: {
                    url: value.url,
                    title: value.title,
                    type: value.type
                }
            }
        });
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title='Background Image'
            initialOpen={true}
        >
            <PanelRow>
                <Flex justify='flex-start'>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectMedia}
                            value={attributes.bannerImageId}
                            render={({ open }) => (
                            <>
                                <Button variant='primary' onClick={open}>
                                    Choose Image
                                </Button>
                                <Button variant='secondary' onClick={onClickSetToDefault}>
                                    Set to Default
                                </Button>
                            </>
                            )}
                        />
                    </MediaUploadCheck>
                </Flex>
            </PanelRow>
        </PanelBody>
        <PanelBody
            title="Metabox Configuration"
            initialOpen={true}
        >
            <PanelRow>
                <ToggleControl
                    label="Enable Metabox"
                    checked={attributes.enableMetabox}
                    onChange={(value) => setAttributes({ enableMetabox: value })}
                />
            </PanelRow>
            <PanelRow>
                <PanelLinkControl
                    label={"Home Link Url"}
                    settings={[]}
                    value={attributes.metaboxInfo.homeLinkObject ? {
                        ...attributes.metaboxInfo.homeLinkObject,
                        title: undefined,
                    } : undefined}
                    onChange={onChangeMetaboxHomeLink}
                />
            </PanelRow>
            <PanelRow>
                <Grid 
                    columns={1}
                    style={{ flex: 1 }}
                >
                    <BaseControl label="Show only if variable(s) is set">
                        <EditorSelect
                            name="metabox-variable-show-condition"
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
};

export interface PageBannerGenericBlockControlsProps extends PageBannerGenericCommonControlsProps{
    textSelectionOffset: number;
    metaboxSelectionType: MetaboxSelectionType;
}

export function PageBannerGenericBlockControls(props: PageBannerGenericBlockControlsProps){
    const { 
        loading, 
        response, 
        textSelectionOffset,
        metaboxSelectionType
    } = props;
    
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
        const { attributes: { metaboxInfo } } = props;

        if(metaboxSelectionType === "metabox-home-link"){
            props.setAttributes({
                metaboxInfo: {
                    ...props.attributes.metaboxInfo,
                    homeLinkText: metaboxInfo.homeLinkText
                        ? stringInsert(metaboxInfo.homeLinkText, variable.value, textSelectionOffset) 
                        : variable.value
                }
            });
        }

        if(metaboxSelectionType === "metabox-main"){
            props.setAttributes({
                metaboxInfo: {
                    ...props.attributes.metaboxInfo,
                    mainText: metaboxInfo.mainText
                        ? stringInsert(metaboxInfo.mainText, variable.value, textSelectionOffset) 
                        : variable.value
                }
            });
        }

        setIsVariablePopoverVisible(false);
    }

    return (
    <>
        <BlockControls>
            {!props.attributes.enableMetabox ? "" : (
            <ToolbarGroup>
                <ToolbarButton
                    icon={() => <FontAwesomeIcon icon={faSliders} />}
                    onClick={onClickVariableButton}
                    title="Add a variable"
                    ref={setVariableButtonTrigger}
                />
            </ToolbarGroup>
            )}
        </BlockControls>
        {!isVariablePopoverVisible ? "" : (
        <Popover
            placement="bottom"
            onClose={() => setIsVariablePopoverVisible(false)}
            anchor={variableButtonTrigger}
        >
            <EditorSelect
                name="metabox-variable"
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