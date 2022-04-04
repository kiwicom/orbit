import { TrackingProp, TrackingProperty } from "./interfaces";

const sumVals = (arr: TrackingProperty[]) =>
  Object.values(
    [...arr].reduce((acc, { name, used }) => {
      acc[name] = { name, used: (acc[name] ? acc[name].used : 0) + used };
      return acc;
    }, {}),
  );

export const sumProperties = (properties: TrackingProp[]) =>
  properties.reduce((acc, { name, used, values }) => {
    if (!acc[name]) {
      acc[name] = { name, used, values };
    } else {
      acc[name] = {
        name,
        used: acc[name].used + used,
        values: sumVals(acc[name].values ? acc[name].values.concat(values) : values),
      };
    }

    return acc;
  }, {});
