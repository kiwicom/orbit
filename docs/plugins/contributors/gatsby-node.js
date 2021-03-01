const { Octokit } = require("@octokit/rest");
const path = require("path");

const warnMissingAccessToken = require("../../utils/warnings");

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
      html_url: String
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
    warnMissingAccessToken(error);
  }

  return [];
};
