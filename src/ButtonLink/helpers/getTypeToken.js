// @flow
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { TOKENS, TYPES } from "../consts";
import type { GetTypeToken } from "./getTypeToken";

const getTypeToken: GetTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButton]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPES.PRIMARY]: "rgba(0, 169, 145, 0.1)", // TODO: Fix convert HexToRgba and tokenize
      [TYPES.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkLight, 10),
    },
  };

  return tokens[name][type];
};

export default getTypeToken;
