// @flow
import { useContext } from "react";

import { DictionaryContext } from "../Dictionary";
import type { UseDictionary } from "./useDictionary";

const useDictionary: UseDictionary = () => useContext(DictionaryContext);

export default useDictionary;
