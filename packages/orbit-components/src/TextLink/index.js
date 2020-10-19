// @flow
import * as React from "react";
import styled from "styled-components";

import { TYPE_OPTIONS } from "./consts";
import ButtonPrimitive from "../primitives/ButtonPrimitive";
import useTheme from "../hooks/useTheme";
import getTextLinkStyleProps from "./helpers/getTextLinkStyleProps";

import type { Props } from "./index";

/*
  Explicit styled component for the TextLink, so we can target it easily in some CSS selectors,
  and we don't have to use ButtonPrimitive as it may be problematic in some cases.
 */
export const StyledTextLink = styled.a``;

const TextLink = ({
  type = TYPE_OPTIONS.PRIMARY,
  children,
  href,
  onClick,
  tabIndex,
  stopPropagation = false,
  ...props
}: Props) => {
  const theme = useTheme();
  const propsWithTheme = { type, theme, ...props };
  const onClickHandler = ev => {
    if (stopPropagation) {
      ev.stopPropagation();
      if (onClick) onClick(ev);
    }
    if (onClick) onClick(ev);
  };
  return (
    <ButtonPrimitive
      onClick={onClickHandler}
      tabIndex={tabIndex || (!href ? "0" : undefined)}
      role={!href ? "button" : undefined}
      href={href}
      asComponent={StyledTextLink}
      {...getTextLinkStyleProps(propsWithTheme)}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
};

export default TextLink;
