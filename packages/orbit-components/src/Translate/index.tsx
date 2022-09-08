import React from "react";

import useDictionary from "../hooks/useDictionary";
import DEFAULT_DICTIONARY from "../data/dictionary/en-GB.json";
import { Props, PureTranslate } from "./types";

export const pureTranslate: PureTranslate = (translations, key, values = {}) => {
  const translation: string = translations[key] || DEFAULT_DICTIONARY[key];
  if (!translation) return key;

  return Object.keys(values).reduce(
    (acc, placeholder) =>
      acc.replace(new RegExp(`__${placeholder}__`, "g"), String(values[placeholder])),
    translation,
  );
};

const Translate = ({ tKey, values }: Props): JSX.Element => {
  const dictionary = useDictionary();
  return <>{pureTranslate(dictionary, tKey, values)}</>;
};

export default Translate;
