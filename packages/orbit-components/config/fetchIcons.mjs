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
  const size = argv.size || "large";
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

// just to avoid unnecessary breaking change
const parseName = name => {
  if (name === "no-guarantee") return "kiwicom-no-guarantee";
  if (name === "guarantee") return "kiwicom-guarantee";

  return name;
};

async function saveOrbitIcons(data) {
  let idx = 0;
  for (const { id, name, svg } of data) {
    idx += 1;
    const parsedName = parseName(name);
    const filePath = path.join(SVG_FOLDER, `${parsedName}.svg`);
    const content = dedent`
    <!--character:${idx}:${id}-->
      ${svg.replace(/(fill|clip)-rule="evenodd"|fill=".*"/gm, "")}
    `;

    if (!fs.existsSync(filePath)) {
      await fs.writeFile(filePath, content, "utf-8").then(() => {
        console.log(chalk.green.bold(`saved ${parsedName}`));
      });
    }
  }
}

const fetchOrbitIcons = async () => {
  try {
    const filesSpinner = ora(chalk.bold.underline.magenta("Fetching file ids...")).start();
    const { data } = await api(FIGMA_FILE_URI);
    filesSpinner.succeed(chalk.bold.green("done"));

    const nodes = data.document.children
      .find(node => node.type === "CANVAS" && node.name === "Icons")
      .children.filter(node => !EXCLUDE_COMPONENTS.includes(node.name));

    const icons = parseNodes(nodes);
    const params = new URLSearchParams([
      ["ids", decodeURIComponent(Object.keys(icons).join(","))],
      ["format", "svg"],
    ]);

    const imagesSpinner = ora(chalk.bold.underline.magenta("Fetching and savings svgs...")).start();
    const { data: imagesData } = await api(`${FIGMA_IMAGE_URI}?${params.toString()}`);

    const svgs = await axios.all(
      Object.entries(icons).map(([id, name]) =>
        axios.get(imagesData.images[id]).then(res => {
          return {
            id,
            name: name.toLowerCase().replace(/\+kg/, "").replace(/\s+/g, "-"),
            svg: res.data,
          };
        }),
      ),
    );

    await saveOrbitIcons(svgs);
    imagesSpinner.succeed(chalk.bold.green("done"));
  } catch (err) {
    console.error(err);
  }
};

fetchOrbitIcons();
