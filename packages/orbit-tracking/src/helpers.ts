import path from "path";
import fg from "fast-glob";
import fs from "fs-extra";

import { ProjectMember, User } from "./interfaces";
import { CATEGORIES } from "./consts";

export const headingTemplate = (str: string) => `
  ++++++++++++++++ ++++++++++++++++
  ++++++++++++++++ ++++++++++++++++

  ${str}

  ++++++++++++++++ ++++++++++++++++
  ++++++++++++++++ ++++++++++++++++
`;

export const filterMembers = (members: ProjectMember[]) =>
  members.reduce<Record<"maintainers" | "owners", User[]>>(
    (acc, cur) => {
      const { accessLevel, user, id } = cur;
      const { bot, state } = user;
      const avatar = user.avatarUrl.match(/uploads\/-\/system/) ? "" : user.avatarUrl;

      if (bot || state === "blocked" || state === "deactivated") return acc;
      if (accessLevel.stringValue === "OWNER") acc.owners.push({ id, ...user });
      else acc.maintainers.push({ ...user, id, avatarUrl: avatar });

      return acc;
    },
    { owners: [], maintainers: [] },
  );

export const getOutputPath = (p: string, name: string) => {
  if (p) return path.resolve(p, `tracking-${name}.json`);
  return path.resolve(process.cwd(), `tracking-${name}.json`);
};

export const getVersions = async (pathToFolder: string) => {
  const lockFiles = await fg(`${pathToFolder}/**/@(yarn.lock|package-lock.json)`);
  let version = "";

  for (const lock of lockFiles) {
    const data = await fs.readFile(lock, "utf-8");

    const ver = data.match(
      /https:\/\/registry.yarnpkg.com\/@kiwicom\/orbit-components\/-\/orbit-components-[~^]?([\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/g,
    );

    // eslint-disable-next-line prefer-destructuring
    if (ver) version = ver[0].split("-").slice(-1)[0];
  }

  return version;
};

export const getCategory = (name: string) => {
  for (const [cat, components] of Object.entries(CATEGORIES)) {
    if (components.includes(name)) {
      return cat.toLowerCase();
    }
  }

  return "unknown";
};

export const timestamp = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return `${date}-${month}-${year}`;
};
