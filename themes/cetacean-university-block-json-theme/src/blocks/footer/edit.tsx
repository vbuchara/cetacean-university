import { type BlockEditProps } from "@wordpress/blocks";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import { EditorAnchor } from "@src/components/editor-anchor";

import { ExploreMenu } from "./components/explore-menu";
import { LearnMenu } from "./components/learn-menu";
import { SocialMenu, socialMediaForMenu } from "./components/social-menu";
import { FooterInspectorControls } from "./components/controls";

import type { FooterAttributeType } from "./footer";

export type FooterEditComponentProps = BlockEditProps<FooterAttributeType>;

export function EditComponent({
    attributes,
    setAttributes
}: FooterEditComponentProps){
    const {
        siteAnchor,
        phoneNumber,
        links
    } = attributes;
    const hasSocialLinks = Object.entries(links).some((entry) => {
        const [key, value] = entry;
        const socialMediaSet = new Set<string>(socialMediaForMenu);

        return socialMediaSet.has(key) && value;
    });

    const blockProps = useBlockProps();

    return (
    <div {...blockProps}>
        <FooterInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <footer className="site-footer">
            <div className="site-footer__inner container container--narrow">
                <div className="site-footer__main-info">
                    <div className="site-footer__col-one">
                        <h1 className="school-logo-text school-logo-text--alt-color">
                            <RichText
                                tagName={"a"}
                                allowedFormats={["core/bold", "core/italic"]}
                                value={siteAnchor}
                                onChange={(value) => setAttributes({ 
                                    siteAnchor: value
                                })}
                            />
                        </h1>
                        {!phoneNumber ? "" : (
                        <p>
                            <EditorAnchor 
                                className="site-footer__link" 
                                href={links.phoneNumber}
                            >
                                {phoneNumber}
                            </EditorAnchor>
                        </p>
                        )}
                    </div>
                    <div className="site-footer__col-two-three-group">
                        <div className="site-footer__col-two">
                            <h3 className="headline headline--small">Explore</h3>
                            <ExploreMenu isOnEditor={true} />
                        </div>
        
                        <div className="site-footer__col-three">
                            <h3 className="headline headline--small">Learn</h3>
                            <LearnMenu isOnEditor={true} />
                        </div>
                    </div>
                    {!hasSocialLinks ? "" : (
                    <div className="site-footer__col-four">
                        <h3 className="headline headline--small">Connect With Us</h3>
                        <SocialMenu socialLinks={links} isOnEditor={true} />
                    </div>
                    )}
                </div>
                <div className="site-footer__copyright">
                    <p>Copyright © 2001-2024 Cetacean University All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
    );
}