// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Select from "../Select";
import Stack from "../Stack";
import ButtonLink from "../Button";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const StyledNavigation = styled.div`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight}; /* TODO: Token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Token */
  opacity: ${props => (props.show ? 1 : 0)};
  z-index: ${props => (props.show ? 100 : -1)}
  pointer-events: ${props => (props.show ? "" : "none")}
  width: 100%;
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme,
};

const StyledSelectWrapper = styled.div`
  max-width: 800px;
`;

const SkipNavigation = ({ sections, pages }: Props) => {
  const [links, setLinks] = useState([]);
  const [innerPages, setPages] = useState([]);
  const [show, setShow] = useState(false);

  const handleLinksClick = ev => {
    const index = Number(ev.target.value);
    const selected = links[index].element;

    if (selected) {
      selected.setAttribute("tabindex", "-1");
      selected.focus();
    }
  };

  const handlePageClick = ev => {
    const index = ev.target.value - 1;
    const selected = pages[index];

    if (selected.callBack) {
      selected.callBack();
    } else if (selected.link) {
      window.location.href = selected.link;
    }
  };

  useEffect(() => {
    if (sections) {
      setLinks(sections);
    } else {
      const selectedLinks = document.querySelectorAll("h2");
      const mappedSections = [...selectedLinks].map((el, i) => {
        return { value: i + 1, label: el.innerText, element: el };
      });
      mappedSections.unshift({ value: 0, label: "Move to section" });

      setLinks(mappedSections);
    }

    if (pages) {
      const mappedPages = [...pages].map((el, i) => {
        return { value: i + 1, label: el.name };
      });
      mappedPages.unshift({ value: 0, label: "Common actions" });

      setPages(mappedPages);
    }
  }, []);

  const focusIn = () => {
    setShow(true);
  };

  const focusOut = () => {
    setShow(false);
  };

  return (
    <StyledNavigation tabIndex="-1" onFocus={focusIn} onBlur={focusOut} show={show}>
      <StyledSelectWrapper>
        <Stack align="center">
          <Select options={links} onChange={handleLinksClick} />
          {innerPages && <Select options={innerPages} onChange={handlePageClick} />}
          <ButtonLink type="secondary">Accessibility feedback</ButtonLink>
        </Stack>
      </StyledSelectWrapper>
    </StyledNavigation>
  );
};

export default SkipNavigation;
