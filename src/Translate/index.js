// @flow
import React from "react";

import { DictionaryContext } from "../Dictionary";
import DEFAULT_DICTIONARY from "../data/dictionary/en-GB";

import type { Props } from "./index";

const Translate = ({ tKey }: Props) => (
  <DictionaryContext.Consumer>
    {dictionary => {
      if (dictionary[tKey] || DEFAULT_DICTIONARY[tKey])
        return <span>{dictionary[tKey] || DEFAULT_DICTIONARY[tKey]}</span>;

      // Fallback to key
      return <span>{tKey}</span>;
    }}
  </DictionaryContext.Consumer>
);

export default Translate;
