// @flow

import * as React from "react";

import { colors } from "../../constants";

const paddings = {
  basic: "28px",
  compact: "16px 28px 17px;",
};

type Props = {
  children?: React.Node,
  type?: $Keys<typeof paddings>,
};

const Section = (props: Props) => (
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        padding: ${paddings[props.type || "basic"]};
        border-radius: 3px;
        background-color: ${colors.white.normal};
        border: solid 1px ${colors.cloud.normal};
      }
    `}</style>
  </div>
);

Section.defaultProps = {
  children: null,
  type: "basic",
};

export default Section;
