// @flow
import React, { useState } from "react";
import styled, { css } from "styled-components";

import Select from "../Select";
import Stack from "../Stack";
import ButtonLink from "../Button";
import defaultTheme from "../defaultTheme";

import type { Props, MappedOptions } from "./index";

const StyledNavigation = styled.div`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight}; /* TODO: Token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Token */
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ${({ show }) =>
    !show &&
    css`
      clip: rect(1px, 1px, 1px, 1px);
      overflow: hidden;
      position: absolute;
      pointer-events: none;
      opacity: 0;
      width: 0;
    `};
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme,
};

const StyledSelectWrapper = styled.div`
  max-width: 800px;
`;

const SkipNavigation = ({ actions, feedbackUrl }: Props) => {
  const [links, setLinks] = useState([]);
  const [mappedLinks, setMappedLinks] = useState<MappedOptions[]>([]);
  const [innerPages, setPages] = useState([]);
  const [show, setShow] = useState(false);
  let set = false;

  const handleLinksClick = (ev: SyntheticInputEvent<HTMLSelectElement>) => {
    const index = Number(ev.target.value);
    const selected = links[index - 1];

    if (selected) {
      selected.setAttribute("tabindex", "-1");
      selected.focus();
    }
  };

  const handlePageClick = (ev: SyntheticInputEvent<HTMLSelectElement>) => {
    if (actions) {
      const index = Number(ev.target.value);
      const selected = actions[index - 1];

      if (selected.onClick) {
        selected.onClick();
      } else if (selected.link) {
        window.location.href = selected.link;
      }
    }
  };

  const focusIn = () => {
    if (!set) {
      const selectedLinks = document.querySelectorAll("[data-a11y-section]");
      const mappedSections = [...selectedLinks].map((el, i) => {
        return { value: i + 1, label: el.innerText };
      });
      mappedSections.unshift({
        value: 0,
        label: "Jump to section",
      }); /* TODO: Dictionary */

      if (selectedLinks) {
        setLinks(selectedLinks);
      }

      setMappedLinks(mappedSections);

      if (actions) {
        const mappedPages = [...actions].map((el, i) => {
          return { value: i + 1, label: el.name };
        });
        mappedPages.unshift({ value: 0, label: "Common actions" }); /* TODO: Dictionary */

        setPages(mappedPages);
      }
      set = true;
    }

    setShow(true);
  };

  const focusOut = () => {
    setShow(false);
  };

  return (
    <StyledNavigation tabIndex="-1" onFocus={focusIn} onBlur={focusOut} show={show}>
      <Stack justify="between">
        <StyledSelectWrapper>
          <Stack align="center">
            <Select options={mappedLinks} onChange={handleLinksClick} />
            {innerPages.length > 0 && <Select options={innerPages} onChange={handlePageClick} />}
          </Stack>
        </StyledSelectWrapper>
        {feedbackUrl && (
          <ButtonLink href={feedbackUrl} type="secondary">
            Send feedback
          </ButtonLink>
        )}
      </Stack>
    </StyledNavigation>
  );
};

export default SkipNavigation;
