/* eslint-disable no-console */
import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";

const borderRadiusTransformations = [
  { from: /rounded(-[a-z]+)?-small/, to: "rounded$1-50" },
  { from: /rounded(-[a-z]+)?-normal/, to: "rounded$1-100" },
  { from: /rounded(-[a-z]+)?-large/, to: "rounded$1-150" },
  { from: /rounded(-[a-z]+)?-circle/, to: "rounded$1-full" },
  { from: "borderRadiusSmall", to: "borderRadius50" },
  { from: "borderRadiusNormal", to: "borderRadius100" },
  { from: "borderRadiusLarge", to: "borderRadius150" },
  { from: "borderRadiusCircle", to: "borderRadiusFull" },
];

const headingTransformations = [
  { from: "fontSizeHeadingDisplay", to: "headingDisplayFontSize" },
  { from: "fontSizeHeadingDisplaySubtitle", to: "headingDisplaySubtitleFontSize" },
  { from: "fontSizeHeadingTitle1", to: "headingTitle0FontSize" },
  { from: "fontSizeHeadingTitle2", to: "headingTitle2FontSize" },
  { from: "fontSizeHeadingTitle3", to: "headingTitle3FontSize" },
  { from: "fontSizeHeadingTitle4", to: "headingTitle4FontSize" },
  { from: "fontSizeHeadingTitle5", to: "headingTitle5FontSize" },
  { from: "fontSizeHeadingTitle6", to: "headingTitle6FontSize" },
  { from: "lineHeightHeadingDisplay", to: "headingDisplayLineHeight" },
  { from: "lineHeightHeadingDisplaySubtitle", to: "headingDisplaySubtitleLineHeight" },
  { from: "lineHeightHeadingTitle1", to: "headingTitle0LineHeight" },
  { from: "lineHeightHeadingTitle2", to: "headingTitle2LineHeight" },
  { from: "lineHeightHeadingTitle3", to: "headingTitle3LineHeight" },
  { from: "lineHeightHeadingTitle4", to: "headingTitle4LineHeight" },
  { from: "lineHeightHeadingTitle5", to: "headingTitle5LineHeight" },
  { from: "lineHeightHeadingTitle6", to: "headingTitle6LineHeight" },
  { from: "fontWeightHeadingDisplay", to: "headingDisplayFontWeight" },
  { from: "fontWeightHeadingDisplaySubtitle", to: "headingDisplaySubtitleFontWeight" },
  { from: "fontWeightHeadingTitle1", to: "headingTitle0FontWeight" },
  { from: "fontWeightHeadingTitle2", to: "headingTitle2FontWeight" },
  { from: "fontWeightHeadingTitle3", to: "headingTitle3FontWeight" },
  { from: "fontWeightHeadingTitle4", to: "headingTitle4FontWeight" },
  { from: "fontWeightHeadingTitle5", to: "headingTitle5FontWeight" },
  { from: "fontWeightHeadingTitle6", to: "headingTitle6FontWeight" },
  { from: 'type="title1"', to: 'type="title0"' },
  { from: "leading-heading-title1", to: "leading-heading-title0" },
  { from: "text-heading-title1", to: "text-heading-title0" },
  { from: "font-heading-title1", to: "font-heading-title0" },
];

const transformations = [...borderRadiusTransformations, ...headingTransformations];

const ignoredFiles = [
  "/orbit-components/src/Heading/*",
  "/orbit-components/src/Box/*",
  "/orbit-tailwind-preset/src/__fixtures__/BorderRadius.tsx",
];

async function replaceInFile(filePath) {
  try {
    let data = await readFile(filePath, "utf8");
    let modified = false;

    transformations.forEach(({ from, to }) => {
      const regex = new RegExp(from, "g");
      const newData = data.replace(regex, to);
      if (newData !== data) {
        data = newData;
        modified = true;
      }
    });

    if (modified) {
      await writeFile(filePath, data, "utf8");
      console.log(`Processed: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

async function walkDir(dir) {
  try {
    const files = await readdir(dir);

    files.forEach(async file => {
      const filePath = join(dir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await walkDir(filePath);
      } else if (
        stats.isFile() &&
        /\.(js|jsx|ts|tsx)$/.test(file) &&
        !ignoredFiles.some(ignoredFile => filePath.match(ignoredFile))
      ) {
        await replaceInFile(filePath);
      }
    });
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Start the process from the current directory
walkDir(process.cwd()).catch(err => {
  console.error("An error occurred:", err);
});
