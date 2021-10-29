const { Octokit } = require("@octokit/rest");
const path = require("path");
const fs = require("fs-extra");
const prettier = require("prettier");
const _ = require("lodash");
const dotenv = require("dotenv-safe");

const { warnMissingAccessToken } = require("../../utils/warnings");

const NODE = `contributor`;

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, { repo, owner }) => {
  const { createNode } = actions;
  const staticData = JSON.parse(fs.readFileSync(path.join(__dirname, "./users.json")));

  try {
    dotenv.config({
      path: path.join(process.cwd(), `../.env`),
      example: path.join(process.cwd(), `../.env.example`),
    });
  } catch (error) {
    if (error.missing.includes("GH_TOKEN")) {
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
      return;
    }
  }

  try {
    const octokit = new Octokit({ auth: process.env.GH_TOKEN });
    const usernames = [];

    if (process.env.NODE_ENV === "development") {
      await octokit.repos
        .listContributors({
          owner,
          repo,
        })
        .then(c => usernames.push(...c.data.map(({ login }) => login)));

      const reqs = usernames.map(username => octokit.users.getByUsername({ username }));
      const users = _.sortBy(
        (await Promise.all(reqs)).map(n => {
          const { login, name, twitter_username, blog, bio, avatar_url, html_url } = n.data;
          return {
            id: createNodeId(`${NODE}-contributor-${login}`),
            name,
            username: login,
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
        "name",
      );

      const fetchedUsersContent = await prettier.format(JSON.stringify(users), {
        ...(await prettier.resolveConfig(__dirname)),
        parser: "json",
      });

      const fetched = path.join(__dirname, "fetchedUsers.json");

      if (!_.isEqual(users, JSON.parse(fs.readFileSync(fetched, "utf-8")))) {
        await fs.writeFile(fetched, fetchedUsersContent);
      }

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
    console.error(error);
    console.info(
      "You may have forgotten to include the repo and read:org scopes for your GitHub access token.",
    );
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
