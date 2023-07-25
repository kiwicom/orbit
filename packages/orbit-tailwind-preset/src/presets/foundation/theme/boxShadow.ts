import { defaultTokens } from "@kiwicom/orbit-design-tokens";

const elevations = {
  none: "none",
  fixed: defaultTokens.elevationFixedBoxShadow,
  "fixed-reverse": defaultTokens.elevationFixedReverseBoxShadow,
  raised: defaultTokens.elevationRaisedBoxShadow,
  "raised-reverse": defaultTokens.elevationRaisedReverseBoxShadow,
  action: defaultTokens.elevationActionBoxShadow,
  "action-active": defaultTokens.elevationActionActiveBoxShadow,
  overlay: defaultTokens.elevationOverlayBoxShadow,
};

export default elevations;
