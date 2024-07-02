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
                    <MenuAnchor>
                        Blog
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor>
                        About Us
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor rel="privacy-policy">
                        Privacy Policy
                    </MenuAnchor>
                </li>
            </ul>
        </div>                      
    </nav>
    );
}