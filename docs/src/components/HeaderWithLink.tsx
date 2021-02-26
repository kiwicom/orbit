import React from "react";
import styled from "styled-components";
import { ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";

import { sluggify } from "../utils/common";

const StyledAnchorWrapper = styled.div`
  margin-top: -10px;

  svg {
    visibility: hidden;
  }

  &:hover svg {
    visibility: visible;
  }
`;

interface Props {
  children: string;
}

const Header = ({ children }: Props) => (
  <StyledAnchorWrapper>
    <Stack flex spacing="XXXSmall" align="center">
      <Heading as="h3" type="title3" spaceAfter="small">
        {children}
      </Heading>
      <ButtonLink
        iconLeft={<LinkIcon />}
        href={`#${sluggify(children)}`}
        type="secondary"
        compact
      />
    </Stack>
  </StyledAnchorWrapper>
);

export default Header;
