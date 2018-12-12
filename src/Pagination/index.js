// @flow
import * as React from "react";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import MAXIMUM_PAGES from "./consts";
import Pages from "./components/Pages";
import CompactPages from "./components/CompactPages";

import type { Props } from "./index";

const handlePageChange = (onPageChange, pageCount) => nextPageIndex => {
  if (onPageChange && nextPageIndex <= pageCount && nextPageIndex >= 0) {
    onPageChange(nextPageIndex);
  }
};

const Pagination = (props: Props) => {
  const {
    pageCount,
    selectedPage = 1,
    previousLabel = "Previous",
    nextLabel = "Next",
    onPageChange,
    dataTest,
  } = props;
  const pageChanged = handlePageChange(onPageChange, pageCount);

  return (
    <Stack direction="row" spacing="tight" align="center" dataTest={dataTest}>
      {selectedPage !== 1 && (
        <ButtonLink
          onClick={() => pageChanged(selectedPage - 1)}
          iconLeft={<ChevronLeft />}
          type="secondary"
        >
          {previousLabel}
        </ButtonLink>
      )}
      {pageCount <= MAXIMUM_PAGES ? (
        <Pages pageCount={pageCount} selectedPage={selectedPage} onPageChange={onPageChange} />
      ) : (
        <CompactPages
          pageCount={pageCount}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
        />
      )}
      {pageCount !== selectedPage && (
        <ButtonLink
          onClick={() => pageChanged(selectedPage + 1)}
          iconRight={<ChevronRight />}
          type="secondary"
        >
          {nextLabel}
        </ButtonLink>
      )}
    </Stack>
  );
};

export default Pagination;
