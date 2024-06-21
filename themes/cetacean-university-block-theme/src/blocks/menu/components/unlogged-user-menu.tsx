import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { EditorAnchor } from "@components/editor-anchor";

export function UnloggedUserMenu(){
    return (
    <>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left push-right btn--slide-from-left"
            href={CetaceanUniversityMenuData.login_link}
        >
            Login
        </EditorAnchor>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left btn--slide-from-left"
            href={CetaceanUniversityMenuData.register_link}
        >
            Sign Up
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