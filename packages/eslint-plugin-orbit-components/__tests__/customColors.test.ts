import ruleTester from "../ruleTester";
import customColors from "../src/rules/customColors";

describe("custom-colors", () => {
  // @ts-expect-error TODO
  ruleTester.run("custom-colors", customColors, {
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
