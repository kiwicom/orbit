const { Octokit } = require("@octokit/rest");
const path = require("path");

const NODE = `contributor`;

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, { repo, owner }) => {
  const { createNode, createTypes } = actions;

  createTypes(
    `
    type Contributor implements Node {
      id: ID!
      login: String
      avatar_url: String
      url: String
      name: String
      blog: String
      bio: String
      email: String
      location: String
      twitter_username: String
      company: String
    }
  `,
  );

  try {
    require("dotenv-safe").config({
      example: path.resolve(__dirname, `../../../.env.example`),
      path: path.resolve(__dirname, `../../../.env`),
      allowEmptyValues: true,
    });

    const octokit = new Octokit({ auth: process.env.GH_TOKEN });
    const names = [];

    await octokit.repos
      .listContributors({
        owner,
        repo,
      })
      .then(c => names.push(...c.data.map(({ login }) => login)));

    const reqs = names.map(username => octokit.users.getByUsername({ username }));
    const users = await Promise.all(reqs).then(all => all.map(n => n.data));

    users.forEach(u => {
      createNode({
        ...u,
        id: createNodeId(`${NODE}-${u.id}`),
        parent: null,
        children: [],
        internal: {
          type: NODE,
          content: JSON.stringify(u),
          contentDigest: createContentDigest(u),
        },
      });
    });
  } catch (error) {
    if (error.missing.includes("GH_TOKEN")) {
      console.warn("Missing an access token for GitHub. Please create one.");
      console.info(
        "The token is needed to display the Contributors component, which is based on the GitHub API.",
        "Create a personal access token: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",
        "Don't forget to include the required scopes for the token: all repo scopes and read:org.",
        "After creating a token in GitHub, add it to a .env file in the root folder with GH_TOKEN=<YOUR TOKEN>",
      );
    } else {
      console.error(error);
      console.info(
        "You may have forgotten to include the repo and read:org scopes for your GitHub access token.",
      );
    }
  }

  return [];
};
