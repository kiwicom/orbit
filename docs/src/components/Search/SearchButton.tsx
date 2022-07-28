import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";

import useOs from "../../hooks/useOs";

interface Props {
  onClick: () => void;
}

type Type = "primary" | "secondary";

const StyledWrapper = styled.div<{ type: Type }>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};
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
      : theme.orbit.paletteCloudDark};
    border-radius: ${theme.orbit.borderRadiusNormal};
  `}
`;

export const KeyboardShortcuts = ({ type = "primary" }: { type: Type }) => {
  const os = useOs();

  return (
    <StyledWrapper type={type}>
      <Stack inline spacing="XXSmall" align="center">
        <StyledIcon type={type}>{os === "mac" ? <>&#8984;</> : "Alt"}</StyledIcon>
        <span>+</span>
        <span>Shift</span>
        <span>+</span>
        <StyledIcon type={type}>&#75;</StyledIcon>
      </Stack>
    </StyledWrapper>
  );
};

const SearchButton = ({ onClick }: Props) => {
  return (
    <Button size="large" type="primarySubtle" circled iconLeft={<SearchIcon />} onClick={onClick}>
      <Stack inline align="center" spacing="XSmall">
        <p>Search</p>
        <KeyboardShortcuts type="primary" />
      </Stack>
    </Button>
  );
};

export default SearchButton;
