import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelect } from "@wordpress/data";
import { type BlockEditProps } from "@wordpress/blocks";
import { 
    ButtonBlockAppender,
    InnerBlocks
} from "@wordpress/block-editor";
import {
    store as editorStore
} from "@wordpress/editor"

import { EditorWrapper } from "@components/editor-wrapper";
import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type SliderEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: SliderEditComponentProps){
    const { 
        clientId
    } = props;

    const previousInnerBlocksIds = useRef(new Set<string>());

    const { removeBlock } = useDispatch(editorStore);
    const { innerBlocksCount, innerBlocks } = useSelect((select) => {
        const { 
            getBlockCount,
            getBlocks,
        } = select(editorStore);
        return {
            innerBlocksCount: getBlockCount(clientId),
            innerBlocks: getBlocks(clientId)
        };
    }, [clientId]);

    const RenderAppender = useMemo(() => {
        return () => {
            return innerBlocksCount >= 4 ? null : (
            <ButtonBlockAppender
                rootClientId={clientId}
                className="block-list-appender__toggle block-editor-button-block-appender"
            />
            )
        };
    }, [clientId, innerBlocksCount]);

    async function validateBlockCount(){
        const previousIds = previousInnerBlocksIds.current;

        if(innerBlocksCount > 4 && previousIds.size > 0){
            const promises = innerBlocks.map(async(block) => {
                if(!previousIds.has(block.clientId)){
                    await removeBlock(block.clientId);
                    alert("You can't have more than 4 Slides in the Slider block");
                }
            });
    
            await Promise.all(promises);
        }
        
        innerBlocks.forEach(({ clientId }) => previousIds.add(clientId));
    }

    useEffect(() => {
        (async() => await validateBlockCount())()
    }, [innerBlocksCount, innerBlocks]);

    return (
    <EditorWrapper>
        <div className="hero-slider hero-slider--editor">
            <h2 className="hero-slider__notice">
                Slider Parent
            </h2>
            <div data-glide-el="track" className="glide__track">
                <div className="glide__slides glide__slides--editor">
                    <InnerBlocks
                        allowedBlocks={[CetaceanUniversityBlocks.Slide]}
                        renderAppender={RenderAppender}
                    />
                </div>
                <div className="slider__bullets glide__bullets" data-glide-el="controls[nav]"></div>
            </div>
            <h2 className="hero-slider__notice">
                Slider Parent
            </h2>
        </div>
    </EditorWrapper>
    );
}