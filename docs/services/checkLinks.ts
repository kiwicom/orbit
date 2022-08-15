import server from "browser-sync";
import checkLinks from "check-links";
import { path, globby } from "zx";
import unified from "unified";
import parse from "rehype-parse";
import inspectUrls from "@jsdevtools/rehype-url-inspector";
import stringify from "rehype-stringify";
import reporter from "vfile-reporter";
import fsx from "fs-extra";
import dotenv from "dotenv-safe";
import toVFile from "to-vfile";

import { warnMissingAccessToken } from "../utils/warnings";

try {
  dotenv.config({
    example: path.resolve(__dirname, `../../.env.example`),
    path: path.resolve(__dirname, `../../.env`),
    allowEmptyValues: true,
  });
} catch (error) {
  warnMissingAccessToken(error);
}

const checkForDeadUrls = async () => {
  if (!(await fsx.pathExists("docs/public"))) {
    throw new Error(`You need to build @kiwicom/orbit.kiwi in order to check links`);
  }

  const files = await globby("docs/public/**/*.html");

  await new Promise(resolve => {
    server.create().init(
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

  const urls = new Map();

  const processor = await unified()
    .use(parse)
    .use(inspectUrls, {
      inspectEach({ file, node, url }) {
        // filter out preconnect links: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preconnect
        // Otherwise was failing on preconnect links to fonts.gstatic.com (to prepare to load fonts)
        // @ts-expect-error unknown
        if (node.tagName === "link" && node.properties.rel.find(e => e === "preconnect")) return;

        if (!urls.has(url)) {
          urls.set(url, { sources: [file] });
        } else {
          urls.get(url).sources.push(file);
        }
      },
    })
    .use(stringify);

  files.forEach(file => {
    // Read the example HTML file
    const virtualFile = toVFile.readSync(file);

    // Crawl the HTML files and find all the URLs
    processor.process(virtualFile);
  });

  const urlsWithLocal = new Map();
  const githubUrls = new Map();
  urls.forEach((sources, url) => {
    // Filter out known issues
    // Figma returns 403 status for all requests
    if (url.match(/figma\.com/)) {
      return;
    }

    // Don't check images in CSS or headers
    if (url.startsWith("data:image") || url.startsWith("#")) {
      return;
    }

    // Add localhost to relative links but not //images.kiwi.com links
    const urlToCheck =
      url.startsWith("/") && !url.startsWith("//") ? `http://localhost:3000${url}` : url;

    // Separate GitHub URLs to add headers later
    if (url.match(/github\.com/)) {
      githubUrls.set(urlToCheck, sources);
    } else {
      urlsWithLocal.set(urlToCheck, sources);
    }
  });

  const notGithubResults = await checkLinks(Array.from(urlsWithLocal.keys()));

  // Use token from environment to avoid rate limits
  const githubResults = await checkLinks(Array.from(githubUrls.keys()), {
    headers: {
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
    },
  });

  const results = { ...notGithubResults, ...githubResults };

  server.create().exit();

  const deadUrls = Object.keys(results).filter(url => results[url].status === "dead");

  if (deadUrls.length > 0) {
    const completeMap = new Map([...urlsWithLocal, ...githubUrls]);

    const filesWithMessages: toVFile.VFile[] = [];
    deadUrls.forEach(deadUrl => {
      completeMap.get(deadUrl).sources.forEach(file => {
        file.message(`Broken link: ${deadUrl}`);
        filesWithMessages.push(file);
      });
    });

    console.error(reporter(filesWithMessages));
    /* TODO: uncomment when the dead links in Navbar have been resolved
    process.exit(1); */
  }
};

checkForDeadUrls();
