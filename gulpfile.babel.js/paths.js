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
    favicon: {
        src: "./src/img/favicon/favicon.svg",
        public: "./public/img/favicon/",
        iconsPath: "/img/favicon/",
        dataFile: "./src/img/favicon/faviconData.json"
    },
    serve: [
        "./public/"
    ]
};
