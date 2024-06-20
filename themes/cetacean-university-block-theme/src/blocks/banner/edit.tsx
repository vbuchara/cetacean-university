
import { type BlockEditProps } from '@wordpress/blocks';
import { 
    InnerBlocks,
} from '@wordpress/block-editor';

import { CetaceanUniversityBlocks } from '@src/classes/CetaceanUniversityBlocks';

import type { BannerAttributesType } from './banner';
import { BannerInspectorControls } from './components/controls';

export type BannerEditComponentProps = BlockEditProps<BannerAttributesType>;

export function EditComponent(props: BannerEditComponentProps){

    return (
    <>
        <BannerInspectorControls
            {...props}
        />
        <div className="page-banner">
            <div 
                className="page-banner__bg-image" 
                style={{
                    "--bg-image": `url(${props.attributes.bannerImageUrl})`
                }}
            ></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks
                    allowedBlocks={[CetaceanUniversityBlocks.Heading, CetaceanUniversityBlocks.Button]}
                />
            </div>
        </div>
    </>
    );
}