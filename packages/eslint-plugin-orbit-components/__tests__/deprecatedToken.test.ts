import ruleTester from "../ruleTester";
import noDeprecatedToken, { getError } from "../src/rules/noDeprecatedToken";

jest.mock("@kiwicom/orbit-design-tokens/lib/deprecated-tokens.json", () => ({
  deprecatedTokenOne: {
    replaceForToken: "replacementTokenOne",
    version: "1.0.0",
  },
  deprecatedTokenTwo: {
    replaceForToken: "replacementTokenTwo",
    version: "1.0.0",
  },
  deprecatedTokenThree: {
    replaceForToken: "replacementTokenThree",
  },
  deprecatedTokenFour: {
    replaceForToken: null,
    version: "1.0.0",
  },
}));

describe("No use of deprecated token", () => {
  ruleTester.run("no-deprecated-token", noDeprecatedToken, {
    valid: [
      {
        code: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.paletteWhiteNormal};
        \``,
      },
      {
        code: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit } }) => orbit.paletteWhiteNormal};
        \``,
      },
      {
        code: `
        const mixin = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.paletteWhiteNormal};
        \``,
      },
      {
        code: `
        const mixin = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit } }) => orbit.paletteWhiteNormal};
        \``,
      },
      {
        code: `
        const condition = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit }, active }) => active ? orbit.paletteWhiteNormal : orbit.paletteBlueNormal};
        \``,
      },
      {
        code: `
        const condition = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${(props) => props.active && orbit.paletteWhiteNormal};
        \``,
      },
      {
        code: `
        const getToken = (theme, name) => {
          const tokens = {
            active: theme.orbit.notDeprecated,
            focus: theme.orbit.notDeprecated
          }
          return tokens[name];
        }`,
      },
    ],
    invalid: [
      {
        code: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.deprecatedTokenOne};
        \``,
        output: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.replacementTokenOne};
        \``,
        errors: [getError("deprecatedTokenOne")],
      },
      {
        code: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit } }) => orbit.deprecatedTokenTwo};
        \``,
        output: `
        const StyledDiv = styled.div\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit } }) => orbit.replacementTokenTwo};
        \``,
        errors: [getError("deprecatedTokenTwo")],
      },
      {
        code: `
        const mixin = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.deprecatedTokenThree};
        \``,
        output: `
        const mixin = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme }) => theme.orbit.replacementTokenThree};
        \``,
        errors: [getError("deprecatedTokenThree")],
      },
      {
        code: `
        const mixin = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit } }) => orbit.deprecatedTokenFour};
        \``,
        errors: [getError("deprecatedTokenFour")],
      },
      {
        code: `
        const condition = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit }, active }) => active ? orbit.paletteWhiteNormal : orbit.deprecatedTokenOne};
        \``,
        output: `
        const condition = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${({ theme: { orbit }, active }) => active ? orbit.paletteWhiteNormal : orbit.replacementTokenOne};
        \``,
        errors: [getError("deprecatedTokenOne")],
      },
      {
        code: `
        const condition = css\`
          display: block;
          width: 100%;
          box-sizing: border-box;
          background: \${(props) => props.active && props.theme.orbit.deprecatedTokenFour};
        \``,
        errors: [getError("deprecatedTokenFour")],
      },
      {
        code: `
        const getToken = (theme, name) => {
          const tokens = {
            active: theme.orbit.deprecatedTokenOne,
            focus: theme.orbit.notDeprecated
          }
          return tokens[name];
        }`,
        output: `
        const getToken = (theme, name) => {
          const tokens = {
            active: theme.orbit.replacementTokenOne,
            focus: theme.orbit.notDeprecated
          }
          return tokens[name];
        }`,
        errors: [getError("deprecatedTokenOne")],
      },
      {
        code: `
        const resolveBorderColor = (props) => {
          if (disabled) {
            return props.theme.orbit.paletteInkLighter;
          }
          if (checked) {
            return props.theme.orbit.deprecatedTokenOne;
          }
          if (hasError && !disabled && !checked) {
            return props.theme.orbit.borderColorCheckboxRadioError;
          }
          return props.theme.orbit.deprecatedTokenTwo;
        };`,
        output: `
        const resolveBorderColor = (props) => {
          if (disabled) {
            return props.theme.orbit.paletteInkLighter;
          }
          if (checked) {
            return props.theme.orbit.replacementTokenOne;
          }
          if (hasError && !disabled && !checked) {
            return props.theme.orbit.borderColorCheckboxRadioError;
          }
          return props.theme.orbit.replacementTokenTwo;
        };`,
        errors: [getError("deprecatedTokenOne"), getError("deprecatedTokenTwo")],
      },
      {
        code: `
        const resolveBorderColor = ({ disabled, checked, hasError, theme: { orbit }}) => {
          if (disabled) {
            return orbit.paletteInkLighter;
          }
          if (checked) {
            return orbit.deprecatedTokenOne;
          }
          if (hasError && !disabled && !checked) {
            return orbit.borderColorCheckboxRadioError;
          }
          return orbit.deprecatedTokenTwo;
        };`,
        output: `
        const resolveBorderColor = ({ disabled, checked, hasError, theme: { orbit }}) => {
          if (disabled) {
            return orbit.paletteInkLighter;
          }
          if (checked) {
            return orbit.replacementTokenOne;
          }
          if (hasError && !disabled && !checked) {
            return orbit.borderColorCheckboxRadioError;
          }
          return orbit.replacementTokenTwo;
        };`,
        errors: [getError("deprecatedTokenOne"), getError("deprecatedTokenTwo")],
      },
    ],
  });
});
