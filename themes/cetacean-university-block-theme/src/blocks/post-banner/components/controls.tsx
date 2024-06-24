import Select, { type SingleValue } from 'react-select';
import { 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
} from "@wordpress/components";
import { 
    useSelect 
} from "@wordpress/data";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import type { WP_Post } from "wordpress-types";
import type { SetRequired } from "type-fest";
import { format } from "date-fns";

import { getTitle } from "@src/utils/getTitle";

import type { BannerPostInfo } from "../post-banner";

export type PostBannerInspectorControlsProps = {
    postInfoPreview: BannerPostInfo | undefined;
    setPostInfoPreview: React.Dispatch<React.SetStateAction<BannerPostInfo | undefined>>;
};

export interface PostSelectOption extends BannerPostInfo{
    value: number;
    label: string;
};

type WP_PosWithEmbedded = SetRequired<WP_Post, "_embedded">;

export function PostBannerInspectorControls({
    postInfoPreview,
    setPostInfoPreview
}: PostBannerInspectorControlsProps){
    const posts = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "post",
            {
                per_page: -1,
                _embed: true
            }
        ) as WP_PosWithEmbedded[] | null;
    }, []);
    const postOptions = posts?.map<PostSelectOption>(post => ({ 
        label: getTitle(post),
        value: post.id,
        autor: { 
            link: post._embedded.author[0].link, 
            name: post._embedded.author[0].name,
        },
        bannerImageId: post.acf.page_banner_background_image,
        title: post.title.rendered,
        subtitle: post.acf.page_banner_subtitle,
        category: post._embedded["wp:term"][0].map((category) => {
            return {
                name: category.name,
                id: category.id,
                link: category.link
            }
        }),
        date: format(post.date, "dd/MM/yyyy")
    }));

    function onPostSelected(post: SingleValue<BannerPostInfo>){
        setPostInfoPreview(post ? post : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Post Preview"
            initialOpen={true}
        >
            <PanelRow>
                <Select
                    name="post"
                    isSearchable={true}
                    isLoading={!posts}
                    value={postInfoPreview}
                    onChange={onPostSelected}
                    options={postOptions}
                    styles={{
                        container: (base) => ({
                            ...base,
                            flex: 1
                        }),
                        input: (base) => ({
                            ...base,
                            "input:focus": {
                                boxShadow: "none"
                            }
                        })
                    }}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}