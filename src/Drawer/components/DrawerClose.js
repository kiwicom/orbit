// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./DrawerClose";
import { pureTranslate } from "../../Translate";
import useDictionary from "../../hooks/useDictionary";

const DrawerClose = ({ onClick }: Props) => {
  const dictionary = useDictionary();
  return (
    <ButtonLink
      onClick={onClick}
      iconLeft={<Close />}
      type="secondary"
      title={pureTranslate(dictionary, "drawer_hide")}
    />
  );
};

export default DrawerClose;
