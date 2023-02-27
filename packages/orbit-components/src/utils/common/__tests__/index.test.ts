import * as utils from "..";

describe("utils", () => {
  it("should have correct margin values", () => {
    expect(utils.spacingUtility("10px")).toMatchInlineSnapshot(`
      Array [
        "margin",
        ":",
        "10px",
        ";",
      ]
    `);
    expect(utils.spacingUtility(10)).toMatchInlineSnapshot(`
      Array [
        "margin",
        ":",
        "10px",
        ";",
      ]
    `);
    expect(utils.spacingUtility({ top: "10px" })).toMatchInlineSnapshot(`
      Array [
        "margin",
        "-top:",
        "10px",
        ";",
        "margin",
        "-right:",
        ";",
        "margin",
        "-bottom:",
        ";",
        "margin",
        "-left:",
        ";",
      ]
    `);
    expect(utils.spacingUtility({ top: 10, bottom: 2 })).toMatchInlineSnapshot(`
      Array [
        "margin",
        "-top:",
        "10px",
        ";",
        "margin",
        "-right:",
        ";",
        "margin",
        "-bottom:",
        "2px",
        ";",
        "margin",
        "-left:",
        ";",
      ]
    `);
    expect(utils.spacingUtility({ top: 10, bottom: 3 }, "padding"));
    expect(utils.spacingUtility("10", "padding"));
  });
});
