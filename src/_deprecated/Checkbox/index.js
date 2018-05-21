// @flow

import * as React from "react";

import Typography from "../Typography";
import Icon from "./Icon";
import deprecationWarning from "../../../config/deprecationWarning";

deprecationWarning("Checkbox is deprecated and will be removed in next major release");

type Props = {
  label: string,
  checked?: boolean,
  value?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
};

const Checkbox = (props: Props) => (
  <div>
    <label className="label">
      <div className="checkbox">
        {props.checked && (
          <div className="checked">
            <Icon.Checked />
          </div>
        )}
      </div>
      <Typography variant={props.checked ? "bold" : "normal"}>{props.label}</Typography>
      <input
        className="checkboxInput"
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
      />
    </label>
    <style jsx>{`
      .label {
        display: flex;
        align-items: center;
      }
      .checkbox {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border-radius: 3px;
        background-color: white;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #bac7d5;
      }
      .checked {
        margin-left: 5px;
      }
      .checkboxInput {
        display: none;
      }
    `}</style>
  </div>
);

export default Checkbox;
