#!/usr/bin/env node
/* eslint-disable no-console */
import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";

const borderRadiusTransformations = [
  // tailwind classes
  { from: /rounded(-[a-z]+)?-small/, to: "rounded$1-50" },
  { from: /rounded(-[a-z]+)?-normal/, to: "rounded$1-100" },
  { from: /rounded(-[a-z]+)?-large/, to: "rounded$1-150" },
  { from: /rounded(-[a-z]+)?-circle/, to: "rounded$1-full" },
  // tokens
  { from: "borderRadiusSmall", to: "borderRadius50" },
  { from: "borderRadiusNormal", to: "borderRadius100" },
  { from: "borderRadiusLarge", to: "borderRadius150" },
  { from: "borderRadiusCircle", to: "borderRadiusFull" },
  // borderRadius prop
  { from: 'borderRadius="small"', to: 'borderRadius="50"' },
  { from: 'borderRadius="normal"', to: 'borderRadius="100"' },
  { from: 'borderRadius="large"', to: 'borderRadius="150"' },
  { from: 'borderRadius="circle"', to: 'borderRadius="full"' },
];

const headingTransformations = [
  // fontSize tokens
  { from: "fontSizeHeadingDisplay", to: "headingDisplayFontSize" },
  { from: "fontSizeHeadingDisplaySubtitle", to: "headingDisplaySubtitleFontSize" },
  { from: "fontSizeHeadingTitle1", to: "headingTitle0FontSize" },
  { from: "fontSizeHeadingTitle2", to: "headingTitle2FontSize" },
  { from: "fontSizeHeadingTitle3", to: "headingTitle3FontSize" },
  { from: "fontSizeHeadingTitle4", to: "headingTitle4FontSize" },
  { from: "fontSizeHeadingTitle5", to: "headingTitle5FontSize" },
  { from: "fontSizeHeadingTitle6", to: "headingTitle6FontSize" },
  // lineHeight tokens
  { from: "lineHeightHeadingDisplay", to: "headingDisplayLineHeight" },
  { from: "lineHeightHeadingDisplaySubtitle", to: "headingDisplaySubtitleLineHeight" },
  { from: "lineHeightHeadingTitle1", to: "headingTitle0LineHeight" },
  { from: "lineHeightHeadingTitle2", to: "headingTitle2LineHeight" },
  { from: "lineHeightHeadingTitle3", to: "headingTitle3LineHeight" },
  { from: "lineHeightHeadingTitle4", to: "headingTitle4LineHeight" },
  { from: "lineHeightHeadingTitle5", to: "headingTitle5LineHeight" },
  { from: "lineHeightHeadingTitle6", to: "headingTitle6LineHeight" },
  // fontWeight tokens
  { from: "fontWeightHeadingDisplay", to: "headingDisplayFontWeight" },
  { from: "fontWeightHeadingDisplaySubtitle", to: "headingDisplaySubtitleFontWeight" },
  { from: "fontWeightHeadingTitle1", to: "headingTitle0FontWeight" },
  { from: "fontWeightHeadingTitle2", to: "headingTitle2FontWeight" },
  { from: "fontWeightHeadingTitle3", to: "headingTitle3FontWeight" },
  { from: "fontWeightHeadingTitle4", to: "headingTitle4FontWeight" },
  { from: "fontWeightHeadingTitle5", to: "headingTitle5FontWeight" },
  { from: "fontWeightHeadingTitle6", to: "headingTitle6FontWeight" },
  // keep type and tailwind classes to avoid visual breaking changes
  { from: 'type="title1"', to: 'type="title0"' },
  { from: "leading-heading-title1", to: "leading-heading-title0" },
  { from: "text-heading-title1", to: "text-heading-title0" },
  { from: "font-heading-title1", to: "font-heading-title0" },
];

