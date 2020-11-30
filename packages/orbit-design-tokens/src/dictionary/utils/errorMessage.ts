export const spacingError = (name: string): string =>
  `Unexpected value of spacing token ${name}. Please specify attributes.spacing object for the token.`;

export const spacingErrorDefinition = (name: string): string =>
  `Unexpected value of spacing token ${name}. Supported properties of the spacing object are { top, right, bottom, left }, { top, left-right, bottom } or { top-bottom, left-right}.`;

export const errorTransform = (transform: string, neededTransform: string): string =>
  `Can't use transform '${transform}', because transform '${neededTransform}' is not being used. Add it into the transformGroup settings. \n`;
