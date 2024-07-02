import { EditorAnchor } from "@src/components/editor-anchor";

export type ExploreMenuProps = {
    isOnEditor?: boolean
};

export function ExploreMenu({
    isOnEditor
}: ExploreMenuProps){
    const MenuAnchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        return isOnEditor ? <EditorAnchor {...props} /> : <a {...props}/>;
    };

    return (
    <nav className="nav-list footer-menu-1">
        <div className="menu-explore-menu-container">
            <ul id="menu-explore-menu" className="menu">
                <li className="menu-item">
                    <MenuAnchor>
                        Programs
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor>
                        Events
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor>
                        Campuses
                    </MenuAnchor>
                </li>
            </ul>
        </div>
    </nav>
    );
}