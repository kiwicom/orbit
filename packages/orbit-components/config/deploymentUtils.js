// @flow
// const { resolve } = require("path");
const { Octokit } = require("@octokit/rest");

const repo = "orbit";

export const getPr = async (branchName: string, token: string) => {
  const octokit = new Octokit({ auth: token });
  const { data } = await octokit.pulls.get({
    owner: "kiwicom",
    repo,
    head: `kiwicom:${branchName}`,
  });
  return data;
};

export const updateLiveURL = async (
  branchName: string,
  lastUrl: string,
  token: string,
  urlName: string = "LiveURL",
) => {
  if (!branchName) throw new Error("Missing branch parameter");
  // eslint-disable-next-line no-console
  console.log("deploy", branchName, lastUrl, token, urlName);
  const pr = await getPr(branchName, token);
  const octokit = new Octokit({ log: console, auth: token });

  const { data } = await octokit.pulls.get({
    owner: "kiwicom",
    repo,
    number: pr.number,
  });
  let newBody;
  if (data.body.match(/<url>/)) {
    newBody = data.body.replace(/<url>(.*)(<\/url>)?/, `<url>${urlName}: ${lastUrl}</url>`);
  } else {
    newBody = data.body.concat(`<br/><br/><br/><url>${urlName}: ${lastUrl}</url>`);
  }
  await octokit.pulls.update({
    owner: "kiwicom",
    repo,
    number: pr.number,
    body: newBody,
  });
};

require("make-runnable");
