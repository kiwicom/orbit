// @flow
import * as React from "react";
import Label from "../Input/Label";
import MaybeError from "../Input/MaybeError";

type Props = {
  value: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
  label?: string,
  error?: string,
};

const InputTextarea = (props: Props) => (
  <React.Fragment>
    <Label label={props.label} valueEmpty={!!props.value}>
      <textarea onChange={props.onChange}>{props.value}</textarea>
    </Label>
    <MaybeError error={props.error} />
    <style jsx>{`
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 73px;
        border-radius: 3px;
        background-color: white;
        border: solid 1px ${props.error ? "#d02228" : "#bac7d5"};
        font-size: 16px;
        line-height: 1.25;
        padding: 12px 16px;
      }
    `}</style>
  </React.Fragment>
);

export default InputTextarea;
