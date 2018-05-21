// @flow
function deprecationWarning(text: string) {
  if (process.env.NODE_ENV !== "production") console.warn(text);
}

module.exports = deprecationWarning;
