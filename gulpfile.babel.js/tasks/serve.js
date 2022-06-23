"use strict";

import { watch, series, parallel } from "gulp";
import browserSync from "browser-sync";

import { paths } from "../paths";
import { views } from "./views";
import { injectFavicon } from "./favicon";
import { scss } from "./scss";

export function serve() {
    browserSync.init({
        server: paths.serve,
        notify: false,
        open: false
    });

    watch(
        paths.views.watch,
        series(
            parallel(views),
            injectFavicon
        )
    );

    watch(
        paths.styles.watch,
        parallel(scss)
    );
}
