"use strict";

import { series, parallel } from "gulp";

import { views } from "./tasks/views";
import { favicon, injectFavicon } from "./tasks/favicon";
import { serve } from "./tasks/serve";
import { smartGrid } from "./tasks/smart-grid";
import { scss } from "./tasks/scss";

export const dev = series(
    smartGrid,
    parallel([
        views,
        scss,
        series(
            favicon,
            injectFavicon
        )
    ]),
    parallel(serve)
);

export const prod = parallel([
    views,
    scss,
    series(
        favicon,
        injectFavicon
    )
]);
