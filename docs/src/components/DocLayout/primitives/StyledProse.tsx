import { Box, mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { StyledAnchorWrapper } from "../../HeadingWithLink";

const StyledProse = styled(Box)`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeTextNormal};
    ${mediaQueries.tablet(css`
      border-radius: ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium} 0 0;
    `)};
    > * + * {
      margin-top: ${theme.orbit.spaceSmall};
    }
    > h1 {
      margin-bottom: ${theme.orbit.spaceLarge};
    }
    > ${StyledAnchorWrapper} {
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
