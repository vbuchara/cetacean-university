import { type BlockEditProps } from "@wordpress/blocks";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";

import { MenuInspectorControls } from "./components/controls";
import { LoggedUserMenu } from "./components/logged-user-menu";
import { UnloggedUserMenu } from "./components/unlogged-user-menu";

import type { MenuAttributeType } from "./menu";
import { useState } from "react";

export type MenuEditComponentProps = BlockEditProps<MenuAttributeType>;

export function EditComponent({
    attributes,
    setAttributes
}: MenuEditComponentProps){
    const {} = attributes;
    const [showLoggedMenu, setShowLoggedMenu] = useState(true);

    return (
    <EditorWrapper>
        <MenuInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            showLoggedMenu={showLoggedMenu}
            setShowLoggedMenu={setShowLoggedMenu}
        />
        <div className="site-header__menu group">
            <nav className="main-navigation">
                <div className="menu-main-menu-container">
                    <ul id="menu-main-menu" className="menu">
                        <li className="menu-item">
                            <EditorAnchor>
                                Blog
                            </EditorAnchor>
                        </li>
                        <li className="menu-item">
                            <EditorAnchor >
                                Events
                            </EditorAnchor>
                        </li>
                        <li className="menu-item">
                            <EditorAnchor>
                                Programs
                            </EditorAnchor>
                        </li>
                        <li className="menu-item">
                            <EditorAnchor>
                                Campuses
                            </EditorAnchor>
                        </li>
                        <li className="menu-item">
                            <EditorAnchor>
                                About Us
                            </EditorAnchor>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="site-header__util">
                {showLoggedMenu ? (<LoggedUserMenu/>) : (<UnloggedUserMenu/>)}
            </div>
        </div>
    </EditorWrapper>
    );
}