import dotenv from "dotenv-safe";
import dedent from "dedent";
import ora from "ora";
import { path, argv, fs, globby, chalk, fetch, $ } from "zx";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import sharp from "sharp";

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

interface Images {
  images: Record<string, string>;
}

const VALID_FRAMES = [
  "[Main] Bold icons",
  "[Main] Light icons",
  "Social Colored",
  "Social",
  "Navigation icons",
];
const ICONS_ID = "wjYAT0sNBXtirEoyKgXUwr";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ICONS_ID}`;
const FIGMA_IMAGE_URI = `https://api.figma.com/v1/images/${ICONS_ID}`;
const SVG_FOLDER = path.resolve(process.cwd(), "src/icons/svg");

const svgToPng = async (svg: string) => {
  const svgBuffer = Buffer.from(svg, "utf8");
  const pngBuffer = await sharp(svgBuffer, { density: 300 }).png().toBuffer();
  return PNG.sync.read(pngBuffer);
};

const sliceIntoChunks = (arr: string[], chunkSize: number) =>
  arr.reduce<string[][]>((acc, _, i) => {
    if (i % chunkSize === 0) {
      acc.push(arr.slice(i, i + chunkSize));
    }
    return acc;
  }, []);

const getId = (str: string) => {
  const match = str.match(/character.*?(\d+:\d+)/);
  return match ? match[1] : str;
};
// helper functions
const isCorrectSize = (name: string) => {
  const argvSize = argv.size as string;
  const size = argvSize || "normal";
  return name === `size=${size}`;
};

const removeCommentId = (str: string) => str.replace(/<!--.*-->/g, "");

try {
  dotenv.config({
    example: `${process.cwd()}/../../.env.example`,
    path: `${process.cwd()}/../../.env`,
  });
} catch (err) {
  const errorObj = err as { missing: string[] };
  if (errorObj.missing.includes("FIGMA_TOKEN")) {
    throw new Error(
      dedent`
        Figma token is missing in the .env file:
        ${errorObj.missing.join("\n")}
        You can generate one in your Figma account settings
      `,
    );
  }
}

// @ts-expect-error MTS doesn't support generics yet for that
const api = <T>(url: string) =>
  fetch(url, {
    headers: { "Content-Type": "application/", "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN || "" },
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json() as Promise<T>;
  });

// just to avoid unnecessary breaking change
const parseName = (name: string) => {
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

async function saveOrbitIcons(data: { name: string; svg: string; id: string }[]) {
  const savedIds: string[] = [];

  for (const { name, svg, id } of data) {
    // id is of format XXXX:XXXX, we want the second part only.
    const formattedId = id.split(":")[1];
    const parsedName = parseName(name);
    const content = setSvgContent(parsedName, svg, formattedId);
    const filePath = path.join(SVG_FOLDER, `${parsedName}.svg`);
    let currentId = formattedId;

    if (!fs.existsSync(filePath)) {
      await fs.writeFile(filePath, content, "utf-8").then(() => {
        console.log(chalk.green.bold(`saved ${parsedName}`));
      });
    } else if (removeCommentId(content) !== removeCommentId(fs.readFileSync(filePath, "utf-8"))) {
      // convert to PNG and compare via pixelmatch
      const upcomingDiff = await svgToPng(content);
      const existingDiff = await svgToPng(fs.readFileSync(filePath, "utf-8"));
      const { width, height } = upcomingDiff;
      const diff = new PNG({ width, height });
      const match = getId(fs.readFileSync(filePath, "utf-8"));
      const numDiffPixels = pixelmatch(
        upcomingDiff.data,
        existingDiff.data,
        diff.data,
        width,
        height,
        { threshold: 0.1 },
      );
      // update the content only if the diff is bigger than 0
      if (numDiffPixels > 0) {
        currentId = match;
        await fs.writeFile(filePath, content, "utf-8").then(() => {
          console.log(
            chalk.yellow.bold(`file was changed, updated the content for: ${parsedName}`),
          );
        });
      }
    }

    savedIds.push(currentId);
  }
}

(async () => {
  try {
    $.verbose = false;
    const filesSpinner = ora(chalk.bold.underline.magenta("Fetching file ids...")).start();
    const { meta } = await api<FigmaComponents>(`${FIGMA_FILE_URI}/components`);
    const { components } = meta;

    const nodes = components
      .filter(c => VALID_FRAMES.includes(c.containing_frame.name))
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

      const { images } = await api<Images>(`${FIGMA_IMAGE_URI}?${params.toString()}`);

      await Promise.all(
        Object.keys(images).map(id =>
          fetch(images[id]).then(async res => {
            const nodeId = nodes[id] as string;
            return {
              id,
              name: nodeId
                .toLowerCase()
                .replace(/\+kg|\(|\)/g, "")
                .replace(/\s+/g, "-"),
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
    process.exit(1);
  }
})();
