import { css, FlattenSimpleInterpolation } from "styled-components";

import mediaQueries from "../../utils/mediaQuery";
import { DEVICES } from "../../utils/mediaQuery/consts";
import { Devices } from "../../utils/mediaQuery/index.d";
import getDisplay from "./getDisplay";

const getViewportHideStyles = (
  on: Devices[],
  resolveDisplayProp: typeof getDisplay,
): (false | FlattenSimpleInterpolation)[] =>
  Object.values(DEVICES).map(viewport =>
    viewport in mediaQueries
      ? css`
          ${mediaQueries[viewport](css`
            display: ${on.indexOf(viewport) !== -1 ? "none" : resolveDisplayProp()};
          `)};
        `
      : // "smallMobile" is not media query so we need to check it explicitly
        viewport === "smallMobile" &&
        on.indexOf(viewport) !== -1 &&
        css`
          display: none;
        `,
  );

export default getViewportHideStyles;
