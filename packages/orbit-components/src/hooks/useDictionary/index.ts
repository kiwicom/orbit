import React from "react";

import DictionaryContext from "../../Dictionary/DictionaryContext";
import type { Translations } from "../../Dictionary/types";

const useDictionary = (): Translations => React.useContext(DictionaryContext);

export default useDictionary;
