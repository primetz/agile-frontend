"use strict";

import gulp from "gulp";
import gulpIf from "gulp-if";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browserSync from "browser-sync";

import { paths } from "../paths";
import { isProduction } from "../is-production";

export function images() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.public))
        .pipe(
            gulpIf(
                isProduction,
                imagemin([
                    imageminGiflossy({
                        optimizationLevel: 3,
                        optimize: 3,
                        lossy: 2
                    }),
                    imageminPngquant({
                        speed: 5,
                        quality: [0.6, 0.8]
                    }),
                    imageminZopfli({
                        more: true
                    }),
                    imageminMozjpeg({
                        progressive: true,
                        quality: 80
                    })
                ])
            )
        )
        .pipe(gulp.dest(paths.images.public))
        .pipe(
            debug({
                "title": "Images"
            })
        )
        .pipe(browserSync.stream());
}
