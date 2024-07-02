import { type BlockEditProps } from "@wordpress/blocks";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { transparentize } from "polished";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";
import { WordpressColorsPresets } from "@classes/WordpressColorsPresets";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";

import { type HeaderAtributesType } from "./header";

export type HeaderEditComponentProps = BlockEditProps<HeaderAtributesType>;

export function EditComponent(props: HeaderEditComponentProps){
    const {
        attributes,
        setAttributes
    } = props;
    const {
        siteAnchor
    } = attributes;
    const backgroundColor = transparentize(0.3)(WordpressColorsPresets.getColorFromVar(
        WordpressColorsPresets.Primary
    ));

    const blockProps = useBlockProps();

    return (
    <EditorWrapper>
        <header 
            className="site-header site-header--editor"
            style={{ "--background-color": backgroundColor }}
        >
            <div className="site-header__container">
                <h1 className="school-logo-text">
                    <RichText
                        tagName={"a"}
                        allowedFormats={["core/bold", "core/italic"]}
                        value={siteAnchor}
                        onChange={(value) => setAttributes({ 
                            siteAnchor: value
                        })}
                    />
                </h1>
                <EditorAnchor
                    className="js-search-trigger site-header__search-trigger"
                >
                    <FontAwesomeIcon 
                        className="site-header__search-trigger-icon"
                        icon={faMagnifyingGlass}
                        width={"1.4rem"}
                        height={"1.4rem"}
                    />
                </EditorAnchor>
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
                <InnerBlocks
                    allowedBlocks={[CetaceanUniversityBlocks.Menu]}
                    template={[[CetaceanUniversityBlocks.Menu, {}]]}
                    templateLock="all"
                />
            </div>
        </header>
    </EditorWrapper>
    )
}