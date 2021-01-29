// @flow
// const { resolve } = require("path");
const { octokit } = require("@octokit/rest");

const repo = "orbit";

export const getPr = async (branchName: string) => {
  const res = await octokit.pullRequests.getAll({
    owner: "kiwicom",
    repo,
    head: `kiwicom:${branchName}`,
  });
  return res.data[0];
};

export const updateLiveURL = async (branchName: string, lastUrl: string, token: string) => {
  if (!branchName) throw new Error("Missing branch parameter");
  const pr = await getPr(branchName);
  octokit.authenticate({
    type: "integration",
    token,
  });
  const res = await octokit.pullRequests.get({
    owner: "kiwicom",
    repo,
    number: pr.number,
  });
  let newBody;
  if (res.data.body.match(/<url>/)) {
    newBody = res.data.body.replace(/<url>(.*)(<\/url>)?/, `<url>LiveURL: ${lastUrl}</url>`);
  } else {
    newBody = res.data.body.concat(`<br/><br/><br/><url>LiveURL: ${lastUrl}</url>`);
  }
  await octokit.pullRequests.update({
    owner: "kiwicom",
    repo,
    number: pr.number,
    body: newBody,
  });
};

require("make-runnable");
