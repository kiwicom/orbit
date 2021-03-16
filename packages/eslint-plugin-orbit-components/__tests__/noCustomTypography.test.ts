import ruleTester from "../ruleTester";
import noCustomTypography from "../src/rules/noCustomTypography";

describe("no-custom-typography", () => {
  // @ts-expect-error TODO
  ruleTester.run("no-custom-typography", noCustomTypography, {
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
      {
        code: `
            const Wrapper = styled.div\`
              font-size: \${({ theme }) => theme.orbit.fontSizeTextNormal};
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
          "The value 16px used for CSS property font-size should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
          "The value 'Roboto', sans-serif used for CSS property font-family should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
          "The value 1.2 used for CSS property line-height should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
        ],
      },
      {
        code: `
            const Wrapper = styled.div\`
              font-size: \${({theme}) => theme.orbit.fontSizeNormal};
              font-family: 'Roboto', sans-serif;
              line-height: 1.2;
              \`
          `,
        errors: [
          "The value 'Roboto', sans-serif used for CSS property font-family should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
          "The value 1.2 used for CSS property line-height should be replaced with an existing design token. Check orbit.kiwi/design-tokens to find which token you might use.",
        ],
      },
    ],
  });
});
