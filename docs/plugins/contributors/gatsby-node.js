const { Octokit } = require("@octokit/rest");
const path = require("path");
const fs = require("fs-extra");
const prettier = require("prettier");

const { warnMissingAccessToken } = require("../../utils/warnings");

const NODE = `contributor`;

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, { repo, owner }) => {
  const { createNode } = actions;
  const staticData = JSON.parse(fs.readFileSync(path.join(__dirname, "./users.json")));

  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require("dotenv").config({
      path: path.join(process.cwd(), `../.env`),
    });

    const octokit = new Octokit({ auth: process.env.GH_TOKEN });
    const names = [];

    if (process.env.NODE_ENV === "development") {
      await octokit.repos
        .listContributors({
          owner,
          repo,
        })
        .then(c => names.push(...c.data.map(({ login }) => login)));

      const reqs = names.map(username => octokit.users.getByUsername({ username }));
      const users = await Promise.all(reqs).then(all =>
        all.map(n => {
          const { login, twitter_username, blog, bio, avatar_url, html_url } = n.data;
          return {
            id: createNodeId(`${NODE}-contributor-${login}`),
            name: login,
            error: "",
            twitter: twitter_username,
            website: blog,
            info: bio,
            active: false,
            dribble: "",
            avatar_url,
            position: "",
            github: html_url,
          };
        }),
      );

      const fetchedUsersContent = await prettier.format(JSON.stringify(users), {
        ...(await prettier.resolveConfig(__dirname)),
        parser: "json",
      });
      await fs.writeFile(path.join(__dirname, "fetchedUsers.json"), fetchedUsersContent);

      staticData.concat(users).forEach(u => {
        return createNode({
          error: u.error || "",
          avatar_url: u.avatar_url || "",
          ...u,
          parent: null,
          children: [],
          internal: {
            type: NODE,
            content: JSON.stringify(u),
            contentDigest: createContentDigest(u),
          },
        });
      });
    } else {
      const users = await fs.readFile(path.join(__dirname, "fetchedUsers.json"));

      staticData.concat(JSON.parse(users)).forEach(u => {
        return createNode({
          error: u.error || "",
          avatar_url: u.avatar_url || "",
          ...u,
          parent: null,
          children: [],
          internal: {
            type: NODE,
            content: JSON.stringify(u),
            contentDigest: createContentDigest(u),
          },
        });
      });
    }
  } catch (error) {
    staticData.forEach(user => {
      createNode({
        ...user,
        error: warnMissingAccessToken(error),
        avatar_url: "",
        parent: null,
        children: [],
        internal: {
          type: NODE,
          content: JSON.stringify(user),
          contentDigest: createContentDigest(user),
        },
      });
    });
    console.error(error);
    warnMissingAccessToken(error);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Contributor implements Node {
      id: ID!
      name: String
      info: String
      error: String
      position: String
      dribbble: String
      github: String
      avatar_url: String
      twitter: String
      website: String
      active: Boolean
    }
  `;

  createTypes(typeDefs);
};
