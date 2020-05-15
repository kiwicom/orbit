// @flow
import { parse, types as t } from "@babel/core";
import generate from "@babel/generator";
import glob from "glob";
import fs from "fs";
import path from "path";

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

function collectImports(body) {
  const importFactory = (name, importPath, isNameSpace = false) => {
    const fullPath = Array.isArray(importPath) ? importPath.join("/") : importPath;
    const withNamespace = isNameSpace ? `{ ${name} }` : name;
    return `import ${withNamespace} from "@kiwicom/orbit-components/lib/${fullPath}";`;
  };
  return body
    .map(node => {
      if (t.isImportDeclaration(node)) {
        if (
          !(
            t.isImportNamespaceSpecifier(node.specifiers[0]) &&
            node.specifiers[0].local.name === "Icons"
          ) &&
          node.specifiers[0].local.name !== "React"
        ) {
          if (t.isImportSpecifier(node.specifiers[0])) {
            const componentName = node.specifiers[0].local.name;
            const parentComponent = componentName.split(/(?<=[a-z])(?=[A-Z])/)[0];
            return importFactory(componentName, [parentComponent, componentName], false);
          }
          if (
            (node.source.value === "../index" || node.source.value.match(/\.+\/.+\w+/)) &&
            node.specifiers[0].local.name !== "Icons"
          ) {
            return importFactory(node.specifiers[0].local.name, node.specifiers[0].local.name);
          }
        }
        return null;
      }
      return null;
    })
    .join("\n");
}

function generateIconsImports(icons) {
  return icons
    .map(icon => `import ${icon} from "@kiwicom/orbit-components/lib/icons/${icon}";`)
    .join("\n");
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
  return `${imports}${icons}`;
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

async function getExample(body, code) {
  const example = await getObjectProperty(body, "Example");
  return generate(example, code).code;
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
  const example = await getExample(ast.program.body, code);
  const info = await getInfo(ast.program.body);
  await writeFile(
    generatePath(nameSplit[1], fileName),
    JSON.stringify({ imports, example, info }, null, "\t"),
  );
}

(async () => {
  try {
    await Promise.all(files.map(file => readFileAndCreateJSON(file)));
  } catch (error) {
    console.error(error);
  }
})();
