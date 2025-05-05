"use client";

import * as React from "react";
import cx from "clsx";

import Select from "../Select";
import Stack from "../Stack";
import ButtonLink from "../Button";
import type { MappedOptions, Props } from "./types";

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
            <Select options={mappedLinks} onChange={handleLinksClick} />
            {innerPages.length > 0 && <Select options={innerPages} onChange={handlePageClick} />}
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
