import React from "react";
import { defaultTheme as defaultTokens } from "@kiwicom/orbit-design-tokens";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import styled, { css } from "styled-components";

import { normalizeName, determineOrder } from "./helpers";
import Switch from "../Switch";
import ColorContainer from "./ColorContainer";

export type tokenString = keyof typeof defaultTokens;

const Grid = styled.div<{ isTablet?: boolean | null; hasAdditional: boolean }>`
  ${({ isTablet, hasAdditional }) => css`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: ${isTablet && hasAdditional ? "1fr 1fr 1fr" : "1fr"};
  `}
`;

interface PaletteProps {
  colors: string[];
  allowAdditional: boolean;
}

interface Token {
  name?: string;
  tokenName?: tokenString;
  value?: string | number;
}

export interface PaletteToken extends Token {
  hover?: Token;
  active?: Token;
}

const Palette = ({ colors, allowAdditional }: PaletteProps) => {
  const [showAdditional, setShowAdditional] = React.useState(false);
  const { isTablet } = useMediaQuery();

  const getToken = (token: tokenString): Token | undefined => {
    if (!defaultTokens[token]) return undefined;

    return {
      name: normalizeName(token),
      tokenName: token,
      value: defaultTokens[token],
    };
  };

  const colorsWithToken = colors
    .map(color => {
      if (!defaultTokens[color]) return undefined;

      const hover = getToken(`${color}Hover` as tokenString) && {
        ...getToken(`${color}Hover` as tokenString),
      };

      const active = getToken(`${color}Active` as tokenString) && {
        ...getToken(`${color}Active` as tokenString),
      };

      return {
        ...getToken(color),
        hover,
        active,
      };
    })
    .filter(Boolean);

  return (
    <>
      {allowAdditional && (
        <Switch
          onChange={() => setShowAdditional(prev => !prev)}
          checked={showAdditional}
          reverseLabel
        >
          Show additional shades
        </Switch>
      )}
      <div>
        <Grid isTablet={isTablet} hasAdditional={showAdditional}>
          {colorsWithToken.map((token, idx, arr) => {
            const props = {
              order: determineOrder(idx, arr),
              isExpanded: showAdditional,
              isFullBottom: token && showAdditional && !token.hover && !token.active,
            };

            return (
              <>
                <ColorContainer
                  color={token}
                  {...props}
                  isFull={!showAdditional}
                  isLeft={showAdditional}
                />
                {showAdditional && (
                  <ColorContainer color={token && token.hover} {...props} isMiddle />
                )}
                {showAdditional && (
                  <ColorContainer color={token && token.active} {...props} isRight />
                )}
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Palette;
