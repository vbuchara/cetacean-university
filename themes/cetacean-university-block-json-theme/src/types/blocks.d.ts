type BlockConfiguration<T extends Record<string, any> = {}> = import("@wordpress/blocks").BlockConfiguration<T>;

declare interface BlockJson<T extends Record<string, any> = {}> extends BlockConfiguration<T> {
    name: string;
}