import ora from "ora";
import dedent from "dedent";
import { path, fs, chalk, $ } from "zx";
import { dotenv, api } from "./helpers.mjs";
import type { FigmaComponents, Component } from "./figma.d";
import _ from "lodash";
import filedirname from "filedirname";
import { NAMES as CURRENT_ILLUSTRATION_NAMES } from "../src/Illustration/consts.mjs";
import { generateTypeFile } from "./typeFiles.mjs";

dotenv();

const ILLUSTRATION_NAMES = [
  "CompassCollectPoints",
  "CompassDemoted",
  "CompassEmailAdventurer",
  "CompassEmailCaptain",
  "CompassEmailPromoted",
  "CompassEmailPromotedCaptain",
  "CompassEmailScout",
  "CompassPoints",
  "CompassSaveOnBooking",
  "CompassTravelPlan",
  "FastBooking",
  "NoBookings",
  "NomadNeutral",
  "TicketFlexi",
  "TimelineBoarding",
  "TimelineDropBaggage",
  "TransportBus",
  "TransporTaxi",
];

const [, __dirname] = filedirname();

const ILLUSTRATIONS_ID = "3zg6qFQ0Po7RyzVIgoIyQE";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ILLUSTRATIONS_ID}/components`;

(async () => {
  const illustrations = await api<FigmaComponents>(FIGMA_FILE_URI);

  if (illustrations.status === 200) {
    const nodes: Component[] = [];

    for (const component of illustrations.meta.components) {
      if (
        component.containing_frame.pageName === "Assets" &&
        component.containing_frame.name === "Illustrations"
      ) {
        nodes.push(component);
      }
    }

    const spinner = ora(chalk.yellow.italic("Downloading illustration names")).start();
    const allNames = nodes.map(node => {
      return node.name.split(/\s/g).map(_.upperFirst).join("");
    });

    const NAMES = _.uniq([...ILLUSTRATION_NAMES, ...allNames]).sort((a, b) => a.localeCompare(b));

    if (_.isEqual(NAMES, CURRENT_ILLUSTRATION_NAMES)) {
      spinner.succeed(chalk.bold.green("Illustration names are up to date"));
      process.exit(0);
    }

    // build type file
    const illustrationObj = {
      path: path.join(__dirname, "..", "src", "Illustration", "TYPESCRIPT_TEMPLATE.template"),
      names: NAMES,
    };

    await generateTypeFile(illustrationObj.path, {
      NAMES: `${illustrationObj.names.map(item => `\n  | "${String(item)}"`).join("")};`,
    });

    // create consts file
    $.verbose = false;
    await fs.writeFile(
      path.join(__dirname, "../src/Illustration/consts.mts"),
      dedent`
      import type { Name } from "./types.d";

      export const NAMES: Name[] = ${JSON.stringify(NAMES, null, 2)};`,
    );

    // prettify
    await $`yarn prettier --write src/Illustration/consts.mts`;
    spinner.succeed(chalk.bold.green("Updated illustration names"));
    $.verbose = true;
  }
})();
