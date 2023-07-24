"use client";

import * as React from "react";
import cx from "clsx";

import { QUERIES } from "../utils/mediaQuery/consts";
import type { Props } from "./types";
import getTailwindClasses from "./helpers";

const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      as: Component = "div",
      id,
      mediumMobile,
      largeMobile,
      tablet,
      desktop,
      largeDesktop,
      children,
      dataTest,
      className,
      display,
      wrap,
      direction,
      position,
      align,
      justify,
      textAlign,
      elevation,
      borderRadius,
      overflow,
      shrink,
      grow,
      zIndex,
      width,
      minWidth,
      maxWidth,
      height,
      maxHeight,
      top,
      right,
      bottom,
      left,
      color,
      background,
      padding,
      margin,
    },
    ref,
  ) => {
    const twProps = {
      display,
      wrap,
      direction,
      position,
      align,
      justify,
      textAlign,
      elevation,
      borderRadius,
      overflow,
      color,
      background,
      padding,
      margin,
    };

    const viewportClasses = React.useMemo(() => {
      const viewportSpecs = {
        mediumMobile,
        largeMobile,
        tablet,
        desktop,
        largeDesktop,
      };

      return Object.values(QUERIES).map(viewport => {
        const viewportProps = viewportSpecs[viewport];

        if (viewportProps == null) return null;

        return getTailwindClasses(viewportProps, viewport);
      });
    }, [mediumMobile, largeMobile, tablet, desktop, largeDesktop]);

    const vars = {
      "--box-shrink": shrink,
      "--ld-box-shrink": largeDesktop?.shrink,
      "--de-box-shrink": desktop?.shrink,
      "--tb-box-shrink": tablet?.shrink,
      "--lm-box-shrink": largeMobile?.shrink,
      "--mm-box-shrink": mediumMobile?.shrink,
      "--box-grow": grow,
      "--ld-box-grow": largeDesktop?.grow,
      "--de-box-grow": desktop?.grow,
      "--tb-box-grow": tablet?.grow,
      "--lm-box-grow": largeMobile?.grow,
      "--mm-box-grow": mediumMobile?.grow,
      "--box-z-index": zIndex,
      "--ld-box-z-index": largeDesktop?.zIndex,
      "--de-box-z-index": desktop?.zIndex,
      "--tb-box-z-index": tablet?.zIndex,
      "--lm-box-z-index": largeMobile?.zIndex,
      "--mm-box-z-index": mediumMobile?.zIndex,
      "--box-width": width,
      "--ld-box-width": largeDesktop?.width,
      "--de-box-width": desktop?.width,
      "--tb-box-width": tablet?.width,
      "--lm-box-width": largeMobile?.width,
      "--mm-box-width": mediumMobile?.width,
      "--box-min-width": minWidth,
      "--ld-box-min-width": largeDesktop?.minWidth,
      "--de-box-min-width": desktop?.minWidth,
      "--tb-box-min-width": tablet?.minWidth,
      "--lm-box-min-width": largeMobile?.minWidth,
      "--mm-box-min-width": mediumMobile?.minWidth,
      "--box-max-width": maxWidth,
      "--ld-box-max-width": largeDesktop?.maxWidth,
      "--de-box-max-width": desktop?.maxWidth,
      "--tb-box-max-width": tablet?.maxWidth,
      "--lm-box-max-width": largeMobile?.maxWidth,
      "--mm-box-max-width": mediumMobile?.maxWidth,
      "--box-height": height,
      "--ld-box-height": largeDesktop?.height,
      "--de-box-height": desktop?.height,
      "--tb-box-height": tablet?.height,
      "--lm-box-height": largeMobile?.height,
      "--mm-box-height": mediumMobile?.height,
      "--box-max-height": maxHeight,
      "--ld-box-max-height": largeDesktop?.maxHeight,
      "--de-box-max-height": desktop?.maxHeight,
      "--tb-box-max-height": tablet?.maxHeight,
      "--lm-box-max-height": largeMobile?.maxHeight,
      "--mm-box-max-height": mediumMobile?.maxHeight,
      "--box-top": top,
      "--ld-box-top": largeDesktop?.top,
      "--de-box-top": desktop?.top,
      "--tb-box-top": tablet?.top,
      "--lm-box-top": largeMobile?.top,
      "--mm-box-top": mediumMobile?.top,
      "--box-right": right,
      "--ld-box-right": largeDesktop?.right,
      "--de-box-right": desktop?.right,
      "--tb-box-right": tablet?.right,
      "--lm-box-right": largeMobile?.right,
      "--mm-box-right": mediumMobile?.right,
      "--box-bottom": bottom,
      "--ld-box-bottom": largeDesktop?.bottom,
      "--de-box-bottom": desktop?.bottom,
      "--tb-box-bottom": tablet?.bottom,
      "--lm-box-bottom": largeMobile?.bottom,
      "--mm-box-bottom": mediumMobile?.bottom,
      "--box-left": left,
      "--ld-box-left": largeDesktop?.left,
      "--de-box-left": desktop?.left,
      "--tb-box-left": tablet?.left,
      "--lm-box-left": largeMobile?.left,
      "--mm-box-left": mediumMobile?.left,
    };

    const varClasses = [
      vars["--box-shrink"] != null && "shrink-[var(--box-shrink)]",
      vars["--ld-box-shrink"] != null && "ld:shrink-[var(--ld-box-shrink)]",
      vars["--de-box-shrink"] != null && "de:shrink-[var(--de-box-shrink)]",
      vars["--tb-box-shrink"] != null && "tb:shrink-[var(--tb-box-shrink)]",
      vars["--lm-box-shrink"] != null && "lm:shrink-[var(--lm-box-shrink)]",
      vars["--mm-box-shrink"] != null && "mm:shrink-[var(--mm-box-shrink)]",
      vars["--box-grow"] != null && "grow-[var(--box-grow)]",
      vars["--ld-box-grow"] != null && "ld:grow-[var(--ld-box-grow)]",
      vars["--de-box-grow"] != null && "de:grow-[var(--de-box-grow)]",
      vars["--tb-box-grow"] != null && "tb:grow-[var(--tb-box-grow)]",
      vars["--lm-box-grow"] != null && "lm:grow-[var(--lm-box-grow)]",
      vars["--mm-box-grow"] != null && "mm:grow-[var(--mm-box-grow)]",
      vars["--box-z-index"] != null && "z-[var(--box-z-index)]",
      vars["--ld-box-z-index"] != null && "ld:z-[var(--ld-box-z-index)]",
      vars["--de-box-z-index"] != null && "de:z-[var(--de-box-z-index)]",
      vars["--tb-box-z-index"] != null && "tb:z-[var(--tb-box-z-index)]",
      vars["--lm-box-z-index"] != null && "lm:z-[var(--lm-box-z-index)]",
      vars["--mm-box-z-index"] != null && "mm:z-[var(--mm-box-z-index)]",
      vars["--box-width"] != null && "w-[var(--box-width)]",
      vars["--ld-box-width"] != null && "ld:w-[var(--ld-box-width)]",
      vars["--de-box-width"] != null && "de:w-[var(--de-box-width)]",
      vars["--tb-box-width"] != null && "tb:w-[var(--tb-box-width)]",
      vars["--lm-box-width"] != null && "lm:w-[var(--lm-box-width)]",
      vars["--mm-box-width"] != null && "mm:w-[var(--mm-box-width)]",
      vars["--box-min-width"] != null && "min-w-[var(--box-min-width)]",
      vars["--ld-box-min-width"] != null && "ld:min-w-[var(--ld-box-min-width)]",
      vars["--de-box-min-width"] != null && "de:min-w-[var(--de-box-min-width)]",
      vars["--tb-box-min-width"] != null && "tb:min-w-[var(--tb-box-min-width)]",
      vars["--lm-box-min-width"] != null && "lm:min-w-[var(--lm-box-min-width)]",
      vars["--mm-box-min-width"] != null && "mm:min-w-[var(--mm-box-min-width)]",
      vars["--box-max-width"] != null && "max-w-[var(--box-max-width)]",
      vars["--ld-box-max-width"] != null && "ld:max-w-[var(--ld-box-max-width)]",
      vars["--de-box-max-width"] != null && "de:max-w-[var(--de-box-max-width)]",
      vars["--tb-box-max-width"] != null && "tb:max-w-[var(--tb-box-max-width)]",
      vars["--lm-box-max-width"] != null && "lm:max-w-[var(--lm-box-max-width)]",
      vars["--mm-box-max-width"] != null && "mm:max-w-[var(--mm-box-max-width)]",
      vars["--box-height"] != null && "h-[var(--box-height)]",
      vars["--ld-box-height"] != null && "ld:h-[var(--ld-box-height)]",
      vars["--de-box-height"] != null && "de:h-[var(--de-box-height)]",
      vars["--tb-box-height"] != null && "tb:h-[var(--tb-box-height)]",
      vars["--lm-box-height"] != null && "lm:h-[var(--lm-box-height)]",
      vars["--mm-box-height"] != null && "mm:h-[var(--mm-box-height)]",
      vars["--box-max-height"] != null && "max-h-[var(--box-max-height)]",
      vars["--ld-box-max-height"] != null && "ld:max-h-[var(--ld-box-max-height)]",
      vars["--de-box-max-height"] != null && "de:max-h-[var(--de-box-max-height)]",
      vars["--tb-box-max-height"] != null && "tb:max-h-[var(--tb-box-max-height)]",
      vars["--lm-box-max-height"] != null && "lm:max-h-[var(--lm-box-max-height)]",
      vars["--mm-box-max-height"] != null && "mm:max-h-[var(--mm-box-max-height)]",
      vars["--box-top"] != null && "top-[var(--box-top)]",
      vars["--ld-box-top"] != null && "ld:top-[var(--ld-box-top)]",
      vars["--de-box-top"] != null && "de:top-[var(--de-box-top)]",
      vars["--tb-box-top"] != null && "tb:top-[var(--tb-box-top)]",
      vars["--lm-box-top"] != null && "lm:top-[var(--lm-box-top)]",
      vars["--mm-box-top"] != null && "mm:top-[var(--mm-box-top)]",
      vars["--box-right"] != null && "right-[var(--box-right)]",
      vars["--ld-box-right"] != null && "ld:right-[var(--ld-box-right)]",
      vars["--de-box-right"] != null && "de:right-[var(--de-box-right)]",
      vars["--tb-box-right"] != null && "tb:right-[var(--tb-box-right)]",
      vars["--lm-box-right"] != null && "lm:right-[var(--lm-box-right)]",
      vars["--mm-box-right"] != null && "mm:right-[var(--mm-box-right)]",
      vars["--box-bottom"] != null && "bottom-[var(--box-bottom)]",
      vars["--ld-box-bottom"] != null && "ld:bottom-[var(--ld-box-bottom)]",
      vars["--de-box-bottom"] != null && "de:bottom-[var(--de-box-bottom)]",
      vars["--tb-box-bottom"] != null && "tb:bottom-[var(--tb-box-bottom)]",
      vars["--lm-box-bottom"] != null && "lm:bottom-[var(--lm-box-bottom)]",
      vars["--mm-box-bottom"] != null && "mm:bottom-[var(--mm-box-bottom)]",
      vars["--box-left"] != null && "left-[var(--box-left)]",
      vars["--ld-box-left"] != null && "ld:left-[var(--ld-box-left)]",
      vars["--de-box-left"] != null && "de:left-[var(--de-box-left)]",
      vars["--tb-box-left"] != null && "tb:left-[var(--tb-box-left)]",
      vars["--lm-box-left"] != null && "lm:left-[var(--lm-box-left)]",
      vars["--mm-box-left"] != null && "mm:left-[var(--mm-box-left)]",
    ];

    return (
      // @ts-expect-error Allow any component
      <Component
        className={cx(
          className,
          "orbit-box font-base box-border",
          ...getTailwindClasses(twProps),
          ...viewportClasses,
          ...varClasses,
        )}
        ref={ref}
        id={id}
        data-test={dataTest}
        style={vars}
      >
        {children}
      </Component>
    );
  },
);

export default Box;
