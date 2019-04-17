// @flow
const calculateBarLeftPosition = (parentWidth, value, max, min) => {
  if (Array.isArray(value)) {
    return ((value[0] - min) / (max - min)) * parentWidth;
  }
  return 0;
};

const calculateBarWidth = (parentWidth, value, max, min) => {
  if (Array.isArray(value)) {
    return ((value[value.length - 1] - value[0]) / (max - min)) * parentWidth;
  }
  return ((value - min) / (max - min)) * parentWidth;
};

const calculateBarPosition = (parentWidth, value, max, min) => {
  const left = calculateBarLeftPosition(parentWidth, value, max, min).toFixed(2);
  const width = calculateBarWidth(parentWidth, value, max, min).toFixed(2);
  return { left, width, parentWidth };
};

export default calculateBarPosition;
