import { 
    PanelBody, 
    PanelRow, 
    TextControl, 
    ToggleControl
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

import type { FooterEditComponentProps } from "../edit";

export type FooterInspectorControlsProps = Pick<
    FooterEditComponentProps,
    "attributes" | "setAttributes"
>;

export function FooterInspectorControls({
    attributes,
    setAttributes
}: FooterInspectorControlsProps){
    const {
        links,
        siteAnchor,
        siteAnchorWithLink,
        phoneNumber
    } = attributes;

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Site Information"
            initialOpen={true}
        >
            <PanelRow>
                <ToggleControl
                    label="Site Title Redirect"
                    checked={siteAnchorWithLink}
                    onChange={(value) => setAttributes({ siteAnchorWithLink: value })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="site-phone-number"
                    label="Phone Number"
                    value={phoneNumber || ""}
                    onChange={(value) => setAttributes({ phoneNumber: value })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="site-phone-number-link"
                    label="Phone Number Link"
                    value={links.phoneNumber || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            phoneNumber: value
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
        <PanelBody
            title="Social Media"
            initialOpen={true}
        >
            <PanelRow>
                <TextControl
                    name="facebook-url"
                    label="Facebook"
                    value={links.facebook || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            facebook: value
                        }
                    })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="twitter-url"
                    label="Twitter"
                    value={links.twitter || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            twitter: value
                        }
                    })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="youtube-url"
                    label="Youtube"
                    value={links.youtube || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            youtube: value
                        }
                    })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="linkedin-url"
                    label="Linkedin"
                    value={links.linkedin || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            linkedin: value
                        }
                    })}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    name="instagram-url"
                    label="Instagram"
                    value={links.instagram || ""}
                    onChange={(value) => setAttributes({
                        links: {
                           ...links,
                            instagram: value
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}