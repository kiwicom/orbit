import axios from "axios";
import dotenv from "dotenv-safe";
import dedent from "dedent";
import ora from "ora";
import { path, argv, fs, chalk } from "zx";

const EXCLUDE_COMPONENTS = ["Header", "FeatureIcons"];
const ICONS_ID = "wjYAT0sNBXtirEoyKgXUwr";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ICONS_ID}`;
const FIGMA_IMAGE_URI = `https://api.figma.com/v1/images/${ICONS_ID}`;
const SVG_FOLDER = path.resolve(process.cwd(), "src/icons/svg");

try {
  dotenv.config({
    example: `${process.cwd()}/../../.env.example`,
    path: `${process.cwd()}/../../.env`,
  });
} catch (err) {
  if (err.missing.includes("FIGMA_TOKEN")) {
    throw new Error(
      dedent`
        Figma token is missing in the .env file:
        ${err.missing.join("\n")}
        You can generate one in your Figma account settings
      `,
    );
  }
}

const api = url =>
  axios({
    method: "GET",
    url,
    headers: { "Content-Type": "application/", "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN },
  });

const isCorrectSize = name => {
  const size = argv.size || "normal";
  return name === `size=${size}`;
};

const parseNodes = nodes => {
  const result = {};
  let name = "";

  const fn = data => {
    // for of is slightly faster
    for (const node of data) {
      if (node.type === "COMPONENT_SET") {
        name = node.name;
        fn(node.children);
      }
      if (node.type === "COMPONENT" && isCorrectSize(node.name)) {
        result[node.id] = name;
      }
    }
  };

  fn(nodes);

  return result;
};

const fetchOrbitIcons = async () => {
  try {
    const spinnerApi = ora(chalk.bold.underline.magenta("Fetching file ids")).start();
    const { data } = await api(FIGMA_FILE_URI);
    spinnerApi.succeed(chalk.bold.green("done"));

    const nodes = data.document.children
      .find(node => node.type === "CANVAS" && node.name === "Icons")
      .children.filter(node => !EXCLUDE_COMPONENTS.includes(node.name));

    const icons = parseNodes(nodes);

    const params = new URLSearchParams([
      ["ids", decodeURIComponent(Object.keys(icons).join(","))],
      ["format", "svg"],
    ]);

    const svgsSpinner = ora(chalk.bold.underline.magenta("Fetching svgs")).start();
    const { data: imagesData } = await api(`${FIGMA_IMAGE_URI}?${params.toString()}`);
    const svgs = await axios.all(
      Object.entries(icons).map(([id, name]) =>
        axios
          .get(imagesData.images[id])
          .then(res => ({ id, name: name.toLowerCase().replace(/\s+/, "-"), svg: res.data })),
      ),
    );
    svgsSpinner.succeed(chalk.bold.green("done"));

    for (const { id, name, svg } of svgs) {
      const content = dedent`
        ${svg}
      `;

      await fs.writeFile(path.join(SVG_FOLDER, `${name}.svg`), svg, "utf-8");
    }
  } catch (err) {
    console.error(err);
  }
};

fetchOrbitIcons();
