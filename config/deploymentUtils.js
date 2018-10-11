// @flow
// const { resolve } = require("path");
const octokit = require("@octokit/rest")();
// require("dotenv").config({ path: resolve(".env") });

const repo = "orbit-components";

export const getPr = async (branchName: string) => {
  const res = await octokit.pullRequests.getAll({
    owner: "kiwicom",
    repo,
    head: `kiwicom:${branchName}`,
  });
  return res.data[0];
};

export const updateLiveURL = async (branchName: string, lastUrl: string) => {
  const pr = await getPr(branchName);
  octokit.authenticate({
    type: "integration",
    token: process.env.GITHUB_TOKEN,
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
