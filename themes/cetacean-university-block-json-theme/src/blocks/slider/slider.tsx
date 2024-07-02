import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons/faImages";
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

export type SliderAttributeType = {};

const block = (await import("./block.json")).default as BlockJson<SliderAttributeType>;

registerBlockType<SliderAttributeType>(block.name, {
    ...block,
    icon: () => <FontAwesomeIcon icon={faImages} />,
    edit: EditComponent,
    save: SaveComponent
});