import _ from "lodash";

import { falsyString } from "./string.js";

const getDelimiter = (platform: "javascript" | "typescript" | "css") => {
  switch (platform) {
    case "typescript":
      return ";";
    default:
      return ",";
  }
};

/**
  Returns variable declaration, e.g. const Test = value
 */
export const createVariableDeclarator = (
  name: string,
  value: string,
  withExport = false,
  type: "const" | "type" = "const",
): string => {
  const exportString = falsyString(withExport, "export");
  return [exportString, type, name, "=", value].join(" ").trim();
};

/**
  Create arrow function expression from given parameters and value.
  e.g. ( par1, par2 ) => value
 */
export const createArrowFunctionExpression = (
  parameters: string[] | string,
  returnValue: string,
): string => {
  const plainParameters = Array.isArray(parameters) ? parameters.join(",") : parameters;
  return ["(", plainParameters, ")", "=>", returnValue].join(" ").trim();
};

/**
  Creates equivalent type for TS for cases when the key: value are the same.
  e.g. name: Name
 */

export const createEquivalentType = (name: string): string => `${name}: ${_.upperFirst(name)}`;
/*
  For creating objects, e.g.
  {
    [key]: value,
  }

  Can be also piped – with | as exact type if needed.
 */

export const createObjectExpression = (value: string): string => {
  return ["{", value, "}"].join("");
};

export const createArrayExpression = (value: string): string => {
  return ["[", value, "]"].join("");
};

/*
  Converts array ["key:value", "key:value"] to string that should be consumed in createObject
 */
export const createValue = (values: string[], platform: "javascript" | "typescript"): string => {
  const delimiter = getDelimiter(platform);
  return values.filter(Boolean).join(delimiter);
};

/*
  Creates compatible property of object for all platforms
 */
export const createObjectProperty = (name: string, value: string | number): string => {
  return `${name}:${value}`;
};

/*
  Creates export with/without default or declare word.
  e.g. declare export default Test
 */
export const createDeclareExport = (
  name: string,
  options: { isDefault?: boolean; isDeclare?: boolean },
): string => {
  const { isDefault = true, isDeclare = true } = options;
  return [
    falsyString(isDeclare, "declare"),
    "export",
    falsyString(isDefault, "default"),
    name,
  ].join(" ");
};

export const createDeclareModule = (path: string): string => `declare module "${path}";`;

export const createOptionalType = (name: string): string => `${name}?`;

/**
  Creates subset type
 */

export const createSubsetType = (name: string): string => {
  const subsetType = "Partial";
  return `${subsetType}<${_.upperFirst(name)}>`;
};

/**
  Creates default import of something.
  e.g. import Something from "path"
 */

export const createDefaultImport = (name: string, path: string): string =>
  `import ${name} from "${path}"\n`;

/**
  Creates import of some type.
  e.g. import type { Type } from "path"
 */

export const createTypeImport = (name: string, path: string): string =>
  `import type { ${_.upperFirst(name)} } from "${path}"\n`;
