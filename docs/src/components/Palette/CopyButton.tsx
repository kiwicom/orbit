import React from "react";
import styled, { css } from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { Stack, Text } from "@kiwicom/orbit-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CopyIcon from "../../images/icons/CopyIcon.svg";
import { copyTimeout } from "../../utils/common";
import { ColorValueShape } from "./ColorContainer";

import { isLight } from ".";

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
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    copyTimeout(copied, setCopied);
  }, [copied, setCopied]);

  return (
    <CopyToClipboard text={textToCopy}>
      <StyledButton colorValue={colorValue} type="button" onClick={() => setCopied(true)}>
        <Stack direction="row" spacing="XXSmall" align="center">
          <Text type={isLight(colorValue) ? "white" : "primary"}>
            {copied ? "copied" : buttonText}
          </Text>
          {!copied && <CopyIcon />}
        </Stack>
      </StyledButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
