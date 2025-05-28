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
  alt,
  title,
  stopPropagation = false,
}: Props) => {
  const onClickHandler = (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev as React.MouseEvent<HTMLAnchorElement>);
  };

  const commonProps = {
    className: "orbit-button-mobile-store h-1000 inline-block",
    onClick: onClickHandler,
    "data-test": dataTest,
    id,
  };

  const imageElement = <img srcSet={getSrc(type, lang)} height="40px" alt={alt} title={title} />;

  if (href) {
    return (
      <a {...commonProps} href={href} target="_blank" rel="noopener noreferrer">
        {imageElement}
      </a>
    );
  }

  return (
    <button {...commonProps} type="button">
      {imageElement}
    </button>
  );
};

export default ButtonMobileStore;
