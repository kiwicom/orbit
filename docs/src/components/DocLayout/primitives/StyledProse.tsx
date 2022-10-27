import { Box, mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { StyledAnchor } from "../../HeadingWithLink";

const StyledProse = styled(Box)`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeTextNormal};
    ${mediaQueries.tablet(css`
      border-radius: ${theme.orbit.spaceMedium};
    `)};
    > * + * {
      margin-top: 16px;
    }
    > * + h1,
    > * + h2,
    > * + h3,
    > * + h4,
    > * + h5 {
      margin-top: 24px;
    }
    > h1 + *,
    > h2 + *,
    > h3 + *,
    > h4 + *,
    > h5 + * {
      margin-top: 12px;
    }
    > p {
      font-size: 1rem;
    }
    p {
      line-height: 1.5;
    }
    > ul > li + li,
    > ol > li + li {
      margin-top: 12px;
    }
    > ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceLarge};

      /* Handle spacing after headings through the heading,
        rather than the generic margin-top for all elements in the layout */
      + * {
        margin-top: 0;
      }
    }
    > div + h2:nth-child(2),
    h2:first-child {
      margin-top: 0;
    }
  `}
`;

export default StyledProse;
