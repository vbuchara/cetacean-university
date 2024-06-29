import {
    StoreDescriptor,  
    ReduxStoreConfig,
    CurriedSelectorsOf,
    DataRegistry,
    StoreInstance
} from "@wordpress/data/build-types/types";
declare module "@wordpress/block-editor"{
    
    /** Default properties associated with a link control value. */
    export type WPLinkControlDefaultValue = {
        url: string;
        title?: string | undefined;
        opensInNewTab?: boolean | undefined;
        type?: string | undefined;
    }

    /** Custom settings values associated with a link. */
    export type WPLinkControlSettingsValue = {
        [setting: string]: any;
    }

    /** Custom settings values associated with a link. */
    export type WPLinkControlSetting = {
        id: string;
        title: string;
    }

    export type WPLinkControlSuggestion = {
        id: number;
        type: string;
        title: string;
        url: string;
    };

    /** 
     * Properties associated with a link control value, composed as a union of the default properties and 
     * any custom settings values.
     */
    export type WPLinkControlValue = WPLinkControlDefaultValue & WPLinkControlSettingsValue;

    export type WPLinkControlOnChangeProp = (value: WPLinkControlValue) => void;

    export type WPLinkControlProps = {
        settings?: (WPLinkControlSetting[]) | undefined;
        forceIsEditingLink?: boolean | undefined;
        value?: WPLinkControlValue | undefined;
        onChange?: WPLinkControlOnChangeProp | undefined;
        noDirectEntry?: boolean | undefined;
        showSuggestions?: boolean | undefined;
        showInitialSuggestions?: boolean | undefined;
        withCreateSuggestion?: boolean | undefined;
        suggestionsQuery?: Record<string, any> | undefined;
        noURLSuggestion?: boolean | undefined;
        hasTextControl?: boolean | undefined;
        createSuggestionButtonText?: string | React.FunctionComponent | undefined;
        renderControlBottom?: React.FunctionComponent;
        createSuggestion?: (input: string) => (WPLinkControlSuggestion | Promise<WPLinkControlSuggestion>)
    }

    export const __experimentalLinkControl: {
        (props: WPLinkControlProps): JSX.Element;
        ViewerFill: unknown;
    };

    export namespace MediaUpload {
        export type MediaSelected = {
            id: number;
            title: string;
            filename: string;
            url: string;
            link: string;
            alt: string;
            author: string;
            description: string;
            caption: string;
            name: string;
            status: string;
            uploadedTo: number;
            date: Date;
            modified: Date;
            menuOrder: number;
            mime: string;
            type: string;
            subtype: string;
            icon: string;
            dateFormatted: string;
            editLink: string;
            meta: boolean;
            authorName: string;
            authorLink: string;
            uploadedToTitle: string;
            uploadedToLink: string;
            filesizeInBytes: number;
            filesizeHumanReadable: string;
            context: string;
            originalImageURL: string;
            originalImageName: string;
            height: number;
            width: number;
            orientation: string;
            sizes: MediaSizes;
            acf_errors: boolean;
        };
        
        export type MediaSizes = {
            thumbnail: MediaSizeInfo;
            medium: MediaSizeInfo;
            large: MediaSizeInfo;
            full: MediaSizeInfo;
        };
        
        export type MediaSizeInfo = {
            url: string;
            height: number;
            width: number;
            orientation: string;
        }
    }

    export type BlockEditorStoreSelectors = AppendStateToSelectors<typeof import("@wordpress/block-editor/store/selectors")>;

    export type BlockEditorStoreActions = typeof import("@wordpress/block-editor/store/actions");

    export interface BlockEditorStoreConfig extends ReduxStoreConfig<any, BlockEditorStoreActions, BlockEditorStoreSelectors>{
        reducer: any;
        dispatch: BlockEditorStoreActions;
        selectors: BlockEditorStoreSelectors;
        controls: any;
    }

    export interface BlockEditorStoreDescriptor {
        name: "core/block-editor";
        instantiate: ( registry: DataRegistry ) => StoreInstance<BlockEditorStoreConfig>;
    }

    type AppendStateToSelectors<
        T extends Record<PropertyKey, (...args: any) => any>
    > = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (state: any, ...args: Args) => Return
            : T[K];
    }

    type T1 = CurriedSelectorsOf<BlockEditorStoreDescriptor>;
}

export * from "@wordpress/block-editor";
