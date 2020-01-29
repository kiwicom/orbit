// @flow
import * as React from "react";

import { ICON_SIZES } from "../Icon/consts";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "../primitives/ButtonPrimitive/consts";
import Loading from "../Loading";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import IconContainer from "../primitives/ButtonPrimitive/components/IconContainer";
import StyledButtonContent from "../primitives/ButtonPrimitive/components/ButtonContent";
import StyledButtonContentChildren from "../primitives/ButtonPrimitive/components/ButtonContentChildren";

import type { Props } from "./index";

const Button = React.forwardRef<Props, HTMLButtonElement>((props, ref) => {
  const {
    asComponent,
    children,
    bordered,
    disabled,
    href,
    size = SIZE_OPTIONS.NORMAL,
    icon,
    iconRight,
    external,
    type = TYPE_OPTIONS.PRIMARY,
    fullWidth,
    loading = false,
    width = 0,
    role,
    onClick,
    circled,
    submit,
    tabIndex,
    ariaExpanded,
    className,
    ariaControls,
    spaceAfter,
    dataTest,
    title,
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const onlyIcon = iconLeft && !children;
  const isDisabled = loading || disabled;

  return (
    <ButtonPrimitive
      onClick={onClick}
      iconLeft={iconLeft}
      iconRight={iconRight}
      bordered={bordered}
      fullWidth={fullWidth}
      asComponent={asComponent}
      onlyIcon={iconLeft && !children}
      disabled={isDisabled}
      loading={loading}
      size={size}
      sizeIcon={sizeIcon}
      href={!disabled ? href : null}
      target={!disabled && href && external ? "_blank" : undefined}
      rel={!disabled && href && external ? "noopener noreferrer" : undefined}
      type={type}
      width={width}
      className={className}
      ref={ref}
      role={role}
      circled={circled}
      submit={submit}
      tabIndex={tabIndex}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      title={title}
    >
      {loading && <Loading type="buttonLoader" />}
      <StyledButtonContent loading={loading}>
        {iconLeft && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
          >
            {iconLeft}
          </IconContainer>
        )}
        {children && <StyledButtonContentChildren>{children}</StyledButtonContentChildren>}
        {iconRight && (
          <IconContainer
            bordered={bordered}
            onlyIcon={onlyIcon}
            size={size}
            sizeIcon={sizeIcon}
            type={type}
            right
          >
            {iconRight}
          </IconContainer>
        )}
      </StyledButtonContent>
    </ButtonPrimitive>
  );
});

Button.displayName = "Button";

export default Button;
