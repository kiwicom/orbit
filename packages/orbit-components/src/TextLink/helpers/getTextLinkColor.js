// @flow
import { TYPE_OPTIONS } from "../consts";
import type { GetTextLinkColor } from "./getTextLinkColor";

const getTextLinkColor: GetTextLinkColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
  };

  return tokens[type];
};

export default getTextLinkColor;
