// @flow
import * as React from "react";
import Typography from "./../Typography";

type OptionType = {
  value: string | number,
  label?: string,
  disabled?: boolean,
  selected?: boolean,
  visible?: boolean,
}
type Option = OptionType | string | number;
type Props = {
  //children: React.Node,
  disabled?: boolean,
  error: any,
  label?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => any,
  options: Array<Option>,
  placeholder?: string,
  required?: boolean,
  value: string,
};

//const renderOption = ({ value, label, disabled, selected, visible } : Option) => {
const renderOption = ( option: Option) => {
  const { value: optValue, label, disabled, selected, visible } = option;
  const value = typeof option === 'object' ? optValue : option;

  if(true){
    return(
      <option
        key={`option-${value}`}
        value={value}
        label={label || value}
        disabled={!!disabled}
        />
    )
  }
}
const Select = ({
  disabled,
  error,
  label,
  onChange,
  options,
  placeholder,
  required = true,
  value,
}: Props) => {
  return(
    <div>
      <label>
        {label && (
          <div>
            <Typography type="secondary">{label}</Typography>
          </div>
        )}
        <select value={value} required={!!required} onChange={onChange}>
          {placeholder && <option disabled value='' label={placeholder} className='placeholder'/>}
          {options.map(renderOption)}
        </select>
      </label>
      {error && (
        <div>
          <Typography size="small" type="error">
            {error}
          </Typography>
        </div>
      )}
      <style jsx>{`
        select {
          border-radius: 3px;
          background-color: white;
          border: solid 1px #bac7d5;
          //font-size: 16px;
          line-height: 1.25;
          padding: 12px 16px;
        }
        label div {
          font-size: 14px;
          line-height: 1.43;
        }
        option.placeholder{
          color: red;
        }
        option[value=""][disabled] {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Select;
