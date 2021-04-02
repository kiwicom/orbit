import type { Interpolation } from "styled-components";

declare const OnlyIE: (style: Interpolation<any>, breakpoint?: string) => Interpolation<any>;

export { OnlyIE, OnlyIE as default };
