// @flow
import { Values } from "../../Translate/index";

type TranslateFunction = (key: string, values?: Values) => string;

const UseTranslate: () => TranslateFunction;

export { UseTranslate, UseTranslate as default };
