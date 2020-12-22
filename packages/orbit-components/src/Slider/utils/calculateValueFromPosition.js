// @flow
import type { Theme } from "../../defaultTheme";
import type { Value } from "../index";
import calculateValue from "./calculateValue";

type Params = {|
  pageX: number,
  throughClick?: boolean,
|};

type AdditionalParams = {|
  hasHistogram: boolean,
  handleIndex: number | null,
  value: Value,
  maxValue: number,
  minValue: number,
  theme: Theme,
  barLeft: number,
  barWidth: number,
  barRight: number,
|};

const calculateValueFromPosition = ({
  maxValue,
  minValue,
  theme,
  barLeft,
  barRight,
  barWidth,
}: AdditionalParams) => ({ pageX }: Params) => {
  const { rtl } = theme;
  const calcVal = ({ ratio }) => calculateValue({ maxValue, minValue, ratio });

  const mousePosition = (rtl ? barRight : pageX) - (rtl ? pageX : barLeft);
  const positionRatio = mousePosition / barWidth;

  return calcVal({ ratio: positionRatio });
};

export default calculateValueFromPosition;
