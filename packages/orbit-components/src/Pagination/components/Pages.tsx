import * as React from "react";

import type * as Common from "../../common/types";
import ActiveButton from "./ActiveButton";
import PageButtonLink from "./PageButtonLink";
import type { OnPageChange } from "../types";

interface Props {
  enlargement?: number;
  selectedPage?: number;
  pageCount: number;
  onPageChange: OnPageChange;
  size: Common.InputSize;
}

const Pages = ({ pageCount, selectedPage, onPageChange, enlargement = 1, size }: Props) => {
  return (
    <>
      {Array(...Array(pageCount)).map((_, index) => {
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
      })}
    </>
  );
};

export default Pages;
