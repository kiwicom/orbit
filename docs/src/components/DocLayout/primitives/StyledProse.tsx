import { Box, mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { StyledAnchorWrapper } from "../../HeadingWithLink";

const StyledProse = styled(Box)`
  ${({ theme, elevation }) => css`
    font-size: ${theme.orbit.fontSizeTextNormal};
    ${mediaQueries.tablet(css`
      border-radius: ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium} 0 0;
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
      line-height: 1.5;
    }
    > ul > li + li,
    > ol > li + li {
      margin-top: 12px;
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
    ${elevation === "raised" &&
    `
      box-shadow: rgb(37 42 49 / 8%) 0px 4px 8px 0px, rgb(37 42 49 / 16%) 0px 8px 24px 0px;
    `}
  `}
`;

export default StyledProse;
