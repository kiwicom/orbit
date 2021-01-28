import { Property } from "style-dictionary";

export const isBase = ({ path }: Property): boolean => path && path[0] === "global";

const isTypeOf = ({ type, attributes: { category } }: Property, typeName: string): boolean =>
  typeName === type || typeName === category;

export const isColor = (prop: Property): boolean => isTypeOf(prop, "color");

export const isSpacing = (prop: Property): boolean => isTypeOf(prop, "spacing");

export const isBorderRadius = (prop: Property): boolean => isTypeOf(prop, "border-radius");

export const isInternal = ({ internal }: Property): boolean => !!internal;

export const isNotInternal = (token: Property): boolean => !isInternal(token);
