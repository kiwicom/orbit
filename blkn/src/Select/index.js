// @flow
import * as React from "react";
import css from "styled-jsx/css";
import { ChevronUp } from "@kiwicom/icons";
import classnames from "classnames";
import Typography from "./../Typography";

const ERROR_COLOR = "#d21c1c";
const MIDGRAY_COLOR = "#7f91a8";
const LIGHTGRAY_COLOR = "#bac7d5";
const DARKGRAY_COLOR = "#46515e";
const WHITE_COLOR = "white";

const HASERROR_CLASS = "hasError";
const UNSELECTED_CLASS = "UnSelected";

type Option = {
  value: string,
  label?: string,
  disabled?: boolean,
  visible?: boolean, // eslint-disable-line react/no-unused-prop-types
};
type Props = {
  disabled?: boolean,
  error?: string,
  label?: string,
  onChange: (SyntheticInputEvent<HTMLSelectElement>) => any,
  options: Array<Option>,
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
    color: ${DARKGRAY_COLOR};
  }
  select {
    font-size: 16px;
    border-radius: 3px;
    background-color: ${WHITE_COLOR};
    border: solid 1px ${LIGHTGRAY_COLOR};
    line-height: 1.25;
    padding: 12px 16px;
    color: ${DARKGRAY_COLOR};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-right: 3em;
  }
  select.${UNSELECTED_CLASS} {
    color: ${MIDGRAY_COLOR};
  }
  /*for IE10*/
  select::-ms-expand {
    display: none;
  }
  select.${HASERROR_CLASS} {
    border-color: ${ERROR_COLOR};
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
  feedbackLine = () =>
    this.props.error && (
      <div>
        <Typography size="small" type="error">
          {this.props.error}
        </Typography>
      </div>
    );
  renderOption = ({ value, label, disabled, visible = true }: Option) => {
    if (visible) {
      return (
        <option
          key={`option-${value}`}
          value={value}
          label={label || value}
          disabled={!!disabled}
        />
      );
    }
    return null;
  };
  render() {
    const { disabled, label, options, error, placeholder, required = true } = this.props;
    const { value } = this.state;
    return (
      <div>
        <label>
          {label && (
            <div>
              <Typography
                size="normal"
                color={value ? LIGHTGRAY_COLOR : DARKGRAY_COLOR}
                type="secondary"
              >
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
            {<option disabled value="" label={placeholder} className="placeholder" />}
            {options.map(this.renderOption)}
          </select>
          <span className="dropdown-icon">
            <ChevronUp fill={DARKGRAY_COLOR} height={20} />
          </span>
        </label>
        {this.feedbackLine()}
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Select;
