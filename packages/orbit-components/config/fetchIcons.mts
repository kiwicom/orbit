import axios from "axios";
import dotenv from "dotenv-safe";
import dedent from "dedent";
import ora from "ora";
import { path, argv, fs, globby, chalk } from "zx";

const EXCLUDE_COMPONENTS = ["Header", "FeatureIcons"];
const ICONS_ID = "wjYAT0sNBXtirEoyKgXUwr";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ICONS_ID}`;
const FIGMA_IMAGE_URI = `https://api.figma.com/v1/images/${ICONS_ID}`;
const SVG_FOLDER = path.resolve(process.cwd(), "src/icons/svg");

const generateId = () => String(Math.floor(Math.random() * 9000) + 1000);
const generateUniqueId = (id: string, arr: string[]) => (arr.includes(id) ? generateId() : id);
const getId = (str: string) => {
  const match = str.match(/character.*?(\d+)/);
  return match ? match[1] : str;
};
// helper functions
const isCorrectSize = (name: string) => {
  const size = argv.size || "large";
  return name === `size=${size}`;
};

const removeCommentId = (str: string) => str.replace(/<!--.*-->/g, "");

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

const api = (url: string) =>
  axios({
    method: "GET",
    url,
    headers: { "Content-Type": "application/", "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN || "" },
  });

const parseNodes = nodes => {
  const result = {};
  let name = "";

  const fn = data => {
    // for of is slightly faster
    for (const node of data) {
      if (node.type === "COMPONENT_SET" || node.type === "FRAME") {
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
const parseName = (name: string) => {
  if (name === "no-guarantee") return "kiwicom-no-guarantee";
  if (name === "guarantee") return "kiwicom-guarantee";
  if (name === "care-kiwi.com") return "kiwicom-care";
  if (name === "kiwi.com") return "kiwicom";
  if (name === "notificiation-add") return "notification-add";
  if (name === "google-colored") return "google";

  if (/-colored/g.test(name)) return name.split("-").reverse().join("-");

  return name;
};

const setSvgContent = (name: string, content: string, id: string) => {
  if (/colored-/g.test(name) || name === "google") {
    return dedent`
    <!--character:${id}-->
    <!--customColor:true-->
    ${content}`;
  }

  return dedent`
    <!--character:${id}-->
      ${content
      .replace(/(fill|clip)-rule="evenodd"|fill=".*"/gm, "")
      .replace(/(stroke|stroke-.*)=".*"/gm, "")}
  `;
};

async function saveOrbitIcons(data) {
  const savedIds: string[] = [];

  for (const { name, svg } of data) {
    const parsedName = parseName(name);
    const id = generateId();
    const uniqueId = generateUniqueId(id, savedIds);
    const content = setSvgContent(parsedName, svg, uniqueId);
    const filePath = path.join(SVG_FOLDER, `${parsedName}.svg`);
    let currentId = uniqueId;

    if (!fs.existsSync(filePath)) {
      await fs.writeFile(filePath, content, "utf-8").then(() => {
        console.log(chalk.green.bold(`saved ${parsedName}`));
      });
    } else if (removeCommentId(content) !== removeCommentId(fs.readFileSync(filePath, "utf-8"))) {
      const match = getId(fs.readFileSync(filePath, "utf-8"));
      currentId = match;
      await fs.writeFile(filePath, content, "utf-8").then(() => {
        console.log(chalk.yellow.bold(`file was changed, updated the content for: ${parsedName}`));
      });
    }

    savedIds.push(currentId);
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
            // @ts-expect-error TODO
            name: name.toLowerCase().replace(/\+kg/, "").replace(/\s+/g, "-"),
            svg: res.data,
          };
        }),
      ),
    );

    await saveOrbitIcons(svgs);

    if (process.env.GITHUB_ACTIONS === "true") {
      imagesSpinner.succeed(chalk.bold.green("done"));
      const checkSpinner = ora(
        chalk.bold.underline.magenta("Check if icons ids are unique..."),
      ).start();
      const iconsData = await globby(SVG_FOLDER);
      const ids: string[] = [];

      for (const icon of iconsData) {
        const id = getId(await fs.readFile(icon, "utf-8"));
        if (ids.includes(id)) {
          throw new Error(`Icon with the same ID already exists, ${icon}`);
        } else {
          ids.push(id);
        }
      }
      checkSpinner.succeed("All ids are unique");
    }
  } catch (err) {
    console.error(err);
  }
};

fetchOrbitIcons();
