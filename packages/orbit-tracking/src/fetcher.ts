import { fs, path, chalk } from "zx";

import {
  mapProjects,
  getOutputPath,
  projectCmd,
  timestamp,
  apiRequest,
  errorMessage,
  infoMessage,
} from "./helpers";
import { ProjectsQuery, Scope } from "./interfaces";
import { PROJECTS, TMP_FOLDER } from "./consts";
import { queries } from "./api";
import saveData from "./saver";
import "dotenv/config";

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

export const gitlabApiCall = async ({ ids, folder = "./", outputPath, config }: ApiCallArgs) => {
  const res = await apiRequest<ProjectsQuery>(queries.projectsQuery, { ids });

  if (res?.data) {
    const commands = mapProjects(res.data.projects.nodes, folder);

    await Promise.all(commands.map(p => projectCmd(config, p))).then(result => {
      if (outputPath) {
        fs.writeFile(
          getOutputPath(outputPath, timestamp()),
          JSON.stringify(result, null, 2),
          "utf8",
        ).then(() => {
          infoMessage(`Successfully created ${timestamp()}.json file in the ${outputPath}`);
        });
      } else {
        saveData(JSON.stringify(result, null, 2)).then(data => {
          infoMessage(`Successfully created MR: ${data?.mergeRequestCreate.mergeRequest.title}`);
          console.info(
            chalk.underline.bold.green(`url: ${data?.mergeRequestCreate.mergeRequest.webUrl} 🔗`),
          );
        });
      }
    });
  }

  return null;
};

async function fetcher({ scope, outputPath, config }: Args) {
  try {
    const ids = scope.map(n => `gid://gitlab/Project/${PROJECTS[n]}`);
    await gitlabApiCall({ ids, folder: TMP_FOLDER, outputPath, config });
  } catch (err) {
    errorMessage(`\n ${err}`);
  } finally {
    try {
      if (path.resolve(TMP_FOLDER)) {
        fs.rmSync(TMP_FOLDER, { recursive: true });
      }
    } catch (e) {
      errorMessage(
        `An error has occurred while removing the temp folder at ${TMP_FOLDER}. Please remove it manually. Error: ${e}`,
      );
    }
  }
}

export default fetcher;
