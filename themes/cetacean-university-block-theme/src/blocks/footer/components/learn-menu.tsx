import { EditorAnchor } from "@src/components/editor-anchor";

export type LearnMenuProps = {
    isOnEditor?: boolean
};

export function LearnMenu({
    isOnEditor
}: LearnMenuProps){
    
    const MenuAnchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        return isOnEditor ? <EditorAnchor {...props} /> : <a {...props}/>;
    };
    
    return (
    <nav className="nav-list">
        <div className="menu-learn-menu-container">
            <ul id="menu-learn-menu" className="menu">
                <li className="menu-item">
                    <MenuAnchor href={CetaceanUniversityFooterData.blog_link}>
                        Blog
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor href={CetaceanUniversityFooterData.about_us_link}>
                        About Us
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor rel="privacy-policy" href={CetaceanUniversityFooterData.privacy_policy_link}>
                        Privacy Policy
                    </MenuAnchor>
                </li>
            </ul>
        </div>                      
    </nav>
    );
}