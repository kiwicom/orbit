// @flow
import fetch from "isomorphic-unfetch";
import dotenv from "dotenv";
import chalk from "chalk";
import fs from "fs-extra";

dotenv.config();
const env = name => process.env[name] || "";

const PHRASE_APP_BASE_URL = "https://api.phraseapp.com/api/v2";
const LOCALES_URL = `${PHRASE_APP_BASE_URL}/projects/${env("PHRASE_APP_PROJECT_ID")}/locales`;
const FILE_FORMAT = "nested_json";

const fetchJSON = async url => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${env("PHRASE_APP_ACCESS_TOKEN")}`,
    },
  };
  return (await fetch(url, options)).json();
};
const writeJSON = (filename, obj) =>
  new Promise((resolve, reject) => {
    fs.outputFile(filename, JSON.stringify(obj, null, 2), "utf8", err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });

const flatten = (obj, keyPrefix = "") =>
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
        `${LOCALES_URL}/${locale.id}/download?file_format=${FILE_FORMAT}&encoding=UTF-8`,
      );

      const translationsByRootKey = Object.keys(translation).reduce(
        (result, key) => ({
          ...result,
          [key]: key === "menuItems" ? translation[key] : flatten(translation[key]),
        }),
        {},
      );

      Object.keys(translationsByRootKey).forEach(async rootKey => {
        const path =
          rootKey === "menuItems" ? "static/locales/menuItems" : `static/cities/${rootKey}/locales`;
        await writeJSON(`${path}/${locale.code}.json`, translationsByRootKey[rootKey]);
      });

      // eslint-disable-next-line no-console
      console.log(chalk.green.bold(`${locale.code} translations updated.`));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }
})();
