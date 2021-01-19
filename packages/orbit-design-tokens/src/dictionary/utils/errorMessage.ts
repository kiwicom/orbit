export const errorValue = (name: string, value: string, type: string, toType: string): string =>
  `Invalid value: '${name}: ${value}' is not a valid value for '${type}', cannot transform to '${toType}' \n`;

export const errorTransform = (transform: string, neededTransform: string): string =>
  `Can't use transform '${transform}', because transform '${neededTransform}' is not being used. Add it into the transformGroup settings. \n`;
