import React from "react";

import DictionaryContext from "../../Dictionary/DictionaryContext";
import { Translations } from "../../Dictionary/index.d";

const useDictionary = (): Translations => React.useContext(DictionaryContext);

export default useDictionary;
