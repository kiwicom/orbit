import { Property } from "style-dictionary";

const isTypeOf = ({ type, attributes: { category } }: Property, typeName: string): boolean =>
  typeName === type || typeName === category;

export const isColor = (prop: Property): boolean => isTypeOf(prop, "color");

export const isSpacing = (prop: Property): boolean => isTypeOf(prop, "spacing");

export const isBorderRadius = (prop: Property): boolean => isTypeOf(prop, "border-radius");

export const isBoxShadow = (prop: Property): boolean => isTypeOf(prop, "box-shadow");

export const isInternal = ({ internal }: Property): boolean => !!internal;

export const isNotInternal = (token: Property): boolean => !isInternal(token);

export const isDeprecated = ({ deprecated }: Property): boolean => deprecated != null;
