import { $, fetch, fs, path } from "zx";
import dotenv from "dotenv-safe";
import dedent from "dedent";
import { solidPaintToWebRgb, toHex } from "figx";
import _ from "lodash";

const FILE_ID = "2rTHlBKKR6IWGeP6Dw6qbP";
const ROOT_API = `https://api.figma.com/v1/files`;
const FIGMA_FILE_URI = `${ROOT_API}/${FILE_ID}/styles`;
const OUTPUT_PATH = path.join(__dirname, "../src/dictionary/definitions/foundation/palette");

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

const saveTokens = (palette, tokens) => {
  return {
    foundation: {
      palette: {
        [palette]: Object.entries(tokens).reduce((acc, [key, value]) => {
          _.set(acc, _.kebabCase(key), {
            value,
            internal: true,
            type: "color",
          });
          return sortObj(acc);
        }, {}),
      },
    },
  };
};

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
  if (name.match(/Bundle.Bundle/g)) return name.replace(/Bundle.Bundle/g, "Bundle");

  return name;
};

const createStructure = nodes =>
  nodes.reduce((acc, cur) => {
    const { name, value } = cur;
    // TODO: gradient color tokens are not supported yet
    if (name.includes("Gradient")) return acc;
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
        // eslint-disable-next-line no-restricted-syntax
        for (const [palette, tokens] of Object.entries(basePaletteTokens)) {
          if (fs.existsSync(path.join(OUTPUT_PATH, palette))) {
            await fs.remove(path.join(OUTPUT_PATH, `${palette}.json`));
          } else {
            await fs.writeFile(
              path.join(OUTPUT_PATH, `${palette}.json`),
              JSON.stringify(saveTokens(palette, tokens), null, 2),
            );
          }
        }
      }
    }

    return error;
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

getColorTokensFromFigma();
