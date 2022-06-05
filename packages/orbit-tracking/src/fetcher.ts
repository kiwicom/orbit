import axios, { AxiosResponse } from "axios";
import { config as dotEnvConfig } from "dotenv-safe";
import { fs, path } from "zx";

import {
  mapProjects,
  getOutputPath,
  projectCmd,
  timestamp,
  errorMessage,
  infoMessage,
} from "./helpers";
import { ProjectsQuery, Scope } from "./interfaces";
import { PROJECTS, TMP_FOLDER, BASE_URL } from "./consts";
import { queries } from "./api";

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
  example: path.resolve(process.cwd(), "../.env.example"),
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

export const gitlabApiCall = async ({ ids, folder = "./", outputPath, config }: ApiCallArgs) => {
  const { data: response } = await request<ProjectsQuery>(queries.projectsQuery, { ids });

  if (response) {
    const commands = mapProjects(response.data.projects.nodes, folder);

    await Promise.all(commands.map(p => projectCmd(config, p))).then(result => {
      fs.writeFile(getOutputPath(outputPath, timestamp()), JSON.stringify(result, null, 2), "utf8");
      infoMessage(`Successfully created ${timestamp()}.json file in the ${outputPath}`);
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
