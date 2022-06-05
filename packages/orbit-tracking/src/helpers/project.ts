import { execaCommand } from "execa";
import ora from "ora";
import { chalk, path } from "zx";

import { __dirname } from "./path";
import { User, TrackedDataType } from "../interfaces";
import { TMP_FOLDER } from "../consts";
import { getVersions } from "./versions";

interface Project {
  cmd: string;
  name: string;
  url: string;
  id: string;
  description: string;
  createdAt: string;
  lastCommit: {
    title: string;
    sha: string;
    webUrl: string;
  };
  members: Record<"maintainers" | "owners", User[]>;
}

interface ProjectOutput extends Omit<Project, "cmd" | "id"> {
  trackedData: TrackedDataType;
}

type projectCmdType = (config: string, project: Project) => Promise<ProjectOutput>;

const getTrackedData = async ({ config, id, name, url, data }) => {
  const projectId = `${name}-${id}`;
  const projectFolder = path.resolve(TMP_FOLDER, projectId);
  const orbitVersion = await getVersions(projectFolder);

  return execaCommand(
    `yarn react-scanner-orbit -c ${
      config || path.resolve(__dirname, "../../dist", "react-scanner.config.js")
    } -p ${projectFolder}`,
    { env: { REPO_URL: url, OUTPUT_DIR: projectFolder } },
  ).then(({ stdout }) => {
    console.log(chalk.bold.green(`parsed: ${name}`));
    return {
      name,
      ...data,
      url,
      orbitVersion,
      trackedData: JSON.parse(stdout.substring(stdout.indexOf("["))),
    };
  });
};

export const projectCmd: projectCmdType = (config, { id, name, cmd, url, ...data }) => {
  const spinnerFetch = ora(`fetching: ${name}`).start();
  return execaCommand(cmd)
    .then(() => {
      spinnerFetch.color = "green";
      spinnerFetch.text = `fetched: ${name}`;
      spinnerFetch.stop();
    })
    .then(() => getTrackedData({ config, id, name, url, data }));
};
