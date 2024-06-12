const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const path = require("path");
const glob = require("glob");

const entries = glob.sync([
    "./src/blocks/**/frontend.tsx",
    "./src/blocks/**/index.ts"
], { 
    posix: true,
    dotRelative: true
}).reduce((entry, file) => {
    const folderName = path.basename(path.dirname(file));
    const fileName = path.basename(file)
        .replace(/\.tsx|.ts$/gm, "");
    const entryName = `${folderName}/${fileName}`;

    return {
        ...entry,
        [entryName]: file,
    };
}, {});

const dependencyExtractionPlugin = defaultConfig.plugins.find(
    (plugin) => plugin.constructor.name === 'DependencyExtractionWebpackPlugin'
);

module.exports = {
    ...defaultConfig,
    entry: entries,
    output: {
        ...defaultConfig.output,
        filename: "[name].js",
    },
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig?.alias,
            "@assets": path.resolve(__dirname, "assets/"),
            "@src": path.resolve(__dirname, "src/"),
            "@blocks": path.resolve(__dirname, "src/blocks/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@functions": path.resolve(__dirname, "src/functions/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
        }
    },
    stats: {
        ...defaultConfig.stats,
        loggingDebug: ["sass-loader"]
    },
    plugins: [
        ...defaultConfig.plugins.filter((plugin) => plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'),
		new DependencyExtractionWebpackPlugin({
			...dependencyExtractionPlugin.options,
            requestToExternal(request) {
                if(request === "@wordpress/react-i18n") return false;
            }
		})
    ]
}