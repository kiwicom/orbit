// @flow
import React, { useState } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight}; /* TODO: Token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Token */
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  /* ${({ show }) =>
    !show &&
    css`
      clip: rect(1px, 1px, 1px, 1px);
      overflow: hidden;
      opacity: 0;
      position: absolute;
      pointer-events: none;
      width: 0;
    `}; */
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme,
};

const SkipLink = ({ links, description }: Props) => {
  const [show, setShow] = useState(false);

  const handleFocus = () => {
    setShow(true);
  };

  return (
    <StyledNavigation
      tabIndex="-1"
      onFocus={handleFocus}
      onBlur={() => {
        setShow(false);
      }}
      show={show}
    >
      {description && <p>{description}</p>}
      {links &&
        links.map(({ href = "", name }) => {
          return <a href={href}>{name}</a>;
        })}
    </StyledNavigation>
  );
};

export default SkipLink;
