// @flow

import * as React from "react";
import Row from "./Row";
import { getChidlName } from "./helpers";
import { colors } from "../constants";

type Props = {
  children: React.Element<typeof Row>,
};

class Footer extends React.Component<Props> {
  static Row = Row;

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type !== Row) {
        console.warn(`Invalid children type ${getChidlName(child)}, it should be Row `); // eslint-disable-line no-console
      }
      return React.cloneElement(child, {
        backgroundColor: { default: colors.cloud.normal, hover: colors.cloud.normal },
      });
    });

    return (
      <React.Fragment>
        <tfoot>{children}</tfoot>
        <style jsx>
          {`
            tfoot {
              border-left: 2px ${colors.cloud.normal} solid;
              border-right: 2px ${colors.cloud.normal} solid;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Footer;
