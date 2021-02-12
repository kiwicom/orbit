// @flow
// const { resolve } = require("path");
const { Octokit } = require("@octokit/rest");

const repo = "orbit";

const parseDescription = (body, str) => {
  if (body.match(str)) return body;
  return body.concat(`\n ${str}`);
};

export const updateLiveURL = async (
  pr: number,
  lastUrl: string,
  token: string,
  urlName: string = "LiveURL",
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

require("make-runnable");
