
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
  result = result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter - as an example.
  return result
}

const textCategory = (value) => {
  if (typeof value === "object") return "Category"
  if (typeof value !== "string") return typeof value
  if (value.startsWith("#") || value.startsWith("rgb")) return "color"
  if (value.includes("px")) return "size"
}

const getInfo = (tokenProp, category) => {
  const key = tokenProp.key.name
  const value = category ? tokens[category][key] : tokens[key]
  const type = typeof value
  const childrens = (type === "object") ? tokenProp.value.properties.map(x => getInfo(x, key)) : undefined
  const description = (tokenProp.leadingComments && tokenProp.leadingComments.length) 
    ? tokenProp.leadingComments[0].value.trim() : undefined
  return {
    key,
    name: camelCaseToText(key),
    type,
    textCategory: textCategory(value),
    description,
    value: childrens || value,
  }
}

const info = tokenProps.map(x => getInfo(x))
fs.writeFileSync("./docs.json", JSON.stringify(info, null, 2))
fs.writeFileSync("./values.json", JSON.stringify(tokens, null, 2))