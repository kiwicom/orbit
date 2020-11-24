// @flow
const _ = require("lodash");

const { createObjectProperty, createDeclareExport } = require("./create");

const determinateUpperFirst = platform => name => {
  if (platform === "javascript") {
    return name;
  }
  return _.upperFirst(name);
};

const determinateObjectPropertyAlias = platform => name => {
  if (platform === "javascript") {
    return name;
  }
  return createObjectProperty(name, determinateUpperFirst(platform)(name));
};

const determinateExport = platform => name => {
  if (platform === "javascript") {
    return createDeclareExport(name, {
      isDefault: true,
      isDeclare: false,
    });
  }
  return createDeclareExport(_.upperFirst(name), {
    isDefault: true,
    isDeclare: true,
  });
};

module.exports = {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
};
