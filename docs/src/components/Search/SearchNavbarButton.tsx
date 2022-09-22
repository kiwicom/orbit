import React from "react";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";
import { Stack, useMediaQuery, mediaQueries as mq } from "@kiwicom/orbit-components";

import { KeyboardShortcuts, StyledIcon } from "./SearchButton";

interface Props {
  onClick: () => void;
}

const StyledSearchButton = styled.button`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 50%;

    ${mq.tablet(css`
      background: ${theme.orbit.paletteCloudLight};
      padding: 10px 24px;
      border-radius: 22px;
      overflow: hidden;
      margin-right: ${theme.orbit.spaceXSmall};
      transition: background ${theme.orbit.durationFast} ease-in;
      svg {
        margin-right: ${theme.orbit.spaceXSmall};
      }
      &:hover {
        background: ${theme.orbit.paletteCloudLightHover};
        ${StyledIcon} {
          background: ${theme.orbit.paletteCloudDark};
        }
      }
      &:active,
      &:focus {
        background: ${theme.orbit.paletteCloudLightActive};
      }
    `)}
  `}
`;

const SearchNavbarButton = ({ onClick }: Props) => {
  const { isTablet } = useMediaQuery();

  return (
    <StyledSearchButton onClick={onClick}>
      <SearchIcon />
      <Stack align="center" spacing="XSmall">
        {isTablet ? (
          <>
            <p>Hit</p>
            <KeyboardShortcuts type="secondary" />
            <p>for the quick search</p>
          </>
        ) : null}
      </Stack>
    </StyledSearchButton>
  );
};

export default SearchNavbarButton;
