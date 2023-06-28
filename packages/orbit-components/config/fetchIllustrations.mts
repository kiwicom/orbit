import ora from "ora";
import dedent from "dedent";
import { path, fs, chalk, $, fetch, argv } from "zx";
import _ from "lodash";
import filedirname from "filedirname";

import { dotenv, api } from "./helpers.mjs";
import type { FigmaComponents, Component } from "./figma.d";
import { NAMES as CURRENT_ILLUSTRATION_NAMES } from "../src/Illustration/consts.mjs";
import { generateTypeFile } from "./typeFiles.mjs";

dotenv();

const gitlabRestApi = (url: string, method: "POST" | "GET", body?: string) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
    },
    body,
  }).then(res => {
    if (!res.ok) {
      throw new Error(`Gitlab API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
  });
};

const PROJECT_ID = encodeURIComponent("frontend/images.kiwi.com");
const GITLAB_API_MERGE_REQUEST = `https://gitlab.skypicker.com/api/v4/projects/${PROJECT_ID}/merge_requests`;
const GITLAB_API_COMMIT = `https://gitlab.skypicker.com/api/v4/projects/${PROJECT_ID}/repository/commits`;
const GITLAB_API_BRANCH = `https://gitlab.skypicker.com/api/v4/projects/${PROJECT_ID}/repository/branches`;
const BRANCH_NAME = "feat/orbit-illustrations";

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
  "TransportTaxi",
  "AirportShuttle",
  "AirportTransport",
];

const [, __dirname] = filedirname();

const ILLUSTRATIONS_ID = "3zg6qFQ0Po7RyzVIgoIyQE";
const FIGMA_FILE_URI = `https://api.figma.com/v1/files/${ILLUSTRATIONS_ID}/components`;
const parseName = (name: string) => name.split(/\s/g).map(_.upperFirst).join("");

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
    const allNames = nodes.map(node => parseName(node.name));

    const NAMES = _.uniq([...ILLUSTRATION_NAMES, ...allNames]).sort((a, b) => a.localeCompare(b));

    if (_.isEqual(NAMES, CURRENT_ILLUSTRATION_NAMES)) {
      spinner.succeed(chalk.bold.green("Illustration names are up to date"));
      process.exit(0);
    }

    const imagesToFetch = _.difference(NAMES, CURRENT_ILLUSTRATION_NAMES);

    // build type file
    const illustrationObj = {
      path: path.join(__dirname, "..", "src", "Illustration", "TYPESCRIPT_TEMPLATE.template"),
      names: NAMES,
    };

    await generateTypeFile(illustrationObj.path, {
      NAMES: `${illustrationObj.names.map(item => `\n  | "${String(item)}"`).join("")};`,
    });

    if (argv.verbose) {
      $.verbose = true;
    } else {
      $.verbose = false;
    }

    // create consts file
    await fs.writeFile(
      path.join(__dirname, "../src/Illustration/consts.mts"),
      dedent`
      import type { Name } from "./types.d";

      export const NAMES: Name[] = ${JSON.stringify(NAMES, null, 2)};`,
    );

    // prettify
    await $`yarn prettier --write src/Illustration/consts.mts`;
    spinner.succeed(chalk.bold.green("Updated illustration names"));

    const spinner2 = ora(chalk.yellow.italic("Save illustrations to Gitlab")).start();

    const filteredNodes = nodes.filter(node => {
      return imagesToFetch.includes(parseName(node.name));
    });

    const params = new URLSearchParams([
      ["ids", filteredNodes.map(n => decodeURIComponent(n.node_id)).join(",")],
      ["scale", "2"],
      ["format", "png"],
    ]);

    const url = `https://api.figma.com/v1/images/${ILLUSTRATIONS_ID}?${params.toString()}`;

    const files = await api<{ err: boolean; images: Record<string, string> }>(url).then(res => {
      if (!res.err && res.images) {
        const images = Object.entries(res.images);
        return images.map(([imgId, resource]) => {
          const fileName = filteredNodes.find(node => node.node_id === imgId)?.name;
          return { fileName: fileName || "", url: resource };
        });
      }
    });

    if (files) {
      const actions = await Promise.all(
        files.map(f => fetch(f.url).then(res => res.arrayBuffer())),
      ).then(output => {
        return output.map((f, i) => {
          // const buffer = Buffer.from(f);
          const { fileName } = files[i];
          return {
            // TODO: figure out why do not create commits, something with buffer here
            action: "create",
            file_path: `data/illustrations/${fileName}.png`,
            content: f,
            encoding: "base64",
          };
        });
      });

      const BRANCH_NAME_TIMESTAMP = `${BRANCH_NAME}-kek`;

      await gitlabRestApi(
        GITLAB_API_BRANCH,
        "POST",
        JSON.stringify({ id: PROJECT_ID, branch: BRANCH_NAME_TIMESTAMP, ref: "master" }),
      );

      if (actions && actions.length > 0) {
        await gitlabRestApi(
          GITLAB_API_COMMIT,
          "POST",
          JSON.stringify({
            id: PROJECT_ID,
            branch: BRANCH_NAME_TIMESTAMP,
            commit_message: `feat: add new illustrations`,
            actions,
          }),
        );
      }

      await gitlabRestApi(
        GITLAB_API_MERGE_REQUEST,
        "POST",
        JSON.stringify({
          source_branch: BRANCH_NAME,
          target_branch: "master",
          title: "feat: add new illustrations",
          remove_source_branch: true,
        }),
      );
    }

    spinner2.succeed(chalk.bold.green("Saved illustrations to Gitlab"));
  }
})();
