// @flow
import * as React from "react";

import { TOKENS, BUTTON_STATES, TYPES, SIZES } from "./consts";
import { ICON_SIZES } from "../Icon/consts";
import { getSize } from "../Icon";
import getIconSpacing from "./helpers/getIconSpacing";
import getSizeToken from "./helpers/getSizeToken";
import getTypeToken from "./helpers/getTypeToken";
import getButtonSpacing from "./helpers/getButtonLinkSpacing";
import getButtonLinkBoxShadow from "./helpers/getButtonLinkBoxShadow";
import ButtonPrimitive from "../primitives/ButtonPrimitive";

import type { Props } from "./index";

const ButtonLink = React.forwardRef<Props, HTMLButtonElement>(
  (
    {
      children,
      icon,
      asComponent = "button",
      size = SIZES.NORMAL,
      width = 0,
      iconLeft,
      type = TYPES.PRIMARY,
      disabled,
      href,
      external,
      ...props
    },
    ref,
  ) => {
    const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

    const typeToken = React.useCallback(name => getTypeToken(name, type), [type]);

    const onlyIcon = Boolean((iconLeft || icon) && !children);

    return (
      <ButtonPrimitive
        onlyIcon={onlyIcon}
        asComponent={asComponent}
        ref={ref}
        width={width}
        disabled={disabled}
        href={!disabled ? href : null}
        target={!disabled && href && external ? "_blank" : undefined}
        rel={!disabled && href && external ? "noopener noreferrer" : undefined}
        {...props}
        background={typeToken(TOKENS.backgroundButton)}
        backgroundHover={typeToken(TOKENS.backgroundButtonHover)}
        backgroundActive={typeToken(TOKENS.backgroundButtonActive)}
        backgroundFocus={typeToken(TOKENS.backgroundButtonFocus)}
        foreground={typeToken(TOKENS.colorTextButton)}
        foregroundHover={typeToken(TOKENS.colorTextButtonHover)}
        foregroundActive={typeToken(TOKENS.colorTextButtonActive)}
        boxShadowActive={getButtonLinkBoxShadow(BUTTON_STATES.ACTIVE)}
        fontSize={getSizeToken(TOKENS.fontSizeButton)}
        height={getSizeToken(TOKENS.heightButton)}
        padding={getButtonSpacing}
        iconContainer={{
          spacing: getIconSpacing,
          height: getSize(sizeIcon),
          onlyIcon,
          width: getSize(sizeIcon),
        }}
      >
        {children}
      </ButtonPrimitive>
    );
  },
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
