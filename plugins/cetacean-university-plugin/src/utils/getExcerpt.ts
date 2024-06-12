import { pipe } from "fp-ts/lib/function";

import { truncateWords } from "@src/functions/truncateWords";

import type { WP_Post } from "wordpress-types";
import { stripHtml } from "string-strip-html";

export type GetExcerptOptions = {
    stripTags?: boolean,
    trimWords?: number
};

export function getExcerpt(
    post: WP_Post,
    options: GetExcerptOptions = {}
) {
    const allOptions = {
        stripTags: true,
        trimWords: 30,
       ...options
    } satisfies Required<GetExcerptOptions>;
    const {
        stripTags,
        trimWords
    } = allOptions;

    const excerpt = (post.excerpt && post.excerpt.rendered)
        ? post.excerpt.rendered
        : post.content.rendered;
    const stripHtmlTags = (value: string) => {
        return stripHtml(value).result;
    };

    return pipe(
        excerpt,
        stripTags ? stripHtmlTags : (text) => text,
        (text) => truncateWords(text, trimWords, "...")
    );
}