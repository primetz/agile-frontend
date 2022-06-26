"use strict";

import gulp from "gulp";
import gulpIf from "gulp-if";
import imageminWebp from "imagemin-webp";
import gulpWebp from "gulp-webp";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browserSync from "browser-sync";

import { paths } from "../paths";
import { isProduction } from "../is-production";

export function webp() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.public))
        .pipe(
            gulpWebp(
                gulpIf(
                    isProduction,
                    imageminWebp({
                        lossless: true,
                        quality: 100,
                        alphaQuality: 100
                    })
                )
            )
        )
        .pipe(gulp.dest(paths.images.public))
        .pipe(
            debug({
                "title": "Webp"
            })
        )
        .on("end", browserSync.reload);
}
