import { Property } from "style-dictionary";

const isTypeOf = ({ type, category }: Property, typeName: string): boolean =>
  typeName === type || typeName === category;

export const isColor = (prop: Property): boolean => isTypeOf(prop, "color");

export const isBorderRadius = (prop: Property): boolean => isTypeOf(prop, "border-radius");

export const isZIndex = (prop: Property): boolean => isTypeOf(prop, "z-index");

export const isBreakpoint = (prop: Property): boolean => isTypeOf(prop, "breakpoint");

export const isSize = (prop: Property): boolean => isTypeOf(prop, "size");

export const isBoxShadow = (prop: Property): boolean => isTypeOf(prop, "box-shadow");

export const isModifier = (prop: Property): boolean => isTypeOf(prop, "modifier");

export const isSpacing = (prop: Property): boolean => isTypeOf(prop, "spacing");

export const isDuration = (prop: Property): boolean => isTypeOf(prop, "duration");

export const isOpacity = (prop: Property): boolean => isTypeOf(prop, "opacity");

export const isInternal = ({ internal }: Property): boolean => !!internal;

export const isNotInternal = (token: Property): boolean => !isInternal(token);

export const isDeprecated = ({ deprecated }: Property): boolean => deprecated != null;

const getSpacingArray = spaceArray => {
  const array = spaceArray.sort();
  return [array, array.length];
};

export const isSpacingWithTwoValues = (spaceArray: Array<string>): boolean => {
  const [[first, second], length] = getSpacingArray(spaceArray);
  return length === 2 && first === "left-right" && second === "top-bottom";
};

export const isSpacingWithThreeValues = (spaceArray: Array<string>): boolean => {
  const [[first, second, third], length] = getSpacingArray(spaceArray);
  return length === 3 && first === "bottom" && second === "left-right" && third === "top";
};

export const isSpacingWithFourValues = (spaceArray: Array<string>): boolean => {
  const [[first, second, third, fourth], length] = getSpacingArray(spaceArray);
  return (
    length === 4 && first === "bottom" && second === "left" && third === "right" && fourth === "top"
  );
};
