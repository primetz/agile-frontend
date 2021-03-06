"use strict";

import gulp from "gulp";
import realFavicon from "gulp-real-favicon";
import { minify } from "html-minifier";
import fs from "node:fs";

import { paths } from "../paths";

export function favicon(done) {
    realFavicon.generateFavicon({
        masterPicture: paths.favicon.src,
        dest: paths.favicon.public,
        iconsPath: paths.favicon.iconsPath,
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#2d2d2d',
                margin: '14%',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser: {
                design: 'raw'
            },
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#2d2d2d',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                }
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#2d2d2d',
                manifest: {
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: false,
            usePathAsIs: false
        },
        markupFile: paths.favicon.dataFile
    }, function() {
        done();
    });
}

export function injectFavicon() {
    return gulp.src([paths.views.public + "*.html"])
        .pipe(
            realFavicon.injectFaviconMarkups(
                JSON.parse(
                    fs.readFileSync(paths.favicon.dataFile, "utf8")
                ).favicon.html_code
            )
        )
        .on('data', function(file) {
            return file.contents = Buffer.from(
                minify(
                    file.contents.toString(),
                    {
                        collapseWhitespace: true
                    }
                )
            )
        })
        .pipe(
            gulp.dest(paths.views.public)
        );
}
