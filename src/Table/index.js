// @flow

import * as React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

type Children = React.Element<typeof Header | typeof Body | typeof Footer>;

type Props = {
  children?: Children | Array<Children>,
};

const Table = (props: Props) => {
  const children = React.Children.map(props.children, child => {
    const { type } = child;
    if (type !== Header && type !== Body && type !== Footer) {
      console.error("Invalid children type"); // eslint-disable-line no-console
    }
    return child;
  });
  return (
    <table>
      {children}
      <style jsx>
        {`
          table {
            border-collapse: collapse;
          }
        `}
      </style>
    </table>
  );
};

export default Table;
