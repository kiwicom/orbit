export type Property = number | boolean | string | Record<string, Property>;
export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Align = "start" | "center" | "end" | "stretch" | "baseline";
export type Justify = "start" | "end" | "center" | "between" | "around";

declare function getJustify(justify: Justify): string;
declare function getAlign(align: Align): string;
declare function getDirection(direction?: Direction): string;
declare function getShrink(shrink: string | boolean): string;
declare function getGrow(grow: string | boolean): string;
declare function getWrap(wrap: string | boolean): string;

export { getJustify, getAlign, getDirection, getShrink, getGrow, getWrap };
