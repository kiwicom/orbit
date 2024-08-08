import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.orbit.spaceSmall};
    padding: ${theme.orbit.spaceXLarge};
    border-radius: ${theme.orbit.borderRadius150};
    background: ${theme.orbit.paletteCloudLight};

    & > img {
      max-width: 100%;
      justify-self: center;
      background: ${theme.orbit.paletteWhite};
      border-radius: ${theme.orbit.borderRadius150};
      padding: ${theme.orbit.spaceXLarge};
    }
  `};
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
