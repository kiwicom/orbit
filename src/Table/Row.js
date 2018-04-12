// @flow

import * as React from "react";

import Cell from "./Cell";

type Child = React.Element<typeof Cell>;

type Props = {
  children?: Child | Child[],
  style?: Object,
  backgroundColor?: {
    default: string,
    hover: string,
  },
};

const Row = (props: Props) => {
  const hoverBgColor = props.backgroundColor && props.backgroundColor.hover;
  const bgColor = props.backgroundColor && props.backgroundColor.default;

  const children = React.Children.map(props.children, child => {
    if (child && child.type !== Cell) {
      console.error(`Invalid children type component, it should be Cell component.`); // eslint-disable-line no-console
    }
    return child;
  });

  return (
    <tr style={props.style}>
      {children}
      <style jsx>
        {`
          tr {
            background-color: ${bgColor || "white"};
            transition: background-color 0.185s ease;
          }
          tr:hover {
            background-color: ${hoverBgColor || "transparent"};
          }
        `}
      </style>
    </tr>
  );
};
export default Row;
