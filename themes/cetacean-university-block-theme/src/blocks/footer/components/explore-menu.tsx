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
                    <MenuAnchor href={CetaceanUniversityFooterData.program_archive_link}>
                        Programs
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor href={CetaceanUniversityFooterData.events_archive_link}>
                        Events
                    </MenuAnchor>
                </li>
                <li className="menu-item">
                    <MenuAnchor href={CetaceanUniversityFooterData.campus_archive_link}>
                        Campuses
                    </MenuAnchor>
                </li>
            </ul>
        </div>
    </nav>
    );
}