// @flow
import React from "react";

import useTranslate from "../../hooks/useTranslate/index";
import ButtonLink from "../../ButtonLink/index";
import Close from "../../icons/Close";
import type { Props } from "./ModalCloseButton";

const ModalCloseButton = ({ onClick, dataTest }: Props) => {
  const translate = useTranslate();
  return (
    <ButtonLink
      onClick={onClick}
      size="normal"
      icon={<Close />}
      transparent
      dataTest={dataTest}
      type="secondary"
      title={translate("button_close")}
    />
  );
};

export default ModalCloseButton;
