import React from "react";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { Grid, Stack } from "@kiwicom/orbit-components";

import ColorContainer from "./ColorContainer";
import Switch from "../Switch";

export const isLight = (hex: string) => {
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

export type tokenString = keyof typeof defaultTokens;

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
    <Stack spacing="none">
      {allowAdditional && (
        <Switch onChange={switchShowAdditional} checked={showAdditional} reverseLabel>
          Show additional shades
        </Switch>
      )}
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
          <Grid columns={showAdditional && color.hover.value && isTablet ? "1fr 1fr 1fr" : "1fr"}>
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
    </Stack>
  );
};

export default Palette;
