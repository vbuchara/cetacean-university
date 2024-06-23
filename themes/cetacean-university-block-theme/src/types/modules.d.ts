
// Wordpress Data
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