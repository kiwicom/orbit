import { transform } from "../transform";

const setKnob = (knob: string, value: string | number | boolean) => ({
  Component: { [knob]: value },
});

describe("sandbox transform", () => {
  it("should transform boolean knob: set false prop", () => {
    expect(
      transform(`() => <Component>kek</Component>`, setKnob("disabled", false)),
    ).toMatchInlineSnapshot(`"() => <Component disabled={false}>kek</Component>;"`);
  });

  it("should transform boolean knob: set from true to false", () => {
    expect(
      transform(`() => <Component disabled={true}>kek</Component>`, setKnob("disabled", false)),
    ).toMatchInlineSnapshot(`"() => <Component disabled={false}>kek</Component>;"`);
  });

  it("should transform boolean knob: set prop", () => {
    expect(
      transform(`() => <Component disabled={true}>kek</Component>`, setKnob("disabled", true)),
    ).toMatchInlineSnapshot(`"() => <Component disabled>kek</Component>;"`);
  });

  it("should transform string prop", () => {
    expect(
      transform(`() => <Component label="kek">kek</Component>;`, setKnob("label", "bur")),
    ).toMatchInlineSnapshot(`"() => <Component label=\\"bur\\">kek</Component>;"`);
  });

  it("should add string prop", () => {
    expect(
      transform(`() => <Component>kek</Component>;`, setKnob("label", "bur")),
    ).toMatchInlineSnapshot(`"() => <Component label=\\"bur\\">kek</Component>;"`);
  });

  it("should transform number prop", () => {
    expect(
      transform(`() => <Component value={1}>kek</Component>;`, setKnob("value", 2)),
    ).toMatchInlineSnapshot(`"() => <Component value={2}>kek</Component>;"`);
  });

  it("should add number prop", () => {
    expect(
      transform(`() => <Component>kek</Component>;`, setKnob("value", 2)),
    ).toMatchInlineSnapshot(`"() => <Component value={2}>kek</Component>;"`);
  });

  it("should transform icon", () => {
    expect(
      transform(
        `() => <Component iconRight={<Icons.Visibility />}>kek</Component>;`,
        setKnob("iconRight", "<Accommodation-icon />"),
      ),
    ).toMatchInlineSnapshot(
      `"() => <Component iconRight={<Icons.<Accommodation />}>kek</Component>;"`,
    );
  });

  it("should adjust default props", () => {
    expect(
      transform(
        `() => <Component iconRight={<Visibility />} options={[{"kek": "bur", "blin": "cheburek"}]}>children</Component>`,
        {
          Component: {
            disabled: true,
            fullWidth: true,
            title: "kek",
          },
        },
      ),
    ).toMatchInlineSnapshot(`
      "() => <Component iconRight={<Visibility />} options={[{
        \\"kek\\": \\"bur\\",
        \\"blin\\": \\"cheburek\\"
      }]} disabled fullWidth title=\\"kek\\">children</Component>;"
    `);
  });
});
