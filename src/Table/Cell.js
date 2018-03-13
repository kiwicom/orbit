// @flow

import * as React from "react";
import { colors } from "../constants";

type Props = {
  rowSpan?: number,
  colSpan?: number,
  children: React.Node,
  isBold?: boolean,
  align?: "center" | "left" | "right",
  style?: Object,
};

const Cell = (props: Props) => {
  const children = React.Children.map(props.children, child => {
    const childType = typeof child;
    if (childType === "string" || childType === "number")
      return (
        <span style={props.style}>
          {child}
          <style jsx>
            {`
							span {
								display: block
								text-align: ${props.align || "left"}
								color: ${colors.ink.light}
					font-weight: ${props.isBold ? 500 : 300}
								font-size: 15px
								font-family: Roboto, -apple-system, sans-serif
							}
			`}
          </style>
        </span>
      );
    return child;
  });
  return (
    <td style={props.style} colSpan={props.colSpan} rowSpan={props.rowSpan}>
      {children}
      <style jsx>
        {`
				td {
					padding: 13px 12px 15px
					border: none
				}
			`}
      </style>
    </td>
  );
};

Cell.defaultProps = {
  colSpan: 1,
  rowSpan: 1,
};

export default Cell;
