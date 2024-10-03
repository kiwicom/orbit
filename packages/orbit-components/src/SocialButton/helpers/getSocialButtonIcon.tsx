import * as React from "react";

import { TYPE_OPTIONS } from "../consts";
import Apple from "../../icons/Apple";
import Google from "../../icons/Google";
import Facebook from "../../icons/Facebook";
import X from "../../icons/X";
import Email from "../../icons/Email";
import type { Type } from "../types";

const getSocialButtonIcon = (type: Type): React.ReactNode | null => {
  if (type === TYPE_OPTIONS.APPLE) return <Apple />;
  if (type === TYPE_OPTIONS.FACEBOOK) return <Facebook />;
  if (type === TYPE_OPTIONS.GOOGLE) return <Google />;
  if (type === TYPE_OPTIONS.X) return <X />;
  if (type === TYPE_OPTIONS.EMAIL) return <Email />;

  return null;
};

export default getSocialButtonIcon;
