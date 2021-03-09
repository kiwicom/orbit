import React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { Grid, Stack, Text } from "@kiwicom/orbit-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CopyIcon from "../images/icons/CopyIcon.svg";
import { copyTimeout } from "../utils/common";
import Switch from "./Switch";

const isLight = (hex: string) => {
  const { red, green, blue } = convertHexToRgba(hex, 100).match(
    /\((?<red>\d+), (?<green>\d+), (?<blue>\d+)/,
  ).groups;

  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

  if (hsp > 140) {
    return true;
  }
  return false;
};

interface BorderingProps {
  order?: "first" | "middle" | "last" | "only";
  full?: boolean;
  left?: boolean;
  right?: boolean;
}
interface ColorValueShape {
  colorValue: string;
}

interface ColorContainerWrapperProps extends ColorValueShape, BorderingProps {
  hovered: boolean;
}

const ColorContainerWrapper = styled.div<ColorContainerWrapperProps>`
  ${({ colorValue, full, hovered, left, order, right, theme }) => css`
    background-color: ${colorValue};
    color: ${isLight(colorValue) ? theme.orbit.colorTextPrimary : theme.orbit.paletteWhite};
    padding: ${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge};
    transition: ${theme.orbit.durationFast};
    ${hovered &&
    `scale: 1.01;
    box-shadow: ${theme.orbit.boxShadowRaised};
    `}
    ${order === "only" && `border-radius: ${theme.orbit.borderRadiusLarge}`}
    ${order === "first" &&
    full &&
    `border-radius: ${theme.orbit.borderRadiusLarge} ${theme.orbit.borderRadiusLarge} 0 0;`}
      ${order === "first" && left && `border-top-left-radius: ${theme.orbit.borderRadiusLarge}`}
      ${order === "first" && right && `border-top-right-radius: ${theme.orbit.borderRadiusLarge}`}
    ${order === "last" &&
    full &&
    `border-radius: 0 0 ${theme.orbit.borderRadiusLarge} ${theme.orbit.borderRadiusLarge};`}
      ${order === "last" && left && `border-bottom-left-radius: ${theme.orbit.borderRadiusLarge}`}
      ${order === "last" && right && `border-bottom-right-radius: ${theme.orbit.borderRadiusLarge}`}
  `}
`;
interface ColorNameHolderProps {
  isMain: boolean;
}

const ColorNameHolder = styled.div<ColorNameHolderProps>`
  ${({ isMain, theme }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    font-size: ${theme.orbit.fontSizeTextLarge};
    padding-bottom: ${isMain ? theme.orbit.spaceLarge : theme.orbit.spaceXSmall};
  `}
`;

const ColorHexHolder = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightMedium};
    padding-bottom: ${theme.orbit.spaceXXSmall};
  `}
`;

const ColorOtherTextHolder = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

interface CopyButtonProps {
  buttonText: string;
  colorValue: string;
  textToCopy: string;
}

const CopyButton = ({ buttonText, colorValue, textToCopy }: CopyButtonProps) => {
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    copyTimeout(copied, setCopied);
  }, [copied, setCopied]);

  return (
    <CopyToClipboard text={textToCopy}>
      <button
        type="button"
        onClick={() => setCopied(true)}
        css={css`
          background: ${isLight(colorValue)
            ? defaultTokens.paletteInkNormal
            : defaultTokens.paletteWhite};
          padding: 0 ${defaultTokens.spaceXSmall};
          border-radius: ${defaultTokens.borderRadiusBadge};
          text-transform: uppercase;

          svg path {
            fill: ${isLight(colorValue)
              ? defaultTokens.paletteWhite
              : defaultTokens.paletteInkNormal};
          }
        `}
      >
        <Stack direction="row" spacing="XXSmall" align="center">
          <Text type={isLight(colorValue) ? "white" : "primary"}>
            {copied ? "copied" : buttonText}
          </Text>
          {!copied && <CopyIcon />}
        </Stack>
      </button>
    </CopyToClipboard>
  );
};

const CopyWrapper = styled.div<ColorValueShape>`
  ${({ colorValue, theme }) => css`
    background: linear-gradient(90deg, transparent, ${colorValue} 27%);
    position: absolute;
    bottom: 20px;
    right: ${theme.orbit.spaceLarge};
    padding-left: ${theme.orbit.spaceXLarge};
  `}
