import { Props } from "../types";
import { Devices } from "../../utils/mediaQuery/types";

type GetProperty = (
  property: "spacing" | "direction",
  { index, devices }: { index: number; devices: Devices[] },
  props: Props,
) => string;

const getProperty: GetProperty = (property, { index, devices }, props) => {
  const viewport = props && props[devices[index]];
  if (viewport && viewport[property]) return viewport[property];

  if (index !== 0) {
    return getProperty(property, { index: index - 1, devices }, props);
  }

  return null;
};

export default getProperty;
