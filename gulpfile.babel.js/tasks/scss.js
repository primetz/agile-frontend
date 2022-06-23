"use strict";

import gulp from "gulp";
import gulpIf from "gulp-if";
import rename from "gulp-rename";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import minCss from "gulp-clean-css";
import groupMedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourceMaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import debug from "gulp-debug";
import del from "del";

import { paths } from "../paths";
import { isProduction } from "../is-production";

const sass = gulpSass(nodeSass);

export function scss() {
    del.sync(paths.styles.public);

    return gulp.src(paths.styles.src)
        .pipe(
            gulpIf(
                !isProduction,
                sourceMaps.init({})
            )
        )
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(groupMedia())
        .pipe(
            gulpIf(
                isProduction,
                autoprefixer({
                    cascade: false,
                    grid: "autoplace"
                })
            )
        )
        .pipe(
            gulpIf(
                isProduction,
                minCss({
                    compatibility: "ie8", level: {
                        1: {
                            specialComments: 0,
                            removeEmpty: true,
                            removeWhitespace: true
                        },
                        2: {
                            mergeMedia: true,
                            removeEmpty: true,
                            removeDuplicateFontRules: true,
                            removeDuplicateMediaBlocks: true,
                            removeDuplicateRules: true,
                            removeUnusedAtRules: false
                        }
                    }
                })
            )
        )
        .pipe(
            gulpIf(
                isProduction,
                rename({
                    suffix: ".min"
                })
            )
        )
        .pipe(plumber.stop())
        .pipe(
            gulpIf(
                !isProduction,
                sourceMaps.write(
                    paths.sourceMaps,
                    {}
                )
            )
        )
        .pipe(gulp.dest(paths.styles.public))
        .pipe(
            debug({
                "title": "CSS files"
            })
        )
        .on("end", browserSync.reload);
}
