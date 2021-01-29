import { Property } from "style-dictionary";

export const isBase = ({ path }: Property): boolean => path && path[0] === "global";

export const isColor = ({ type, attributes: { category } }: Property): boolean =>
  type === "color" || category === "color";

export const isSpacing = ({ type, attributes: { category } }: Property): boolean =>
  type === "spacing" || category === "spacing";

export const isInternal = ({ internal }: Property): boolean => !!internal;

export const isNotInternal = (token: Property): boolean => !isInternal(token);

export const isDeprecated = ({ deprecated }: Property): boolean => deprecated != null;
