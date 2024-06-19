import apiFetch from '@wordpress/api-fetch';
import {
    Button,
    Flex,
    PanelBody,
    PanelRow
} from '@wordpress/components';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';

import { type BannerEditComponentProps } from "../edit";
import type { WpFeaturedmedia } from 'wordpress-types';

export function BannerInspectorControls({
    attributes,
    setAttributes
}: BannerEditComponentProps) {

    async function onSelectMedia(media: MediaUpload.MediaSelected) {
        try {
            const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                path: `/wp/v2/media/${media.id}` 
            });
            const pageBannerSize =  media_details.sizes['page-banner'];

            setAttributes({
                bannerImageId: media.id,
                bannerImageUrl: pageBannerSize ? pageBannerSize.source_url : source_url
            });
        } catch(error){
            console.log(error);
        }
    }

    function onClickSetToDefault(){
        setAttributes({
            bannerImageId: 0,
            bannerImageUrl: cetaceanUniversityData.theme_path + "/images/library-hero.jpg"
        });
    }

    return (
        <InspectorControls>
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
        </InspectorControls>
    );
}