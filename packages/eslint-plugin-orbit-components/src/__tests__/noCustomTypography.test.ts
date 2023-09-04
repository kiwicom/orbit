import ruleTester from "../ruleTester";
import noCustomTypography from "../rules/noCustomTypography";

describe("no-custom-typography", () => {
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
        errors: [{ messageId: "error" }, { messageId: "error" }, { messageId: "error" }],
      },
      {
        code: `
            const Wrapper = styled.div\`
              font-size: \${({theme}) => theme.orbit.fontSizeNormal};
              font-family: 'Roboto', sans-serif;
              line-height: 1.2;
              \`
          `,
        errors: [{ messageId: "error" }, { messageId: "error" }],
      },
    ],
  });
});
