
// @flow 
const babylon = require ("babylon");
const fs = require("fs")
const tokens = require("./index") // used for values

const code = fs.readFileSync("./index.js", 'utf8')
const ast = babylon.parse(code, {
  sourceType: "module", // allow export
  plugins: []
});

const findTokensFn = x => x.type === "VariableDeclaration" && x.declarations[0].id.name === "defaultTokens"
const tokensDeclaration = ast.program.body.find(findTokensFn)
const tokenProps = tokensDeclaration.declarations[0].init.properties

const camelCaseToText = text => {
  let result = text.replace( /([A-Z])/g, " $1")
  result = result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter
  return result
}

const getType = (value, hint) => {
  if (typeof value !== "string") return typeof value
  if (value.startsWith("#") || value.startsWith("rgb")) return "color"
  if (value.includes("px")) return "size"
  if (value[value.length - 1] === "%")  return "size"
  return "string"
}

const getCategory = (category, key) => {
  // Workarounds
  if (category === "color") return "text-color"
  if (category === "zIndex") return "spacing"
  if (category === "size") return "sizing"
  return category.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
} 

const getProps = (tokenProps, category) => tokenProps.reduce((p, c) => Object.assign(p, getInfo(c, category)), {})

const getInfo = (tokenProp, category) => {
  const key = tokenProp.key.name
  const value = category ? tokens[category][key] : tokens[key]
  const type = typeof value
  if (type === "object") return getProps(tokenProp.value.properties, key)
  const comment = (tokenProp.leadingComments && tokenProp.leadingComments.length) 
    ? tokenProp.leadingComments[0].value.trim() : undefined
  return {
    [key]: {
      value: value,
      type: getType(value),
      category: getCategory(category, key),
      comment,
      "meta": {
        name: camelCaseToText(key),
        type,
      }
    }
  }
}

const props = getProps(tokenProps)
fs.writeFileSync("./theo-spec.json", JSON.stringify({props}, null, 2))