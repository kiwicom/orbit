import { Values } from "../../Translate/index.d";

type TranslateFunction = (key: string, values?: Values) => string;

declare const UseTranslate: () => TranslateFunction;

export { UseTranslate, UseTranslate as default };
