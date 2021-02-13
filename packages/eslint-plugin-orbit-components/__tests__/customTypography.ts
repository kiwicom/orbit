import ruleTester from "../ruleTester";
import customTypography from "../src/rules/customTypography";

describe("custom-typography", () => {
  // @ts-expect-error TODO
  ruleTester.run("custom-typography", customTypography, {
    valid: [
      {
        code: `
            const Wrapper = styled.div\`
              font-size: \${({theme}) => theme.orbit.fontSizeTextNormal};
              font-family: \${({theme}) => theme.orbit.fontFamily};
              line-height: \${({theme}) => theme.orbit.lineHeightNormal};
            \`
          `,
      },
      {
        code: `
            const Wrapper = styled.div\`
              font-size: inherit;
              font-family: initial;
              line-height: unset;
            \`
          `,
      },
    ],
    invalid: [
      {
        code: `
            const Wrapper = styled.div\`
              font-size: 16px;
              font-family: 'Roboto', sans-serif;
              line-height: 1.2;
              \`
          `,
        errors: [
          "font-size should be replaced with Orbit design token",
          "font-family should be replaced with Orbit design token",
          "line-height should be replaced with Orbit design token",
        ],
      },
    ],
  });
});
