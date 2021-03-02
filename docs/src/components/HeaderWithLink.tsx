import React from "react";
import styled from "styled-components";
import { ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";

import { slugify } from "../utils/common";

const StyledAnchorWrapper = styled.div`
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
  headerText: string;
}

const Header = ({ headerText }: Props) => (
  <StyledAnchorWrapper>
    <Stack flex spacing="XXXSmall" align="center">
      <Heading as="h3" type="title3" spaceAfter="small">
        {headerText}
      </Heading>
      <ButtonLink
        iconLeft={<LinkIcon />}
        href={`#${slugify(headerText)}`}
        type="secondary"
        compact
      />
    </Stack>
  </StyledAnchorWrapper>
);

export default Header;
