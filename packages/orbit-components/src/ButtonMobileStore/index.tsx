import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { HEIGHT, TYPE_OPTIONS, LANGUAGE } from "./consts";
import { Props, Type } from "./types";

const StyledButtonMobileStore = styled.a`
  display: inline-block;
  height: ${HEIGHT};
`;

StyledButtonMobileStore.defaultProps = {
  theme: defaultTheme,
};

const getSrc = (type: Type, lang: string) => {
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
  id,
  alt = "",
  stopPropagation = false,
}: Props) => {
  const onClickHandler = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
      if (onClick) onClick(ev);
    }
    if (onClick) onClick(ev);
  };

  return (
    <StyledButtonMobileStore
      href={href}
      target="_blank"
      rel="noopener"
      onClick={onClickHandler}
      data-test={dataTest}
      id={id}
    >
      <img srcSet={getSrc(type, lang)} height={HEIGHT} alt={alt} />
    </StyledButtonMobileStore>
  );
};

export default ButtonMobileStore;
export { Props, Type };
