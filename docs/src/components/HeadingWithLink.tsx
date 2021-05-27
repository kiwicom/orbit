import React from "react";
import styled from "styled-components";
import { ButtonLink, Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import { SpaceAfter } from "@kiwicom/orbit-components/lib/common/common";

import { getTextFromChildren, slugify } from "../utils/common";

export const StyledAnchorWrapper = styled.div`
  margin-top: -10px;

  svg {
    opacity: 0;
    transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in;
  }

  &:hover svg {
    opacity: 1;
  }
`;

interface Props extends SpaceAfter {
  children?: React.ReactNode;
  noId?: boolean;
}

const HeadingWithLink = ({ children, noId, spaceAfter = "none" }: Props) => {
  const headingText = getTextFromChildren(children);
  const slugifiedText = slugify(headingText);
  return (
    <StyledAnchorWrapper id={noId ? "" : slugifiedText}>
      <Stack flex spacing="XXXSmall" align="center" spaceAfter={spaceAfter}>
        {children}
        <ButtonLink
          iconLeft={<LinkIcon />}
          title={`Link to heading: ${headingText}`}
          href={`#${slugifiedText}`}
          type="secondary"
          compact
        />
      </Stack>
    </StyledAnchorWrapper>
  );
};

export default HeadingWithLink;
