"use strict";

import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import debug from "gulp-debug";
import browserSync from "browser-sync";

import { paths } from "../paths";

export function sprite() {
    return gulp.src(paths.sprite.src)
        .pipe(
            svgSprite({
                shape: {
                    transform: [{
                        svgo: {
                            plugins: [
                                { removeDoctype: true },
                                { removeViewBox: true },
                                {
                                    removeAttrs: {
                                        attrs: [
                                            "stroke",
                                            "fill",
                                            "style"
                                        ]
                                    }
                                },
                                { removeXMLNS: true },
                                { removeComments: true },
                                { removeEmptyAttrs: true },
                                { removeEmptyText: true },
                                { collapseGroups: true }
                            ]
                        }
                    }]
                },
                mode: {
                    symbol: {
                        sprite: "../sprite.svg",
                        prefix: ".icon-%s",
                        render: {
                            scss: {
                                dest: `${paths.sprite.scss}_sprite.scss`,
                                template: `${paths.sprite.template}_sprite-template.scss`
                            }
                        }
                    }
                }
            })
        )
        .pipe(gulp.dest(paths.sprite.public))
        .pipe(
            debug({
                "title": "SVG Sprite"
            })
        )
        .on("end", browserSync.reload);
}
