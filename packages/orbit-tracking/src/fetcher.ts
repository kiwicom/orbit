import axios, { AxiosResponse } from "axios";
import { config as dotEnvConfig } from "dotenv-safe";
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";
import { command } from "execa";

import { filterMembers, getOutputPath, getVersions } from "./helpers";
import { ProjectsQuery, Scope } from "./interfaces";
import { PROJECTS, BASE_URL, TMP_FOLDER } from "./consts";
import queries from "./queries";

interface BaseArgs {
  outputPath: string;
  config: string;
  folder?: string;
}

interface Args extends BaseArgs {
  scope: Scope[];
}

interface ApiCallArgs extends BaseArgs {
  ids: string[];
}

dotEnvConfig({
  allowEmptyValues: true,
  example: process.env.CI
    ? path.resolve(__dirname, "../.env.ci.example")
    : path.resolve(process.cwd(), "../../.env.example"),
});

export const request = <T>(
  query: string,
  vars?: Record<string, string | number | string[]>,
): Promise<AxiosResponse<T>> =>
  axios.post(
    BASE_URL,
    { query, variables: vars },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
      },
    },
  );

export const gitlabApiCall = async ({ ids, folder, outputPath, config }: ApiCallArgs) => {
  const { data: response } = await request<ProjectsQuery>(queries.projectsQuery, { ids });

  if (response) {
    const commands = response.data.projects.nodes.map(
      ({
        id,
        sshUrlToRepo: ssh,
        httpUrlToRepo: url,
        name,
        projectMembers,
        description,
        repository,
      }) => {
        const projectId = id.replace(/^\D+/g, "");
        return {
          cmd: `git clone -b master ${ssh} --depth=1 --single-branch ${folder}/${name}-${projectId}`,
          name,
          url,
          id: projectId,
          description,
          createdAt: new Date().toISOString(),
          lastCommit: repository.tree.lastCommit,
          members: filterMembers(projectMembers.nodes),
        };
      },
    );

    await Promise.all(
      commands.map(({ id, name, cmd, url, ...data }) => {
        return command(cmd)
          .then(() => console.log(chalk.bold.blue(`fetched: ${name}`)))
          .then(async () => {
            const projectId = `${name}-${id}`;
            const projectFolder = path.resolve(TMP_FOLDER, projectId);
            const orbitVersion = await getVersions(projectFolder);

            return command(
              `npx react-scanner-orbit --yes -c ${
                config || path.resolve(__dirname, "../", "dist", "react-scanner.config.js")
              } -p ${projectFolder}`,
              { env: { REPO_URL: url, OUTPUT_DIR: projectFolder } },
            ).then(({ stdout }) => {
              fs.writeFile(
                getOutputPath(outputPath, projectId),
                JSON.stringify(
                  {
                    name,
                    ...data,
                    url,
                    orbitVersion,
                    trackedData: JSON.parse(stdout),
                  },
                  null,
                  2,
                ),
                "utf8",
              );
            });
          });
      }),
    ).then(() => {
      console.log(chalk.bold.magenta("Successfully created orbit-tracking.json file in the root"));
    });
  }

  return null;
};

async function fetcher({ scope, outputPath, config }: Args) {
  try {
    const ids = scope.map(n => `gid://gitlab/Project/${PROJECTS[n]}`);
    await gitlabApiCall({ ids, folder: TMP_FOLDER, outputPath, config });
  } catch (err) {
    console.error(chalk.redBright(err));
  } finally {
    try {
      if (path.resolve(TMP_FOLDER)) {
        fs.rmSync(TMP_FOLDER, { recursive: true });
      }
    } catch (e) {
      console.error(
        `An error has occurred while removing the temp folder at ${TMP_FOLDER}. Please remove it manually. Error: ${e}`,
      );
    }
  }
}

export default fetcher;
