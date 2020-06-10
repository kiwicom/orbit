// @flow
import * as React from "react";

import type { DictionaryContextType } from "./DictionaryContext";

const DictionaryContext: DictionaryContextType = React.createContext({});
DictionaryContext.displayName = "DictionaryOrbitContext";

export default DictionaryContext;
