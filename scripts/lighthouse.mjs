import { $, fs, path, globby } from "zx";
import pkg from "lodash";

const { pick, reduce } = pkg;

const TW_URL =
  "https://search-tailwind-p-wnjkma-review-app.fe-cloudrun.kiwi.com/en/airport/lis/lisbon-portela-lisbon-portugal/";

const SC_URL =
  "https://search-tailwind-p-z2eiil-review-app.fe-cloudrun.kiwi.com/en/airport/lis/lisbon-portela-lisbon-portugal/";

/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

const parseReport = json =>
  reduce(
    pick(JSON.parse(json), ["audits"]).audits,
    (acc, cur) => {
      acc[cur.id] = pick(cur, [
        "numericValue",
        "numericUnit",
        "score",
        "displayValue",
        "scoreDisplayMode",
      ]);

      return acc;
    },
    {},
  );

(async () => {
  // const numberOfReports = Array.from({ length: 100 }).map((_, i) => i);
  // await $`lighthouse ${TW_URL} --chrome-flags="--headless" --output json --output-path ${path.join(
  //   __dirname,
  //   "tw.json",
  // )} --config-path ${path.join(__dirname, "lighthouse-desktop.mjs")}`;
  // for await (const idx of numberOfReports) {
  //   const {
  //     stdout: twReport,
  //   } = await $`lighthouse ${TW_URL} --quiet --chrome-flags="--headless" --output json --config-path ${path.join(
  //     __dirname,
  //     "lighthouse-desktop.mjs",
  //   )}`;
  //   const {
  //     stdout: scReport,
  //   } = await $`lighthouse ${SC_URL} --quiet --chrome-flags="--headless" --output json --config-path ${path.join(
  //     __dirname,
  //     "lighthouse-desktop.mjs",
  //   )}`;
  //   await fs.writeFile(
  //     path.join(__dirname, "tw", `${idx}.json`),
  //     JSON.stringify(parseReport(twReport)),
  //     "utf8",
  //   );
  //   await fs.writeFile(
  //     path.join(__dirname, "sc", `${idx}.json`),
  //     JSON.stringify(parseReport(scReport)),
  //     "utf8",
  //   );
  // }

  const combined = {
    "first-contentful-paint": [],
    "largest-contentful-paint": [],
    "first-meaningful-paint": [],
    "speed-index": [],
    interactive: [],
    "total-blocking-time": [],
    "max-potential-fid": [],
    "cumulative-layout-shift": [],
  };

  await globby(path.join(__dirname, "sc", "*.json")).then(async files => {
    for (const f of files) {
      const data = await fs.readFile(f, "utf8");
      const parsed = JSON.parse(data);
      Object.entries(parsed).forEach(([key, value]) => {
        combined[key].push(parseFloat(value.displayValue));
      });
    }
  });

  const average = Object.entries(combined).reduce((acc, [key, value]) => {
    acc[key] = value.reduce((a, b) => a + b, 0) / value.length;
    return acc;
  }, {});

  await fs.writeFile(path.join(__dirname, "result-sc.json"), JSON.stringify(average), "utf8");
})();
