import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import pick from "lodash/pick";

import { EditorAnchor } from "@src/components/editor-anchor";

export const socialMediaForMenu = [
    "facebook",
    "instagram",
    "linkedin",
    "youtube",
    "twitter"
] as const;

export type SocialLinks = Partial<Record<typeof socialMediaForMenu[number], string>>;

export type SocialMenuProps = {
    isOnEditor?: boolean,
    socialLinks: SocialLinks
};

export function SocialMenu({
    isOnEditor,
    socialLinks: anySocialLinks
}: SocialMenuProps){
    const socialLinks = {
        facebook: anySocialLinks.facebook,
        twitter: anySocialLinks.twitter,
        youtube: anySocialLinks.youtube,
        linkedin: anySocialLinks.linkedin,
        instagram: anySocialLinks.instagram,
    } satisfies SocialLinks;
    const filteredSocialLinkEntries = Object.entries(socialLinks)
        .filter(([_, link]) => link) as [keyof SocialLinks, string][];

    const BrandIcon = (props: FontAwesomeIconProps) => {
        return (
        <FontAwesomeIcon
            height="20px"
            {...props}
        />
        );
    };

    const socialMediaIconsMap = new Map<keyof SocialLinks, JSX.Element>([
        ["facebook", <BrandIcon icon={faFacebookF} />],
        ["twitter", <BrandIcon icon={faTwitter} />],
        ["youtube", <BrandIcon icon={faYoutube} />],
        ["linkedin", <BrandIcon icon={faLinkedin} />],
        ["instagram", <BrandIcon icon={faInstagram} />],
    ]);

    const MenuAnchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        return isOnEditor ? <EditorAnchor {...props} /> : <a {...props}/>;
    };
    
    return (
    <nav>
        <ul className="min-list social-icons-list">
            {filteredSocialLinkEntries.map((entry) => {
                const [socialMedia, link] = entry;

                return (
                <li
                    key={socialMedia}
                >
                    <MenuAnchor 
                        href={link} 
                        className={`social-media-icon social-color-${socialMedia}`}
                    >
                        {socialMediaIconsMap.get(socialMedia)}
                    </MenuAnchor>
                </li>
                );
            })}
        </ul>
    </nav>
    );
}