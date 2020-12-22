// @flow
type Params = {|
  newValue: number,
  index: number,
  value: number,
|};

const replaceValue = ({ newValue, index, value }: Params) => {
  if (index == null || !Array.isArray(value)) return newValue;
  return value.map<number>((item, key) => (key === index ? newValue : item));
};

export default replaceValue;
