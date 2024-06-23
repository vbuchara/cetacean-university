
import { registerBlockType } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type SlideAttributeType = {
    imageId: number;
    imageUrl: string;
};

registerBlockType<SlideAttributeType>(CetaceanUniversityBlocks.Slide, {
    title: "Slide",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: <FontAwesomeIcon icon={faImage} />,
    ancestor: [CetaceanUniversityBlocks.Slider],
    attributes: {
        imageId: {
            type: "number",
            default: 0
        },
        imageUrl: {
            type: "string",
            default: CetaceanUniversitySlideData.theme_path + "/images/boat.jpg"
        }
    },
    edit: EditComponent,
    save: SaveComponent
});