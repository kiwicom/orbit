import React from "react";

import { LANGUAGE } from "./consts";

import ButtonMobileStore from ".";

export default function ButtonMobileStoreVisualStory() {
  const languages = Object.values(LANGUAGE);

  return (
    <div className="gap-300 flex flex-wrap">
      {languages.map(lang => (
        <React.Fragment key={lang}>
          <ButtonMobileStore lang={lang} href="#" type="appStore" alt="Download on the App Store" />
          <ButtonMobileStore
            lang={lang}
            href="#"
            type="googlePlay"
            alt="Download on the Google Play"
          />
        </React.Fragment>
      ))}
    </div>
  );
}
