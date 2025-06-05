import yaml from "js-yaml";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import _ from "lodash";

import { mergeConfigs } from "./helpers.mjs";
import fetchConfigs from "./fetchConfigs.mjs";

(async () => {
  try {
    const IOS_URL = `https://raw.githubusercontent.com/kiwicom/orbit-swiftui/main/component-status.yaml`;
    const ANDROID_URL = `https://raw.githubusercontent.com/kiwicom/orbit-compose/main/component-status.yaml`;

    const CURRENT_STATUSES = path.resolve(__dirname, "../src/data/component-status.yaml");

    const getData = async () => {
      const currentStatuses = fs.readFileSync(CURRENT_STATUSES, "utf-8");
      try {
        const output = mergeConfigs(currentStatuses, await fetchConfigs(ANDROID_URL, IOS_URL));
        return Object.values(output);
      } catch (err) {
        console.error(err);
        return undefined;
      }
    };

    const stringify = data => JSON.stringify(_.sortBy(data, ["component"]));

    const updateStatuses = async () => {
      const data = await getData();
      const currentStatuses = fs.readFileSync(CURRENT_STATUSES, "utf-8");

      if (stringify(yaml.load(currentStatuses)) === stringify(data)) {
        console.info(chalk.bold.magenta(`There are no new changes in component statuses`));
      } else {
        fs.writeFile(CURRENT_STATUSES, yaml.dump(data))
          .then(() => console.info(chalk.bold.greenBright("Component status was updated")))
          .catch(err =>
            console.error(
              chalk.bold.redBright(
                `An error occurred trying to write file to ${CURRENT_STATUSES} \n ${err}`,
              ),
            ),
          );
      }
    };

    await updateStatuses();
  } catch (err) {
    console.error(err);
  }
})();
