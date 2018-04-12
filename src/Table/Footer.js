// @flow

import * as React from "react";

import Row from "./Row";
import { getChidlName } from "./helpers";
import { colors } from "../constants";

type Props = {
  children?: React.Element<typeof Row>,
};

const Footer = (props: Props) => {
  const children = React.Children.map(props.children, child => {
    if (child && child.type !== Row) {
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
            box-sizing: border-box;
            border: 2px ${colors.cloud.normal} solid;
            border-style: none solid;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Footer;
