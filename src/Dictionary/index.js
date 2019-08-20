// @flow

import * as React from 'react';

import { pureTranslate } from '../Translate';
import type { DictionaryContextType, Props } from './index.js.flow';

export const DictionaryContext: DictionaryContextType = React.createContext({});

const Dictionary = ({ values, children }: Props) => (
  <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
);

export function withDictionary(Component: React.ComponentType<any>) {
  return function DictionaryComponent(props: any) {
    return (
      <DictionaryContext.Consumer>
        {dictionary => (
          <Component
            {...props}
            translate={(tKey, values) => pureTranslate(dictionary, tKey, values)}
          />
        )}
      </DictionaryContext.Consumer>
    );
  };
}

export default Dictionary;
