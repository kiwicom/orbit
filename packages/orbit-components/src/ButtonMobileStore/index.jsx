// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { HEIGHT, TYPE_OPTIONS, LANGUAGE } from "./consts";

import type { Props } from ".";

const StyledButtonMobileStore = styled(({ theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
  display: inline-block;
  height: ${HEIGHT};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonMobileStore.defaultProps = {
  theme: defaultTheme,
};

const getSrc = (type, lang) => {
  if (type === "appStore")
    return `https://images.kiwi.com/common/AppStoreButton${lang}.png, https://images.kiwi.com/common/AppStoreButton${lang}@2x.png 2x`;
  return `https://images.kiwi.com/common/GooglePlayButton${lang}.png, https://images.kiwi.com/common/GooglePlayButton${lang}@2x.png 2x`;
};

const ButtonMobileStore = ({
  type = TYPE_OPTIONS.APPSTORE,
  lang = LANGUAGE.EN,
  href,
  onClick,
  dataTest,
  alt = "",
  stopPropagation = false,
}: Props): React.Node => {
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
      rel="noopener"
      onClick={onClickHandler}
      data-test={dataTest}
    >
      <img srcSet={getSrc(type, lang)} height={HEIGHT} alt={alt} />
    </StyledButtonMobileStore>
  );
};

export default ButtonMobileStore;
