// @flow
import React, { useCallback } from "react";

import ButtonLink from "../../ButtonLink";
import type { Props } from "./PageButtonLink";

const PageButtonLink = ({ children, onPageChange, size }: Props) => {
  const handleClick = useCallback(() => onPageChange(children), [children, onPageChange]);
  return (
    <ButtonLink onClick={handleClick} type="secondary" size={size}>
      {children}
    </ButtonLink>
  );
};

export default PageButtonLink;
