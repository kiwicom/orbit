// @flow
import fetch from "isomorphic-unfetch";
import path from "path";
import dotenv from "dotenv-safe";
import fs from "fs-extra";
import dedent from "dedent";

try {
  dotenv.config({
    example: `${process.cwd()}/../../.env.example`,
    path: `${process.cwd()}/../../.env`,
  });
} catch (err) {
  if (
    err.missing.includes("PHRASE_APP_PROJECT_ID") ||
    err.missing.includes("PHRASE_APP_ACCESS_TOKEN")
  ) {
    throw new Error(
      dedent`
        Some PhraseApp secrets are missing in the .env file:

        ${err.missing.join("\n")}

        You can find them in 1Password.
      `,
    );
  }
}

const env = name => process.env[name] || "";

const PHRASE_APP_BASE_URL = "https://api.phraseapp.com/api/v2";
const PHRASE_APP_PROJECT_ID = env("PHRASE_APP_PROJECT_ID");
const PHRASE_APP_ACCESS_TOKEN = env("PHRASE_APP_ACCESS_TOKEN");

const LOCALES_URL = `${PHRASE_APP_BASE_URL}/projects/${PHRASE_APP_PROJECT_ID}/locales?per_page=50`;

const SINGLE_LOCAL_URL = `${PHRASE_APP_BASE_URL}/projects/${PHRASE_APP_PROJECT_ID}/locales`;
const FILE_FORMAT = "nested_json";
const LOCALES_DATA = path.join(__dirname, "..", "src", "data", "dictionary");

const INDEX_TEMPLATE = `// @flow\n__IMPORTS__\n\nexport default {\n__DECLARATIONS__\n};\n`;

const fetchJSON = async url => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${PHRASE_APP_ACCESS_TOKEN}`,
    },
  };
  return (await fetch(url, options)).json();
};

const getImport = (c, p) => `import ${c} from "./${p}.json";`;

const writeFile = (filename, content) =>
  new Promise((resolve, reject) => {
    fs.outputFile(filename, content, "utf8", err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });

const writeIndexFile = async codes => {
  const fullCodes = codes.map(code => {
    const shortCode = code.split("-").join("");
    const importPath = getImport(shortCode, code);
    return { code, shortCode, importPath };
  });
  const imports = fullCodes.map(f => f.importPath).join("\n");
  const declarations = fullCodes.map(f => `  "${f.code}": ${f.shortCode},`).join("\n");
  const content = INDEX_TEMPLATE.replace("__IMPORTS__", imports).replace(
    "__DECLARATIONS__",
    declarations,
  );
  return writeFile(path.join(LOCALES_DATA, "index.js"), content);
};

const flatten = (obj = {}, keyPrefix = "") =>
  Object.entries(obj).reduce((result, [key, value]) => {
    if (value && typeof value === "object") {
      return {
        ...result,
        ...flatten(value, `${keyPrefix}${key}.`),
      };
    }
    return {
      ...result,
      [keyPrefix + key]: value,
    };
  }, {});

(async () => {
  try {
    const allLocales = await fetchJSON(LOCALES_URL);

    // PhraseApp has limits on parallel requests
    // that's why we process requests in sequence
    // eslint-disable-next-line no-restricted-syntax
    for (const locale of allLocales) {
      const translation = await fetchJSON(
        `${SINGLE_LOCAL_URL}/${locale.id}/download?file_format=${FILE_FORMAT}&tags=orbit&encoding=UTF-8`,
      );
      await writeFile(
        path.join(LOCALES_DATA, `${locale.code}.json`),
        JSON.stringify(flatten(translation.orbit), null, 2),
      );
    }
    await writeIndexFile(Object.keys(allLocales).map(l => allLocales[l].code));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
