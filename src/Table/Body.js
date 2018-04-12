// @flow

import * as React from "react";

import { colors } from "../constants";
import Row from "./Row";
import { isOdd, getChidlName } from "./helpers";

type Child = React.Element<typeof Row>;

type Props = {
  children?: Child | Array<Child>,
};

const Body = (props: Props) => {
  const getBackgroundColor = (index: number) => ({
    default: isOdd(index) ? colors.white.normal : colors.cloud.light,
    hover: colors.cloud.normal,
  });

  const children = React.Children.map(props.children, (child, index) => {
    if (child && child.type !== Row)
      console.error(`Invalid children type ${getChidlName(child)}, it should be Row component.`); // eslint-disable-line no-console

    return React.cloneElement(child, {
      backgroundColor: getBackgroundColor(index),
      style: { borderBottom: `1px ${colors.cloud.normal} solid` },
    });
  });

  return (
    <tbody>
      {children}
      <style jsx>
        {`
          tbody {
            box-sizing: border-box;
            border: 2px ${colors.cloud.normal} solid;
            border-style: none solid;
          }
        `}
      </style>
    </tbody>
  );
};
export default Body;
