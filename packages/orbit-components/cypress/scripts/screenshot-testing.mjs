import { helpers, queries, consts } from "@kiwicom/orbit-tracking";
import { $, chalk, fs, path, argv } from "zx";
import dedent from "dedent";
import os from "os";
import dotenv from "dotenv-safe";

/* eslint-disable no-console */

try {
  dotenv.config({
    path: path.join(__dirname, "../../.env"),
  });
} catch (err) {
  if (err && err.missing && err.missing.includes("GITLAB_TOKEN")) {
    throw new Error(
      dedent`
          Gitlab token is missing in the .env file:
          ${err.missing.join("\n")}
        `,
    );
  }
}

const TMP_FOLDER = path.join(os.tmpdir(), "orbit-cy-screenshot", "temp");

async function fetchRepositories() {
  const { apiRequest } = helpers;

  console.log(chalk.bold.green.italic("> Fetching repositories data from Gitlab API..."));
  const { data } = await apiRequest(queries.projectsQuery, {
    ids: [consts.PROJECTS.booking, consts.PROJECTS.search].map(id => `gid://gitlab/Project/${id}`),
  }).then(res => {
    console.log(chalk.green("done ✅"));
    return res;
  });

  if (!data || !data.projects || data.projects.nodes.length === 0) {
    console.log(chalk.red("No projects found"));
  }

  return data.projects.nodes;
}

async function runCypressScreenshots() {
  try {
    if (fs.existsSync(TMP_FOLDER)) {
      await fs.rm(TMP_FOLDER, { recursive: true, force: true });
    }

    const projects = await fetchRepositories();
    console.info(chalk.bold.green.italic("> Cloning repositories data..."));

    $.verbose = !!argv.debug;

    const commands = projects.map(({ sshUrlToRepo: ssh, name, id }) => {
      const projectId = id.replace(/^\D+/g, "");
      return {
        name,
        folder: path.join(TMP_FOLDER, `${name}-${projectId}`),
        cmd: $`git clone -b master ${ssh} --depth=1 --single-branch ${path.join(
          TMP_FOLDER,
          `${name}-${projectId}`,
        )}`,
      };
    });

    await Promise.all(
      commands.map(({ cmd, name, folder }) =>
        cmd
          .then(() => console.log(chalk.magentaBright(`cloned ${name}`)))
          .then(async () => {
            if (name === "booking") {
              $.cwd = folder;
              await $`yarn add -D start-server-and-test && yarn initialize && cp .env.example .env`;

              console.info(chalk.blueBright.italic(`> Running ${name} screenshot tests...`));

              await $`cp ${path.resolve(
                __dirname,
                "../tests/booking.test.ts",
              )} ${folder}/cypress/integration`;

              await $`yarn start-server-and-test start http-get://localhost:8000/en/ 'yarn cypress run --browser chrome --headed --spec cypress/integration/booking.test.ts'`;
              await $`cp -r ${path.join(folder, "cypress/screenshots")} ${path.join(
                __dirname,
                "../screenshots",
              )}`;

              console.info(chalk.yellow.bold(`Saved screenshots for ${name}`));
              process.exit(0);
            }
          }),
      ),
    ).then(() => console.log(chalk.green(`all saved into ${TMP_FOLDER}`)));
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    try {
      if (path.resolve(TMP_FOLDER)) {
        fs.rmSync(TMP_FOLDER, { recursive: true, force: true });
      }
    } catch (e) {
      process.exit(1);
      console.error(
        `An error has occurred while removing the temp folder at ${TMP_FOLDER}. Please remove it manually. Error: ${e}`,
      );
    }
  }
}

runCypressScreenshots();
