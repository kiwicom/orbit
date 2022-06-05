import { fs, globby } from "zx";

export const getVersions = async (pathToFolder: string) => {
  const lockFiles = await globby(`${pathToFolder}/**/@(yarn.lock|package-lock.json)`);
  let version = "";

  for (const lock of lockFiles) {
    const data = await fs.readFile(lock, "utf-8");

    const ver = data.match(
      /https:\/\/registry.(yarnpkg.com|npmjs.org)\/@kiwicom\/orbit-components\/-\/orbit-components-[~^]?([\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/g,
    );

    // eslint-disable-next-line prefer-destructuring
    if (ver) version = ver[0].split("-").slice(-1)[0];
  }

  return version;
};
