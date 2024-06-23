import apiFetch from "@wordpress/api-fetch";
import { 
    InspectorControls, 
    MediaUpload, 
    MediaUploadCheck 
} from "@wordpress/block-editor";
import { 
    Button,
    Flex, 
    PanelBody, 
    PanelRow 
} from "@wordpress/components";
import type { WpFeaturedmedia } from "wordpress-types";


import { SlideEditComponentProps } from "../edit";

export type SlideInspectorControlsProps = Pick<
    SlideEditComponentProps,
    "attributes" | "setAttributes"
>;

export function SlideInspectorControls(props: SlideInspectorControlsProps){
    const {
        attributes,
        setAttributes
    } = props;

    async function onSelectMedia(media: MediaUpload.MediaSelected) {
        try {
            const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                path: `/wp/v2/media/${media.id}` 
            });
            const pageBannerSize =  media_details.sizes['large'];

            setAttributes({
                imageId: media.id,
                imageUrl: pageBannerSize ? pageBannerSize.source_url : source_url
            });
        } catch(error){
            console.log(error);
        }
    }

    function onClickSetToDefault(){
        setAttributes({
            imageId: 0,
            imageUrl: CetaceanUniversitySlideData.theme_path + "/images/boat.jpg"
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
                            value={attributes.imageId}
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