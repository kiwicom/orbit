// @flow

import * as React from "react";

import Row from "./Row";
import { getChidlName } from "./helpers";
import { colors } from "../constants";

type Props = {
  children?: React.Element<typeof Row>,
};

const Header = (props: Props) => {
  const children = React.Children.map(props.children, child => {
    if (child && child.type !== Row)
      console.error(`Invalid children type ${getChidlName(child)}, it should be Row component.`); // eslint-disable-line no-console
    return React.cloneElement(child);
  });

  return (
    <thead>
      {children}
      <style jsx>
        {`
          thead {
            border-bottom: 1px ${colors.ink.light} solid;
            background-color: transparent;
          }
        `}
      </style>
    </thead>
  );
};

export default Header;
