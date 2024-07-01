declare module "@wordpress/core-data" {
    /**
     * HTTP Query parameters sent with the API request to fetch the entity records.
     */
    export type GetRecordsHttpQuery = {
        context?: "view" | "edit",
        per_page?: number;
        author?: number;
        status?: "publish" | "private";
        orderby?: string;
        order?: "asc" | "desc";
        meta_key?: string;
        meta_query_key?: string;
        meta_query_value?: string | number | boolean;
        meta_query_compare?: string;
        meta_query_type?: string;
        [x: `meta_query_key_${number}`]: string;
        [x: `meta_query_value_${number}`]: string;
        [x: `meta_query_compare_${number}`]: string;
        [x: `meta_query_type_${number}`]: string;
    };
}

export * from "@wordpress/core-data";