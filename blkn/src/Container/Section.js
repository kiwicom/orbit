// @flow

import * as React from "react";

type Props = {
  children?: React.Node,
};

const Section = (props: Props) => (
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        padding: 28px;
        border-radius: 3px;
        background-color: #fff;
        border: solid 1px #e8edf1;
      }
    `}</style>
  </div>
);

Section.defaultProps = {
  children: null,
};

export default Section;
