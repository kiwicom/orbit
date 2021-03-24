import React from "react";
import styled from "styled-components";
import { ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { As, Type as HeadingType } from "@kiwicom/orbit-components/lib/Heading";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";

import { getTextFromChildren, slugify } from "../utils/common";

export const StyledAnchorWrapper = styled.div`
  margin-top: -10px;

  svg {
    opacity: 0%;
    transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in;
  }

  &:hover svg {
    opacity: 100%;
  }
`;

interface Props {
  children?: React.ReactNode;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  noId?: boolean;
  spaceAfter?: "smallest" | "small" | "normal" | "medium" | "none";
}

const HeadingWithLink = ({ children, headingLevel = 3, noId, spaceAfter = "none" }: Props) => {
  const getHeadingTypes = (level: Props["headingLevel"]): [As, HeadingType] => {
    switch (level) {
      case 2:
        return ["h2", "title1"];
      case 4:
        return ["h4", "title3"];
      case 5:
        return ["h5", "title4"];
      case 6:
        return ["h6", "title5"];
      default:
        return ["h3", "title2"];
    }
  };
  const [headingAs, headingType] = getHeadingTypes(headingLevel);
  const headingText = getTextFromChildren(children);
  const slugifiedText = slugify(headingText);
  return (
    <StyledAnchorWrapper id={noId ? "" : slugifiedText}>
      <Stack flex spacing="XXXSmall" align="center" spaceAfter={spaceAfter}>
        <Heading as={headingAs} type={headingType}>
          {children}
        </Heading>
        <ButtonLink iconLeft={<LinkIcon />} href={`#${slugifiedText}`} type="secondary" compact />
      </Stack>
    </StyledAnchorWrapper>
  );
};

export default HeadingWithLink;
