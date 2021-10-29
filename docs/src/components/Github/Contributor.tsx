import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";

import { Contributor as ContributorData } from ".";

const StyledImageWrapper = styled(({ url, children, ...props }) => {
  const Component = url ? "a" : "div";
  return (
    <Component href={url} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Component>
  );
})`
  width: 60px;
`;

const Contributor = ({
  avatar_url,
  name,
  github,
}: Pick<ContributorData, "avatar_url" | "name" | "github">) => {
  return (
    <Stack
      inline
      direction="column"
      largeMobile={{ direction: "row", shrink: true }}
      spaceAfter="large"
      spacing="large"
      align="stretch"
    >
      <StyledImageWrapper url={github}>
        <img
          src={avatar_url}
          alt={name}
          title={name}
          css={css`
            border-radius: 6px;
          `}
        />
      </StyledImageWrapper>
    </Stack>
  );
};

export default Contributor;
