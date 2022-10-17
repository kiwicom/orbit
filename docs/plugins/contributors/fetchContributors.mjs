import { Octokit } from "@octokit/rest";
import path from "path";
import fs from "fs-extra";
import dotenv from "dotenv-safe";
import prettier from "prettier";
import _ from "lodash";
import filedirname from "filedirname";

const [, __dirname] = filedirname();

try {
  dotenv.config({
    path: path.join(process.cwd(), `../.env`),
    example: path.join(process.cwd(), `../.env.example`),
  });
} catch (error) {
  // TODO: ADD missingToken utility function after switch to ts-node
  console.error(error);
}

async function fetchUsers() {
  try {
    const octokit = new Octokit({ auth: process.env.GH_TOKEN });
    const usernames = [];

    await octokit.repos
      .listContributors({
        owner: "kiwicom",
        repo: "orbit",
      })
      .then(c => usernames.push(...c.data.map(({ login }) => login).filter(Boolean)));

    const requests = usernames.map(username => octokit.users.getByUsername({ username }));
    const users = _.sortBy(
      (await Promise.all(requests)).map(n => {
        const { login, id, name, twitter_username, blog, bio, avatar_url, html_url } = n.data;
        return {
          id,
          name,
          username: login,
          error: "",
          twitter: twitter_username,
          website: blog,
          info: bio,
          core: false,
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
  } catch (err) {
    console.error(err);
  }
}

fetchUsers();
