// @flow
import * as React from "react";

import { TYPE_OPTIONS } from "../consts";
import Apple from "../../icons/Apple";
import Google from "../../icons/Google";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Email from "../../icons/Email";
import type { GetSocialButtonIcon } from "./getSocialButtonIcon";

const getSocialButtonIcon: GetSocialButtonIcon = type => {
  if (type === TYPE_OPTIONS.APPLE) return <Apple />;
  if (type === TYPE_OPTIONS.FACEBOOK) return <Facebook />;
  if (type === TYPE_OPTIONS.GOOGLE) return <Google />;
  if (type === TYPE_OPTIONS.TWITTER) return <Twitter />;
  if (type === TYPE_OPTIONS.EMAIL) return <Email />;

  return null;
};

export default getSocialButtonIcon;
