import { useEffect, useMemo, useState } from "react";
import { pasteHandler, type BlockEditProps } from "@wordpress/blocks";
import { RawHTML } from "@wordpress/element";

import { EditorWrapper } from "@components/editor-wrapper";

import { PostContentInspectorControls } from "./components/controls";

import type { PostContentAttributeType, PostContentInfo } from "./post-content";

export type PostContentEditComponentProps = BlockEditProps<PostContentAttributeType>;

export function EditComponent(_: PostContentEditComponentProps){
    const defaultPost = {
        content: "{Post Content}"
    } satisfies PostContentInfo;

    const [postInfoPreview, setPostInfoPreview] = useState<PostContentInfo | undefined>();

    const post: PostContentInfo = {
        ...defaultPost,
        ...postInfoPreview
    };

    return (
   <EditorWrapper> 
        <PostContentInspectorControls
            postInfoPreview={postInfoPreview}
            setPostInfoPreview={setPostInfoPreview}
        />
        <div className="container container--narrow page-section">
            <div className="generic-content">
                <RawHTML>
                    {post.content}
                </RawHTML>
            </div>
        </div>
    </EditorWrapper>
    );
}