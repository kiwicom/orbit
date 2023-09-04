import ruleTester from "../ruleTester";
import useRtl from "../rules/useRtl";

describe("use-rtl", () => {
  ruleTester.run("use-rtl", useRtl, {
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
          import { left } from "@kiwicom/orbit-components/lib/utils/rtl";

          const StyledWrapper = styled.div\`
              margin-\${left}: 0;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { left } from "@kiwicom/orbit-components/lib/utils/rtl";

          const StyledWrapper = styled.div\`
              margin-\${left}: 0;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
              margin: 10px 15px 0 15px;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
              margin: 10px 15px 3px;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
              border-radius: 3px 3px 5px 5px;
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { borderRadius } from "@kiwicom/orbit-components/lib/utils/rtl";

          const StyledWrapper = styled.div\`
              border-radius: \${borderRadius("3px 3px 5px 5px")};
            \`
          `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { textAlign } from "@kiwicom/orbit-components/lib/utils/rtl";

          const StyledWrapper = styled.div\`
            text-align: \${textAlign("left")};
          \`
        `,
      },
      {
        code: `
          import styled from 'styled-components';
          import { translate3d } from "@kiwicom/orbit-components/lib/utils/rtl";

          const StyledWrapper = styled.div\`
            transform: \${translate3d("400px, 0, 0")};
          \`
        `,
      },
    ],
    invalid: [
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
              margin: 10px 15px 0 10px;
            \`
          `,
        errors: [{ messageId: "ERROR_RTL_SPACING" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
              margin: 10px 15px 0 10px;
            \`
          `,
        errors: [{ messageId: "ERROR_RTL_SPACING" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            padding: 0 15px 3px 5px;
          \`
        `,
        errors: [{ messageId: "ERROR_RTL_SPACING" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            border-radius: 3px 5px 4px 5px;
          \`
        `,
        errors: [{ messageId: "ERROR_BORDER_RADIUS" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            border-radius: 3px 3px 4px 5px;
          \`
        `,
        errors: [{ messageId: "ERROR_BORDER_RADIUS" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            text-align: left;
          \`
        `,
        errors: [{ messageId: "errorBasic" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            right: 0;
          \`
        `,
        errors: [{ messageId: "errorBasic" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            left: 0;
          \`
        `,
        errors: [{ messageId: "errorBasic" }],
      },
      {
        code: `
          import styled from 'styled-components';

          const StyledWrapper = styled.div\`
            transform: translate3d("400px, 0, 0");
          \`
        `,
        errors: [{ messageId: "errorBasic" }],
      },
    ],
  });
});
