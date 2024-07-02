import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type BannerAttributesType = {
    bannerImageId: number,
    bannerImageUrl?: string
};

const block = (await import("./block.json")).default as BlockJson<BannerAttributesType>;

registerBlockType<BannerAttributesType>(block.name, {
    ...block,
    icon: "cover-image",
    edit: EditComponent,
    save: SaveComponent
});