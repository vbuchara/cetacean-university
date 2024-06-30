import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons/faImages";
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

export type SliderAttributeType = {};

registerBlockType<SliderAttributeType>(CetaceanUniversityBlocks.Slider, {
    title: "Slider",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: () => <FontAwesomeIcon icon={faImages} />,
    attributes: {},
    edit: EditComponent,
    save: SaveComponent
});