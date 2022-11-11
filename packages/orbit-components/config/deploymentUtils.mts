import { Octokit } from "@octokit/rest";
import "make-runnable";

const repo = "orbit";

const parseDescription = (body: string | null, str: string) => {
  if (body && body.match(str)) return body;
  return (body && body.concat(`\n ${str}`)) || "";
};

export const updateLiveURL = async (
  pr: number,
  lastUrl: string,
  token: string,
  urlName = "LiveURL",
) => {
  if (!pr) throw new Error("Missing PR number");

  const octokit = new Octokit({ log: console, auth: token });

  const { data } = await octokit.pulls.get({
    owner: "kiwicom",
    repo,
    pull_number: pr,
  });

  await octokit.pulls.update({
    owner: "kiwicom",
    repo,
    pull_number: pr,
    body: parseDescription(data.body, `${urlName}: ${lastUrl}`),
  });
};
