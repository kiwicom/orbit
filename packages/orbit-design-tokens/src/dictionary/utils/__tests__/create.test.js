// @flow
import {
  createVariableDeclarator,
  createObject,
  createValue,
  createDeclareExport,
  createObjectProperty,
  createArrowFunctionExpression,
  createEquivalentType,
  createDeclareModule,
  createOptionalType,
  createSubsetType,
  createTypeImport,
} from "../create";

describe("create utils", () => {
  it("createVariableDeclarator should return proper value", () => {
    expect(createVariableDeclarator("Test", "const", "value")).toEqual("const Test = value");
    expect(createVariableDeclarator("Test", "type", "value", true)).toEqual(
      "export type Test = value",
    );
  });
  it("createArrowFunctionExpression should return proper value", () => {
    expect(createArrowFunctionExpression("par", "value")).toEqual("( par ) => value");
    expect(createArrowFunctionExpression(["par1", "par2"], "value")).toEqual(
      "( par1,par2 ) => value",
    );
  });
  it("createEquivalentType should return proper value", () => {
    expect(createEquivalentType("test")).toEqual("test: Test");
    expect(createEquivalentType("Test")).toEqual("Test: Test");
  });

  it("createObject should return proper value", () => {
    expect(createObject("key: value", false)).toEqual("{key: value}");
    expect(createObject("key: value", true)).toEqual("{|key: value|}");
  });
  it("createValue should return proper value", () => {
    const values = ["key: value", "key: value"];
    expect(createValue(values, ",")).toEqual("key: value,key: value");
    expect(createValue(values, ";")).toEqual("key: value;key: value");
  });
  it("createDeclareExport should return proper value", () => {
    const test = createDeclareExport("Test", { isDefault: true, isDeclare: true });
    expect(test).toContain("declare");
    expect(test).toContain("export");
    expect(test).toContain("default");
    expect(test).toContain("Test");
  });
  it("createDeclareModule should return proper value", () => {
    expect(createDeclareModule("test")).toEqual(`declare module "test";`);
  });
  it("createOptionalType should return proper value", () => {
    expect(createOptionalType("name")).toEqual("name?");
  });
  it("createSubsetType should return proper value", () => {
    expect(createSubsetType("Name", "flow")).toEqual("$Shape<Name>");
    expect(createSubsetType("Name", "typescript")).toEqual("Partial<Name>");
  });
  it("createObjectProperty should return proper value", () => {
    expect(createObjectProperty("key", "value")).toEqual("key:value");
  });
  it("createTypeImport should return proper value", () => {
    expect(createTypeImport("type", "../")).toEqual(`import type { Type } from "../"\n`);
  });
});
