import sharp from "sharp";
import { fs, path } from "zx";
import filedirname from "filedirname";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

const [, __dirname] = filedirname();
const DIR = path.join(__dirname, "../orbit-email-icons");
const sizesToGenerate = [32, 48];
const colors = [
  ["white", defaultTokens.paletteWhite],
  ["secondary", defaultTokens.iconSecondaryForeground],
  ["tertiary", defaultTokens.iconTertiaryForeground],
  ["primary", defaultTokens.iconPrimaryForeground],
  ["warning", defaultTokens.paletteOrangeNormal],
  ["error", defaultTokens.paletteRedNormal],
  ["success", defaultTokens.paletteGreenNormal],
  ["info", defaultTokens.paletteBlueNormal],
  // TRAM needs that dark shades
  ["green-dark", defaultTokens.paletteGreenDark],
  ["red-dark", defaultTokens.paletteRedDark],
  ["blue-dark", defaultTokens.paletteBlueDark],
  ["orange-dark", defaultTokens.paletteOrangeDark],
  ["cloud-dark", defaultTokens.paletteCloudDark],
  ["ink-dark", defaultTokens.paletteInkDark],
  ["product-dark", defaultTokens.paletteProductDark],
  ["product-light", defaultTokens.paletteProductLight],
  ["product-normal", defaultTokens.paletteProductNormal],
  ["product-darker", defaultTokens.paletteProductDarker],
];

async function generateIcon(pathToFile: string, size: number, color: string, extraDir: string) {
  // exclude colored icons
  if (pathToFile.match(/colored-|google/g)) return "";

  const nameSplit = pathToFile.split("/");
  const name = nameSplit[nameSplit.length - 1].replace(".svg", "");
  const file =
    fs.lstatSync(`./src/icons/svg/${pathToFile}`).isFile() &&
    (await fs.readFile(`./src/icons/svg/${pathToFile}`));

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

function generatePath(targetDir: string) {
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
    const files = await fs.readdir("./src/icons/svg/");

    const promises: Promise<string | boolean>[] = [];

    files.forEach((file: string) => {
      colors.forEach(color => {
        sizesToGenerate.forEach(size => {
          promises.push(generateIcon(file, size, color[1], color[0]));
        });
      });
    });

    await Promise.all(promises);

    // Copy svg files to the destination
    await fs.copyFile("./orbit-svgs.zip", `${DIR}/orbit-svgs.zip`);

    // Copy font files to the destination
    await fs.copyFile("./orbit-icons-font.zip", `${DIR}/orbit-icons-font.zip`);
  } catch (error) {
    console.error(error);
  }
})();
