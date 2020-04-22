// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module "@kiwicom/orbit-components/lib/utils/mediaQuery";

type QueryFunction = (style: Array<any>) => Array<any>;

export type Devices =
  | "largeDesktop"
  | "desktop"
  | "tablet"
  | "largeMobile"
  | "mediumMobile"
  | "smallMobile";

const MediaQuery: { [key in Devices]: QueryFunction };
export { MediaQuery, MediaQuery as default };
