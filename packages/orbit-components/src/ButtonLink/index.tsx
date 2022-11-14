import * as React from "react";

import { TYPES } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import useTheme from "../hooks/useTheme";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getButtonLinkStyles from "./helpers/getButtonLinkStyles";
import getButtonLinkIconForeground from "./helpers/getButtonLinkIconForeground";
import getButtonLinkCommonProps from "./helpers/getButtonLinkCommonProps";
import { Props, Type } from "./types";

const ButtonLink = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = TYPES.PRIMARY, size, compact = false, ...props }, ref) => {
    const theme = useTheme();
    const propsWithTheme = { theme, size, ...props };
    const commonProps = getButtonLinkCommonProps({ ...propsWithTheme, compact });
    const buttonLinkStyles = getButtonLinkStyles({ type, theme, compact });
    const icons = getIconContainer({
      ...propsWithTheme,
      iconForeground: getButtonLinkIconForeground({ type, theme, compact }),
    });
    return (
      // @ts-expect-error FIXME: migration issue
      <ButtonPrimitive ref={ref} {...props} {...buttonLinkStyles} {...commonProps} {...icons} />
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
export { Props, Type };
