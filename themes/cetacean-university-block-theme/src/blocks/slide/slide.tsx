
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

registerBlockType<SlideAttributeType>(CetaceanUniversityBlocks.Slide, {
    title: "Slide",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: () => <FontAwesomeIcon icon={faImage} />,
    ancestor: [CetaceanUniversityBlocks.Slider],
    attributes: {
        imageId: {
            type: "number",
            default: 0
        },
        imageUrl: {
            type: "string",
        },
        imageDefault: {
            type: "string",
            default: "/images/boat.jpg",
        }  
    },
    edit: EditComponent,
    save: SaveComponent,
});