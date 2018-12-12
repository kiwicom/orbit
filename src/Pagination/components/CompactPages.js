// @flow
import * as React from "react";

import Pages from "./Pages";
import PageButtonLink from "./PageButtonLink";
import MenuMeatballs from "../../icons/MenuMeatballs";
import type { OnPageChange } from "../index";
import type { Props } from "./CompactPages";

const MeatBalls = () => <MenuMeatballs size="small" color="attention" />;

const FirstPageButtonLink = ({ onPageChange }: OnPageChange) => (
  <PageButtonLink onPageChange={onPageChange}>{1}</PageButtonLink>
);

const CompactPages = ({ pageCount, selectedPage, onPageChange }: Props) => {
  if (selectedPage > pageCount - 4) {
    return (
      <React.Fragment>
        <FirstPageButtonLink onPageChange={onPageChange} />
        <MeatBalls />
        <Pages
          pageCount={5}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
          enlargement={pageCount - 4}
        />
      </React.Fragment>
    );
  } else if (selectedPage < 5) {
    return (
      <React.Fragment>
        <Pages pageCount={5} selectedPage={selectedPage} onPageChange={onPageChange} />
        <MeatBalls />
        <PageButtonLink onPageChange={onPageChange}>{pageCount}</PageButtonLink>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <FirstPageButtonLink onPageChange={onPageChange} />
      <MeatBalls />
      <Pages
        pageCount={3}
        selectedPage={selectedPage}
        onPageChange={onPageChange}
        enlargement={selectedPage - 1}
      />
      <MeatBalls />
      <PageButtonLink onPageChange={onPageChange}>{pageCount}</PageButtonLink>
    </React.Fragment>
  );
};

export default CompactPages;
