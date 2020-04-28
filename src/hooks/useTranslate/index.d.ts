// @flow
import { Values } from "../../Translate/index.d.ts";

type TranslateFunction = (key: string, values?: Values) => string;

const UseTranslate: () => TranslateFunction;

export { UseTranslate, UseTranslate as default };
