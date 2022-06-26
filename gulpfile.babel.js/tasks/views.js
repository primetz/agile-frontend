"use strict";

import { src, dest } from "gulp";
import pug from "gulp-pug";
import gulpIf from "gulp-if";
import replace from "gulp-replace";
import browserSync from "browser-sync";

import { paths } from "../paths";
import { isProduction } from "../is-production";

export function views() {
    return src(paths.views.src)
        .pipe(pug())
        .pipe(
            gulpIf(
                isProduction,
                replace(".css", ".min.css")
            )
        )
        .pipe(
            gulpIf(
                isProduction,
                replace(".js", ".min.js")
            )
        )
        .pipe(dest(paths.views.public))
        .pipe(browserSync.stream());
}
