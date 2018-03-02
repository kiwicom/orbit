// @flow

import * as React from "react";
import { colors } from "../constants";

type Props = {
  children?: React.Node,
  type?: "basic" | "compact",
};

const paddings = {
  basic: "28px",
  compact: "16px 28px 17px;",
};

const Section = (props: Props) => (
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        padding: ${paddings[props.type || "basic"]};
        border-radius: 3px;
        background-color: ${colors.white};
        border: solid 1px ${colors.silver};
      }
    `}</style>
  </div>
);

Section.defaultProps = {
  children: null,
  type: "basic",
};

export default Section;
