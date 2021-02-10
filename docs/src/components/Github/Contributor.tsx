import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";

import { IContributor } from ".";

const StyledImageWrapper = styled(({ url, children, ...props }) => {
  const Component = url ? "a" : "div";
  return (
    <Component href={url} {...props}>
      {children}
    </Component>
  );
})`
  width: 60px;
`;

const Contributor = ({ avatar_url, name, url }: IContributor) => {
  return (
    <Stack
      inline
      direction="column"
      largeMobile={{ direction: "row", shrink: true }}
      spaceAfter="large"
      spacing="large"
      align="stretch"
    >
      <StyledImageWrapper url={url}>
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
