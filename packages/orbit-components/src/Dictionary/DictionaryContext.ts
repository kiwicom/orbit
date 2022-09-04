import * as React from "react";

import { Translations } from "./index.d";

const DictionaryContext = React.createContext<Translations>({});
DictionaryContext.displayName = "DictionaryOrbitContext";

export default DictionaryContext;
