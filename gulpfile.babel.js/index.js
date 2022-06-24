"use strict";

import { series, parallel } from "gulp";

import { clean } from "./tasks/clean";
import { views } from "./tasks/views";
import { favicon, injectFavicon } from "./tasks/favicon";
import { serve } from "./tasks/serve";
import { smartGrid } from "./tasks/smart-grid";
import { scss } from "./tasks/scss";
import { sprite } from "./tasks/svg-sprite";

export const dev = series(
    clean,
    smartGrid,
    parallel([
        views,
        scss,
        sprite,
        series(
            favicon,
            injectFavicon
        )
    ]),
    parallel(serve)
);

export const prod = parallel([
    clean,
    views,
    scss,
    sprite,
    series(
        favicon,
        injectFavicon
    )
]);
