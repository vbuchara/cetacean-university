import Select, { GroupBase, Props } from "react-select";

export function EditorSelect<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>){
    return(
    <Select
        isSearchable={true}
        styles={{
            container: (base) => ({
                ...base,
                flex: 1
            }),
            input: (base) => ({
                ...base,
                "input:focus": {
                    boxShadow: "none"
                }
            })
        }}
        {...props}
    />
    );
}