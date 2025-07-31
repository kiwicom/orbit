"use client";

import * as React from "react";
import cx from "clsx";

import Select from "../Select";
import Stack from "../Stack";
import ButtonLink from "../Button";
import type { MappedOptions, Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # SkipNavigation
 *
 * To implement the SkipNavigation component into your project you'll need to add the import:
 *
 * ```jsx
 * import SkipNavigation from "@kiwicom/orbit-components/lib/SkipNavigation";
 * ```
 *
 * After adding an import to your project you can use it simply like:
 *
 * ```jsx
 * <SkipNavigation />
 *
 * <Heading dataA11ySection="section-id-to-scrape">
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the SkipNavigation component.
 *
 * | Name              | Type                    | Default           | Description                                                                           |
 * | :---------------- | :---------------------- | :---------------- | ------------------------------------------------------------------------------------- |
 * | feedbackUrl       | `string`                |                   | Url to a feedback form.                                                               |
 * | feedbackLabel     | `React.Node`            | `Send feedback`   | Text for a feedback form.                                                             |
 * | **actions**       | [`Actions[]`](#actions) |                   | An array specifying common actions on a page                                          |
 * | dataTest          | `string`                |                   | Optional prop for testing purposes                                                    |
 * | id                | `string`                |                   | Optional id attribute                                                                 |
 * | firstSectionLabel | `React.Node`            | `Jump to section` | Label for a first section link.                                                       |
 * | firstActionLabel  | `React.Node`            | `Jump to action`  | Label for a first action link.                                                        |
 * | isInNav           | `boolean`               |                   | Use when placed inside a navigation component. Adjusts styling and width constraints. |
 *
 * ## actions
 *
 * The table below contains all types of props available for the Actions array.
 *
 * | Name    | Type                    | Description                         |
 * | :------ | :---------------------- | :---------------------------------- |
 * | name    | `string`                | Name of a action.                   |
 * | link    | `string`                | A href for linking to another page. |
 * | onClick | `() => void \| Promise` | Callback for handling action.       |
 *
 * ## Functional specs
 *
 * - SkipNavigation `onFocus` scrapes the webpage looking for custom attribute `dataA11ySection` to create quick page links. You can extend `<Heading>` and `<CardHeader>` to contain `dataA11ySection`. It's important to note that **without these attributes on a page, SkipNavigation won't work**.
 *
 * ## Rationale
 *
 * SkipNavigation is used to address [WCAG2.0 Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html).
 * The intent of this is to allow people who navigate sequentially through content more direct access to the primary content and common actions of the Web page.
 *
 *
 * @orbit-doc-end
 */
const SkipNavigation = ({
  actions,
  feedbackUrl,
  feedbackLabel = "Send feedback",
  firstSectionLabel = "Jump to section",
  firstActionLabel = "Common actions",
  dataTest,
  id,
  isInNav,
}: Props) => {
  const [links, setLinks] = React.useState<HTMLAnchorElement[]>([]);
  const [mappedLinks, setMappedLinks] = React.useState<MappedOptions[]>([]);
  const [innerPages, setPages] = React.useState<{ value: number; label?: string }[]>([]);
  const [show, setShow] = React.useState(false);

  const handleLinksClick = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    const index = Number(ev.currentTarget.value);
    const selected = links[index - 1];

    if (selected) {
      selected.setAttribute("tabindex", "-1");
      selected.focus();
    }
  };

  const handlePageClick = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    if (actions) {
      const index = Number(ev.currentTarget.value);
      const selected = actions[index - 1];

      if (selected.onClick) {
        selected.onClick();
      } else if (selected.link) {
        window.location.href = selected.link;
      }
    }
  };

  const handleFocus = () => {
    if (links.length === 0) {
      // @ts-expect-error TODO
      const selectedLinks = document.querySelectorAll("[data-a11y-section]") as HTMLAnchorElement[];
      const mappedSections = [
        {
          value: 0,
          label: firstSectionLabel,
        },
        ...Object.keys(selectedLinks).map(key => ({
          value: Number(key) + 1,
          label: selectedLinks[Number(key)].innerText,
        })),
      ];

      if (selectedLinks) {
        setLinks(selectedLinks);
      }

      setMappedLinks(mappedSections);

      if (actions) {
        const mappedPages = [
          {
            value: 0,
            label: firstActionLabel,
          },
          ...actions.map((el, i) => {
            return { value: i + 1, label: el.name };
          }),
        ];

        setPages(mappedPages);
      }
    }
    setShow(true);
  };

  return (
    <div
      className={cx(
        "orbit-skip-navigation",
        isInNav ? "bg-inherit p-0" : "bg-cloud-light p-400",
        !show && "sr-only",
      )}
      tabIndex={-1}
      onFocus={handleFocus}
      onBlur={() => setShow(false)}
      data-test={dataTest}
      id={id}
    >
      <Stack justify="between">
        <div className={isInNav ? "max-w-[250px]" : "max-w-[800px]"}>
          <Stack align="center">
            <Select
              options={mappedLinks}
              onChange={handleLinksClick}
              ariaLabel={firstSectionLabel}
            />
            {innerPages.length > 0 && (
              <Select
                options={innerPages}
                onChange={handlePageClick}
                ariaLabel={firstActionLabel}
              />
            )}
          </Stack>
        </div>
        {feedbackUrl && (
          <ButtonLink href={feedbackUrl} type="secondary" external size="small">
            {feedbackLabel}
          </ButtonLink>
        )}
      </Stack>
    </div>
  );
};

export default SkipNavigation;
