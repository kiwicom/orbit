import { css, Interpolation } from "styled-components";
import { QUERIES, TOKEN, getBreakpointWidth } from "@kiwicom/orbit-components/lib/utils/mediaQuery";

export type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

export type MediaQueries = Record<keyof typeof TOKEN, QueryFunction>;

const mediaQueries = Object.values(QUERIES).reduce<MediaQueries>(
  (acc: MediaQueries, device: keyof typeof TOKEN) => {
    acc[device] = style => css`
      @media ${({ theme }) => getBreakpointWidth(device, theme)} {
        ${style};
      }
    `;

    return acc;
  },
  { mediumMobile: {}, largeMobile: {}, tablet: {}, desktop: {}, largeDesktop: {} } as MediaQueries,
);

export default mediaQueries;
