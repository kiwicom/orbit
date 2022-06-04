import { ProjectMember, User } from "../interfaces";

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
