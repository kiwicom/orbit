import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import * as Common from "@kiwicom/orbit-components/lib/common/types";

import { getTextFromChildren, slugify } from "../utils/common";

const StyledLinkIcon = styled.div``;

export const StyledAnchor = styled.a<{ $level: number }>`
  ${({ theme, $level }) => css`
    display: block;
    ${StyledLinkIcon} svg {
      opacity: 0;
      transition: fill ${theme.orbit.durationFast} ease-in;
    }
    :hover,
    :active,
    :focus {
      outline: none;
      ${StyledLinkIcon} svg {
        opacity: 1;
        fill: ${theme.orbit.paletteProductNormal};
      }
    }
    & + p {
      margin-top: 0;
    }
    & + & {
      margin-top: ${theme.orbit.spaceSmall} !important;
    }
    ${$level === 1 &&
    css`
      p + & {
        margin-top: ${theme.orbit.spaceXLarge};
      }
    `};
  `}
`;

interface Props extends Common.SpaceAfter {
  level: number;
  children?: React.ReactNode;
  noId?: boolean;
}

const HeadingWithLink = ({ level, children, noId, spaceAfter = "none" }: Props) => {
  const headingText = getTextFromChildren(children);
  const slug = slugify(headingText);

  return (
    <StyledAnchor
      $level={level}
      id={noId ? "" : slug}
      href={`#${slug}`}
      title={`Link to heading: ${headingText}`}
    >
      <Stack inline spacing="XSmall" align="center" spaceAfter={spaceAfter}>
        {children}
        <StyledLinkIcon>
          <LinkIcon />
        </StyledLinkIcon>
      </Stack>
    </StyledAnchor>
  );
};

export default HeadingWithLink;
