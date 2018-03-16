// @flow

import * as React from "react";

import Typography from "./../Typography";

type Props = {
  label?: string,
  valueEmpty: boolean,
  children: React.Node,
};

const Label = (props: Props) => (
  <label>
    {props.label && (
      <div>
        <Typography type={props.valueEmpty ? "secondary" : "primary"} size="normal">
          {props.label}
        </Typography>
      </div>
    )}
    {props.children}
    <style jsx>{`
      label div {
        line-height: 1.43;
      }
    `}</style>
  </label>
);

export default Label;
