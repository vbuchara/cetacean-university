type BlockConfiguration<T extends Record<string, any> = {}> = Omit<
    import("@wordpress/blocks").BlockConfiguration<T>,
    "editorScript"
>;

declare interface BlockJson<T extends Record<string, any> = {}> extends BlockConfiguration<T> {
    name: string;
}