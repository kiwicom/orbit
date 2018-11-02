// @flow

export default (fontSize: string, lineHeightText: string) =>
  `${parseFloat(lineHeightText) * parseFloat(fontSize)}px`;
