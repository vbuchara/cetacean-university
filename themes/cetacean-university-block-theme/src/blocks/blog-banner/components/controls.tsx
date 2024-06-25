import apiFetch from "@wordpress/api-fetch";
import { 
    InspectorControls, 
    MediaUpload, 
    MediaUploadCheck
} from "@wordpress/block-editor";
import { Button, Flex, PanelBody, PanelRow } from "@wordpress/components";
import { WpFeaturedmedia } from "wordpress-types";

import type { BlogBannerEditComponentProps } from "../edit";

export type BlogBannerInspectorControlsProps = Pick<
    BlogBannerEditComponentProps,
    "attributes" | "setAttributes"
>;

export function BlogBannerInspectorControls({
    attributes,
    setAttributes
}: BlogBannerInspectorControlsProps){
    
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