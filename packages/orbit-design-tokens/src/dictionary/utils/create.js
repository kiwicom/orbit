// @flow
const _ = require("lodash");

/*
  Returns string if condition is met.
  TODO: Can be moved to some string utils when there will be more.
 */
const falsyString = (condition, string) => (condition ? string : undefined);

/*
  Returns variable declaration, e.g. const Test = value
 */
const createVariableDeclarator = (name, type = "const", value, withExport = false) => {
  const exportString = falsyString(withExport, "export");
  return [exportString, type, name, "=", value].join(" ").trim();
};

/*
  Create arrow function expression from given parameters and value.
  e.g. ( par1, par2 ) => value
 */
const createArrowFunctionExpression = (parameters, returnValue) => {
  const plainParameters = Array.isArray(parameters) ? parameters.join(",") : parameters;
  return ["(", plainParameters, ")", "=>", returnValue].join(" ").trim();
};

/*
  Creates equivalent type for TS/Flow for cases when the key: value are the same.
  e.g. name: Name
 */
const createEquivalentType = name => `${name}: ${_.upperFirst(name)}`;
/*
  For creating objects, e.g.
  {
    [key]: value,
  }

  Can be also piped – with | as exact type if needed.
 */
const createObject = (value, withPipe = false) => {
  const pipe = falsyString(withPipe, "|");
  return ["{", pipe, value, pipe, "}"].join("");
};

/*
  Converts array ["key:value", "key:value"] to string that should be consumed in createObject
 */
const createValue = (values, delimiter = ",") => {
  return values.join(delimiter);
};

/*
  Creates compatible property of object for all platforms
 */
const createObjectProperty = (name, value) => `${name}:${value}`;

/*
  Creates export with/without default or declare word.
  e.g. declare export default Test
 */
const createDeclareExport = (name, options) => {
  const { isDefault = true, isDeclare = true } = options;
  return [
    falsyString(isDeclare, "declare"),
    "export",
    falsyString(isDefault, "default"),
    name,
  ].join(" ");
};

const createDeclareModule = path => `declare module "${path}";`;

const createOptionalType = name => `${name}?`;

/*
  Creates subset type - both for TS/Flow.
  e.g. $Shape<Name>
 */
const createSubsetType = (name, platform) => {
  const subsetType = platform === "flow" ? "$Shape" : "Partial";
  return `${subsetType}<${_.upperFirst(name)}>`;
};

/*
  Creates import of some type.
  e.g. import type { Type } from "path"
 */
const createTypeImport = (name, path) => `import type { ${_.upperFirst(name)} } from "${path}"\n`;

module.exports = {
  falsyString,
  createVariableDeclarator,
  createArrowFunctionExpression,
  createObject,
  createValue,
  createDeclareExport,
  createObjectProperty,
  createEquivalentType,
  createDeclareModule,
  createOptionalType,
  createSubsetType,
  createTypeImport,
};
