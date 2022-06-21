"use strict";

import { series, parallel } from "gulp";

import { views } from "./tasks/views";
import { favicon, injectFavicon } from "./tasks/favicon";
import { serve } from "./tasks/serve";

export const dev = series(
    parallel([
        views,
        series(
            favicon,
            injectFavicon
        )
    ]),
    parallel(serve)
);

export const prod = parallel([
    views,
    series(
        favicon,
        injectFavicon
    )
]);
