/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { $, fetch, fs, chalk, path } from "zx";
import dotenv from "dotenv-safe";
import dedent from "dedent";
import { solidPaintToWebRgb, toHex } from "figx";
import _ from "lodash";
// eslint-disable-next-line import/extensions
import fp from "lodash/fp.js";

const FILE_ID = "2rTHlBKKR6IWGeP6Dw6qbP";
const ROOT_API = `https://api.figma.com/v1/files`;
const FIGMA_FILE_URI = `${ROOT_API}/${FILE_ID}/styles`;
const OUTPUT_PATH = path.join(__dirname, "../src/palette.js");

try {
  dotenv.config({
    example: `${process.cwd()}/../../.env.example`,
    path: `${process.cwd()}/../../.env`,
  });
} catch (err) {
  if (err && err.missing && err.missing.includes("FIGMA_TOKEN")) {
    throw new Error(
      dedent`
        Figma token is missing in the .env file:
        ${err.missing.join("\n")}
        You can generate one in your Figma account settings
      `,
    );
  }
}

const sortObj = obj =>
  Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});

const sortTokens = tokenObj =>
  Object.entries(tokenObj).reduce((acc, [name, tokens]) => {
    const sortedTokens = sortObj(tokens);
    acc[name] = sortedTokens;
    return acc;
  }, {});

async function saveColorTokens(output) {
  const sorted = fp.compose(sortTokens, sortObj)(output);

  console.log(sorted);

  const content = dedent`
    // @flow
    const palette = ${JSON.stringify(sorted, null, 2)};

    export default palette;
  `;

  fs.writeFile(OUTPUT_PATH, content, "utf-8")
    .then(() => {
      console.log(chalk.green(`Saved color tokens to ${OUTPUT_PATH}`));
    })
    .catch(err => {
      console.error(err);
      console.log(chalk.red(`Failed to save color tokens to ${OUTPUT_PATH}`));
    });

  return undefined;
}

const api = url =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN,
    },
  }).then(res => res.json());

const parseTokenPath = token => {
  return token
    .replace(/Additional|:/g, "")
    .split("/")
    .join("")
    .replace(/\s/g, "")
    .replace(/hover|active/g, c => c[0].toUpperCase().concat(c.slice(1)))
    .replace(/([a-z])([A-Z])/g, "$1.$2");
};

const getColorValue = color => {
  // TODO: currently support only solid, without gradients
  if (color.type === "SOLID") {
    const res = solidPaintToWebRgb(color, "string");
    return toHex(res);
  }

  return null;
};

const parseNode = node => {
  const { fills, name } = Object.values(node)[0].document;
  return { name: parseTokenPath(name), value: getColorValue(fills[0]) };
};

const adjustName = name => {
  if (name === "White") return "white.Normal";
  if (name === "White.Active") return "white.Normal.Active";
  if (name === "White.Hover") return "white.Normal.Hover";

  return name;
};

const createStructure = nodes =>
  nodes.reduce((acc, cur) => {
    const { name, value } = cur;
    // TODO: gradient color tokens are not supported yet
    if (name.includes("Bundle")) return acc;
    // white does not have a Normal value in Figma
    const objPath = adjustName(name)
      .split(".")
      .map((el, i, arr) => {
        if (i === 2 && arr.length === 3) return arr[1].concat(el);
        return el;
      });

    const palette = _.head(objPath);
    const token = _.camelCase(_.tail(objPath).length > 1 ? objPath.slice(-1) : _.tail(objPath));

    _.set(acc, [palette.toLowerCase(), token], value);

    return acc;
  }, {});

async function getColorTokensFromFigma() {
  try {
    $.verbose = false;
    const { meta, error } = await api(FIGMA_FILE_URI);
    if (!error) {
      const colors = meta.styles
        .map(({ style_type: type, node_id: nodeId, key, file_key: fileKey }) => {
          if (type === "FILL") {
            return {
              file: fileKey,
              id: key,
              nodeId,
            };
          }
          return null;
        })
        .filter(Boolean);

      const allNodes = colors.map(({ file, nodeId }) =>
        api(`${ROOT_API}/${file}/nodes?ids=${nodeId}`),
      );

      const basePaletteTokens = await Promise.all(allNodes).then(res =>
        createStructure(res.map(n => parseNode(n.nodes))),
      );

      $.verbose = true;

      if (basePaletteTokens) {
        if (fs.existsSync(OUTPUT_PATH)) {
          await fs.remove(OUTPUT_PATH);
          await saveColorTokens(basePaletteTokens);
        } else {
          await saveColorTokens(basePaletteTokens);
        }
      }
      // prettify output
      await $`prettier --write ${OUTPUT_PATH}`;
    }

    return error;
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

getColorTokensFromFigma();
