import * as React from "react";

import { Translations } from "./types";

const DictionaryContext = React.createContext<Translations>({});
DictionaryContext.displayName = "DictionaryOrbitContext";

export default DictionaryContext;
