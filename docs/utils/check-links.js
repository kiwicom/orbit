const globby = require("globby");
const posthtml = require("posthtml");
const fs = require("fs");
const server = require("browser-sync").create();
const checkLinks = require("check-links");
const path = require("path");

try {
  require("dotenv-safe").config({
    example: path.resolve(__dirname, `../../.env.example`),
    path: path.resolve(__dirname, `../../.env`),
    allowEmptyValues: true,
  });
} catch (err) {
  if (err.missing.includes("GH_TOKEN")) {
    console.warn(`Missing an access token for GitHub. Please create one:
      https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token`);
  }
}

const checkForDeadUrls = async () => {
  const files = await globby("docs/public/**/*.html");

  const urls = new Set();

  const ph = posthtml([
    require("posthtml-urls")({
      eachURL: url => {
        urls.add(url);
      },
    }),
  ]);

  files.forEach(file => {
    ph.process(fs.readFileSync(file));
  });

  await new Promise(resolve => {
    server.init(
      {
        logLevel: "silent",
        open: false,
        port: 3000,
        server: "docs/public",
        ui: false,
      },
      resolve,
    );
  });

  const urlsWithLocal = Array.from(urls).map(url =>
    url.match(/^\/\w/) ? `http://localhost:3000${url}` : url,
  );

  // Split GitHub URLs out so we can add a header to them
  const [githubUrls, nonGithubUrls] = urlsWithLocal.reduce(
    ([github, notGithub], url) => {
      return url.startsWith("https://github.com")
        ? [[...github, url], notGithub]
        : [github, [...notGithub, url]];
    },
    [[], []],
  );

  const notGithubResults = await checkLinks(nonGithubUrls);

  // Use token from environment to avoid rate limits
  const githubResults = await checkLinks(githubUrls, {
    headers: {
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
    },
  });

  const results = { ...notGithubResults, ...githubResults };

  server.exit();

  // Filter out known issues
  // Figma returns 403 status for all requests
  const urlsToCheck = Object.keys(results).filter(url => !url.match(/figma\.com/));

  const deadUrls = urlsToCheck.filter(url => results[url].status === "dead");

  if (deadUrls.length > 0) {
    console.error(
      `Dead URLs:\n\n${deadUrls
        .map(url => `${url} status: ${results[url].statusCode}`)
        .join("\n")}`,
    );
    // TODO: uncomment
    // process.exit(1);
  }
};

checkForDeadUrls();