const elevationTransformations = [
  // old deprecated tokens
  { from: "boxShadowAction", to: "elevationActionBoxShadow" },
  { from: "boxShadowActionActive", to: "elevationActionActiveBoxShadow" },
  { from: "boxShadowFixed", to: "elevationFixedBoxShadow" },
  { from: "boxShadowFixedReverse", to: "elevationFixedReverseBoxShadow" },
  { from: "boxShadowOverlay", to: "elevationOverlayBoxShadow" },
  { from: "boxShadowRaised", to: "elevationRaisedBoxShadow" },
  { from: "boxShadowRaisedReverse", to: "elevationRaisedReverseBoxShadow" },
  // new tokens
  { from: "elevationActionBoxShadow", to: "elevationLevel1BoxShadow" },
  { from: "elevationActionActiveBoxShadow", to: "elevationLevel2BoxShadow" },
  { from: "elevationRaisedBoxShadow", to: "elevationLevel3BoxShadow" },
  { from: "elevationRaisedReverseBoxShadow", to: "elevationLevel3ReverseBoxShadow" },
  { from: "elevationOverlayBoxShadow", to: "elevationLevel4BoxShadow" },
  { from: "shadow-action-active", to: "shadow-level2" },
  { from: "shadow-action", to: "shadow-level1" },
  { from: "shadow-raised-reverse", to: "shadow-level3-reverse" },
  { from: "shadow-raised", to: "shadow-level3" },
  { from: "shadow-overlay", to: "shadow-level4" },
];

