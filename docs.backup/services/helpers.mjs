import yaml from "js-yaml";

export const mergeConfigs = (current, fetched) => {
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
