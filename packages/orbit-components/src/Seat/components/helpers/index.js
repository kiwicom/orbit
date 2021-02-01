// @flow
import type { Theme } from "../../../defaultTheme";
import type { Type } from "../..";
import resolveAccentColor from "./resolveAccentColor";
import resolveFocusColor from "./resolveFocusColor";
import resolveFillColor from "./resolveFillColor";
import resolveHoverColor from "./resolveHoverColor";
import resolveTextColor from "./resolveTextColor";
import resolveCloseIconColor from "./resolveCloseIconColor";

export type Params = {|
  +theme: Theme,
  +type?: Type,
  +selected?: boolean,
  +hover?: boolean,
  +focus?: boolean,
|};

export {
  resolveAccentColor,
  resolveFocusColor,
  resolveFillColor,
  resolveHoverColor,
  resolveTextColor,
  resolveCloseIconColor,
};
