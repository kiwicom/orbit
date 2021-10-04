// @flow
import type { InterpolationBase } from "styled-components";

import type { Theme } from "../../../defaultTheme";

export type Props = {|
  help: boolean,
  error: boolean,
  theme: Theme,
|};

type ResolveBackgroundColor = Props => InterpolationBase;

const backgroundColor: ResolveBackgroundColor = ({ theme, error, help }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;

  return theme.orbit.paletteInkNormal;
};

export default backgroundColor;
