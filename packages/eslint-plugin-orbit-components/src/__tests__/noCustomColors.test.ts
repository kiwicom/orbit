import ruleTester from "../ruleTester";
import noCustomColors from "../rules/noCustomColors";

describe("no-custom-colors", () => {
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
        errors: [{ messageId: "replace" }, { messageId: "replace" }],
      },
    ],
  });
});
