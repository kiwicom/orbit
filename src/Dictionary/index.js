// @flow
import * as React from "react";

import type { DictionaryContextType, Props } from "./index";

export const DictionaryContext: DictionaryContextType = React.createContext({});

const Dictionary = ({ values, children }: Props) => (
  <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
);

export default Dictionary;
