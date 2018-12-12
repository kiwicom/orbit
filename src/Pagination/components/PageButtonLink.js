// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import type { Props } from "./PageButtonLink";

const PageButtonLink = ({ children, onPageChange }: Props) => (
  <ButtonLink onClick={() => onPageChange(children)} type="secondary">
    {children}
  </ButtonLink>
);

export default PageButtonLink;
