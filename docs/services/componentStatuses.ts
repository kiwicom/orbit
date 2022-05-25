import axios from "axios";
import yaml from "js-yaml";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import _ from "lodash";

export const IOS_URL = `https://raw.githubusercontent.com/kiwicom/orbit-swiftui/main/component-status.yaml`;
export const ANDROID_URL = `https://raw.githubusercontent.com/kiwicom/orbit-compose/main/component-status.yaml`;

const CURRENT_STATUSES = path.resolve(__dirname, "../src/data/component-status.yaml");

export const fetchConfigs = async (android: string, ios: string) => {
  const iosReq = axios.get(ios);
  const androidReq = axios.get(android);

  const data = await axios.all([androidReq, iosReq]).then(
    axios.spread((...responses) => {
      const { data: androidData } = responses[0];
      const { data: iosData } = responses[1];
      return androidData.concat(iosData);
    }),
  );

  return data;
};

export const mergeConfigs = (current: string, fetched: string) => {
  return yaml.load(current.concat(fetched)).reduce((acc, cur) => {
    const { component, ...released } = cur;
    if (!acc[component]) {
      acc[component] = cur;
    } else {
      acc[component] = { ...acc[component], ...released };
    }

    return acc;
  }, {});
};

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

updateStatuses();

export default updateStatuses;
