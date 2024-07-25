"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { ELEMENT_OPTIONS } from "../Heading/consts";
import Header from "./components/Header";
import { spaceAfterClasses } from "../common/tailwind";
import Loading from "../Loading";

export { default as CardSection } from "./CardSection";

export default function Card({
  title,
  titleAs = ELEMENT_OPTIONS.H2,
  actions,
  description,
  children,
  labelClose = "Close",
  dataTest,
  id,
  onClose,
  loading,
  margin,
  header,
  spaceAfter,
  dataA11ySection,
}: Props) {
  const marginStyles = (() => {
    if (margin == null) {
      return {};
    }
    if (typeof margin === "string" || typeof margin === "number") {
      return { margin };
    }
    return {
      marginTop: margin.top,
      marginRight: margin.right,
      marginBottom: margin.bottom,
      marginLeft: margin.left,
    };
  })();

  return (
    <div
      id={id}
      className={cx(
        "orbit-card font-base bg-white-normal *:border-elevation-flat-border-color lm:first:*:rounded-t-100 lm:last:*:rounded-b-100 w-full first:*:border-t",
        spaceAfter != null && spaceAfterClasses[spaceAfter],
      )}
      data-test={dataTest}
      style={marginStyles}
    >
      {(title != null || header != null) && !loading && (
        <div className="p-md lm:p-lg lm:border-x relative border-b">
          <Header
            description={description}
            dataA11ySection={dataA11ySection}
            actions={actions}
            title={title}
            labelClose={labelClose}
            titleAs={titleAs}
            onClose={onClose}
            header={header}
          />
        </div>
      )}

      {!loading && children}

      {loading && (
        <div className="lm:border-x border-b">
          <Loading loading={loading} type="boxLoader" />
        </div>
      )}
    </div>
  );
}
