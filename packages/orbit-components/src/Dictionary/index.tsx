import * as React from "react";

import { pureTranslate } from "../Translate";
import DictionaryContext from "./DictionaryContext";
import { Props } from "./types";

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
