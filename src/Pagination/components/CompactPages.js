// @flow

import * as React from 'react';

import Pages from './Pages';
import PageButtonLink from './PageButtonLink';
import MenuMeatballs from '../../icons/MenuMeatballs';
import type { Props } from './CompactPages.js.flow';

const MeatBalls = () => <MenuMeatballs size="small" color="attention" />;

const CompactPages = ({ pageCount, selectedPage, onPageChange, size }: Props) => {
  if (selectedPage > pageCount - 4) {
    return (
      <React.Fragment>
        <PageButtonLink onPageChange={onPageChange} size={size}>
          {1}
        </PageButtonLink>
        <MeatBalls />
        <Pages
          pageCount={5}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
          enlargement={pageCount - 4}
          size={size}
        />
      </React.Fragment>
    );
  }
  if (selectedPage < 5) {
    return (
      <React.Fragment>
        <Pages pageCount={5} selectedPage={selectedPage} onPageChange={onPageChange} size={size} />
        <MeatBalls />
        <PageButtonLink onPageChange={onPageChange} size={size}>
          {pageCount}
        </PageButtonLink>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <PageButtonLink onPageChange={onPageChange} size={size}>
        {1}
      </PageButtonLink>
      <MeatBalls />
      <Pages
        pageCount={3}
        selectedPage={selectedPage}
        onPageChange={onPageChange}
        enlargement={selectedPage - 1}
        size={size}
      />
      <MeatBalls />
      <PageButtonLink onPageChange={onPageChange} size={size}>
        {pageCount}
      </PageButtonLink>
    </React.Fragment>
  );
};

export default CompactPages;
