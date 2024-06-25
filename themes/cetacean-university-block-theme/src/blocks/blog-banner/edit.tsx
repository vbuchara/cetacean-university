import { useMemo } from "react";
import { RichText } from "@wordpress/block-editor";
import { type BlockEditProps } from "@wordpress/blocks";

import { 
    PageBannerBlock,
    BannerPageInfo,
    PageBannerBlockRenderProps
} from "@blocks/page-banner/components/block";

import { BlogBannerInspectorControls } from "./components/controls";

import type { BlogBannerAttributeType } from "./blog-banner";

export type BlogBannerEditComponentProps = BlockEditProps<BlogBannerAttributeType>;

export function EditComponent(props: BlogBannerEditComponentProps){
    const { attributes, setAttributes } = props;

    const defaultBannerImage = CetaceanUniversityBlogBannerData.theme_path + "/images/ocean.jpg";
    const defaultPage = {
        title: "Our Blog",
        subtitle: "Check out our latest posts!",
        bannerImageId: 0
    } satisfies BannerPageInfo;
    const page: BannerPageInfo = useMemo(() => {
        return {
            ...defaultPage,
            ...attributes
        }
    }, [attributes.title, attributes.subtitle, attributes.bannerImageId]);

    const Title = useMemo(() => {
        return ({ divClassName }: PageBannerBlockRenderProps) => (
            <RichText
                tagName="h1"
                className={divClassName}
                value={attributes.title}
                onChange={onTitleChange}
            />
        );
    }, [onTitleChange.toString()]);

    const Subtitle = useMemo(() => {
        return () => (
            <RichText
                tagName="p"
                value={attributes.subtitle}
                onChange={onSubtitleChange}
            />
        );
    }, [onSubtitleChange.toString()]);

    function onTitleChange(value: string){
        setAttributes({
            title: value
        });
    }

    function onSubtitleChange(value: string){
        setAttributes({
            subtitle: value
        });
    }

    return (
    <>
        <BlogBannerInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <PageBannerBlock
            page={page}
            defaultBannerImage={defaultBannerImage}
            renderTitle={Title}
            renderSubtitle={Subtitle}
        />
    </>
    );
}