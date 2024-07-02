
// Wordpress
declare module "@wordpress/block-editor"{
    import { Reserved } from "@wordpress/block-editor/components/use-block-props";
    import * as BlockEditorModule from "@wordpress/block-editor/index";

    export interface Merged {
        className: string;
        style: Record<string, string | number>;
        ref: React.RefCallback<unknown>;
    }
    
    export interface UseBlockProps {
        <Props extends Record<string, unknown>>(
            props?:
                & Props
                & {
                    [K in keyof Props]: K extends keyof Reserved ? never : Props[K];
                }
                & { ref?: React.Ref<unknown> },
        ): Omit<Props, "ref"> & Merged & Reserved & Record<string, unknown>;
    
        save: (props?: Record<string, unknown>) => Record<string, unknown>;
    }

    export * from "@wordpress/block-editor/index";
    export const useBlockProps: UseBlockProps;
}

declare module "@wordpress/editor" {
    import {
        StoreDescriptor,  
        ReduxStoreConfig,
    } from "@wordpress/data/build-types/types"

    type EditorStoreSelectors = AppendStateToSelectors<typeof import("@wordpress/editor/store/selectors")>;

    type EditorStoreActions = typeof import("@wordpress/editor/store/actions");

    interface EditorStoreConfig extends ReduxStoreConfig<any, EditorStoreActions, EditorStoreSelectors>{
        reducer: any;
        dispatch: EditorStoreActions;
        selectors: EditorStoreSelectors;
        controls: any;
    }

    interface EditorStoreDescriptor extends StoreDescriptor<EditorStoreConfig> {
        name: "core/editor";
    }

    type AppendStateToSelectors<
        T extends Record<PropertyKey, (...args: any) => any>
    > = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (state: any, ...args: Args) => Return
            : T[K];
    }
} 

// CSS
declare module '*.css' {}
declare module '*.scss' {}
declare module '*.sass' {}
declare module '*.less' {}
declare module '*.styl' {}
declare module '*.stylus' {}
declare module '*.pcss' {}
declare module '*.sss' {}

// Images
declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    const url: string;

    export { ReactComponent };
    export default url;
}

declare module '*.png' {
    const ReactComponent: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>>;
    const url: string;

    export { ReactComponent };
    export default url;
}