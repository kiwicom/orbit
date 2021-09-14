import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import { SpaceAfter } from "@kiwicom/orbit-components/lib/common/common";

import { getTextFromChildren, slugify } from "../utils/common";

export const StyledAnchor = styled.a`
  ${({ theme }) => css`
    display: block;
    svg {
      opacity: 0;
      transition: fill ${theme.orbit.durationFast} ease-in;
    }
    :hover,
    :active,
    :focus {
      outline: none;
      svg {
        opacity: 1;
        fill: ${theme.orbit.paletteProductNormal};
      }
    }
  `}
`;

interface Props extends SpaceAfter {
  children?: React.ReactNode;
  noId?: boolean;
}

const HeadingWithLink = ({ children, noId, spaceAfter = "none" }: Props) => {
  const headingText = getTextFromChildren(children);
  const slug = slugify(headingText);

  return (
    <StyledAnchor id={noId ? "" : slug} href={`#${slug}`} title={`Link to heading: ${headingText}`}>
      <Stack inline spacing="XSmall" align="center" spaceAfter={spaceAfter}>
        {children}
        <LinkIcon />
      </Stack>
    </StyledAnchor>
  );
};

export default HeadingWithLink;
