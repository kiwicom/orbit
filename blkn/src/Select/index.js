// @flow
import * as React from "react";
import css from "styled-jsx/css";
import Typography from "./../Typography";

const HASERROR_CLASS = "hasError";
const ERROR_COLOR = "#d21c1c";
const LIGHTGRAY_COLOR = "#bac7d5";
const DARKGRAY_COLOR = "#46515e";

const WHITE_COLOR = "white";

type Option = {
  value: string,
  label?: string,
  disabled?: boolean,
  visible?: boolean,
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
  select {
    border-radius: 3px;
    background-color: ${WHITE_COLOR};
    border: solid 1px ${LIGHTGRAY_COLOR};
    line-height: 1.25;
    padding: 12px 16px;
    color: ${DARKGRAY_COLOR};
  }
  select.${HASERROR_CLASS} {
    border-color: ${ERROR_COLOR};
  }
  label div {
    font-size: 14px;
    line-height: 1.43;
  }
  option[value=""][disabled] {
    display: none;
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
              <Typography type="secondary">{label}</Typography>
            </div>
          )}
          <select
            disabled={disabled}
            value={value}
            required={!!required}
            onChange={this.handleChange}
            className={error && HASERROR_CLASS}
          >
            {<option disabled value="" label={placeholder} className="placeholder" />}
            {options.map(this.renderOption)}
          </select>
        </label>
        {this.feedbackLine()}
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Select;
