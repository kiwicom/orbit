// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import type { Props } from "./PageButtonLink";

const PageButtonLink = ({ children, onPageChange, size }: Props) => (
  <ButtonLink onClick={() => onPageChange(children)} type="secondary" size={size}>
    {children}
  </ButtonLink>
);

export default PageButtonLink;
