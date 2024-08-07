import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./types";

const NewModalCloseButton = ({ onClick, dataTest, title }: Props) => {
  return (
    <ButtonLink
      onClick={onClick}
      size="normal"
      iconLeft={<Close />}
      dataTest={dataTest}
      type="secondary"
      title={title}
    />
  );
};

export default NewModalCloseButton;
