// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Select from "../Select";
import Stack from "../Stack";

import type { Props } from "./index";

const StyledNavigation = styled.div``;

const SkipNavigation = ({ sections, pages }: Props) => {
  const [links, setLinks] = useState([]);
  const [innerPages, setPages] = useState([]);

  const handleLinksClick = ev => {
    const selected = links[ev.target.value].element;
    if (selected) {
      selected.setAttribute("tabindex", "-1");
      selected.focus();
    }
  };

  const handlePageClick = ev => {
    const selected = pages[ev.target.value];

    if (selected.callBack) {
      selected.callBack();
    }

    if (selected.link) {
      window.location.href = selected.link;
    }
  };

  useEffect(() => {
    if (sections) {
      setLinks(sections);
    } else {
      const selectedLinks = document.querySelectorAll("h2");
      const mappedSections = [...selectedLinks].map((el, i) => {
        return { value: i, label: el.innerText, element: el };
      });
      setLinks(mappedSections);
    }

    if (pages) {
      const mappedPages = [...pages].map((el, i) => {
        return { value: i, label: el.name };
      });
      setPages(mappedPages);
    }
  }, []);

  return (
    <StyledNavigation>
      <Stack align="center">
        <Select options={links} onChange={handleLinksClick} />
        {innerPages && <Select options={innerPages} onChange={handlePageClick} />}
      </Stack>
    </StyledNavigation>
  );
};

export default SkipNavigation;
