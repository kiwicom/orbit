// @flow
import { parse, types as t } from "@babel/core";
import generate from "@babel/generator";
import glob from "glob";
import fs from "fs";
import path from "path";
import prettier from "prettier";
import lzString from "lz-string";

const files = glob.sync(process.argv.slice(2).join());

async function readFile(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function writeFile(pathToFile, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathToFile, content, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

const importFactory = (specifier, importPath) => {
  const fullPath = Array.isArray(importPath) ? importPath.join("/") : importPath;
  return `import ${specifier.local.name} from "@kiwicom/orbit-components/lib/${fullPath}";`;
};

const getComponentImportName = spec => spec.local.name;

const getComponentImportValue = node => node.source.value;

const getNameWithParent = spec => {
  const componentName = getComponentImportName(spec);
  const parentComponent = componentName.split(/(?<=[a-z])(?=[A-Z])/)[0];
  return [parentComponent, componentName];
};

const makePlainAndInsertNewLine = arr => arr.filter(Boolean).join("\n");

function collectImports(body) {
  return makePlainAndInsertNewLine(
    body.map(node => {
      if (t.isImportDeclaration(node)) {
        if (
          !(
            t.isImportNamespaceSpecifier(node.specifiers[0]) &&
            getComponentImportName(node.specifiers[0]) === "Icons"
          ) &&
          getComponentImportName(node.specifiers[0]) !== "React"
        ) {
          if (t.isImportSpecifier(node.specifiers[0]) && node.specifiers.length === 1) {
            const componentName = getComponentImportName(node.specifiers[0]);
            const parentComponent = componentName.split(/(?<=[a-z])(?=[A-Z])/)[0];
            return importFactory(node.specifiers[0], [parentComponent, componentName]);
          }
          if (
            (getComponentImportValue(node) === "../index" ||
              getComponentImportValue(node).match(/\.+\/.+\w+/)) &&
            getComponentImportName(node.specifiers[0]) !== "Icons"
          ) {
            if (node.specifiers.length > 1) {
              return makePlainAndInsertNewLine(
                node.specifiers.map(spec => {
                  const importPath = t.isImportSpecifier(spec)
                    ? [getNameWithParent(spec)]
                    : node.specifiers
                        .filter(t.isImportDefaultSpecifier)
                        .map(getComponentImportName);
                  return importFactory(spec, ...importPath);
                }),
              );
            }
            return importFactory(node.specifiers[0], getComponentImportName(node.specifiers[0]));
          }
        }
        return null;
      }
      return null;
    }),
  );
}

function generateIconsImports(icons) {
  return makePlainAndInsertNewLine(
    icons.map(icon => `import ${icon} from "@kiwicom/orbit-components/lib/icons/${icon}";`),
  );
}

async function findAllIcons(code) {
  const reg = /<Icons\.(\w+)\s?\/>/gm;
  const icons = [];
  let m;
  do {
    m = reg.exec(code);
    if (m) icons.push(m[1]);
  } while (m);
  return icons.filter((value, index, self) => self.indexOf(value) === index);
}

async function generateImports(body, code) {
  const imports = collectImports(body);
  const icons = generateIconsImports(await findAllIcons(code));
  return makePlainAndInsertNewLine([imports, icons]);
}

async function getObjectProperty(body, name) {
  let value = null;
  body.forEach(node => {
    if (t.isExportDefaultDeclaration(node)) {
      node.declaration.properties.forEach(prop => {
        if (t.isObjectProperty(prop) && prop.key.name === name) {
          value = prop.value;
        }
      });
    }
  });
  return value;
}

async function getJSXFromExample(node) {
  if (!node) {
    return null;
  }
  if (t.isArrowFunctionExpression(node)) {
    if (t.isBlockStatement(node.body)) {
      if (t.isReturnStatement(node.body.body[0])) {
        return node.body.body[0].arguments;
      }
      return null;
    }
    if (node.body != null) return node.body;
    return null;
  }
  return null;
}

async function getExample(body, code) {
  const generateCode = content =>
    prettier
      .format(generate(content, code).code, { semi: false, parser: "babel" })
      .replace(/^;/, "");

  const compress = content =>
    lzString.compressToEncodedURIComponent(JSON.stringify({ code: content }));

  const example = await getObjectProperty(body, "Example");
  const onlyJSX = await getJSXFromExample(example);

  return { example: generateCode(example), compressedExample: compress(generateCode(onlyJSX)) };
}

async function getInfo(body) {
  const info = await getObjectProperty(body, "info");
  if (info) {
    return Object.assign(
      {},
      ...info.properties.map(property => ({ [property.key.name]: property.value.value })),
    );
  }
  return null;
}

const generatePath = (dirName, fileName) => {
  const withDir = path.join(process.cwd(), "examples", dirName);
  if (!fs.existsSync(withDir)) {
    fs.mkdirSync(withDir);
  }
  return path.join(withDir, fileName);
};

async function readFileAndCreateJSON(pathToFile) {
  const nameSplit = pathToFile.split("/");
  const fileName = nameSplit[nameSplit.length - 1].replace(".js", ".json");
  const code = await readFile(pathToFile);
  const ast = parse(code, {
    sourceType: "module",
  });
  const imports = await generateImports(ast.program.body, code);
  const { example, compressedExample } = await getExample(ast.program.body, code);
  const info = await getInfo(ast.program.body);
  await writeFile(
    generatePath(nameSplit[1], fileName),
    JSON.stringify({ imports, example, info, compressedExample }, null, "\t"),
  );
}

(async () => {
  try {
    await Promise.all(files.map(file => readFileAndCreateJSON(file)));
  } catch (error) {
    console.error(error);
  }
})();
