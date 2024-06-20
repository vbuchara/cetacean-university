import { stripHtml } from 'string-strip-html';
import { pipe } from "fp-ts/lib/function";

import type { WP_Post } from "wordpress-types";

export type GetTitleOptions = {
    stripTags?: boolean,
};

export function getTitle(
    post: WP_Post,
    options: GetTitleOptions = {}
) {
    const allOptions = {
        stripTags: true,
       ...options
    } satisfies Required<GetTitleOptions>;
    const {
        stripTags,
    } = allOptions;
    const stripHtmlTags = (value: string) => {
        return stripHtml(value).result;
    };

    return pipe(
        post.title.rendered,
        stripTags ? stripHtmlTags : (value) => value,
    );
}