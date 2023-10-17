"use client";

import * as React from "react";
import cx from "clsx";

import type { Props, BasicProps } from "./types";
import { spaceAfterClasses } from "../../common/tailwind";
import { QUERIES } from "../mediaQuery/consts";

const inlineClasses: Record<QUERIES, { inline: string; grid: string }> = {
  mediumMobile: { inline: "mm:inline-grid", grid: "mm:grid" },
  largeMobile: { inline: "lm:inline-grid", grid: "lm:grid" },
  tablet: { inline: "tb:inline-grid", grid: "tb:grid" },
  desktop: { inline: "de:inline-grid", grid: "de:grid" },
  largeDesktop: { inline: "ld:inline-grid", grid: "ld:grid" },
};

const Grid = ({
  children,
  className,
  as: ComponentTag = "div",
  dataTest,
  width,
  columns = "1fr",
  rows = "1fr",
  columnGap,
  rowGap,
  gap,
  maxWidth,
  inline = false,
  spaceAfter,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
  ...props
}: Props) => {
  const viewportProps: Record<QUERIES, BasicProps | undefined> = {
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
  };

  const vars = {
    "--grid-width": width,
    "--mm-grid-width": mediumMobile?.width,
    "--lm-grid-width": largeMobile?.width,
    "--tb-grid-width": tablet?.width,
    "--de-grid-width": desktop?.width,
    "--ld-grid-width": largeDesktop?.width,
    "--grid-max-width": maxWidth,
    "--mm-grid-max-width": mediumMobile?.maxWidth,
    "--lm-grid-max-width": largeMobile?.maxWidth,
    "--tb-grid-max-width": tablet?.maxWidth,
    "--de-grid-max-width": desktop?.maxWidth,
    "--ld-grid-max-width": largeDesktop?.maxWidth,
    "--grid-columns": columns,
    "--mm-grid-columns": mediumMobile?.columns,
    "--lm-grid-columns": largeMobile?.columns,
    "--tb-grid-columns": tablet?.columns,
    "--de-grid-columns": desktop?.columns,
    "--ld-grid-columns": largeDesktop?.columns,
    "--grid-rows": rows,
    "--mm-grid-rows": mediumMobile?.rows,
    "--lm-grid-rows": largeMobile?.rows,
    "--tb-grid-rows": tablet?.rows,
    "--de-grid-rows": desktop?.rows,
    "--ld-grid-rows": largeDesktop?.rows,
    "--grid-gap": gap,
    "--mm-grid-gap": mediumMobile?.gap,
    "--lm-grid-gap": largeMobile?.gap,
    "--tb-grid-gap": tablet?.gap,
    "--de-grid-gap": desktop?.gap,
    "--ld-grid-gap": largeDesktop?.gap,
    "--grid-column-gap": columnGap,
    "--mm-grid-column-gap": mediumMobile?.columnGap,
    "--lm-grid-column-gap": largeMobile?.columnGap,
    "--tb-grid-column-gap": tablet?.columnGap,
    "--de-grid-column-gap": desktop?.columnGap,
    "--ld-grid-column-gap": largeDesktop?.columnGap,
    "--grid-row-gap": rowGap,
    "--mm-grid-row-gap": mediumMobile?.rowGap,
    "--lm-grid-row-gap": largeMobile?.rowGap,
    "--tb-grid-row-gap": tablet?.rowGap,
    "--de-grid-row-gap": desktop?.rowGap,
    "--ld-grid-row-gap": largeDesktop?.rowGap,
  };

  return (
    // @ts-expect-error orbit string as
    <ComponentTag
      data-test={dataTest}
      className={cx(className, [
        inline ? "inline-grid" : "grid",
        spaceAfter && spaceAfterClasses[spaceAfter],
        vars["--grid-width"] != null && "w-[var(--grid-width)]",
        vars["--mm-grid-width"] != null && "mm:w-[var(--mm-grid-width)]",
        vars["--lm-grid-width"] != null && "lm:w-[var(--lm-grid-width)]",
        vars["--tb-grid-width"] != null && "tb:w-[var(--tb-grid-width)]",
        vars["--de-grid-width"] != null && "de:w-[var(--de-grid-width)]",
        vars["--ld-grid-width"] != null && "ld:w-[var(--ld-grid-width)]",
        vars["--grid-max-width"] != null && "max-w-[var(--grid-max-width)]",
        vars["--mm-grid-max-width"] != null && "mm:max-w-[var(--mm-grid-max-width)]",
        vars["--lm-grid-max-width"] != null && "lm:max-w-[var(--lm-grid-max-width)]",
        vars["--tb-grid-max-width"] != null && "tb:max-w-[var(--tb-grid-max-width)]",
        vars["--de-grid-max-width"] != null && "de:max-w-[var(--de-grid-max-width)]",
        vars["--ld-grid-max-width"] != null && "ld:max-w-[var(--ld-grid-max-width)]",
        vars["--grid-columns"] != null && "grid-cols-[var(--grid-columns)]",
        vars["--mm-grid-columns"] != null && "mm:grid-cols-[var(--mm-grid-columns)]",
        vars["--lm-grid-columns"] != null && "lm:grid-cols-[var(--lm-grid-columns)]",
        vars["--tb-grid-columns"] != null && "tb:grid-cols-[var(--tb-grid-columns)]",
        vars["--de-grid-columns"] != null && "de:grid-cols-[var(--de-grid-columns)]",
        vars["--ld-grid-columns"] != null && "ld:grid-cols-[var(--ld-grid-columns)]",
        vars["--grid-rows"] != null && "grid-rows-[var(--grid-rows)]",
        vars["--mm-grid-rows"] != null && "mm:grid-rows-[var(--mm-grid-rows)]",
        vars["--lm-grid-rows"] != null && "lm:grid-rows-[var(--lm-grid-rows)]",
        vars["--tb-grid-rows"] != null && "tb:grid-rows-[var(--tb-grid-rows)]",
        vars["--de-grid-rows"] != null && "de:grid-rows-[var(--de-grid-rows)]",
        vars["--ld-grid-rows"] != null && "ld:grid-rows-[var(--ld-grid-rows)]",
        vars["--grid-gap"] != null && "gap-[var(--grid-gap)]",
        vars["--mm-grid-gap"] != null && "mm:gap-[var(--mm-grid-gap)]",
        vars["--lm-grid-gap"] != null && "lm:gap-[var(--lm-grid-gap)]",
        vars["--tb-grid-gap"] != null && "tb:gap-[var(--tb-grid-gap)]",
        vars["--de-grid-gap"] != null && "de:gap-[var(--de-grid-gap)]",
        vars["--ld-grid-gap"] != null && "ld:gap-[var(--ld-grid-gap)]",
        vars["--grid-column-gap"] != null && "gap-x-[var(--grid-column-gap)]",
        vars["--mm-grid-column-gap"] != null && "mm:gap-x-[var(--mm-grid-column-gap)]",
        vars["--lm-grid-column-gap"] != null && "lm:gap-x-[var(--lm-grid-column-gap)]",
        vars["--tb-grid-column-gap"] != null && "tb:gap-x-[var(--tb-grid-column-gap)]",
        vars["--de-grid-column-gap"] != null && "de:gap-x-[var(--de-grid-column-gap)]",
        vars["--ld-grid-column-gap"] != null && "ld:gap-x-[var(--ld-grid-column-gap)]",
        vars["--grid-row-gap"] != null && "gap-y-[var(--grid-row-gap)]",
        vars["--mm-grid-row-gap"] != null && "mm:gap-y-[var(--mm-grid-row-gap)]",
        vars["--lm-grid-row-gap"] != null && "lm:gap-y-[var(--lm-grid-row-gap)]",
        vars["--tb-grid-row-gap"] != null && "tb:gap-y-[var(--tb-grid-row-gap)]",
        vars["--de-grid-row-gap"] != null && "de:gap-y-[var(--de-grid-row-gap)]",
        vars["--ld-grid-row-gap"] != null && "ld:gap-y-[var(--ld-grid-row-gap)]",
        ...Object.values(QUERIES).map(viewport => {
          if (viewportProps[viewport] == null) return null;

          const vpInline = viewportProps[viewport]?.inline;
          const vpSpaceAfter = viewportProps[viewport]?.spaceAfter;

          return [
            vpInline && (vpInline ? inlineClasses[viewport].inline : inlineClasses[viewport].grid),
            vpSpaceAfter && spaceAfterClasses[viewport][vpSpaceAfter],
          ];
        }),
      ])}
      style={vars as React.CSSProperties}
      {...props}
    >
      {children}
    </ComponentTag>
  );
};

export default Grid;