`;

type tokenString = keyof typeof defaultTokens;

interface ColorObjectShape {
  value: string | number;
  name: string;
  tokenName: tokenString;
}

interface ColorObjectAdditionalShape {
  value: string;
  name: string;
  tokenName: string;
}

interface ColorContainerProps extends BorderingProps {
  color: ColorObjectShape | ColorObjectAdditionalShape;
}

const ColorContainer = ({ color, full, left, order, right }: ColorContainerProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isNormal = (name: string) => {
    if (name.match("Normal")) {
      return true;
    }
    return false;
  };

  if (typeof color.value !== "string") return <div />;

  return (
    <ColorContainerWrapper
      tabIndex={0}
      colorValue={color.value}
      hovered={isHovered}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      order={order}
      full={full}
      left={left}
      right={right}
    >
      <ColorNameHolder isMain={isNormal(color.name)}>{color.name}</ColorNameHolder>
      <ColorHexHolder>{color.value}</ColorHexHolder>
      <ColorOtherTextHolder>{convertHexToRgba(color.value, 100)}</ColorOtherTextHolder>
      <ColorOtherTextHolder>{color.tokenName}</ColorOtherTextHolder>
      {isHovered && (
        <CopyWrapper colorValue={color.value}>
          <Stack direction="column" spacing="XXSmall" align="end">
            <CopyButton textToCopy={color.value} colorValue={color.value} buttonText="Hex" />
            <CopyButton
              textToCopy={convertHexToRgba(color.value, 100)}
              colorValue={color.value}
              buttonText="RGB"
            />
            <CopyButton textToCopy={color.tokenName} colorValue={color.value} buttonText="Token" />
          </Stack>
        </CopyWrapper>
      )}
    </ColorContainerWrapper>
  );
};

interface PaletteProps {
  colors: tokenString[];
  allowAdditional: boolean;
}

const normalizeName = (tokenName: string) =>
  tokenName
    .replace(/^palette/, "")
    .replace(/^color/, "")
    .replace(/([a-z])([A-Z])/, "$1 $2")
    .replace("Hover", ":hover")
    .replace("Active", ":active");

const Palette = ({ colors, allowAdditional }: PaletteProps) => {
  const [showAdditional, setShowAdditional] = React.useState(false);
  const { isTablet } = useMediaQuery();
  const switchShowAdditional = () => {
    setShowAdditional(!showAdditional);
  };

  const colorsWithToken = colors.map(color => ({
    name: normalizeName(color),
    tokenName: color,
    value: defaultTokens[color],
    hover: {
      name: normalizeName(`${color}Hover`),
      tokenName: `${color}Hover`,
      value: defaultTokens[`${color}Hover`],
    },
    active: {
      name: normalizeName(`${color}Active`),
      tokenName: `${color}Active`,
      value: defaultTokens[`${color}Active`],
    },
  }));
  return (
    <Stack>
      {allowAdditional && (
        <Switch onChange={switchShowAdditional} checked={showAdditional} reverseLabel>
          Show additional shades
        </Switch>
      )}
      <div>
        {colorsWithToken.map((color, index, allColors) => {
          const determineOrder = indexNumber => {
            if (allColors.length === 1) return "only";
            if (indexNumber === 0) return "first";
            if (indexNumber === allColors.length - 1) return "last";
            return "middle";
          };
          const hasAdditional = obj => {
            if (obj.hover.value || obj.active.value) return true;
            return false;
          };
          return (
            <Grid columns={showAdditional && color.hover.value && isTablet ? "34% 33% 33%" : "1fr"}>
              <ColorContainer
                color={color}
                order={determineOrder(index)}
                full={!showAdditional || !hasAdditional(color)}
                left={showAdditional}
              />
              {showAdditional && color.hover.value && <ColorContainer color={color.hover} />}
              {showAdditional && color.active.value && (
                <ColorContainer
                  color={color.active}
                  order={determineOrder(index)}
                  right={showAdditional}
                />
              )}
            </Grid>
          );
        })}
      </div>
    </Stack>
  );
};

export default Palette;
