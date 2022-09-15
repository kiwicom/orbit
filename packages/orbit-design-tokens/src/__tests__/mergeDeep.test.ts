import mergeDeep from "../mergeDeep";

describe("mergeDeep", () => {
  it("should merge two objects", () => {
    const first = {
      a: 1,
      b: 2,
      c: {
        d: 4,
      },
    };
    const second = {
      b: 3,
      c: {
        e: 5,
      },
    };
    const result = mergeDeep(first, second);
    expect(result).toEqual({
      a: 1,
      b: 3,
      c: {
        d: 4,
        e: 5,
      },
    });
  });
});
