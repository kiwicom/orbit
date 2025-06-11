import React from "react";
import cx from "clsx";
import { defaultTokens, convertHexToRgba } from "@kiwicom/orbit-design-tokens";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { Stack } from "@kiwicom/orbit-components";

import { normalizeName, determineOrder } from "./helpers";
import ColorContainer from "./ColorContainer";

export type tokenString = keyof typeof defaultTokens;

type Order = "first" | "last" | "middle" | "only";

interface Token {
  name?: string;
  tokenName?: tokenString;
  value?: string | number;
}

interface PaletteToken extends Token {
  hover?: Token;
  active?: Token;
}

interface ContainerProps {
  isFull?: boolean;
  isFullBottom?: boolean;
  isMiddle?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isExpanded: boolean;
  order: Order;
  color?: PaletteToken;
}

const isLight = (hex: string) => {
  const rgba = convertHexToRgba(hex, 100);
  const found = rgba.match(/\((?<red>\d+), (?<green>\d+), (?<blue>\d+)/);

  if (!found || !found.groups) {
    throw new Error("Could not parse color");
  }

  const red = Number(found.groups.red);
  const green = Number(found.groups.green);
  const blue = Number(found.groups.blue);

  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

  return hsp > 140;
};

const ColorContainer = ({
  color,
  order,
  isExpanded,
  isMiddle,
  isLeft,
  isRight,
  isFull,
  isFullBottom,
  ...props
}: ContainerProps) => {
  if (!color || typeof color.value !== "string") return null;

  const isNormal = (name?: string): boolean => String(name).includes("Normal");

  return (
    <div
      className={cx(
        "orbit-docs-color-container-wrapper",
        "py-400 px-600 grid-row-auto relative flex min-w-0 cursor-pointer flex-col overflow-hidden",
        "duration-fast transition-transform ease-in",
        isLight(color.value) ? "text-primary-foreground" : "text-white-normal",
        isFullBottom && "col-span-3 row-span-3",
        "hover:shadow-level-3 hover:scale-[1.01] hover:[&_.orbit-docs-copy-wrapper]:visible",
        "focus:shadow-level-3 focus:scale-[1.01] focus:[&_.orbit-docs-copy-wrapper]:visible",
        "active:shadow-level-3 active:scale-[1.01] active:[&_.orbit-docs-copy-wrapper]:visible",
        order === "only" && [
          isExpanded ? [isLeft && "rounded-l-150", isRight && "rounded-r-150"] : "rounded-150",
        ],
        order === "first" && [
          isFull && "rounded-t-150",
          isLeft && "rounded-tl-150",
          isRight && "rounded-tr-150",
        ],
        order === "last" && [
          isFull || (isFullBottom && "rounded-b-150"),
          isLeft && "rounded-bl-150",
          isRight && "rounded-br-150",
        ],
      )}
      style={{ background: color.value }}
      {...props}
    >
      <div
        className={cx(
          "orbit-docs-color-name-holder",
          "text-large h-full font-bold",
          isNormal ? "pb-600" : "pb-200",
        )}
      >
        <div className={cx("orbit-docs-color-hex-holder", "pb-100 font-medium")}>{color.value}</div>
        <div className={cx("orbit-docs-color-other-text-holder", "pb-100")}>
          {convertHexToRgba(color.value, 100)}
        </div>
        <div className={cx("orbit-docs-color-other-text-holder", "pb-100")}>{color.tokenName}</div>
        <div
          className={cx("orbit-docs-copy-wrapper", "bottom-500 right-600 pl-800 absolute hidden")}
          style={{
            background: `linear-gradient(90deg, transparent, ${color.value} 27%)`,
          }}
        >
          {/* TODO: Migrate copy button
          <Stack direction="column" spacing="100" align="end">
            <CopyButton textToCopy={color.value} colorValue={color.value} buttonText="Hex" />
            <CopyButton
              textToCopy={convertHexToRgba(color.value, 100)}
              colorValue={color.value}
              buttonText="RGB"
            />
          </Stack> */}
        </div>
      </div>
    </div>
  );
};

const Palette = ({
  colors,
  allowAdditional: showAdditional,
}: {
  colors: tokenString[];
  allowAdditional: boolean;
}) => {
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
    <div>
      <div
        className={cx(
          "grid grid-flow-row-dense",
          isTablet && showAdditional ? "grid-cols-3" : "grid-cols-1",
        )}
      >
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
      </div>
    </div>
  );
};
export default Palette;
