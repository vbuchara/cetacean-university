import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { type HeaderAtributesType } from "./header";

export type HeaderSaveComponentProps = BlockSaveProps<HeaderAtributesType>;

export function SaveComponent({
    attributes
}: HeaderSaveComponentProps){
    const {
        siteAnchor
    } = attributes;
    
    return (
    <header 
        className="site-header"
    >
        <div className="site-header__container">
            <h1 className="school-logo-text">
                <RichText.Content
                    href={siteAnchor.href}
                    tagName={"a"}
                    value={siteAnchor.text}
                />
            </h1>
            <a 
                href={CetaceanUniversityHeaderData.search_link}
                className="js-search-trigger site-header__search-trigger"
            >
                <FontAwesomeIcon 
                    className="site-header__search-trigger-icon"
                    icon={faMagnifyingGlass}
                    width={"1.4rem"}
                    height={"1.4rem"}
                />
            </a>
            <button
               className="site-header__menu-trigger site-header__menu-trigger--closed" 
            >
                <FontAwesomeIcon
                    className="site-header__menu-trigger-open-icon"
                    icon={faBars}
                    width={"1.4rem"}
                    height={"1.4rem"}
                />
                <FontAwesomeIcon 
                    className="site-header__menu-trigger-close-icon"
                    icon={faXmark}
                    width={"1.4rem"}
                    height={"1.4rem"}
                />
            </button>
            <InnerBlocks.Content />
        </div>
    </header>
    );
}