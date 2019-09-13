// @flow
import React, { useCallback, createContext } from "react";

import { pureTranslate } from "../Translate";

import type { DictionaryContextType, Props } from "./index";

export const DictionaryContext: DictionaryContextType = createContext({});

const Dictionary = ({ values, children }: Props) => (
  <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
);

export function withDictionary(Component: React.ComponentType<any>) {
  return function DictionaryComponent(props: any) {
    const memoTranslate = useCallback(
      dictionary => (tKey, values) => pureTranslate(dictionary, tKey, values),
      [],
    );
    return (
      <DictionaryContext.Consumer>
        {dictionary => <Component {...props} translate={memoTranslate(dictionary)} />}
      </DictionaryContext.Consumer>
    );
  };
}

export default Dictionary;
