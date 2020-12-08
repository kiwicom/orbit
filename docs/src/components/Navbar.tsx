import React from "react";
import styled, { css } from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import NavigationLinks from "./NavigationLinks";
import Input from "./Input";

const flexMixin = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledWrapper = styled.header<{ isHomePage?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 1rem 2rem;
  height: ${({ isHomePage }) => (isHomePage ? `108px` : `76px`)};
  background: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  z-index: 10;
`;

const StyledLeftSide = styled.div`
  ${flexMixin};
`;

const StyledRightSide = styled.div`
  ${flexMixin};
`;

const Navbar = () => {
  const isHomePage = `${window.location.origin}/` === window.location.href;

  return (
    <StyledWrapper isHomePage={isHomePage}>
      <StyledLeftSide>
        <Link to="/">
          <Logo height={40} />
        </Link>
        {!isHomePage && <Input />}
      </StyledLeftSide>
      <StyledRightSide>
        <NavigationLinks />
        <StarEmpty ariaLabel="star" />
      </StyledRightSide>
    </StyledWrapper>
  );
};

export default Navbar;
