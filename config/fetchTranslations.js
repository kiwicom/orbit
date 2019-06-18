// @flow
import fetch from "isomorphic-unfetch";
import path from "path";
import dotenv from "dotenv";
import fs from "fs-extra";

dotenv.config();
const env = name => process.env[name] || "";

const PHRASE_APP_BASE_URL = "https://api.phraseapp.com/api/v2";
const PHRASE_APP_PROJECT_ID = env("PHRASE_APP_PROJECT_ID");
const PHRASE_APP_ACCESS_TOKEN = env("PHRASE_APP_ACCESS_TOKEN");

const LOCALES_URL = `${PHRASE_APP_BASE_URL}/projects/${PHRASE_APP_PROJECT_ID}/locales`;
const FILE_FORMAT = "nested_json";

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

const writeJSON = (filename, obj) =>
  new Promise((resolve, reject) => {
    fs.outputFile(filename, JSON.stringify(obj, null, 2), "utf8", err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });

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
    const LOCALES_DATA = path.join(__dirname, "..", "src", "data", "dictionary");

    // PhraseApp has limits on parallel requests
    // that's why we process requests in sequence
    // eslint-disable-next-line no-restricted-syntax
    for (const locale of allLocales) {
      const translation = await fetchJSON(
        `${LOCALES_URL}/${locale.id}/download?file_format=${FILE_FORMAT}&tags=orbit&encoding=UTF-8`,
      );

      await writeJSON(path.join(LOCALES_DATA, `${locale.code}.json`), flatten(translation.orbit));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }
})();
