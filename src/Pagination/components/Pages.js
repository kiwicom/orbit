// @flow
import * as React from "react";

import ActiveButton from "./ActiveButton";
import PageButtonLink from "./PageButtonLink";
import type { Props } from "./Pages";

const Pages = ({
  pageCount,
  selectedPage,
  onPageChange,
  enlargement = 1,
  size,
}: Props): React.Node =>
  Array(...Array(pageCount)).map((_, index) => {
    const key = index + enlargement;
    return selectedPage === key ? (
      <ActiveButton key={key} size={size}>
        {key}
      </ActiveButton>
    ) : (
      <PageButtonLink key={key} onPageChange={onPageChange} size={size}>
        {key}
      </PageButtonLink>
    );
  });

export default Pages;
