import dotenv from "dotenv-safe";
import dedent from "dedent";
import ora from "ora";
import { path, argv, fs, globby, chalk, fetch, $ } from "zx";

/* eslint-disable camelcase */

interface User {
  id: string;
  handle: string;
  img_url: string;
}
interface ContainingFrame {
  name: string;
  nodeId: string;
  pageId: string;
  pageName: string;
  backgroundColor: string;
  containingStateGroup: { name: string; nodeId: string };
}
interface Component {
  key: string;
  file_key: string;
  node_id: string;
  thumbnail_url: string;
  name: string;
  description: string;
  description_rt: string;
  created_at: string;
  updated_at: string;
  containing_frame: ContainingFrame;
  user: User;
}
interface FigmaComponents {
  error: boolean;
  status: number;
  meta: {
    components: Component[];
  };
  i18n: null;
}

const FILTERED_FRAMES = ["All icons", "Social Colored", "Social", "Navigation icons"];
const ICONS_ID = "wjYAT0sNBXtirEoyKgXUwr";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ICONS_ID}`;
const FIGMA_IMAGE_URI = `https://api.figma.com/v1/images/${ICONS_ID}`;
const SVG_FOLDER = path.resolve(process.cwd(), "src/icons/svg");

const sliceIntoChunks = (arr: string[], chunkSize: number) =>
  arr.reduce<string[][]>((acc, _, i) => {
    if (i % chunkSize === 0) {
      acc.push(arr.slice(i, i + chunkSize));
    }
    return acc;
  }, []);

const generateId = () => String(Math.floor(Math.random() * 9000) + 1000);
const generateUniqueId = (id: string, arr: string[]) => (arr.includes(id) ? generateId() : id);
const getId = (str: string) => {
  const match = str.match(/character.*?(\d+)/);
  return match ? match[1] : str;
};
// helper functions
const isCorrectSize = (name: string) => {
  const size = argv.size || "normal";
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

const api = <T extends unknown>(url: string) =>
  fetch(url, {
    headers: { "Content-Type": "application/", "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN || "" },
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json() as Promise<T>;
  });

// just to avoid unnecessary breaking change
const parseName = (name: string) => {
  if (name === "no-guarantee") return "kiwicom-no-guarantee";
  if (name === "guarantee") return "kiwicom-guarantee";
  if (name === "care-kiwi.com") return "kiwicom-care";
  if (name === "kiwi.com") return "kiwicom";
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
    $.verbose = false;
    const filesSpinner = ora(chalk.bold.underline.magenta("Fetching file ids...")).start();
    const { meta } = await api<FigmaComponents>(`${FIGMA_FILE_URI}/components`);
    const { components } = meta;

    const nodes = components
      .filter(c => FILTERED_FRAMES.includes(c.containing_frame.name))
      .reduce((acc, c) => {
        if (c.name.includes("size=") && !isCorrectSize(c.name)) return acc;

        const nodeName = c.containing_frame.containingStateGroup
          ? c.containing_frame.containingStateGroup.name
          : c.name;

        acc[c.node_id] = nodeName;
        return acc;
      }, {});

    filesSpinner.succeed(chalk.bold.green("done"));

    const chunks = sliceIntoChunks(Object.keys(nodes), 100);

    for (const chunk of chunks) {
      const params = new URLSearchParams([
        ["ids", decodeURIComponent(chunk.join(","))],
        ["scale", "1.2"],
        ["format", "svg"],
      ]);

      const imagesSpinner = ora(
        chalk.bold.underline.magenta("Fetching and savings svgs..."),
      ).start();

      const { images } = await api<{ images: Record<string, string> }>(
        `${FIGMA_IMAGE_URI}?${params.toString()}`,
      );

      await Promise.all(
        Object.keys(images).map(id =>
          fetch(images[id]).then(async res => {
            return {
              id,
              name: nodes[id].toLowerCase().replace(/\+kg/, "").replace(/\s+/g, "-"),
              svg: await res.text(),
            };
          }),
        ),
      ).then(res => saveOrbitIcons(res));

      imagesSpinner.succeed(chalk.bold.green("done"));

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
    }
  } catch (err) {
    console.error(err);
  }
};

fetchOrbitIcons();
