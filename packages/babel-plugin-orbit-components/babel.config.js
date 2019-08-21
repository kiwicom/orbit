/* eslint-disable flowtype/require-valid-file-annotation */

module.exports = function(api) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: ['@kiwicom/babel-preset-kiwicom'],
  };
};
