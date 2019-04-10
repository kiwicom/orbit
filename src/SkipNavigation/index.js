// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Select from "../Select";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const StyledNavigation = styled.div``;

const SkipNavigation = () => {
  const [links, setLinks] = useState([]);
  const handleAction = e => {
    const selected = links[e.target.value].element;
    selected.setAttribute("tabindex", "-1");
    selected.focus();
  };

  useEffect(() => {
    const selectedLinks = document.querySelectorAll("h2");
    const mapped = [...selectedLinks].map((el, i) => {
      return { value: i, label: el.innerText, element: el };
    });
    setLinks(mapped);
  }, []);

  return (
    <StyledNavigation>
      <Stack>
        <Select options={links} onChange={handleAction} />
      </Stack>
    </StyledNavigation>
  );
};

export default SkipNavigation;
