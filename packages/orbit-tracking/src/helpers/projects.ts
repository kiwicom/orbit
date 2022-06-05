import { ProjectMember, User, ProjectNode } from "../interfaces";

const mapMembers = (members: ProjectMember[]) =>
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

export const mapProjects = (data: ProjectNode[], folderName: string) =>
  data.map(
    ({ id, sshUrlToRepo: ssh, httpUrlToRepo: url, projectMembers, description, repository }) => {
      const projectId = id.replace(/^\D+/g, "");
      // retrieve name from url, because repository name can be the same twice (balkan has just `Frontend`)
      const name = url.split("/").slice(-1)[0].replace(".git", "");
      return {
        cmd: `git clone -b master ${ssh} --depth=1 --single-branch ${folderName}/${name}-${projectId}`,
        name,
        url,
        id: projectId,
        description,
        createdAt: new Date().toISOString(),
        lastCommit: repository.tree.lastCommit,
        members: mapMembers(projectMembers.nodes),
      };
    },
  );
