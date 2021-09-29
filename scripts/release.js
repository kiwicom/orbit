const conventionalChangelog = require("conventional-changelog");
const recommendedBump = require("conventional-recommended-bump");
const markdownChalk = require("markdown-chalk");
// const githubReleaser = require("conventional-github-releaser");
const dedent = require("dedent");
const semver = require("semver");
// const ora = require("ora");

require("zx/globals");

const changelogPreset = require.resolve("conventional-changelog-angular");

void (async function () {
  const { workspaces } = require("../package.json");
  const packagePaths = await globby(workspaces.map(workspace => `${workspace}/package.json`));
  const publicPackages = packagePaths
    .map(pkgPath => require(`../${pkgPath}`))
    .filter(pkg => !pkg.private);

  const updates = await Promise.all(
    publicPackages.map(async pkg => {
      const manifestPath = `${pkg.repository.directory}/package.json`;
      const tagPrefix = `${pkg.name}@`;

      const releaseType = await new Promise((resolve, reject) => {
        recommendedBump(
          {
            path: manifestPath,
            tagPrefix,
            preset: changelogPreset,
          },
          (error, recommendation) => {
            if (error) return reject(error);
            resolve(recommendation.releaseType);
          },
        );
      });

      const changelog = await new Promise((resolve, reject) => {
        conventionalChangelog(
          {
            tagPrefix,
            preset: changelogPreset,
            warn: message => {
              console.warn(`\n${chalk.redBright(message)}`);
            },
          },
          {
            host: "https://github.com",
            owner: "kiwicom",
            repository: "orbit",
          },
          {
            path: manifestPath,
          },
        )
          .on("error", reject)
          .on("data", chunk => {
            const markdown = String(chunk).trim();
            resolve(markdown.includes("\n") ? markdown : null);
          });
      });

      return {
        packageName: pkg.name,
        currentVersion: pkg.version,
        nextVersion: semver.inc(pkg.version, releaseType),
        changelog,
      };
    }),
  );

  const changelog = updates
    .map(update => {
      if (!update.changelog) return null;
      const titleRe = /##\s*\([\d-]+\)/m;
      return dedent`
        ${chalk.yellow.underline(`${update.packageName}@${update.nextVersion}`)}

        ${markdownChalk(update.changelog.replace(titleRe, "")).trim()}
      `;
    })
    .filter(Boolean)
    .join("\n");

  if (changelog) {
    console.log(changelog);
  } else {
    console.log(`\n${chalk.greenBright("No changes since last release")}`);
  }

  if (updates.some(update => update.nextVersion)) {
    console.log(dedent`
      \n${updates
        .map(
          update =>
            `${update.packageName}: ${chalk.dim(update.currentVersion)} → ${chalk.bold(
              update.nextVersion,
            )}`,
        )
        .join("\n")}
    `);
  }
})();
