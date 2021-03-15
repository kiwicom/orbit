import React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js";
import { Stack } from "@kiwicom/orbit-components";

import CopyButton from "./CopyButton";

import { isLight, tokenString } from ".";

interface BorderingProps {
  order?: "first" | "middle" | "last" | "only";
  full?: boolean;
  left?: boolean;
  right?: boolean;
}

export interface ColorValueShape {
  colorValue: string;
}

const CopyWrapper = styled.div<ColorValueShape>`
  ${({ colorValue, theme }) => css`
    background: linear-gradient(90deg, transparent, ${colorValue} 27%);
    position: absolute;
    bottom: 20px;
    right: ${theme.orbit.spaceLarge};
    padding-left: ${theme.orbit.spaceXLarge};
  `}
`;

type ColorContainerWrapperProps = ColorValueShape & BorderingProps;

const ColorContainerWrapper = styled.div<ColorContainerWrapperProps>`
  ${({ colorValue, full, left, order, right, theme }) => css`
    background-color: ${colorValue};
    color: ${isLight(colorValue) ? theme.orbit.colorTextPrimary : theme.orbit.paletteWhite};
    padding: ${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge};
    transition: ${theme.orbit.durationFast};
    position: relative;

    ${CopyWrapper} {
      visibility: hidden;
    }

    &:hover,
    :focus,
    :active {
      transform: scale(1.01);
      box-shadow: ${theme.orbit.boxShadowRaised};

      ${CopyWrapper} {
        visibility: visible;
      }
    }
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
  const isNormal = (name: string) => {
    if (name.match("Normal")) {
      return true;
    }
    return false;
  };

  if (typeof color.value !== "string") return null;

  return (
    <ColorContainerWrapper
      tabIndex={0}
      colorValue={color.value}
      order={order}
      full={full}
      left={left}
      right={right}
    >
      <ColorNameHolder isMain={isNormal(color.name)}>{color.name}</ColorNameHolder>
      <ColorHexHolder>{color.value}</ColorHexHolder>
      <ColorOtherTextHolder>{convertHexToRgba(color.value, 100)}</ColorOtherTextHolder>
      <ColorOtherTextHolder>{color.tokenName}</ColorOtherTextHolder>
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
    </ColorContainerWrapper>
  );
};

export default ColorContainer;
