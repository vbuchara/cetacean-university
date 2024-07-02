import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { EditorAnchor } from "@components/editor-anchor";

export function LoggedUserMenu(){
    return (
    <>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left push-right btn--slide-from-left"
            href={CetaceanUniversityMenuData.my_notes_link}
        >
            My Notes
        </EditorAnchor>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left btn--with-photo btn--slide-from-left"
            href={CetaceanUniversityMenuData.logout_link}
        >
            <span className="site-header__avatar">
                <img
                    src={CetaceanUniversityMenuData.avatar_url}
                    className="avatar avatar-60 photo"
                    width={60}
                    height={60}
                />
            </span>
            <span className="btn__text">
                Log Out
            </span>
        </EditorAnchor>
        <EditorAnchor
            className="search-trigger js-search-trigger"
            href={CetaceanUniversityMenuData.search_link}
        >
            <FontAwesomeIcon 
                icon={faMagnifyingGlass}
                width={"1.4rem"}
                height={"1.4rem"}
            />
        </EditorAnchor>
    </>
    );
}