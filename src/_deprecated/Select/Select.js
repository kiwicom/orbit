// @flow
import * as React from "react";
import css from "styled-jsx/css";
import ChevronDown from "react-icons/lib/fa/chevron-down";
import classnames from "classnames";

import Typography from "../Typography/Typography";
import { fontColors } from "../../constants";
import FieldFeedback from "../FieldFeedback/FieldFeedback";

const WHITE_COLOR = "white";

const HASERROR_CLASS = "hasError";
const UNSELECTED_CLASS = "UnSelected";

type Option = {
  value: string | number,
  label?: string,
  disabled?: boolean,
  visible?: boolean, // eslint-disable-line react/no-unused-prop-types
};
type Props = {
  disabled?: boolean,
  error?: string,
  help?: string,
  label?: string,
  onChange: (SyntheticInputEvent<HTMLSelectElement>) => any,
  options: Array<any>,
  placeholder?: string,
  required?: boolean,
  value: string,
};
type State = {
  value: string,
};

const style = css`
  label {
    font-family: Roboto;
    line-height: 1.43;
    position: relative;
    color: ${fontColors.primary};
  }
  select {
    font-size: 16px;
    border-radius: 3px;
    background-color: ${WHITE_COLOR};
    border: solid 1px ${fontColors.input};
    line-height: 1.25;
    padding: 12px 16px;
    color: ${fontColors.primary};
    appearance: none;
    padding-right: 3em;
    width: 100%;
  }
  select.${UNSELECTED_CLASS} {
    color: ${fontColors.secondary};
  }
  /*for IE10*/
  select::-ms-expand {
    display: none;
  }
  select.${HASERROR_CLASS} {
    border-color: ${fontColors.error};
  }
  option[value=""][disabled] {
    display: none;
  }
  .dropdown-icon {
    position: absolute;
    right: 1em;
    top: 0px;
    pointer-events: none;
  }
`;

class Select extends React.Component<Props, State> {
  state = {
    value: this.props.value,
  };
  handleChange = (e: SyntheticInputEvent<HTMLSelectElement>) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  };
  renderOption = ({ value, label, disabled, visible = true }: Option) => {
    if (visible) {
      return (
        <option key={`option-${value}`} value={value} label={label || value} disabled={!!disabled}>
          {label || value}
        </option>
      );
    }
    return null;
  };
  render() {
    const { disabled, label, options, error, help, placeholder, required = true } = this.props;
    const { value } = this.state;
    return (
      <div>
        <label>
          {label && (
            <div>
              <Typography size="normal" type={value ? "input" : "primary"}>
                {label}
              </Typography>
            </div>
          )}
          <select
            disabled={disabled}
            value={value}
            required={!!required}
            onChange={this.handleChange}
            className={classnames(error && HASERROR_CLASS, !value && UNSELECTED_CLASS)}
          >
            {
              <option disabled value="" label={placeholder} className="placeholder">
                {placeholder}
              </option>
            }
            {options.map(this.renderOption)}
          </select>
          <span className="dropdown-icon">
            <ChevronDown fill={fontColors.primary} height={20} />
          </span>
        </label>
        <FieldFeedback error={error} help={help} />
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Select;
