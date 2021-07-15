import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";

interface Props {
  onClick: () => void;
}

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteProductNormal};
  `}
`;

const StyledIcon = styled.span`
  ${({ theme }) => css`
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    background: ${theme.orbit.paletteProductLightActive};
    border-radius: ${theme.orbit.borderRadiusNormal};
  `}
`;

const KeyboardShortcuts = () => {
  const [os, setOs] = React.useState("mac");

  React.useEffect(() => {
    if (window.navigator.appVersion.includes("Mac")) setOs("mac");
    if (window.navigator.appVersion.includes("Windows")) setOs("win");
  }, []);

  return (
    <StyledWrapper>
      <Stack inline spacing="XXSmall" align="center">
        <StyledIcon>{os === "mac" ? <>&#8984;</> : "Alt"}</StyledIcon>
        <span>+</span>
        <StyledIcon>&#75;</StyledIcon>
      </Stack>
    </StyledWrapper>
  );
};

const SearchButton = ({ onClick }: Props) => {
  return (
    <Button
      type="primarySubtle"
      circled
      iconLeft={<SearchIcon />}
      iconRight={<KeyboardShortcuts />}
      onClick={onClick}
    >
      Search
    </Button>
  );
};

export default SearchButton;
