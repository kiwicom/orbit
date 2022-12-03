import * as utils from "..";

describe("utils", () => {
  it("should have correct margin values", () => {
    expect(utils.marginUtility("10px")).toMatchInlineSnapshot(`
      Array [
        "margin:",
        "10px",
        ";",
      ]
    `);
    expect(utils.marginUtility(10)).toMatchInlineSnapshot(`
      Array [
        "margin:",
        "10px",
        ";",
      ]
    `);
    expect(utils.marginUtility({ top: "10px" })).toMatchInlineSnapshot(`
      Array [
        "margin-top:",
        "10px",
        ";margin-right:",
        ";margin-bottom:",
        ";margin-left:",
        ";",
      ]
    `);
    expect(utils.marginUtility({ top: 10, bottom: 2 })).toMatchInlineSnapshot(`
      Array [
        "margin-top:",
        "10px",
        ";margin-right:",
        ";margin-bottom:",
        "2px",
        ";margin-left:",
        ";",
      ]
    `);
  });
});
