"use strict";

import { series, parallel } from "gulp";

import { clean } from "./tasks/clean";
import { views } from "./tasks/views";
import { favicon, injectFavicon } from "./tasks/favicon";
import { serve } from "./tasks/serve";
import { smartGrid } from "./tasks/smart-grid";
import { scss } from "./tasks/scss";
import { sprite } from "./tasks/svg-sprite";
import { images } from "./tasks/images";

export const dev = series(
    clean,
    smartGrid,
    parallel([
        views,
        scss,
        sprite,
        images,
        series(
            favicon,
            injectFavicon
        )
    ]),
    parallel(serve)
);

export const prod = series(
    clean,
    parallel([
        views,
        scss,
        sprite,
        images,
        series(
            favicon,
            injectFavicon
        )
    ])
);

export { views, scss, sprite, images, favicon };
