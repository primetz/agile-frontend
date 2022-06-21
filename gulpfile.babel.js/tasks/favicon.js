"use strict";

import gulp from "gulp";
import del from "del";
import realFavicon from "gulp-real-favicon";
import fs from "node:fs";

import { paths } from "../paths";

export function favicon(done) {
    del.sync([
        paths.favicon.public + "*",
        paths.favicon.dataFile
    ]);

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
    // console.log(JSON.parse(fs.readFileSync(paths.favicon.dataFile).version));
    return gulp.src([paths.views.public + "*.html"])
        .pipe(
            realFavicon.injectFaviconMarkups(
                JSON.parse(
                    fs.readFileSync(paths.favicon.dataFile)
                ).favicon.html_code
            )
        )
        .pipe(
            gulp.dest(paths.views.public)
        );
}
