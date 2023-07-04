import * as React from "react";
import cx from "clsx";

import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "./consts";
import { textAlignClasses } from "../common/tailwind/textAlign";
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";
import { QUERIES } from "../utils/mediaQuery/consts";
import type { Props } from "./types";
import { typeClasses } from "./twClasses";

const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE1,
  align = ALIGN.START,
  as: Component = ELEMENT_OPTIONS.DIV,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
  id,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
}: Props) => {
  const viewportSpecs = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };
  const viewportClasses = Object.values(QUERIES).map(viewport => {
    const viewportProps = viewportSpecs[viewport];

    if (viewportProps == null) {
      return null;
    }

    const { type: vpType, align: vpAlign, spaceAfter: vpSpaceAfter } = viewportProps;
    return [
      vpType && typeClasses[viewport][vpType],
      vpAlign && textAlignClasses[viewport][vpAlign],
      vpSpaceAfter && spaceAfterClasses[viewport][vpSpaceAfter],
    ];
  });

  return (
    <Component
      id={id}
      data-test={dataTest}
      role={Component === "div" ? "heading" : undefined}
      data-a11y-section={dataA11ySection}
      className={cx(
        "orbit-heading font-base m-0",
        inverted ? "text-heading-foreground-inverted" : "text-heading-foreground",
        typeClasses[type],
        textAlignClasses[align],
        spaceAfter && spaceAfterClasses[spaceAfter],
        ...viewportClasses,
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
