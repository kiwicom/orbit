// @flow
import * as React from "react";

import Typography from "../Typography/Typography";
import { colors } from "../../constants";

type Props = {
  label: string,
  checked?: boolean,
  disabled?: boolean,
  value?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
};

const Radio = (props: Props) => (
  <div className="root">
    <label className="label">
      <div className="radio">{props.checked && <div className="checked" />}</div>
      <Typography variant={props.checked ? "bold" : "normal"}>{props.label}</Typography>
      <input
        className="radioInput"
        type="radio"
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
        value={props.value}
      />
    </label>
    <style jsx>{`
      .label {
        display: flex;
        align-items: center;
      }
      .radio {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border-radius: 100px;
        opacity: ${props.disabled ? "0.3" : "1"}
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        background-color: ${colors.white.normal};
        border: solid 1px ${colors.ink.lighter};
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .root:hover .radio,
      .root:active .radio {
        border: solid 1px ${props.disabled ? colors.ink.lighter : colors.brand.normal};
      }
      .checked {
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background-color: ${colors.brand.normal};
      }
      .radioInput {
        display: none;
      }
    `}</style>
  </div>
);

export default Radio;
