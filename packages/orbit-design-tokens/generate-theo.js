
// @flow
const babylon = require ("babylon");
const fs = require("fs")
const tokens = require("./index").defaultTokens // used for values

const code = fs.readFileSync("./index.js", 'utf8')
const ast = babylon.parse(code, {
  sourceType: "module", // allow export
  plugins: []
});

const findTokensFn = x => x.type === "VariableDeclaration" && x.declarations[0].id.name === "getTokens"
const tokensDeclaration = ast.program.body.find(findTokensFn)
const tokenProps = tokensDeclaration.declarations[0].init.body.properties

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
let comment = undefined

const categoryCommentFn = c => c.startsWith("category:")
const categoryDescriptionFn = c => c.startsWith("description:")
const itemCommentFn = c => !categoryCommentFn(c) && !categoryDescriptionFn(c)

const getInfo = (tokenProp, xcategory) => {
  const key = tokenProp.key.name
  const value = xcategory ? tokens[xcategory][key] : tokens[key]
  if (value == null) {
    console.error("Wrong value for", key)
    throw new Error(`Wrong value for ${key}`)
  }
  const type = typeof value
  if (type === "object") return getProps(tokenProp.value.properties, key)
  comment = undefined
  const hasComment = (tokenProp.leadingComments && tokenProp.leadingComments.length)
  if (hasComment) {
    const comments = tokenProp.leadingComments.map(x => x.value.trimLeft())
    const categoryComment = comments.find(categoryCommentFn)
    if (categoryComment) category = categoryComment.substr(9)
    const categoryDescriptionComm = comments.find(categoryDescriptionFn)
    if (categoryDescriptionComm) categoryDescription = categoryDescriptionComm.substr(12)
    const itemComment = comments.filter(itemCommentFn)
    if (itemComment.length) {
      comment = itemComment.map(c => c.startsWith("*") ? c.substr(1) : c) .join(" ").trim()
    }
  }
  return {
    [key]: {
      value: value,
      type: getType(value),
      category,
      comment,
      "meta": {
        categoryDescription,
      }
    }
  }
}

const props = getProps(tokenProps)
fs.writeFileSync("./theo-spec.json", JSON.stringify({props}, null, 2))
