// @flow
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import glob from "glob";
import fs from "fs";
import path from "path";

const files = glob.sync("src/**/__examples__/*.js");

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
  return body.slice().filter(node => {
    if (node.type === "ImportDeclaration") {
      if (node.specifiers[0].local.name !== "React") {
        if (node.source.value === "../index") {
          // eslint-disable-next-line no-param-reassign
          node.source.value = `@kiwicom/orbit-components/lib/${node.specifiers[0].local.name}`;
        }
        return !(
          node.specifiers[0].type === "ImportNamespaceSpecifier" &&
          node.specifiers[0].local.name === "Icons"
        );
      }
    }
    return false;
  });
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
  const generatedImports = generate(Object.assign({}, ...imports), code).code;
  const icons = generateIconsImports(await findAllIcons(code));
  return `${generatedImports}\n${icons}`;
}

async function getObjectProperty(body, name) {
  let value = null;
  body.forEach(node => {
    if (node.type === "ExportDefaultDeclaration") {
      node.declaration.properties.forEach(prop => {
        if (prop.type === "ObjectProperty" && prop.key.name === name) {
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
  const withDir = path.join(__dirname, "..", "examples", dirName);
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
    plugins: ["jsx", "flow"],
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
    const promises = [];
    // Generate every variant
    files.forEach(file => {
      promises.push(readFileAndCreateJSON(file));
    });

    await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
})();
