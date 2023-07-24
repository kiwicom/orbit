import { DesignToken } from "style-dictionary";

const isTypeOf = ({ type, category }: DesignToken, typeName: string): boolean =>
  typeName === type || typeName === category;

export const isColor = (prop: DesignToken): boolean => isTypeOf(prop, "color");

export const isColorPalette = (prop: DesignToken): boolean =>
  isColor(prop) && prop.attributes.name.startsWith("palette");

export const isBorderRadius = (prop: DesignToken): boolean => isTypeOf(prop, "border-radius");

export const isZIndex = (prop: DesignToken): boolean => isTypeOf(prop, "z-index");

export const isBreakpoint = (prop: DesignToken): boolean => isTypeOf(prop, "breakpoint");

export const isSize = (prop: DesignToken): boolean => isTypeOf(prop, "size");

export const isBoxShadow = (prop: DesignToken): boolean => isTypeOf(prop, "box-shadow");

export const isModifier = (prop: DesignToken): boolean => isTypeOf(prop, "modifier");

export const isSpacing = (prop: DesignToken): boolean => isTypeOf(prop, "spacing");

export const isDuration = (prop: DesignToken): boolean => isTypeOf(prop, "duration");

export const isOpacity = (prop: DesignToken): boolean => isTypeOf(prop, "opacity");

export const isTextDecoration = (prop: DesignToken): boolean => isTypeOf(prop, "text-decoration");

export const isInternal = ({ internal }: DesignToken): boolean => !!internal;

export const isNotInternal = (token: DesignToken): boolean => !isInternal(token);

export const isDeprecated = ({ deprecated }: DesignToken): boolean => deprecated != null;

export const isNotDeprecated = (prop: DesignToken): boolean => !isDeprecated(prop);

export const isGlobal = ({ attributes: { namespace } }: DesignToken): boolean =>
  namespace === "global";

export const isComponentSpecific = ({ attributes: { namespace } }: DesignToken): boolean =>
  namespace === "component";

export const isHex = (value: string | number): boolean => /^#[A-F0-9]+$/i.test(String(value));

const getSpacingArray = (spaceArray: string[]): [string[], number] => {
  const array = spaceArray.sort();
  return [array, array.length];
};

export const isSpacingWithTwoValues = (spaceArray: string[]): boolean => {
  const [[first, second], length] = getSpacingArray(spaceArray);
  return length === 2 && first === "left-right" && second === "top-bottom";
};

export const isSpacingWithThreeValues = (spaceArray: string[]): boolean => {
  const [[first, second, third], length] = getSpacingArray(spaceArray);
  return length === 3 && first === "bottom" && second === "left-right" && third === "top";
};

export const isSpacingWithFourValues = (spaceArray: string[]): boolean => {
  const [[first, second, third, fourth], length] = getSpacingArray(spaceArray);
  return (
    length === 4 && first === "bottom" && second === "left" && third === "right" && fourth === "top"
  );
};
