import { transform } from "../transform";

const setKnob = (knob: string, value: string | number | boolean) => ({
  Component: { [knob]: value },
});

describe("sandbox transform", () => {
  it("should transform boolean knob: set false prop", () => {
    expect(transform("TEST.tsx", `() => <Component>kek</Component>`, setKnob("disabled", false)))
      .toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        disabled: false
      }, \\"kek\\");"
    `);
  });

  it("should transform boolean knob: set from true to false", () => {
    expect(
      transform(
        "TEST.tsx",
        `() => <Component disabled={true}>kek</Component>`,
        setKnob("disabled", false),
      ),
    ).toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        disabled: false
      }, \\"kek\\");"
    `);
  });

  it("should transform boolean knob: set prop", () => {
    expect(
      transform(
        "TEST.tsx",
        `() => <Component disabled={true}>kek</Component>`,
        setKnob("disabled", true),
      ),
    ).toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        disabled: true
      }, \\"kek\\");"
    `);
  });

  it("should transform string prop", () => {
    expect(
      transform(
        "TEST.tsx",
        `() => <Component label="kek">kek</Component>;`,
        setKnob("label", "bur"),
      ),
    ).toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        label: \\"bur\\"
      }, \\"kek\\");"
    `);
  });

  it("should add string prop", () => {
    expect(transform("TEST.tsx", `() => <Component>kek</Component>;`, setKnob("label", "bur")))
      .toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        label: \\"bur\\"
      }, \\"kek\\");"
    `);
  });

  it("should transform number prop", () => {
    expect(
      transform("TEST.tsx", `() => <Component value={1}>kek</Component>;`, setKnob("value", 2)),
    ).toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        value: 2
      }, \\"kek\\");"
    `);
  });

  it("should add number prop", () => {
    expect(transform("TEST.tsx", `() => <Component>kek</Component>;`, setKnob("value", 2)))
      .toMatchInlineSnapshot(`
      "() => /*#__PURE__*/React.createElement(Component, {
        value: 2
      }, \\"kek\\");"
    `);
  });

  it("should adjust default props", () => {
    expect(
      transform(
        "TEST.tsx",
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
      "() => /*#__PURE__*/React.createElement(Component, {
        iconRight: /*#__PURE__*/React.createElement(Visibility, null),
        options: [{
          \\"kek\\": \\"bur\\",
          \\"blin\\": \\"cheburek\\"
        }],
        disabled: true,
        fullWidth: true,
        title: \\"kek\\"
      }, \\"children\\");"
    `);
  });
});
