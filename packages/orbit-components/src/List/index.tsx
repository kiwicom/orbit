"use client";

import * as React from "react";
import cx from "clsx";

import { SIZES, TYPES } from "./consts";
import type { Props } from "./types";
import { getSpacingClasses, spaceAfterClasses } from "../common/tailwind";
import { SPACINGS } from "../utils/layout/consts";

const sizeTokens = {
  [SIZES.SMALL]:
    "text-small leading-small [&_.orbit-list-item-icon>svg]:h-icon-small [&_.orbit-list-item-icon>svg]:w-icon-small",
  [SIZES.NORMAL]:
    "text-normal leading-normal [&_.orbit-list-item-icon>svg]:h-icon-medium [&_.orbit-list-item-icon>svg]:w-icon-medium [&_.orbit-list-item-label]:text-small",
  [SIZES.LARGE]:
    "text-large leading-large [&_.orbit-list-item-icon>svg]:h-icon-large [&_.orbit-list-item-icon>svg]:w-icon-large [&_.orbit-list-item-label]:text-normal",
};

const typeTokens = {
  [TYPES.PRIMARY]: "text-primary-foreground",
  [TYPES.SECONDARY]: "text-secondary-foreground",
};

const List = ({
  children,
  dataTest,
  id,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  spacing = SPACINGS.ONE_HUNDRED,
  spaceAfter,
}: Props) => {
  return (
    <ul
      data-test={dataTest}
      id={id}
      className={cx(
        "orbit-list font-base m-0 flex w-full list-none flex-col p-0",
        sizeTokens[size],
        typeTokens[type],
        spaceAfter != null && spaceAfterClasses[spaceAfter],
        spacing && getSpacingClasses(spacing as SPACINGS),
      )}
    >
      {children}
    </ul>
  );
};

export default List;

export { default as ListItem } from "./ListItem";
