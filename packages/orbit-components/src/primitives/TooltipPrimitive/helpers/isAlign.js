// @flow
import { ALIGNS } from "../consts";

export const isAlignCenter = (a: string): boolean => a === ALIGNS.CENTER;

export const isAlignStart = (a: string): boolean => a === ALIGNS.START;

export const isAlignEnd = (a: string): boolean => a === ALIGNS.END;
