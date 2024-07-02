
import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type SlideAttributeType = {
    imageId: number;
    imageUrl?: string;
    imageDefault: string;
};

const block = (await import("./block.json")).default as BlockJson<SlideAttributeType>;

registerBlockType<SlideAttributeType>(block.name, {
    ...block,
    icon: () => <FontAwesomeIcon icon={faImage} />,
    ancestor: [CetaceanUniversityBlocks.Slider],
    edit: EditComponent,
    save: SaveComponent,
});