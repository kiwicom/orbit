import React from "react";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";
import { Stack, useMediaQuery } from "@kiwicom/orbit-components";

import mq from "../MediaQueries";
import { KeyboardShortcuts, StyledIcon } from "./SearchButton";

interface Props {
  onClick: () => void;
}

const StyledSearchButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
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
      margin-right: ${theme.orbit.space200};
      transition: background ${theme.orbit.durationFast} ease-in;
      svg {
        margin-right: ${theme.orbit.space200};
      }
      &:hover {
        background: ${theme.orbit.paletteCloudLightHover};
        ${StyledIcon} {
          background: ${theme.orbit.paletteCloudNormal};
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
      <SearchIcon ariaHidden />
      <Stack align="center" spacing="200">
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
