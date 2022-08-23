import { SIZE_OPTIONS } from "../consts";
import { Size } from "../index.d";

const tooltipSize = ({ size }: { size: Size }): string => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: "240px",
    [SIZE_OPTIONS.MEDIUM]: "380px",
  };

  return sizes[size];
};

export default tooltipSize;
