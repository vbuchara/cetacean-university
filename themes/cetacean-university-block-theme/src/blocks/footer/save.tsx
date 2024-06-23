import { BlockSaveProps } from "@wordpress/blocks";

import { type FooterAttributeType } from "./footer";

export type FooterSaveComponentProps = BlockSaveProps<FooterAttributeType>;

export function SaveComponent(_: FooterSaveComponentProps){
    return null;
}