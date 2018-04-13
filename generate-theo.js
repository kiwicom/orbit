
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

let category = ""
let categoryDescription = ""

const getInfo = (tokenProp, xcategory) => {
  const key = tokenProp.key.name
  const value = xcategory ? tokens[xcategory][key] : tokens[key]
  const type = typeof value
  if (type === "object") return getProps(tokenProp.value.properties, key)
  const hasComment = (tokenProp.leadingComments && tokenProp.leadingComments.length) 
  if (hasComment) {
    const categoryComment = tokenProp.leadingComments.find(c => c.value.startsWith("category:"))
    if (categoryComment) category = categoryComment.value.substr(9)
    const categoryDescriptionComm = tokenProp.leadingComments.find(c => c.value.startsWith("description:"))
    if (categoryDescriptionComm) categoryDescription = categoryDescriptionComm.value.substr(12)
  }
  return {
    [key]: {
      value: value,
      type: getType(value),
      category, //: getCategory(xcategory, key),
      // comment,
      "meta": {
        name: camelCaseToText(key),
        categoryDescription,
        type,
      }
    }
  }
}

const props = getProps(tokenProps)
fs.writeFileSync("./theo-spec.json", JSON.stringify({props}, null, 2))