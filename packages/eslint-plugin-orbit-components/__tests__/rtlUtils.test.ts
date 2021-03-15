import ruleTester from "../ruleTester";
import rtlUtils, { RightOrLeftError, SpacingError } from "../src/rules/rtlUtils";

describe("theme-rtl", () => {
  ruleTester.run("rtl-utils", rtlUtils, {
    valid: [
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              \${right}: 0;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              \${({ someCustomProperty }) => someCustomProperty ? "right" : "left"};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              margin-\${right}: \${({ theme }) => theme.orbit.spaceSmall};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              margin-\${right}: \${({ theme }) => theme.orbit.spaceSmall};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => rtlSpacing(\`\${theme.orbit.spaceSmall} 0 \${theme.orbit.spaceSmall}\`)};
            \`
          `,
      },
    ],
    invalid: [
      {
        code: `
          import styled from 'styled-components';
            const DocumentWrapper = styled.div\`
            width: 100%;
            position: relative;
            \${({ theme }) => (theme.rtl ? "right:" : "left:")} 7px;
            \${mq.desktop(css\`
              width: 30%;
              \${({ theme }) => (theme.rtl ? "right:" : "left:")} 0;
            \`)};
          \`
          `,
        errors: [RightOrLeftError],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "margin-right:" : "margin-left:")} 7px;
          \`
          `,
        errors: [RightOrLeftError],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "padding-right:" : "padding-left:")} 10px;
          \`
          `,
        errors: [RightOrLeftError],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => (theme.rtl ? "0 10px 0 0" : \`\${theme.orbit.spaceLarge} 0 0 0\`)};
          \`
          `,
        errors: [SpacingError],
      },
      {
        code: `
          import styled from 'styled-components';

            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => theme.rtl ? \`\${theme.orbit.spaceXLarge} 0 0 0px\` : "0 0 10px 0"};
            \`;
          `,
        errors: [SpacingError],
      },
    ],
  });
});
