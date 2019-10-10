// @flow
import { useCallback } from "react";

import useDictionary from "./useDictionary";
import { pureTranslate } from "../Translate";
import type { UseTranslate } from "./useTranslate";

const useTranslate: UseTranslate = () => {
  const dictionary = useDictionary();
  return useCallback((key, values) => pureTranslate(dictionary, key, values), [dictionary]);
};

export default useTranslate;
