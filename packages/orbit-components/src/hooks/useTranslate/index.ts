import { useCallback } from "react";

import useDictionary from "../useDictionary";
import { pureTranslate } from "../../Translate";
import { Values } from "../../Translate/types";

const useTranslate = () => {
  const dictionary = useDictionary();
  return useCallback((key: string, values?: Values) => pureTranslate(dictionary, key, values), [
    dictionary,
  ]);
};

export default useTranslate;
