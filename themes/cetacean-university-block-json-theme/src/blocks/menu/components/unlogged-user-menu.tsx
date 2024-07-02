import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { EditorAnchor } from "@components/editor-anchor";

export function UnloggedUserMenu(){
    return (
    <>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left push-right btn--slide-from-left"
        >
            Login
        </EditorAnchor>
        <EditorAnchor
            className="btn btn--small btn--secondary float-left btn--slide-from-left"
        >
            Sign Up
        </EditorAnchor>
        <EditorAnchor 
            className="search-trigger js-search-trigger"
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