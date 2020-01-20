// @flow
/* eslint-disable spaced-comment */

/*
Note: this solution should be replaced by @adeira/monorepo-npm-publisher when migrating to monorepo
see https://www.npmjs.com/package/@adeira/monorepo-npm-publisher
 */

const babel = require("@babel/core");
const gulp = require("gulp");
const gulpBabel = require("gulp-babel");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");

const DESTINATION = "lib";

/*::

type Target = 'js' | 'flow' | 'js-esm';

type Presets = $ReadOnlyArray<{
  file: {
    request: string,
    ...
  },
  ...
}>;

 */

const babelConfig = babel.loadPartialConfig({ root: __dirname });

const getPresets = (presets /*: Presets */) =>
  presets.filter(preset => preset.file.request !== "@adeira/babel-preset-adeira");

const getExtension = (target /*: Target */) => {
  switch (target) {
    case "js":
      return ".js";
    case "flow":
      return ".js.flow";
    case "js-esm":
      return ".mjs";
    default:
      // flow type is defined in comment, so error is reported
      // eslint-disable-next-line flowtype/no-unused-expressions
      (target /*: empty */);
      throw new Error(`Unrecognized target: ${target}`);
  }
};

const buildFiles = (target /*: Target */) => () =>
  gulp
    .src("src/**/*.js", {
      base: "src",
      ignore: ["**/*.stories.js", "**/*.test.js", "**/*.storyshot.js"],
    })
    .pipe(plumber())
    .pipe(
      gulpBabel({
        ...babelConfig.options,
        presets: [
          ...getPresets(babelConfig.options.presets),
          ["@adeira/babel-preset-adeira", { target }],
        ],
      }),
    )
    .pipe(
      rename(file => ({
        ...file,
        extname: getExtension(target),
      })),
    )
    .pipe(gulp.dest(DESTINATION));

const build = gulp.parallel([buildFiles("js"), buildFiles("js-esm")]);

module.exports = {
  build,
};
