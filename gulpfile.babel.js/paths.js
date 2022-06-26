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
    images: {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,gif,tiff}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ],
        public: "./public/img/",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,tiff}"
    },
    sprite: {
        src: "./src/img/svg/*.svg",
        scss: "../../../../src/scss/svg-template/import/",
        template: "./src/scss/svg-template/",
        public: "./public/img/sprite/",
        watch: "./src/img/svg/*.svg"
    },
    favicon: {
        src: "./src/img/favicon/favicon.svg",
        public: "./public/img/favicon/",
        iconsPath: "/img/favicon/",
        dataFile: "./src/img/favicon/faviconData.json"
    },
    sourceMaps: "./maps/",
    public: [
        "./public/"
    ]
};
