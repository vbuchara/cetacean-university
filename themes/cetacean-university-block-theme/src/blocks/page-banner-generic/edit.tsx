
import { useEffect, useMemo, useRef, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import { BlockInstance, type BlockEditProps } from "@wordpress/blocks";
import { 
    ButtonBlockAppender,
    InnerBlocks,
    store as blockEditorStore
} from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";
import type { WpFeaturedmedia } from "wordpress-types";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { PageBannerGenericInspectorControls } from "./components/control";

import type { PageBannerGenericAttributeType } from "./page-banner-generic";

export type PageBannerGenericEditComponentProps = BlockEditProps<PageBannerGenericAttributeType>;

export function EditComponent(props: PageBannerGenericEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const defaultBannerImage = CetaceanUniversityPageBannerGenericData.theme_path + "/images/ocean.jpg";

    const [bannerImage, setBannerImage] = useState("");

    const previousInnerBlocksIds = useRef(new Set<string>());

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
        function countPageBannerTitleBlocks(count: number, { name }: BlockInstance ){
            const bannerTitleNames = new Set<string>([
                CetaceanUniversityBlocks.PageBannerTitle,
                CetaceanUniversityBlocks.PageBannerArchiveTitle
            ]);

            return bannerTitleNames.has(name) ? count + 1 : count;
        }

        return innerBlocks.reduce(countPageBannerTitleBlocks, 0);
    }, [innerBlocksDependency]);

    const pageBannerSubtitleBlocksCount = useMemo(() => {
        function countPageBannerSubtitleBlocks(count: number, { name }: BlockInstance ){
            const bannerSubtitleNames = new Set<string>([
                CetaceanUniversityBlocks.PageBannerSubtitle,
            ]);

            return bannerSubtitleNames.has(name) ? count + 1 : count;
        }

        return innerBlocks.reduce(countPageBannerSubtitleBlocks, 0);
    }, [innerBlocksDependency]);

    async function validadeBlocks(){
        const previousBlocksIds = previousInnerBlocksIds.current;
        const hasMoreThanOneTitleOrSubtitle = (pageBannerTitleBlocksCount > 1 || pageBannerSubtitleBlocksCount > 1);

        if(previousBlocksIds.size > 0 && hasMoreThanOneTitleOrSubtitle){
            const promises = innerBlocks.map(async(block) => {
                if(!previousBlocksIds.has(block.clientId)){
                    await removeBlock(block.clientId);
                    alert("You can only have 1 Title and 1 Subtitle in the Page Banner Generic block.");
                }
            });

            await Promise.all(promises);
        }

        innerBlocks.forEach(({ clientId }) => previousBlocksIds.add(clientId));
    }

    const RenderAppender = useMemo(() => {
        const hasOneOrMoreTitleAndSubtitle = pageBannerTitleBlocksCount >= 1 && pageBannerSubtitleBlocksCount >= 1;

        return () => hasOneOrMoreTitleAndSubtitle ? null : (
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
    <>
        <PageBannerGenericInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
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
                        CetaceanUniversityBlocks.PageBannerArchiveTitle
                    ]}
                    template={[
                        [CetaceanUniversityBlocks.PageBannerTitle],
                        [CetaceanUniversityBlocks.PageBannerSubtitle]
                    ]}
                    renderAppender={RenderAppender}
                />
            </div>
        </div>
    </>
    );
}