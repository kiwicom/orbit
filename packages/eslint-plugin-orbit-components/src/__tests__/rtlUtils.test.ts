import ruleTester from "../ruleTester";
import rtlUtils from "../rules/rtlUtils";

describe("rtl-utils", () => {
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
              margin-\${right}: \${({ theme }) => theme.orbit.space300};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              margin-\${right}: \${({ theme }) => theme.orbit.space300};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => rtlSpacing(\`\${theme.orbit.space300} 0 \${theme.orbit.space300}\`)};
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
        errors: [
          {
            messageId: "RightOrLeftError",
          },
        ],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "margin-right:" : "margin-left:")} 7px;
          \`
          `,
        errors: [
          {
            messageId: "RightOrLeftError",
          },
        ],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
            \${({ theme }) => (theme.rtl ? "padding-right:" : "padding-left:")} 10px;
          \`
          `,
        errors: [
          {
            messageId: "RightOrLeftError",
          },
        ],
      },
      {
        code: `
          import styled from 'styled-components';
            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => (theme.rtl ? "0 10px 0 0" : \`\${theme.orbit.space600} 0 0 0\`)};
          \`
          `,
        errors: [
          {
            messageId: "SpacingError",
          },
        ],
      },
      {
        code: `
          import styled from 'styled-components';

            const StyledWrapper = styled.div\`
              padding: \${({ theme }) => theme.rtl ? \`\${theme.orbit.space800} 0 0 0px\` : "0 0 10px 0"};
            \`;
          `,
        errors: [
          {
            messageId: "SpacingError",
          },
        ],
      },
    ],
  });
});
