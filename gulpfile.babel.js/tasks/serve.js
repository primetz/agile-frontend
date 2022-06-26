"use strict";

import { watch, series, parallel } from "gulp";
import browserSync from "browser-sync";

import { paths } from "../paths";
import { views } from "./views";
import { injectFavicon } from "./favicon";
import { scss } from "./scss";
import { sprite } from "./svg-sprite";
import { images } from "./images";

export function serve() {
    browserSync.init({
        server: paths.public,
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

    watch(
        paths.sprite.watch,
        parallel(sprite)
    );

    watch(
        paths.images.watch,
        parallel(images)
    );
}
