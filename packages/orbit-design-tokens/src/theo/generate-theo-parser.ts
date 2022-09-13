import { parseSync, traverse, types as t } from "@babel/core";
import { path, fs } from "zx";
import filedirname from "filedirname";

import { defaultTokens } from "../../dist/index.js";

const [, __dirname] = filedirname();

const code = fs.readFileSync(path.resolve(__dirname, "../../dist/index.js"), "utf8");

const categoryCommentFn = (c: string) => c.startsWith("category:");
const categoryDescriptionFn = (c: string) => c.startsWith("description:");
const itemCommentFn = (c: string) => !categoryCommentFn(c) && !categoryDescriptionFn(c);

const ast = parseSync(code, {
  filename: "index.js",
  sourceType: "module",
  presets: ["@babel/preset-typescript"],
});

const isGetTokens = (node: t.VariableDeclarator) =>
  t.isIdentifier(node.id) && node.id.name === "getTokens";

const getReturnStatement = (node: t.VariableDeclarator) => {
  if (t.isArrowFunctionExpression(node.init)) {
    if (t.isBlockStatement(node.init.body) && node.init.body.body.length) {
      const returnStatement = node.init.body.body.find(n => t.isReturnStatement(n));
      if (t.isReturnStatement(returnStatement)) {
        return returnStatement;
      }
    }
  }

  return undefined;
};

const getType = (value: any): string => {
  if (typeof value !== "string") return typeof value;
  if (value.startsWith("#") || value.startsWith("rgb")) return "color";
  if (value.includes("px")) return "size";
  if (value[value.length - 1] === "%") return "size";

  return "string";
};

const getInfo = (
  tokenProp: t.ObjectProperty,
  xcategory?: string,
): Record<
  string,
  { value: string; type: string; category: string; comment: string; meta: Record<string, string> }
> | null => {
  const { key } = tokenProp;
  let category = "";
  let categoryDescription = "";
  let comment = "";

  if (t.isIdentifier(key)) {
    const { name } = key;
    const value = xcategory ? defaultTokens[xcategory][name] : defaultTokens[name];

    if (value == null) {
      console.error("Wrong value for", key);
      throw new Error(`Wrong value for ${key}`);
    }

    const type = typeof value;
    // @ts-expect-error TODO
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (type === "object") return getProps(tokenProp.value.properties, name);

    const comments =
      tokenProp.leadingComments &&
      (tokenProp.leadingComments.filter(c => c.type === "CommentLine") as t.CommentLine[]);

    if (comments) {
      const mappedComments = comments.map(x => x.value.trim());
      const categoryComment = mappedComments.find(c => categoryCommentFn(c));
      if (categoryComment) category = categoryComment.substr(9);
      const categoryDescriptionComm = mappedComments.find(c => categoryDescriptionFn(c));
      if (categoryDescriptionComm) categoryDescription = categoryDescriptionComm.substr(12);
      const itemComment = mappedComments.filter(c => itemCommentFn(c));
      if (itemComment.length) {
        comment = itemComment
          .map(c => (c.startsWith("*") ? c.substr(1) : c))
          .join(" ")
          .trim();
      }
    }

    return {
      [name]: {
        value,
        type: getType(value),
        category,
        comment,
        meta: {
          categoryDescription,
        },
      },
    };
  }

  return null;
};

const getProps = (
  tokenInputProps: (t.ObjectProperty | t.ObjectMethod | t.SpreadElement)[],
  category?: string,
) =>
  tokenInputProps.reduce((acc, c) => {
    if (t.isObjectProperty(c)) Object.assign(acc, getInfo(c, category));
    return acc;
  }, {});

const getTokens = (fileAst: t.File | null): Record<string, string> | null => {
  let output = {};
  if (!fileAst) return null;

  traverse(fileAst, {
    VariableDeclaration: ({ node }) => {
      const tokens = node.declarations.find(n => isGetTokens(n));
      if (t.isVariableDeclarator(tokens)) {
        const returnStatement = getReturnStatement(tokens);
        if (returnStatement && t.isObjectExpression(returnStatement.argument)) {
          const { properties } = returnStatement.argument;
          const objectProperties = properties.filter(prop => t.isObjectProperty(prop));
          const parsedProps = getProps(objectProperties);
          output = parsedProps;
        }
      }
    },
  });

  return output;
};

const props = getTokens(ast);

fs.writeFileSync(path.resolve(__dirname, "./theo-spec.json"), JSON.stringify({ props }, null, 2));
