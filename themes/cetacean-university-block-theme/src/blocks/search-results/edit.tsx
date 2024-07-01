import { type BlockEditProps } from "@wordpress/blocks";
import { format } from "date-fns";

import { EditorAnchor } from "@components/editor-anchor";
import { Event } from "@components/event";
import defaultAvatarSrc from "@images/default-user-landscape.png";

export type SearchResultsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: SearchResultsEditComponentProps){
    const { attributes, setAttributes } = props;

    const dateNow = new Date();

    return (
    <div className="container container--narrow page-section">
        <div className="post-item">
            <h2 className="headline headline--medium headline--post-title">
                <EditorAnchor href="/">
                    {"{Campus Title}"}
                </EditorAnchor>
            </h2>
            <div className="generic-content">
                <p>{"{Campus Content}"}</p>
                <p>
                    <EditorAnchor 
                        className="btn btn--primary btn--slide-from-top" 
                        href="/"
                    >
                        View Campus &raquo;
                    </EditorAnchor>
                </p>
            </div>
        </div>
        <div className="post-item">
            <Event
                event={{
                    title: { rendered: "{Event Title}" },
                    content: { rendered: "{Event Content}", protected: false },
                    excerpt: { rendered: "{Event Content}", protected: false },
                    link: "/",
                    acf: { event_date: format(dateNow, "yyyy-MM-dd HH:mm:ss") }
                }}
                isOnEditor={true}
            />
        </div>
        <div className="post-item">
            <h2 className="headline headline--medium headline--post-title">
                <EditorAnchor href="/">
                    {"{Page Title}"}
                </EditorAnchor>
            </h2>
            <div className="generic-content">
                <p>{"{Page Excerpt}"}</p>
                <p>
                    <EditorAnchor  
                        className="btn btn--primary btn--slide-from-top" 
                        href="/"
                    >
                        Continue reading &raquo;
                    </EditorAnchor>
                </p>
            </div>
        </div>
        <div className="post-item">
            <h2 className="headline headline--medium headline--post-title">
                <EditorAnchor href="/">
                    {"{Post Title}"}
                </EditorAnchor>
            </h2>
            <div className="metabox">
                <p>
                    Posted by {"{Post Author}"}
                    on {"{Post Date}"}
                    in {"{Post Categories}"}
                </p>
            </div>
            <div className="generic-content">
                <p>{"{Post Excerpt}"}</p>
                <p>
                    <a 
                        className="btn btn--primary btn--slide-from-top" 
                        href="/"
                    >
                        Continue reading &raquo;
                    </a>
                </p>
            </div>
        </div>
        <div className="post-item">
            <div className="professor-card__list-item">
                <EditorAnchor
                    className="professor-card"
                    href="/"
                >
                    <img
                        className="professor-card__image"
                        src={defaultAvatarSrc}
                        alt="Image of Professor {Professor Title}"
                    />
                    <span className="professor-card__name">
                        {"{Professor Title}"}
                    </span>
                </EditorAnchor>
            </div>
        </div>
        <div className="post-item">
            <h2 className="headline headline--medium headline--post-title">
                <EditorAnchor href="/">
                    {"{Program Title}"}
                </EditorAnchor>
            </h2>
            <div className="generic-content">
                <p>{"{Program Excerpt}"}</p>
                <p>
                    <EditorAnchor 
                        className="btn btn--primary btn--slide-from-top" 
                        href="/"
                    >
                        View Program &raquo;
                    </EditorAnchor>
                </p>
            </div>
        </div>
    </div>
    );
}