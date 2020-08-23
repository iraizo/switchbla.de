const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
        purgecss({
            content: ["./pages/**/*.tsx"],
            defaultExtractor: content =>  content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
    ],
}
