
import { type BlockEditProps } from '@wordpress/blocks';
import { 
    InnerBlocks,
} from '@wordpress/block-editor';

import { CetaceanUniversityBlocks } from '@classes/CetaceanUniversityBlocks';
import { EditorWrapper } from "@components/editor-wrapper";

import { BannerInspectorControls } from './components/controls';

import type { BannerAttributesType } from './banner';

export type BannerEditComponentProps = BlockEditProps<BannerAttributesType>;

export function EditComponent(props: BannerEditComponentProps){
    const {
        attributes
    } = props;

    const bannerImageUrl = attributes.bannerImageUrl 
        ? attributes.bannerImageUrl 
        : CetaceanUniversityBannerData.theme_path + "/images/library-hero.jpg";

    return (
    <EditorWrapper>
        <BannerInspectorControls
            {...props}
        />
        <div className="page-banner">
            <div 
                className="page-banner__bg-image" 
                style={{
                    "--bg-image": `url(${bannerImageUrl})`
                }}
            ></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks
                    allowedBlocks={[CetaceanUniversityBlocks.Heading, CetaceanUniversityBlocks.Button]}
                />
            </div>
        </div>
    </EditorWrapper>
    );
}