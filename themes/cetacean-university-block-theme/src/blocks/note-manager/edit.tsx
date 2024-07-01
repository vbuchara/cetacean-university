import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons/faTrashCan";
import type { WP_Post } from "wordpress-types";

import { getContent } from "@utils/getContent";
import { getTitle } from "@utils/getTitle";

export type NoteManagerEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: NoteManagerEditComponentProps){
    const { attributes, setAttributes } = props;

    const userNotes = useSelect((select) => {
        const currentLoggedUser = select(coreStore).getCurrentUser();

        if(!currentLoggedUser.id) return null;
        
        return select(coreStore).getEntityRecords(
            "postType",
            "note",
            {
                context: "view",
                per_page: -1,
                status: "private",
                author: currentLoggedUser.id,
            } satisfies GetRecordsHttpQuery
        ) as WP_Post[] || null;
    }, []);

    return (
    <div className="container container--narrow page-section">
        <div className="create-note">
            <h2 className="headline headline--medium">
                Create New Note
            </h2>
            <input 
                className="new-note-title" 
                type="text" 
                placeholder="Title"
                name="note-title"
                readOnly
            />
            <textarea 
                className="new-note-body"
                placeholder="Content of your note here"
                readOnly
            />
            <button className="submit-note btn btn--primary btn--slide-from-top">
                Create Note
            </button>
            <span className="note-error-message"></span>
        </div>

        <ul
            id="my-notes-list" 
            className="min-list link-list"
        >
            {!userNotes || userNotes.length === 0 ? "" : userNotes.map(note => (
            <li 
                key={note.id}
                className="note-item" 
                data-note-id={note.id} 
            >
                <input 
                    className="note-title-field"
                    value={getTitle(note)} 
                    readOnly
                />
                <div className="note-actions">
                    <button className="btn btn--edit-note btn--slide-from-top">
                        <FontAwesomeIcon
                            icon={faPencil}
                            height="0.9rem"
                            width="0.9rem"
                        />
                        Edit
                    </button>
                    <button className="btn btn--delete-note btn--slide-from-top">
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            height="0.9rem"
                            width="0.9rem"
                        />
                        Delete
                    </button>
                </div>
                <textarea
                    className="note-body-field"
                    value={getContent(note)}
                    readOnly
                />
            </li>
            ))}
        </ul>
    </div>
    );
}