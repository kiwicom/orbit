// @flow
import * as React from "react";

import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import getTypeToken from "./helpers/getTypeToken";
import { ICON_SIZES } from "../Icon/consts";
import unitedProps from "./helpers/unitedProps";

import type { Props } from "./index";

const Button = React.forwardRef<Props, HTMLButtonElement>(
  (
    {
      asComponent = "button",
      children,
      loading,
      size = SIZE_OPTIONS.NORMAL,
      type = TYPE_OPTIONS.PRIMARY,
      iconLeft,
      width = 0,
      title,
      bordered,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    const onlyIcon = Boolean(iconLeft && !children);
    const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
    const typeToken = React.useCallback(name => getTypeToken(name, type), [type]);
    return (
      <ButtonPrimitive
        asComponent={asComponent}
        width={width}
        ref={ref}
        fullWidth={fullWidth}
        onlyIcon={onlyIcon}
        iconLeft={iconLeft}
        loading={loading}
        bordered={bordered}
        title={title}
        size={size}
        {...props}
        // primitive specific props
        {...unitedProps({ type, onlyIcon, typeToken, bordered, sizeIcon })}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = "Button";

export default Button;
