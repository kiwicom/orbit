import * as React from "react";

import * as Common from "../../common/types";
import ButtonLink from "../../ButtonLink";
import { OnPageChange } from "../types";

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
