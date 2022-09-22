import React from "react";
import styled, { css } from "styled-components";
import { Stack, Text } from "@kiwicom/orbit-components";

import CopyIcon from "../../images/icons/CopyIcon.svg";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { isLight } from "./helpers";

interface CopyButtonProps {
  buttonText: string;
  colorValue?: string;
  textToCopy?: string;
}

const StyledButton = styled.button<{ colorValue?: string }>`
  ${({ colorValue, theme }) => css`
    background: ${colorValue && isLight(colorValue)
      ? theme.orbit.paletteInkDark
      : theme.orbit.paletteWhite};
    padding: 0 ${theme.orbit.spaceXSmall};
    border-radius: ${theme.orbit.borderRadiusBadge};
    text-transform: uppercase;
    transition: transform ${theme.orbit.durationFast} ease-in;

    svg path {
      fill: ${colorValue && isLight(colorValue)
        ? theme.orbit.paletteWhite
        : theme.orbit.paletteInkDark};
    }
    &:hover {
      transform: translateX(-2px);
    }
  `}
`;

const CopyButton = ({ buttonText, colorValue, textToCopy }: CopyButtonProps) => {
  const [copied, copy] = useCopyToClipboard();

  return (
    <StyledButton
      colorValue={colorValue}
      type="button"
      onClick={() => textToCopy && copy(textToCopy)}
    >
      <Stack direction="row" spacing="XXSmall" align="center">
        <Text type={colorValue && isLight(colorValue) ? "white" : "primary"}>
          {copied ? "copied" : buttonText}
        </Text>
        {!copied && <CopyIcon />}
      </Stack>
    </StyledButton>
  );
};

export default CopyButton;
