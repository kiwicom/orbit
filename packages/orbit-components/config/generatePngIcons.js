// @flow
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { defaultTokens } = require("@kiwicom/orbit-design-tokens");

const DIR = path.join(__dirname, "../orbit-email-icons");
const sizesToGenerate = [32, 48];
const colors = [
  ["white", defaultTokens.paletteWhite],
  ["secondary", defaultTokens.paletteInkLight],
  ["tertiary", defaultTokens.paletteInkLighter],
  ["primary", defaultTokens.paletteInkNormal],
  ["warning", defaultTokens.paletteOrangeNormal],
  ["error", defaultTokens.paletteRedNormal],
  ["success", defaultTokens.paletteGreenNormal],
  ["info", defaultTokens.paletteBlueNormal],
];

async function readFile(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function readDir(pathToDir) {
  return new Promise((resolve, reject) => {
    fs.readdir(pathToDir, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
}

async function generateIcon(pathToFile, size, color, extraDir) {
  const nameSplit = pathToFile.split("/");
  const name = nameSplit[nameSplit.length - 1].replace(".svg", "");
  const file =
    fs.lstatSync(`./src/icons/svg/${pathToFile}`).isFile() &&
    (await readFile(`./src/icons/svg/${pathToFile}`));

  if (file) {
    const updateBuffer = Buffer.from(
      file.toString().replace(`<svg `, `<svg fill="${color}" `),
      "utf8",
    );

    await sharp(updateBuffer, { density: 300 })
      .resize(size, size)
      .toFile(`${DIR}/${extraDir}/${size}x${size}/${name}.png`);

    return `${DIR}/${extraDir}/${size}x${size}/${name}.png`;
  }
  return false;
}

function generatePath(targetDir) {
  const { sep } = path;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir);
    }
    return curDir;
  }, initDir);
}

(async () => {
  try {
    // Sync paths
    sizesToGenerate.forEach(size => {
      colors.forEach(color => {
        generatePath(`${DIR}/${color[0]}/${size}x${size}`);
      });
    });

    // Find all icons
    const files = await readDir("./src/icons/svg/");

    const promises = [];

    // Generate every variant
    files.forEach(file => {
      colors.forEach(color => {
        sizesToGenerate.forEach(size => {
          promises.push(generateIcon(file, size, color[1], color[0]));
        });
      });
    });

    await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
})();
