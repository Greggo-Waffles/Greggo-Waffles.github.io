const Image = require("@11ty/eleventy-img");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/code/ETimages");
    eleventyConfig.addPassthroughCopy("src/code/CompGraphImages");
    eleventyConfig.addPassthroughCopy("src/audio/AudioImages");
    eleventyConfig.addPassthroughCopy("src/visual/VisualImages");
    eleventyConfig.addPassthroughCopy("src/archive/MayaImages");
    eleventyConfig.addPassthroughCopy("src/archive/OldAudio");
    eleventyConfig.addPassthroughCopy("src/robot.txt");

    eleventyConfig.addShortcode("image", async function (src, alt) {
        const Image = (await import("@11ty/eleventy-img")).default;

        let metadata = await Image(src, {
            widths: [300, 600, 900],
            formats: ["webp", "jpeg"],
            outputDir: "_site/img",
            urlPath: "/img/"
        });

        let imageAttributes = {
            alt,
            sizes: "(min-width: 900px) 900px, 100vw",
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(metadata, imageAttributes);
    });

    return {
        dir: { input: 'src', output: '_site' }
    };
};