import { Octokit } from "@octokit/rest";
import { argv } from "zx";

const repo = "orbit";

const parseDescription = (body: string | null, str: string) => {
  if (body && body.match(str)) return body;
  return (body && body.concat(`\n ${str}`)) || "";
};

(async () => {
  const { pr, lastUrl, token, urlName = "LiveUrl" } = argv;
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
})();
