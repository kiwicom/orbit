import { useCallback } from "react";

import useDictionary from "../useDictionary";
import { pureTranslate } from "../../Translate";

const useTranslate = () => {
  const dictionary = useDictionary();
  return useCallback((key, values) => pureTranslate(dictionary, key, values), [dictionary]);
};

export default useTranslate;
