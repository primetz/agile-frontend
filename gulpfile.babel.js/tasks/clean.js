"use strict";

import del from "del";

import { paths } from "../paths";

export function clean() {
    return del([
        `${paths.public}*`,
        paths.favicon.dataFile
    ]);
}
