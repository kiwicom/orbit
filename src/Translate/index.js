// @flow

import React from 'react';

import { DictionaryContext } from '../Dictionary';
import DEFAULT_DICTIONARY from '../data/dictionary/en-GB.json';
import type { Translations } from '../Dictionary';
import type { Props, Values } from './index.js.flow';

export function pureTranslate(translations: Translations, key: string, values: Values = {}) {
  const translation = translations[key] || DEFAULT_DICTIONARY[key];

  if (!translation) {
    return key;
  }

  return Object.keys(values).reduce(
    (acc, placeholder) =>
      acc.replace(new RegExp(`__${placeholder}__`, 'g'), String(values[placeholder])),
    translation,
  );
}

const Translate = ({ tKey, values }: Props) => (
  <DictionaryContext.Consumer>
    {dictionary => pureTranslate(dictionary, tKey, values)}
  </DictionaryContext.Consumer>
);

export default Translate;
