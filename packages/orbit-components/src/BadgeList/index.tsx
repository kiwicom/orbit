"use client";

import * as React from "react";

import type { Props } from "./types";

const BadgeList = ({ children, dataTest, id, ariaLabel }: Props) => {
  return (
    <ul className="m-0 flex flex-col p-0" data-test={dataTest} id={id} aria-label={ariaLabel}>
      {children}
    </ul>
  );
};

export { default as BadgeListItem } from "./BadgeListItem";
export default BadgeList;