const spacingTransformations = [
  // tailwind space classes
  { from: /space(-[x|y])?-xxxs/, to: "space$1-50" },
  { from: /space(-[x|y])?-xxs/, to: "space$1-100" },
  { from: /space(-[x|y])?-xs/, to: "space$1-200" },
  { from: /space(-[x|y])?-sm/, to: "space$1-300" },
  { from: /space(-[x|y])?-md/, to: "space$1-400" },
  { from: /space(-[x|y])?-lg/, to: "space$1-600" },
  { from: /space(-[x|y])?-xl/, to: "space$1-800" },
  { from: /space(-[x|y])?-xxl/, to: "space$1-1000" },
  { from: /space(-[x|y])?-xxxl/, to: "space$1-[52px]" },
  // tailwind spacing, inset and translate classes
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xxxs/, to: "$1$2-50" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xxs/, to: "$1$2-100" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xs/, to: "$1$2-200" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-sm/, to: "$1$2-300" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-md/, to: "$1$2-400" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-lg/, to: "$1$2-600" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xl/, to: "$1$2-800" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xxl/, to: "$1$2-1000" },
  { from: /(p|m)([s|e|t|b|l|r|x|y])?-xxxl/, to: "$1$2-[52px]" },
  { from: /(inset|gap|translate)(-[x|y])?-xxxs/, to: "$1$2-50" },
  { from: /(inset|gap|translate)(-[x|y])?-xxs/, to: "$1$2-100" },
  { from: /(inset|gap|translate)(-[x|y])?-xs/, to: "$1$2-200" },
  { from: /(inset|gap|translate)(-[x|y])?-sm/, to: "$1$2-300" },
  { from: /(inset|gap|translate)(-[x|y])?-md/, to: "$1$2-400" },
  { from: /(inset|gap|translate)(-[x|y])?-lg/, to: "$1$2-600" },
  { from: /(inset|gap|translate)(-[x|y])?-xl/, to: "$1$2-800" },
  { from: /(inset|gap|translate)(-[x|y])?-xxl/, to: "$1$2-1000" },
  { from: /(inset|gap|translate)(-[x|y])?-xxxl/, to: "$1$2-[52px]" },
  { from: /(top|bottom|left|right|start|end])-xxxs/, to: "$1-50" },
  { from: /(top|bottom|left|right|start|end)-xxs/, to: "$1-100" },
  { from: /(top|bottom|left|right|start|end)-xs/, to: "$1-200" },
  { from: /(top|bottom|left|right|start|end)-sm/, to: "$1-300" },
  { from: /(top|bottom|left|right|start|end)-md/, to: "$1-400" },
  { from: /(top|bottom|left|right|start|end)-lg/, to: "$1-600" },
  { from: /(top|bottom|left|right|start|end)-xl/, to: "$1-800" },
  { from: /(top|bottom|left|right|start|end)-xxl/, to: "$1-1000" },
  { from: /(top|bottom|left|right|start|end)-xxxl/, to: "$1-[52px]" },
  // tailwind size classes
  { from: /(size|w|h)-xxxs/, to: "$1-50" },
  { from: /(size|w|h)-xxs/, to: "$1-100" },
  { from: /(size|w|h)-xs/, to: "$1-200" },
  { from: /(size|w|h)-sm/, to: "$1-300" },
  { from: /(size|w|h)-md/, to: "$1-400" },
  { from: /(size|w|h)-lg/, to: "$1-600" },
  { from: /(size|w|h)-xl/, to: "$1-800" },
  { from: /(size|w|h)-xxl/, to: "$1-1000" },
  { from: /(size|w|h)-xxxl/, to: "$1-[52px]" },
  // tailwind theme access
  { from: /theme\(spacing.xxxs\)/, to: "theme(spacing.50)" },
  { from: /theme\(spacing.xxs\)/, to: "theme(spacing.100)" },
  { from: /theme\(spacing.xs\)/, to: "theme(spacing.200)" },
  { from: /theme\(spacing.sm\)/, to: "theme(spacing.300)" },
  { from: /theme\(spacing.md\)/, to: "theme(spacing.400)" },
  { from: /theme\(spacing.lg\)/, to: "theme(spacing.600)" },
  { from: /theme\(spacing.xl\)/, to: "theme(spacing.800)" },
  { from: /theme\(spacing.xxl\)/, to: "theme(spacing.1000)" },
  { from: /theme\(spacing.xxxl\)/, to: "52px" },
  // space tokens
  { from: "theme.orbit.spaceXXXSmall", to: "theme.orbit.space50" },
  { from: "theme.orbit.spaceXXSmall", to: "theme.orbit.space100" },
  { from: "theme.orbit.spaceXSmall", to: "theme.orbit.space200" },
  { from: "theme.orbit.spaceSmall", to: "theme.orbit.space300" },
  { from: "theme.orbit.spaceMedium", to: "theme.orbit.space400" },
  { from: "theme.orbit.spaceLarge", to: "theme.orbit.space600" },
  { from: "theme.orbit.spaceXLarge", to: "theme.orbit.space800" },
  { from: "theme.orbit.spaceXXLarge", to: "theme.orbit.space1000" },
  { from: "theme.orbit.spaceXXXLarge", to: "52px" },
  { from: "defaultTokens.spaceXXXSmall", to: "defaultTokens.space50" },
  { from: "defaultTokens.spaceXXSmall", to: "defaultTokens.space100" },
  { from: "defaultTokens.spaceXSmall", to: "defaultTokens.space200" },
  { from: "defaultTokens.spaceSmall", to: "defaultTokens.space300" },
  { from: "defaultTokens.spaceMedium", to: "defaultTokens.space400" },
  { from: "defaultTokens.spaceLarge", to: "defaultTokens.space600" },
  { from: "defaultTokens.spaceXLarge", to: "defaultTokens.space800" },
  { from: "defaultTokens.spaceXXLarge", to: "defaultTokens.space1000" },
  { from: "defaultTokens.spaceXXXLarge", to: "52px" },
  // padding / margin / spacing / sideOffset props
  { from: /(spacing|padding|margin)="XXXSmall"/, to: '$1="50"' },
  { from: /(spacing|padding|margin)="XXSmall"/, to: '$1="100"' },
  { from: /(spacing|padding|margin)="XSmall"/, to: '$1="200"' },
  { from: /(spacing|padding|margin|sideOffset)="small"/, to: '$1="300"' },
  { from: /(spacing|padding|margin|sideOffset)="medium"/, to: '$1="400"' },
  { from: /(spacing|padding|margin|sideOffset)="large"/, to: '$1="600"' },
  { from: /(spacing|padding|margin|sideOffset)="XLarge"/, to: '$1="800"' },
  { from: /(spacing|padding|margin|sideOffset)="XXLarge"/, to: '$1="1000"' },
  { from: /(spacing|padding|margin|sideOffset)="XXXLarge"/, to: '$1="1200"' }, // visual breaking change
  // padding object / margin object / spacing in media queries object props
  { from: /(top|bottom|left|right|spacing|padding|margin): "XXXSmall"/, to: '$1: "50"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "XXSmall"/, to: '$1: "100"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "XSmall"/, to: '$1: "200"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "small"/, to: '$1: "300"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "medium"/, to: '$1: "400"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "large"/, to: '$1: "600"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "XLarge"/, to: '$1: "800"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "XXLarge"/, to: '$1: "1000"' },
  { from: /(top|bottom|left|right|spacing|padding|margin): "XXXLarge"/, to: '$1: "1200"' }, // visual breaking change
];

const transformations = [
  ...borderRadiusTransformations,
  ...headingTransformations,
  ...spacingTransformations,
  ...elevationTransformations,
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
      } else if (stats.isFile() && /\.(js|jsx|ts|tsx)$/.test(file)) {
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
