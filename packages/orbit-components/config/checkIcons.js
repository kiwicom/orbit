/*
This script checks the validity of a given set of icons. They need to:

- Have unique HTML character comments (and not empty)
- Do not have fill attributes (fill, fill-rule)
- Have an standard size (can be specified on the checkIcons function, in pixels)
*/

import path from "path";
import { JSDOM } from "jsdom";
import glob from "glob";

// Default icon size to enforce in px
const DEFAULT_ICON_SIZE = "24";
const DEFAULT_ICON_PATH = "src/icons/svg/*.svg";

export function getHTMLComments(content) {
  const rawComments = content.match(/<!--([\s\S]*?)-->/gm);
  if (rawComments) {
    return Object.assign(
      {},
      ...rawComments.map(item => {
        // remove HTML comments and split by colon
        const items = item.replace(/<!--([\s\S]*?)-->/gm, "$1").split(":");
        // one icon has color as character
        const value = items[1] === "" && items[2] === "" ? ":" : items[1];
        return { [items[0]]: value };
      }),
    );
  }
  return null;
}

export function getProperty(attributes, name, defaultValue = null) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === name) {
      return attributes[i].value;
    }
  }
  return defaultValue;
}

// This function checks if there's a character value in the SVG definition or if the character value already exists in some icon (has to be unique)
function checkCharacterValues(comments, baseName, allCharacters) {
  if (!comments || !comments.character) {
    throw new Error(
      `A character value needs to be present in SVG definition of ${baseName}.svg as HTML comment. Otherwise the icon font build will be broken.`,
    );
  }
  allCharacters.forEach(({ name, char }) => {
    if (char === comments.character) {
      throw new Error(
        `A character ${comments.character} is already present on ${name} icon. Change the character value on ${baseName}, so it's unique.`,
      );
    }
  });
  allCharacters.push({ name: baseName, char: comments.character });
}

// Checks if the fill attributes are present on the icons and throw an error if so
function checkFillAttributes(comments, content, name) {
  // only check icons that don't have replacement for icon font
  if (comments && comments.iconFont !== "false" && comments.customColor == null) {
    const prohibitedAttributes = ["fill", "fill-rule"];
    const phrase = attrName =>
      `${attrName} attribute found on ${name} SVG icon. Please delete the ${attrName} or redraw the icon. Otherwise the icon font will be broken.`;

    const findAttrAndThrowErr = node => {
      prohibitedAttributes.forEach(n => {
        if (getProperty(node.attributes, n)) {
          throw new Error(phrase(n));
        }
      });
    };
    // For the main DOM element
    findAttrAndThrowErr(content);
    // for all the children - paths
    Object.values(content.children).forEach(node => findAttrAndThrowErr(node));
  }
}

// This function checks if the icon complies with a given size (e.g. 24 x 24)
function checkIconSize(content, name, size) {
  const phrase = attrName => `The ${attrName} attribute on the ${name} SVG icon has to be ${size}!`;

  ["width", "height"].forEach(attrName => {
    if (getProperty(content.attributes, attrName) !== size) {
      throw new Error(phrase(attrName));
    }
  });
}

export default async function checkIcons(
  iconPaths = DEFAULT_ICON_PATH,
  iconSize = DEFAULT_ICON_SIZE,
) {
  const files = glob.sync(iconPaths || DEFAULT_ICON_PATH);

  if (!files || !files.length) {
    console.error("There are no icons on the specified path");
    process.exit(1);
  }

  const allIconsCharacters = [];

  // We get the names of the icons in the directory
  const names = files.map(inputFileName => {
    const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "");
    return {
      inputFileName,
      baseName,
    };
  });

  names.forEach(async ({ inputFileName, baseName }) => {
    const dom = await JSDOM.fromFile(inputFileName);
    const comments = getHTMLComments(dom.serialize());
    const content = dom.window.document.querySelector("svg");

    try {
      checkFillAttributes(comments, content, inputFileName);
      checkCharacterValues(comments, baseName, allIconsCharacters);
      checkIconSize(content, baseName, iconSize);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  });
}
