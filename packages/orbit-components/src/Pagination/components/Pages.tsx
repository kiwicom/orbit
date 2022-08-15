import * as React from "react";

import * as Common from "../../common/common";
import ActiveButton from "./ActiveButton";
import PageButtonLink from "./PageButtonLink";
import { OnPageChange } from "../index.d";

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
