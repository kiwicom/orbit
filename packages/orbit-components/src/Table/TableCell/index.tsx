import * as React from "react";
import cx from "clsx";

import { ALIGN_OPTIONS } from "./consts";
import { TYPE_AS } from "../consts";
import type { Props, VerticalAlign, WhiteSpace } from "./types";

const verticalAlignStyles: Record<VerticalAlign, string> = {
  baseline: "align-baseline",
  middle: "align-middle",
  top: "align-top",
  bottom: "align-bottom",
};

const whitespaceStyles: Record<WhiteSpace, string> = {
  normal: "whitespace-normal",
  nowrap: "whitespace-nowrap",
  pre: "whitespace-pre",
  "pre-line": "whitespace-pre-line",
  "pre-wrap": "whitespace-pre-wrap",
};

const TableCell = ({
  align = ALIGN_OPTIONS.LEFT,
  scope,
  as: Component = TYPE_AS.TD,
  verticalAlign,
  whiteSpace,
  dataTest,
  children,
}: Props) => {
  return (
    <Component
      className={cx(
        "font-base text-normal text-ink-dark box-border",
        verticalAlign != null && verticalAlignStyles[verticalAlign],
        whiteSpace != null && whitespaceStyles[whiteSpace],
        (align === ALIGN_OPTIONS.START || align === ALIGN_OPTIONS.LEFT) && "text-start",
        align === ALIGN_OPTIONS.CENTER && "text-center",
        (align === ALIGN_OPTIONS.END || align === ALIGN_OPTIONS.RIGHT) && "text-end",
      )}
      data-test={dataTest}
      scope={scope}
    >
      {children}
    </Component>
  );
};

export default TableCell;
