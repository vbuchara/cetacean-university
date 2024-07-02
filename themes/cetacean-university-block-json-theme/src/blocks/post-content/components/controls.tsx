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

import { getTitle } from "@src/utils/getTitle";

import type { PostContentInfo } from "../post-content";

export type PostBannerInspectorControlsProps = {
    postInfoPreview: PostContentInfo | undefined;
    setPostInfoPreview: React.Dispatch<React.SetStateAction<PostContentInfo | undefined>>;
};

export interface PostSelectOption extends PostContentInfo{
    value: number;
    label: string;
};

export function PostContentInspectorControls({
    postInfoPreview,
    setPostInfoPreview
}: PostBannerInspectorControlsProps){
    const posts = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "post",
            {
                per_page: -1,
            }
        ) as WP_Post[] | null;
    }, []);
    const postOptions = posts?.map<PostSelectOption>(post => ({ 
        label: getTitle(post),
        value: post.id,
        content: post.content.rendered
    }));

    function onPostSelected(post: SingleValue<PostContentInfo>){
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