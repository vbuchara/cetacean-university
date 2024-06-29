import Select, { type GroupBase, type Props } from "react-select";

export function EditorSelect<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
>({ styles, ...props }: Props<Option, IsMulti, Group>){
    return(
    <Select
        isSearchable={true}
        styles={{
            container: (base, props) => ({
                ...base,
                flex: 1,
                ...styles?.container?.(base, props)
            }),
            input: (base, props) => ({
                ...base,
                "input:focus": {
                    boxShadow: "none"
                },
                ...styles?.input?.(base, props)
            }),
            ...styles
        }}
        {...props}
    />
    );
}