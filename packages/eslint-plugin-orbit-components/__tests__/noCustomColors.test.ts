import ruleTester from "../ruleTester";
import noCustomColors from "../src/rules/noCustomColors";

describe("no-custom-colors", () => {
  // @ts-expect-error TODO
  ruleTester.run("no-custom-colors", noCustomColors, {
    valid: [
      {
        code: `
            const Wrapper = styled.div\`
              color: \${({theme}) => theme.orbit.colorTextPrimary};
              background: \${({theme}) => theme.orbit.paletteWhite};
            \`
          `,
      },
    ],
    invalid: [
      {
        code: `
            const Wrapper = styled.div\`
              color: #fff;
              background: #808080;
              \`
          `,
        errors: [
          "color should be replaced with Orbit design token",
          "background should be replaced with Orbit design token",
        ],
      },
    ],
  });
});
