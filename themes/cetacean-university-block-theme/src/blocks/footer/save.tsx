import { BlockSaveProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import { type FooterAttributeType } from "./footer";
import { ExploreMenu } from "./components/explore-menu";
import { LearnMenu } from "./components/learn-menu";
import { SocialMenu, socialMediaForMenu } from "./components/social-menu";

export type FooterSaveComponentProps = BlockSaveProps<FooterAttributeType>;

export function SaveComponent({
    attributes
}: FooterSaveComponentProps){
    const {
        siteAnchor,
        siteAnchorWithLink,
        phoneNumber,
        links
    } = attributes;
    const hasSocialLinks = Object.entries(links).some((entry) => {
        const [key, value] = entry;
        const socialMediaSet = new Set<string>(socialMediaForMenu);

        return socialMediaSet.has(key) && value;
    });

    return (
    <footer className="site-footer">
        <div className="site-footer__inner container container--narrow">
            <div className="site-footer__main-info">
                <div className="site-footer__col-one">
                    <h1 className="school-logo-text school-logo-text--alt-color">
                        <RichText.Content
                            href={siteAnchorWithLink ? CetaceanUniversityFooterData.site_url : undefined}
                            tagName={"a"}
                            value={siteAnchor}
                        />
                    </h1>
                    {!phoneNumber ? "" : (
                    <p>
                        <a 
                            className="site-footer__link" 
                            href={links.phoneNumber}
                        >
                            {phoneNumber}
                        </a>
                    </p>
                    )}
                </div>
                <div className="site-footer__col-two-three-group">
                    <div className="site-footer__col-two">
                        <h3 className="headline headline--small">Explore</h3>
                        <ExploreMenu />
                    </div>
    
                    <div className="site-footer__col-three">
                        <h3 className="headline headline--small">Learn</h3>
                        <LearnMenu />
                    </div>
                </div>
                {!hasSocialLinks ? "" : (
                <div className="site-footer__col-four">
                    <h3 className="headline headline--small">Connect With Us</h3>
                    <SocialMenu socialLinks={links} />
                </div>
                )}
            </div>
            <div className="site-footer__copyright">
                <p>Copyright © 2001-2024 Cetacean University All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
}