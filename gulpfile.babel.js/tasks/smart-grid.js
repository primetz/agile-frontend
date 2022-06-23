"use strict";

import smartgrid from "smart-grid";

import { paths } from "../paths";

export function smartGrid(cb) {
    smartgrid(paths.styles.vendor, {
        outputStyle: "scss", /* less || scss || sass || styl */
        filename: "_smart-grid",
        columns: 12, /* number of grid columns */
        offset: "30px", /* gutter width px || % || rem */
        mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
        container: {
            maxWidth: "1140px", /* max-width оn very large screen */
            fields: "30px" /* side fields */
        },
        breakPoints: {
            xl: {
                width: "1399.98px"
            },
            lg: {
                width: "1199.98px" /* -> @media (max-width: 1100px) */
            },
            md: {
                width: "991.98px"
            },
            sm: {
                width: "767.98px"
            },
            xs: {
                width: "575.98px"
            }
            /*
            We can create any quantity of break points.

            some_name: {
                width: "Npx",
                fields: "N(px|%|rem)",
                offset: "N(px|%|rem)"
            }
            */
        }
    });
    cb();
}
