// @flow

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { defaultTokens } = require("@kiwicom/orbit-design-tokens");

const DIR = path.join(__dirname, "../orbit-email-icons");
const sizesToGenerate = [32, 48];
const colors = [
  ["paletteWhite", defaultTokens.paletteWhite],
  ["paletteInkLight", defaultTokens.paletteInkLight],
  ["paletteInkLighter", defaultTokens.paletteInkLighter],
  ["paletteInkNormal", defaultTokens.paletteInkNormal],
  ["paletteOrangeNormal", defaultTokens.paletteOrangeNormal],
  ["paletteRedNormal", defaultTokens.paletteRedNormal],
  ["paletteGreenNormal", defaultTokens.paletteGreenNormal],
  ["paletteBlueNormal", defaultTokens.paletteBlueNormal],
];

async function readFile(pathToFile) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line func-names
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

  const file = await readFile(`./src/icons/svg/${pathToFile}`);
  const updateBuffer = Buffer.from(
    file.toString().replace(`<svg `, `<svg fill="${color}" `),
    "utf8",
  );
  await sharp(updateBuffer, { density: 300 })
    .resize(size, size)
    .toFile(`${DIR}/${extraDir}/${size}/${name}.png`);
  console.log(`${DIR}/${extraDir}/${size}/${name}.png`);
  return `${DIR}/${extraDir}/${size}/${name}.png`;
}

function filterOutElements(e) {
  return this.indexOf(e) < 0;
}

(async () => {
  // Sync paths
  // TODO: make it nice and should be also awaited, can cause error of not being created before it want's to write.
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }
  colors.forEach(el => {
    if (!fs.existsSync(`${DIR}/${el[0]}`)) {
      fs.mkdirSync(`${DIR}/${el[0]}`);
    }
  });
  sizesToGenerate.forEach(size => {
    colors.forEach(color => {
      if (!fs.existsSync(`${DIR}/${color[0]}/${size}`)) {
        fs.mkdirSync(`${DIR}/${color[0]}/${size}`);
      }
    });
  });

  const files = await readDir("./src/icons/svg/");

  const filtered = files.filter(filterOutElements, [
    "facebook.svg",
    "google.svg",
    "linkedin.svg",
    "twitter.svg",
  ]);

  const promises = [];

  // Generate every variant
  filtered.forEach(file => {
    colors.forEach(color => {
      sizesToGenerate.forEach(size => {
        promises.push(generateIcon(file, size, color[1], color[0]));
      });
    });
  });

  await Promise.all(promises);
})();
