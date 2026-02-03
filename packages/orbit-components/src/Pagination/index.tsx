"use client";

import * as React from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import ChevronBackward from "../icons/ChevronBackward";
import ChevronForward from "../icons/ChevronForward";
import { MAXIMUM_PAGES, SIZES } from "./consts";
import Pages from "./components/Pages";
import CompactPages from "./components/CompactPages";
import ActiveButton from "./components/ActiveButton";
import type { Props } from "./types";

const handlePageChange = (onPageChange, pageCount) => nextPageIndex => {
  if (onPageChange && nextPageIndex <= pageCount && nextPageIndex >= 0) {
    onPageChange(nextPageIndex);
  }
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Pagination
 *
 * To implement Pagination component into your project you'll need to the import:
 *
 * ```jsx
 * import Pagination from "@kiwicom/orbit-components/lib/Pagination";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Pagination pageCount={1337} selectedPage={69} />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Pagination component.
 *
 * | Name             | Type             | Default    | Description                                                                                |
 * | :--------------- | :--------------- | :--------- | :----------------------------------------------------------------------------------------- |
 * | dataTest         | `string`         |            | Optional prop for testing purposes.                                                        |
 * | hideLabels       | `boolean`        | `true`     | If `false`, the Previous and Next labels will be visible.                                  |
 * | labelPrev        | `string`         |            | The text label for the previous page call to action.                                       |
 * | labelNext        | `string`         |            | The text label for the next page call to action.                                           |
 * | labelProgress    | `React.Node`     |            | The text label for progress indicator.                                                     |
 * | **onPageChange** | `number => void` |            | Function for handling onPageChange event. [See Functional specs](#functional-specs)        |
 * | **pageCount**    | `number`         |            | The page count to render into separated buttons. [See Functional specs](#functional-specs) |
 * | selectedPage     | `number`         | `1`        | The index number of the selected page.                                                     |
 * | size             | [`enum`](#enum)  | `"normal"` | The size of the Pagination.                                                                |
 *
 * ### enum
 *
 * | size       |
 * | :--------- |
 * | `"small"`  |
 * | `"normal"` |
 *
 * ### Functional specs
 *
 * - If the `pageCount` will be bigger than 7, the compact version will be rendered.
 *
 * - The prop `onPageChange` will return the new index of selected page. Use arrow function for it, e.g.:
 *
 * ```jsx
 * <Pagination onPageChange={selectedPage => doSomething(selectedPage)} />
 * ```
 *
 *
 * @orbit-doc-end
 */
const Pagination = ({
  pageCount,
  labelPrev,
  labelNext,
  labelProgress,
  selectedPage = 1,
  onPageChange,
  dataTest,
  hideLabels = true,
  size = SIZES.NORMAL,
}: Props) => {
  const pageChanged = handlePageChange(onPageChange, pageCount);
  const { isTablet } = useMediaQuery();

  return (
    <Stack spacing="100" align="center" grow={false} shrink dataTest={dataTest} basis="auto">
      {!isTablet ? (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronBackward ariaHidden reverseOnRtl />}
            type="secondary"
            title={labelPrev}
            size={size}
            disabled={selectedPage <= 1}
          />
          <ActiveButton className="bg-transparent" size={size}>
            {labelProgress}
          </ActiveButton>
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconLeft={<ChevronForward ariaHidden reverseOnRtl />}
            type="secondary"
            title={labelNext}
            size={size}
            disabled={pageCount <= selectedPage}
          />
        </>
      ) : (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronBackward ariaHidden reverseOnRtl />}
            type="secondary"
            title={hideLabels ? labelPrev : undefined}
            size={size}
            disabled={selectedPage <= 1}
          >
            {!hideLabels && labelPrev}
          </ButtonLink>
          <Stack inline grow={false} spacing="100" align="center">
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
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconRight={!hideLabels && <ChevronForward ariaHidden reverseOnRtl />}
            iconLeft={hideLabels && <ChevronForward ariaHidden reverseOnRtl />}
            type="secondary"
            title={hideLabels ? labelNext : undefined}
            size={size}
            disabled={pageCount <= selectedPage}
          >
            {!hideLabels && labelNext}
          </ButtonLink>
        </>
      )}
    </Stack>
  );
};

export default Pagination;
