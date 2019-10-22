// @flow
import { useContext } from "react";

import DictionaryContext from "../Dictionary/DictionaryContext";
import type { UseDictionary } from "./useDictionary";

const useDictionary: UseDictionary = () => useContext(DictionaryContext);

export default useDictionary;
