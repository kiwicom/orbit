// @flow
import * as React from "react";

import { TYPES } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import useTheme from "../hooks/useTheme";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getButtonLinkStyles from "./helpers/getButtonLinkStyles";
import getButtonLinkIconForeground from "./helpers/getButtonLinkIconForeground";
import getButtonLinkCommonProps from "./helpers/getButtonLinkCommonProps";

import type { Props } from "./index";

const ButtonLink = React.forwardRef<Props, HTMLButtonElement>(
  ({ type = TYPES.PRIMARY, compact = false, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, ...props };
    const commonProps = getButtonLinkCommonProps({ ...propsWithTheme, compact });
    const buttonLinkStyles = getButtonLinkStyles({ type, theme, compact });
    const icons = getIconContainer({
      ...propsWithTheme,
      iconForeground: getButtonLinkIconForeground({ type, theme }),
    });
    return (
      <ButtonPrimitive ref={ref} {...props} {...buttonLinkStyles} {...commonProps} {...icons} />
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
