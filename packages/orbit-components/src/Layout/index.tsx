"use client";

import * as React from "react";

import Grid from "../utils/Grid";
import { LAYOUT_SETTINGS } from "./consts";
import type { Props, Type } from "./types";
import type { Props as LayoutColumnProps } from "./LayoutColumn/types";

const getChildrenProps = (type: Type, key: string) => {
  if (LAYOUT_SETTINGS[type].layoutColumns && LAYOUT_SETTINGS[type].layoutColumns[key]) {
    return LAYOUT_SETTINGS[type].layoutColumns[key];
  }

  return null;
};

const Layout = ({ children, type, dataTest }: Props) => {
  // Removes unwanted props from Grid
  const { layoutColumns: _, ...props } = LAYOUT_SETTINGS[type];

  return (
    <Grid
      {...props}
      className="px-md de:p-lg mx-auto my-0 box-border w-full py-0"
      dataTest={dataTest}
    >
      {React.Children.map(children as React.ReactElement<LayoutColumnProps>, (item, key) => {
        return React.cloneElement(item, {
          ...getChildrenProps(type, key.toString()),
          ...item.props,
        });
      })}
    </Grid>
  );
};

export default Layout;

export { default as LayoutColumn } from "./LayoutColumn";
