import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Inline } from "@kiwicom/orbit-components";
import { WindowLocation } from "@reach/router";

import Logo from "../images/orbit.svg";
import NavigationLinks from "./Navigation";
import Input from "./SearchInput";
import Bookmarks from "./Bookmarks";

const StyledWrapper = styled.header<{ isHomePage?: boolean }>`
  display: grid;
  grid-template-columns: ${({ isHomePage }) => (isHomePage ? `192px auto` : `192px auto auto`)};
  grid-gap: 20px;
  position: relative;
  padding: ${({ isHomePage }) => (isHomePage ? `2em` : `1em 2em`)};
  background: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  backdrop-filter: blur(5px);
  align-items: center;
  z-index: 10;
`;

interface Props {
  location: WindowLocation;
}

const Navbar = ({ location }: Props) => {
  const isHome = location && location.pathname === "/";

  return (
    <StyledWrapper isHomePage={isHome}>
      <Link to="/">
        <Logo height={40} />
      </Link>
      {!isHome && <Input />}
      <Inline justify="end" align="center" spacing="medium" desktop={{ spacing: "large" }}>
        <NavigationLinks />
        <Bookmarks />
      </Inline>
    </StyledWrapper>
  );
};

export default Navbar;
