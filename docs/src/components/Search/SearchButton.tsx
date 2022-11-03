import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import useOs from "../../hooks/useOs";

interface Props {
  onClick: () => void;
}

type Type = "primary" | "secondary";

const StyledSearchButtonWrapper = styled.div`
  ${({ theme }) => css`
    > button {
      background: ${convertHexToRgba(theme.orbit.paletteProductNormal, 10)};
    }
  `}
`;

const StyledWrapper = styled.div<{ type: Type }>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkDark};
  `}
`;

export const StyledIcon = styled.span<{ type: Type }>`
  ${({ theme, type }) => css`
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    transition: background ${theme.orbit.durationFast} ease-in;
    background: ${type === "primary"
      ? theme.orbit.paletteProductLightActive
      : theme.orbit.paletteCloudNormal};
    border-radius: ${theme.orbit.borderRadiusNormal};
  `}
`;

export const KeyboardShortcuts = ({ type = "primary" }: { type: Type }) => {
  const os = useOs();

  return (
    <StyledWrapper type={type}>
      <Stack inline spacing="XXSmall" align="center">
        <StyledIcon type={type}>
          {os === "mac" ? <>&#8984;</> : "Alt"} <span>+</span>
          <span> Shift</span>
        </StyledIcon>

        <span>+</span>
        <StyledIcon type={type}>&#75;</StyledIcon>
      </Stack>
    </StyledWrapper>
  );
};

const SearchButton = ({ onClick }: Props) => {
  return (
    <StyledSearchButtonWrapper>
      <Button size="large" type="primarySubtle" circled iconLeft={<SearchIcon />} onClick={onClick}>
        <Stack inline align="center" spacing="XSmall">
          <p>Search</p>
          <KeyboardShortcuts type="primary" />
        </Stack>
      </Button>
    </StyledSearchButtonWrapper>
  );
};

export default SearchButton;
