// @flow
const attributeFoundation = {
  name: "attribute/foundation",
  type: "attribute",
  transformer: prop => {
    const { attributes = {}, path } = prop;
    const structure = ["foundation", "category", "name", "type", "state"];
    const generatedAttrs = {};
    for (let i = 0; i < path.length && i < structure.length; i += 1) {
      const item = path[i];
      /*
        If the horizontalShade is named as "base" so we want to skip it,
        because it would be explicit in the final token name
       */
      if (item !== "base") {
        generatedAttrs[structure[i]] = item;
      }
    }
    return Object.assign(generatedAttrs, attributes);
  },
};

module.exports = {
  attributeFoundation,
};
