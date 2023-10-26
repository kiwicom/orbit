"use client";

import * as React from "react";

import { TYPE_OPTIONS, LANGUAGE } from "./consts";
import type { Props, Type } from "./types";

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
    <a
      className="inline-block h-[40px]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClickHandler}
      data-test={dataTest}
      id={id}
    >
      <img srcSet={getSrc(type, lang)} height="40px" alt={alt} />
    </a>
  );
};

export default ButtonMobileStore;
