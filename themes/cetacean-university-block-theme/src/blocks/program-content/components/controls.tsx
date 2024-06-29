import Select, { type SingleValue } from 'react-select';
import { 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
} from "@wordpress/components";
import { 
    useSelect 
} from "@wordpress/data";
import { 
    store as coreStore 
} from "@wordpress/core-data";
import type { ProgramPost } from "wordpress-types";

import { EditorSelect } from '@src/components/editor-select';
import { getTitle } from "@utils/getTitle";

import type { ProgramContentInfo } from "../program-content";

export type ProgramContentInspectorControlsProps = {
    programInfoPreview: ProgramContentInfo | undefined;
    setProgramInfoPreview: React.Dispatch<React.SetStateAction<ProgramContentInfo | undefined>>;
};

export interface ProgramSelectOption extends ProgramContentInfo{
    value: number;
    label: string;
};

export function ProgramContentInspectorControls({
    programInfoPreview,
    setProgramInfoPreview
}: ProgramContentInspectorControlsProps){
    const programs = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                per_page: -1,
            }
        ) as ProgramPost[] | null;
    }, []);
    const programOptions = programs?.map<ProgramSelectOption>(program => ({ 
        label: getTitle(program),
        value: program.id,
        id: program.id,
        title: getTitle(program),
        content: program.content.rendered,
        relatedCampusesIds: program.acf.related_campus,
    }));

    function onProgramSelected(program: SingleValue<ProgramContentInfo>){
        setProgramInfoPreview(program ? program : undefined);
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Program Preview"
            initialOpen={true}
        >
            <PanelRow>
                <EditorSelect
                    name="program"
                    isLoading={!programs}
                    value={programInfoPreview}
                    onChange={onProgramSelected}
                    options={programOptions}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}