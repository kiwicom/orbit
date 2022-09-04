import * as React from "react";

import * as Common from "../../common/common";
import ButtonLink from "../../ButtonLink";
import { OnPageChange } from "../index.d";

export interface Props {
  children: number;
  onPageChange: OnPageChange;
  size: Common.InputSize;
}

const PageButtonLink = ({ children, onPageChange, size }: Props) => (
  <ButtonLink onClick={() => onPageChange(children)} type="secondary" size={size}>
    {children}
  </ButtonLink>
);

export default PageButtonLink;
