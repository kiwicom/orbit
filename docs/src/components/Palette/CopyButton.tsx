import React from "react";
import styled, { css } from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { Stack, Text } from "@kiwicom/orbit-components";

import CopyIcon from "../../images/icons/CopyIcon.svg";
import { ColorValueShape } from "./ColorContainer";

import { isLight } from ".";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

interface CopyButtonProps {
  buttonText: string;
  colorValue: string;
  textToCopy: string;
}

const StyledButton = styled.button<ColorValueShape>`
  ${({ colorValue }) => css`
    background: ${isLight(colorValue)
      ? defaultTokens.paletteInkNormal
      : defaultTokens.paletteWhite};
    padding: 0 ${defaultTokens.spaceXSmall};
    border-radius: ${defaultTokens.borderRadiusBadge};
    text-transform: uppercase;

    svg path {
      fill: ${isLight(colorValue) ? defaultTokens.paletteWhite : defaultTokens.paletteInkNormal};
    }
  `}
`;

const CopyButton = ({ buttonText, colorValue, textToCopy }: CopyButtonProps) => {
  const [copied, copy] = useCopyToClipboard();

  return (
    <StyledButton colorValue={colorValue} type="button" onClick={() => copy(textToCopy)}>
      <Stack direction="row" spacing="XXSmall" align="center">
        <Text type={isLight(colorValue) ? "white" : "primary"}>
          {copied ? "copied" : buttonText}
        </Text>
        {!copied && <CopyIcon />}
      </Stack>
    </StyledButton>
  );
};

export default CopyButton;
