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