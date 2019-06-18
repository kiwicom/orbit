// @flow
import * as React from "react";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import Hide from "../Hide";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { MAXIMUM_PAGES, SIZES } from "./consts";
import Pages from "./components/Pages";
import CompactPages from "./components/CompactPages";
import ActiveButton from "./components/ActiveButton";
import Translate from "../Translate";

import type { Props } from "./index";

const handlePageChange = (onPageChange, pageCount) => nextPageIndex => {
  if (onPageChange && nextPageIndex <= pageCount && nextPageIndex >= 0) {
    onPageChange(nextPageIndex);
  }
};

const Pagination = ({
  pageCount,
  selectedPage = 1,
  onPageChange,
  dataTest,
  hideLabels = true,
  size = SIZES.NORMAL,
}: Props) => {
  const pageChanged = handlePageChange(onPageChange, pageCount);

  return (
    <Stack direction="row" spacing="tight" align="center" dataTest={dataTest} element="nav">
      {selectedPage !== 1 && (
        <>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
            <ButtonLink
              onClick={() => pageChanged(selectedPage - 1)}
              iconLeft={<ChevronLeft />}
              type="secondary"
              size={size}
            >
              {!hideLabels && <Translate tKey="pagination_label_prev" />}
            </ButtonLink>
          </Hide>
          <Hide on={["tablet", "desktop", "largeDesktop"]}>
            <ButtonLink
              onClick={() => pageChanged(selectedPage - 1)}
              iconLeft={<ChevronLeft />}
              type="secondary"
              size={size}
            />
          </Hide>
        </>
      )}
      <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
        <Stack direction="row" spacing="tight" align="center">
          {pageCount <= MAXIMUM_PAGES ? (
            <Pages
              pageCount={pageCount}
              selectedPage={selectedPage}
              onPageChange={onPageChange}
              size={size}
            />
          ) : (
            <CompactPages
              pageCount={pageCount}
              selectedPage={selectedPage}
              onPageChange={onPageChange}
              size={size}
            />
          )}
        </Stack>
      </Hide>
      <Hide on={["tablet", "desktop", "largeDesktop"]}>
        <ActiveButton transparent size={size}>
          {selectedPage} of {pageCount}
        </ActiveButton>
      </Hide>
      {pageCount !== selectedPage && (
        <>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
            <ButtonLink
              onClick={() => pageChanged(selectedPage + 1)}
              iconRight={!hideLabels && <ChevronRight />}
              iconLeft={hideLabels && <ChevronRight />}
              type="secondary"
              size={size}
            >
              {!hideLabels && <Translate tKey="pagination_label_next" />}
            </ButtonLink>
          </Hide>
          <Hide on={["tablet", "desktop", "largeDesktop"]}>
            <ButtonLink
              onClick={() => pageChanged(selectedPage + 1)}
              iconLeft={<ChevronRight />}
              type="secondary"
              size={size}
            />
          </Hide>
        </>
      )}
    </Stack>
  );
};

export default Pagination;
