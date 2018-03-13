// @flow

import * as React from "react";
import { colors } from "../constants";
import Row from "./Row";
import { isOdd, getChidlName } from "./helpers";

type Props = {
  children: React.Element<typeof Row>,
};

class Body extends React.Component<Props> {
  static Row = Row;

  getBackgroundColor = (index: number) => ({
    default: isOdd(index) ? colors.white.normal : colors.cloud.light,
    hover: colors.cloud.normal,
  });

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child.type !== Row)
        console.error(`Invalid children type ${getChidlName(child)}, it should be Row component.`); // eslint-disable-line no-console

      return React.cloneElement(child, {
        isOdd: isOdd(index),
        backgroundColor: this.getBackgroundColor(index),
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
              border-left: 2px ${colors.cloud.normal} solid;
              border-right: 2px ${colors.cloud.normal} solid;
            }
          `}
        </style>
      </tbody>
    );
  }
}

export default Body;
