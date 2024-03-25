"use client";

import * as React from "react";
import cx from "clsx";

import { QUERIES } from "../utils/mediaQuery";
import { getTailwindClasses } from "./helpers";
import type { Props } from "./types";

const Inline = ({
  as: Component = "div",
  mediumMobile,
  largeMobile,
  className,
  tablet,
  desktop,
  largeDesktop,
  align,
  justify,
  spacing,
  children,
  dataTest,
  id,
}: Props) => {
  const twProps = { align, justify, spacing };

  const viewportClasses = React.useMemo(() => {
    const allViewportProps = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };

    return Object.values(QUERIES).map(viewport => {
      const viewportProps = allViewportProps[viewport];

      if (viewportProps == null) {
        return null;
      }

      return getTailwindClasses(viewportProps, viewport);
    });
  }, [desktop, largeDesktop, largeMobile, mediumMobile, tablet]);

  return (
    // @ts-expect-error ts-migrate(3554) FIXME: Property 'children' does not exist on type 'IntrinsicAttributes'.ts(2322)
    <Component className={cx("orbit-inline", className)} id={id} data-test={dataTest}>
      <div className={cx("flex flex-wrap", ...getTailwindClasses(twProps), ...viewportClasses)}>
        {children}
      </div>
    </Component>
  );
};

export default Inline;
