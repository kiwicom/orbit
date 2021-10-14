// @flow
import * as React from "react";

import { TYPE_OPTIONS } from "../consts";
import Apple from "../../icons/Apple";
import Google from "../../icons/Google";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import type { GetSocialButtonIcon } from "./getSocialButtonIcon";

const getSocialButtonIcon: GetSocialButtonIcon = type => {
  if (type === TYPE_OPTIONS.APPLE) return <Apple />;
  if (type === TYPE_OPTIONS.FACEBOOK) return <Facebook />;
  if (type === TYPE_OPTIONS.GOOGLE) return <Google />;
  if (type === TYPE_OPTIONS.TWITTER) return <Twitter />;
  return null;
};

export default getSocialButtonIcon;
