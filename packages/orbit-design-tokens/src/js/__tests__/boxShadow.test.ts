import boxShadow from "../boxShadow";

describe("boxShadow", () => {
  it("should create box-shadow properly", () => {
    expect(boxShadow({ def: ["0px", "0px"], color: "black" })).toBe("0px 0px black");
    expect(boxShadow({ def: ["1px", "3px", "2px"], color: "black" })).toBe("1px 3px 2px black");
    expect(boxShadow({ def: ["1px", "3px", "2px", "4px"], color: "black" })).toBe(
      "1px 3px 2px 4px black",
    );
    expect(
      boxShadow([
        { def: ["0px", "0px"], color: "black" },
        { def: ["1px", "3px", "2px"], color: "red" },
      ]),
    ).toBe("0px 0px black,1px 3px 2px red");
    expect(
      boxShadow([
        { def: ["0px", "0px"], color: "blue" },
        { def: ["1px", "3px", "2px"], color: "black" },
        { def: ["0px", "4px", "2px", "2px"], color: "red" },
      ]),
    ).toBe("0px 0px blue,1px 3px 2px black,0px 4px 2px 2px red");
  });
});
