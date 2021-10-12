// @noflow
const parser = require("@babel/parser");
const fs = require("fs");
const path = require("path");

const { defaultTokens } = require("../../lib/index");

const code = fs.readFileSync(path.resolve(__dirname, "../../lib/index.js"), "utf8");

const ast = parser.parse(code, {
  sourceType: "module", // allow export
  allowImportExportEverywhere: true,
  plugins: ["flow"],
});

const findDeclaration = x => x.id.name === "getTokens";
const findGetTokens = x => x.type === "VariableDeclaration" && x.declarations.find(findDeclaration);

const ar = ast.program.body.find(findGetTokens);
const tokenProps = ar.declarations[0].init.body.body[1].argument.properties;

const getType = value => {
  if (typeof value !== "string") return typeof value;
  if (value.startsWith("#") || value.startsWith("rgb")) return "color";
  if (value.includes("px")) return "size";
  if (value[value.length - 1] === "%") return "size";
  return "string";
};

const getProps = (tokenInputProps, category) =>
  // eslint-disable-next-line no-use-before-define
  tokenInputProps.reduce((p, c) => Object.assign(p, getInfo(c, category)), {});

let category = "";
let categoryDescription = "";
let comment;

const categoryCommentFn = c => c.startsWith("category:");
const categoryDescriptionFn = c => c.startsWith("description:");
const itemCommentFn = c => !categoryCommentFn(c) && !categoryDescriptionFn(c);

const getInfo = (tokenProp, xcategory) => {
  const key = tokenProp.key.name;
  const value = xcategory ? defaultTokens[xcategory][key] : defaultTokens[key];
  if (value == null) {
    console.error("Wrong value for", key);
    throw new Error(`Wrong value for ${key}`);
  }
  const type = typeof value;
  if (type === "object") return getProps(tokenProp.value.properties, key);
  comment = undefined;
  const hasComment = tokenProp.leadingComments && tokenProp.leadingComments.length;
  if (hasComment) {
    const comments = tokenProp.leadingComments.map(x => x.value.trimLeft());
    const categoryComment = comments.find(categoryCommentFn);
    if (categoryComment) category = categoryComment.substr(9);
    const categoryDescriptionComm = comments.find(categoryDescriptionFn);
    if (categoryDescriptionComm) categoryDescription = categoryDescriptionComm.substr(12);
    const itemComment = comments.filter(itemCommentFn);
    if (itemComment.length) {
      comment = itemComment
        .map(c => (c.startsWith("*") ? c.substr(1) : c))
        .join(" ")
        .trim();
    }
  }
  return {
    [key]: {
      value,
      type: getType(value),
      category,
      comment,
      meta: {
        categoryDescription,
      },
    },
  };
};

const props = getProps(tokenProps);
fs.writeFileSync(path.resolve(__dirname, "./theo-spec.json"), JSON.stringify({ props }, null, 2));
