import { useCallback } from "react";

import useDictionary from "../useDictionary";
import { pureTranslate } from "../../Translate";
import type { Values } from "../../Translate/types";

type UseTranslateFunction = (key: string, values?: Values) => string;

const useTranslate = (): UseTranslateFunction => {
  const dictionary = useDictionary();
  return useCallback((key: string, values?: Values) => pureTranslate(dictionary, key, values), [
    dictionary,
  ]);
};

export default useTranslate;
