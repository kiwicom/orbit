// @flow
import {
  createVariableDeclarator,
  createObjectExpression,
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
    expect(createVariableDeclarator("Test", "const", "value")).toBe("const Test = value");
    expect(createVariableDeclarator("Test", "type", "value", true)).toBe(
      "export type Test = value",
    );
  });
  it("createArrowFunctionExpression should return proper value", () => {
    expect(createArrowFunctionExpression("par", "value")).toBe("( par ) => value");
    expect(createArrowFunctionExpression(["par1", "par2"], "value")).toBe("( par1,par2 ) => value");
  });
  it("createEquivalentType should return proper value", () => {
    expect(createEquivalentType("test")).toBe("test: Test");
    expect(createEquivalentType("Test")).toBe("Test: Test");
  });

  it("createObject should return proper value", () => {
    expect(createObjectExpression("key: value")).toBe("{key: value}");
    expect(createObjectExpression("key: value", "flow")).toBe("{|key: value|}");
  });
  it("createValue should return proper value", () => {
    const values = ["key: value", "key: value"];
    expect(createValue(values, "flow")).toBe("key: value,key: value");
    expect(createValue(values, "javascript")).toBe("key: value,key: value");
    expect(createValue(values, "typescript")).toBe("key: value;key: value");
  });
  it("createDeclareExport should return proper value", () => {
    const test = createDeclareExport("Test", { isDefault: true, isDeclare: true });
    expect(test).toContain("declare");
    expect(test).toContain("export");
    expect(test).toContain("default");
    expect(test).toContain("Test");
  });
  it("createDeclareModule should return proper value", () => {
    expect(createDeclareModule("test")).toBe(`declare module "test";`);
  });
  it("createOptionalType should return proper value", () => {
    expect(createOptionalType("name")).toBe("name?");
  });
  it("createSubsetType should return proper value", () => {
    expect(createSubsetType("Name", "flow")).toBe("$Shape<Name>");
    expect(createSubsetType("Name", "typescript")).toBe("Partial<Name>");
  });
  it("createObjectProperty should return proper value", () => {
    expect(createObjectProperty("key", "value")).toBe("key:value");
  });
  it("createTypeImport should return proper value", () => {
    expect(createTypeImport("type", "../")).toBe(`import type { Type } from "../"\n`);
  });
});
