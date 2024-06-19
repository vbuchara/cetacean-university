declare module "@wordpress/block-editor"{

    /** Default properties associated with a link control value. */
    export type WPLinkControlDefaultValue = {
        url: string;
        title?: string | undefined;
        opensInNewTab?: boolean | undefined;
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
        suggestionsQuery?: any | undefined;
        noURLSuggestion?: boolean | undefined;
        hasTextControl?: boolean | undefined;
        createSuggestionButtonText?: string | Function | undefined;
        renderControlBottom: Function;
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
}

export * from "@wordpress/block-editor";
