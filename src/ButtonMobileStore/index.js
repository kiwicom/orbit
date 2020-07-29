// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, HEIGHT } from "./consts";

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

const src = {
  appStore:
    "https://images.kiwi.com/common/AppStoreGrayButton.png, https://images.kiwi.com/common/AppStoreGrayButton@2x.png 2x",
  googlePlay:
    "https://images.kiwi.com/common/GooglePlayGrayButton.png, https://images.kiwi.com/common/GooglePlayGrayButton@2x.png 2x",
  appStoreLight:
    "https://images.kiwi.com/common/AppStoreLigthButton.png, https://images.kiwi.com/common/AppStoreLigthButton@2x.png 2x",
  googlePlayLight:
    "https://images.kiwi.com/common/GooglePlayLightButton.png, https://images.kiwi.com/common/GooglePlayLightButton@2x.png 2x",
};

const ButtonMobileStore = ({
  type = TYPE_OPTIONS.APPSTORE,
  href,
  onClick,
  dataTest,
  alt = "",
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
      <img srcSet={src[type]} height={HEIGHT} alt={alt} />
    </StyledButtonMobileStore>
  );
};

export default ButtonMobileStore;
