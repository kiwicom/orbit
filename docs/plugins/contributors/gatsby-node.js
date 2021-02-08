const { Octokit } = require("@octokit/rest");

const fallback = require("./fallback.json");

const NODE = `contributor`;

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, { repo, owner }) => {
  const { createNode } = actions;

  try {
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
    if (error.status === 401) {
      console.error("401: UNAUTHORIZED, CREATE GITHUB TOKEN");
      createNode({
        ...fallback,
        id: createNodeId(`${NODE}-${fallback.id}`),
        parent: null,
        children: [],
        internal: {
          type: NODE,
          content: JSON.stringify(fallback),
          contentDigest: createContentDigest(fallback),
        },
      });
    } else {
      console.error(error);
    }
  }
  return undefined;
};
