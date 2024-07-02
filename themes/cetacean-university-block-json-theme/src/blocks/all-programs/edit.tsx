
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { WP_Post } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import { getTitle } from "@utils/getTitle";

export type AllProgramsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: AllProgramsEditComponentProps){
    const { attributes, setAttributes } = props;

    const programs = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                per_page: -1,
                orderby: "title",
                order: "asc",
            }
        ) as WP_Post[] | null;
    }, []);

    return (
    <EditorWrapper>
        <div className="container container--narrow page-section">
            <ul className="link-list min-list" >
                {(programs || []).map(program => {
                    return (
                    <li
                        key={program.id}
                    >
                        <EditorAnchor href={program.link}>
                            {getTitle(program)}
                        </EditorAnchor>
                    </li>
                    );
                })}
            </ul>
        </div>
    </EditorWrapper>
    );
}