
import { useEffect, useMemo, useRef, useState } from "react";
import useAsync from "react-use/lib/useAsync";
import apiFetch from "@wordpress/api-fetch";
import { BlockInstance, type BlockEditProps } from "@wordpress/blocks";
import { 
    ButtonBlockAppender,
    InnerBlocks,
    store as blockEditorStore
} from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";
import type { EditorVariablesGet, WpFeaturedmedia } from "wordpress-types";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";
import { EditorWrapper } from "@components/editor-wrapper";

import { PageBannerGenericBlockControls, PageBannerGenericInspectorControls } from "./components/control";
import { Metabox } from "./components/metabox";

import type { PageBannerGenericAttributeType } from "./page-banner-generic";

export type PageBannerGenericEditComponentProps = BlockEditProps<PageBannerGenericAttributeType>;

export type MetaboxSelectionType = "metabox-main" | "metabox-home-link";

export function EditComponent(props: PageBannerGenericEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const defaultBannerImage = CetaceanUniversityPageBannerGenericData.theme_path + "/images/ocean.jpg";

    const [bannerImage, setBannerImage] = useState("");
    const [textSelectionOffset, setTextSelectionOffset] = useState(0);
    const [
        metaboxTextSelectionType, 
        setMetaboxTextSelectionType
    ] = useState<MetaboxSelectionType>("metabox-main");

    const previousInnerBlocksIds = useRef(new Set<string>());

    const { loading, value: response } = useAsync(async() => {
        const response = await apiFetch<EditorVariablesGet>({
            path: "/cetacean-university/v1/editor/variables",
            method: "GET"
        });

        return response;
    }, []);

    const { removeBlock } = useDispatch(blockEditorStore);
    const { innerBlocks } = useSelect((select) => {
        const { 
            getBlocks,
        } = select(blockEditorStore);
        return {
            innerBlocks: getBlocks(clientId)
        };
    }, [clientId]);
    const innerBlocksDependency = innerBlocks.reduce((result, { clientId }) => result + clientId, "");

    const pageBannerTitleBlocksCount = useMemo(() => {
        const bannerTitleNames = new Set<string>([
            CetaceanUniversityBlocks.PageBannerTitle,
        ]);

        function countPageBannerTitleBlocks(count: number, { name }: BlockInstance ){
            return bannerTitleNames.has(name) ? count + 1 : count;
        }

        return innerBlocks.reduce(countPageBannerTitleBlocks, 0);
    }, [innerBlocksDependency]);

    const pageBannerSubtitleBlocksCount = useMemo(() => {
        const bannerSubtitleNames = new Set<string>([
            CetaceanUniversityBlocks.PageBannerSubtitle,
        ]);

        function countPageBannerSubtitleBlocks(count: number, { name }: BlockInstance ){
            return bannerSubtitleNames.has(name) ? count + 1 : count;
        }

        return innerBlocks.reduce(countPageBannerSubtitleBlocks, 0);
    }, [innerBlocksDependency]);

    async function validadeBlocks(){
        const previousBlocksIds = previousInnerBlocksIds.current;
        const hasMoreThanOneEachBlock = (
            pageBannerTitleBlocksCount > 1 
            || pageBannerSubtitleBlocksCount > 1
        );

        if(previousBlocksIds.size > 0 && hasMoreThanOneEachBlock){
            const promises = innerBlocks.map(async(block) => {
                if(!previousBlocksIds.has(block.clientId)){
                    await removeBlock(block.clientId);
                    alert("You can only have 1 of Title and Subtitle");
                }
            });

            await Promise.all(promises);
        }

        innerBlocks.forEach(({ clientId }) => previousBlocksIds.add(clientId));
    }

    function getMetaboxOnSelectText(type: MetaboxSelectionType){
        return (event: React.SyntheticEvent<HTMLSpanElement>) => {
            const eventDocument = event.currentTarget.getRootNode() as Document;
            const selection = eventDocument.getSelection();

            if(!selection) return;

            setTextSelectionOffset(selection.focusOffset);
            setMetaboxTextSelectionType(type);
        }
    }

    const RenderAppender = useMemo(() => {
        const hasOneOrMoreOfEachBlock = (
            pageBannerTitleBlocksCount >= 1 
            && pageBannerSubtitleBlocksCount >= 1
        );

        return () => hasOneOrMoreOfEachBlock ? null : (
        <ButtonBlockAppender
            rootClientId={clientId}
            className="block-list-appender__toggle block-editor-button-block-appender"
        />
        );
    }, [clientId, innerBlocksDependency, pageBannerTitleBlocksCount, pageBannerSubtitleBlocksCount]);

    useEffect(() => {
        if(!attributes.bannerImageId){
            setBannerImage(defaultBannerImage);
            return;
        }

        (async() => {
            try{
                const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                    path: `/wp/v2/media/${attributes.bannerImageId}` 
                });
                const pageBannerSize = media_details.sizes['page-banner'];  
   
                if(!pageBannerSize && !source_url) throw new Error("No image found.");
                if(!pageBannerSize) return setBannerImage(source_url);
                
                setBannerImage(pageBannerSize.source_url);
            } catch(error){
                setBannerImage(defaultBannerImage);
                console.error(error);
            }
        })();
    }, [attributes.bannerImageId, defaultBannerImage]);

    useEffect(() => {
        validadeBlocks();
    }, [innerBlocksDependency, pageBannerTitleBlocksCount, pageBannerSubtitleBlocksCount]);

    return (
    <EditorWrapper>
        <PageBannerGenericInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
        />
        <PageBannerGenericBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
            loading={loading}
            response={response}
            textSelectionOffset={textSelectionOffset}
            metaboxSelectionType={metaboxTextSelectionType}
        />
        <div className="page-banner">
            <div 
                className="page-banner__bg-image" 
                style={{
                    "--bg-image": `url(${bannerImage})`
                }}
                >
            </div>
            <div className="page-banner__content container container--narrow">
                <InnerBlocks
                    allowedBlocks={[
                        CetaceanUniversityBlocks.PageBannerTitle,
                        CetaceanUniversityBlocks.PageBannerSubtitle,
                    ]}
                    template={[
                        [CetaceanUniversityBlocks.PageBannerTitle],
                        [CetaceanUniversityBlocks.PageBannerSubtitle]
                    ]}
                    renderAppender={RenderAppender}
                />
            </div>
            {!attributes.enableMetabox ? "" : (
            <Metabox
                attributes={attributes}
                setAttributes={setAttributes}
                onSelectHomeLinkText={getMetaboxOnSelectText("metabox-home-link")}
                onSelectMainText={getMetaboxOnSelectText("metabox-main")}
            />
            )}
        </div>
    </EditorWrapper>
    );
}