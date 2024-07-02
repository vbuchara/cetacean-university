import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { type HeaderAtributesType } from "./header";

export type HeaderSaveComponentProps = BlockSaveProps<HeaderAtributesType>;

export function SaveComponent(_: HeaderSaveComponentProps){    
    return (<InnerBlocks.Content />);
}