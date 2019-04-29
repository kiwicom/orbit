// @flow
import React from "react";
import { withTheme } from "styled-components";

import { DictionaryContext } from "../Dictionary";
import DEFAULT_DICTIONARY from "../data/dictionary/en-GB";

const Translate = ({ tKey }) => (
  <DictionaryContext.Consumer>
    {dictionary => <span>{dictionary[tKey] || DEFAULT_DICTIONARY[tKey]}</span>}
  </DictionaryContext.Consumer>
);

export default withTheme(Translate);
