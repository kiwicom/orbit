import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import useTranslate from "../../hooks/useTranslate";
import { Props } from "./types";

const ModalCloseButton = ({ onClick, dataTest }: Props) => {
  const translate = useTranslate();

  return (
    <ButtonLink
      onClick={onClick}
      size="normal"
      iconLeft={<Close />}
      dataTest={dataTest}
      type="secondary"
      title={translate("button_close")}
    />
  );
};

export default ModalCloseButton;
