// @flow
import * as React from "react";

import { TOKENS, BUTTON_STATES, TYPES, SIZES } from "./consts";
import getTypeToken from "./helpers/getTypeToken";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getIconSize from "../primitives/ButtonPrimitive/common/getIconSize";
import useTheme from "../hooks/useTheme";
import getIconContainer from "../primitives/ButtonPrimitive/common/getIconContainer";
import getButtonLinkStyles from "./helpers/getButtonLinkStyles";

import type { Props } from "./index";

const ButtonLink = React.forwardRef<Props, HTMLButtonElement>(
  (
    {
      children,
      asComponent = "button",
      size = SIZES.NORMAL,
      iconLeft,
      type = TYPES.PRIMARY,
      disabled,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const onlyIcon = Boolean(iconLeft && !children);
    const sizeIcon = getIconSize(size);

    return (
      <ButtonPrimitive
        asComponent={asComponent}
        onlyIcon={onlyIcon}
        ref={ref}
        {...props}
        {...getButtonLinkStyles({ type, disabled, theme, ...props })}
        {...get}
        iconContainer={getIconContainer({ onlyIcon, theme, right, size, sizeIcon })}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
