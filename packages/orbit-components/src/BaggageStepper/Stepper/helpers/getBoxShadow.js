// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import type { Theme } from "../../../defaultTheme";
import { BUTTON_STATES } from "../../../primitives/ButtonPrimitive/common/consts";

type Args = {|
  state: string,
  disabled?: boolean,
  theme: Theme,
  selected?: boolean,
|};

const getButtonBoxShadow = ({ state, disabled, theme, selected }: Args): string | null => {
  if (disabled) return null;

  if (state === BUTTON_STATES.FOCUS) {
    return `0 0 0 2px ${
      selected
        ? transparentColor(theme.orbit.paletteBlueNormal, 30)
        : transparentColor(theme.orbit.paletteInkLight, 30)
    }}`;
  }

  return null;
};

export default getButtonBoxShadow;
