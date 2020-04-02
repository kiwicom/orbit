// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, HEIGHT } from "./consts";
import AppStore from "./components/appStore";
import GooglePlay from "./components/googlePlay";

import type { Props } from "./index";

const StyledButtonMobileStore = styled(({ theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
  display: inline-block;
  height: ${HEIGHT};
`;

StyledButtonMobileStore.defaultProps = {
  theme: defaultTheme,
};

const ButtonMobileStore = ({
  type = TYPE_OPTIONS.APPSTORE,
  href,
  onClick,
  dataTest,
  stopPropagation = false,
}: Props) => {
  const onClickHandler = ev => {
    if (stopPropagation) {
      ev.stopPropagation();
      if (onClick) onClick();
    }
    if (onClick) onClick();
  };

  return (
    <StyledButtonMobileStore
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClickHandler}
      data-test={dataTest}
    >
      {type === TYPE_OPTIONS.APPSTORE ? <AppStore /> : <GooglePlay />}
    </StyledButtonMobileStore>
  );
};
export default ButtonMobileStore;
