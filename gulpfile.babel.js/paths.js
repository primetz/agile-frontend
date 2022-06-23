"use strict";

export const paths = {
    views: {
        src: [
            "./src/views/index.pug",
            "./src/views/pages/*.pug"
        ],
        public: "./public/",
        watch: [
            "./src/blocks/**/*.pug",
            "./src/views/**/*.pug"
        ]
    },
    styles: {
        src: "./src/scss/main.{scss,sass}",
        vendor: "./src/scss/vendor/import",
        public: "./public/css/",
        watch: [
            "./src/blocks/**/*.{scss,sass}",
            "./src/scss/**/*.{scss,sass}"
        ]
    },
    favicon: {
        src: "./src/img/favicon/favicon.svg",
        public: "./public/img/favicon/",
        iconsPath: "/img/favicon/",
        dataFile: "./src/img/favicon/faviconData.json"
    },
    sourceMaps: "./maps/",
    serve: [
        "./public/"
    ]
};
