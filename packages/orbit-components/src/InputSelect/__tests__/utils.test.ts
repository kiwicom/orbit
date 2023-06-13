import { groupOptions } from "../helpers";

describe("groupOptions", () => {
  const options = [
    {
      title: "option 1",
      value: 1,
      group: "group 1",
    },
    {
      title: "option 2",
      value: 2,
      group: "group 2",
    },
    {
      title: "option 3",
      value: 3,
      group: "group 1",
    },
    {
      title: "option 4",
      value: 4,
    },
    {
      title: "option 5",
      value: 5,
      group: "group 2",
    },
  ];

  it("groups options with an option in `groups` and includes all options in `all`", () => {
    const { groups, all } = groupOptions(options, false);
    const group1 = groups[0];
    const group2 = groups[1];

    expect(groups).toHaveLength(2);
    expect(all).toHaveLength(options.length);

    // Assert group 1
    expect(group1).toHaveLength(2);
    expect(group1[0].value).toBe(1);
    expect(group1[1].value).toBe(3);

    // Assert group 2
    expect(group2).toHaveLength(2);
    expect(group2[0].value).toBe(2);
    expect(group2[1].value).toBe(5);

    // Assert all
    expect(all[0].value).toBe(1);
    expect(all[1].value).toBe(2);
    expect(all[2].value).toBe(3);
    expect(all[3].value).toBe(4);
    expect(all[4].value).toBe(5);
  });

  describe("when showAll is false", () => {
    const { groups, flattened } = groupOptions(options, false);
    const group1 = groups[0];
    const group2 = groups[1];

    it("flattens correctly, with groups first and ungrouped after", () => {
      expect(flattened).toHaveLength(options.length);

      expect([flattened[0], flattened[1]]).toEqual(group1);
      expect([flattened[2], flattened[3]]).toEqual(group2);
      expect(flattened[4].value).toBe(4);
    });
  });

  describe("when showAll is true", () => {
    const { groups, flattened } = groupOptions(options, true);
    const group1 = groups[0];
    const group2 = groups[1];

    it("flattens correctly, with groups first and a copy of all options after", () => {
      expect(flattened).toHaveLength(group1.length + group2.length + options.length);

      expect([flattened[0], flattened[1]]).toEqual(group1);
      expect([flattened[2], flattened[3]]).toEqual(group2);
      expect(flattened.slice(4)).toEqual(options);
    });
  });

  describe("when prevSelected is passed", () => {
    it("includes prevSelected as the single item of the first group and the first element of flattened", () => {
      const { groups, flattened } = groupOptions(options, false, options[2]);
      expect(groups).toHaveLength(3);

      const group1 = groups[0];
      const group2 = groups[1];
      const group3 = groups[2];

      // Assert group1 - the prevSelected
      expect(group1).toHaveLength(1);
      expect(group1[0]).toBe(options[2]);

      // Assert group 2
      expect(group2).toHaveLength(2);
      expect(group2[0].value).toBe(1);
      expect(group2[1].value).toBe(3);

      // Assert group 3
      expect(group3).toHaveLength(2);
      expect(group3[0].value).toBe(2);
      expect(group3[1].value).toBe(5);

      // Assert flattened starts with prevSelected
      expect(flattened).toHaveLength(1 + options.length);
      expect(flattened[0]).toBe(options[2]);
    });
  });
});
