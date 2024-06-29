

/** @type {import("@babel/core").ConfigFunction} */module.exports = function(api){
    api.cache(process.env.BABEL_CACHE_DIRECTORY || true);

    return {
        presets: [require.resolve('@wordpress/babel-preset-default')],
        plugins: ["@emotion"]
    }
}