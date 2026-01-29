module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    return {
        templateFormats: ["html", "gif", "jpg", "css"],  
// This sets the default formats
        dir: {
            input: ".",
            output: "_site"
        }
    };
};