import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import useSiteMetadata from "../hooks/useSiteMetadata";

const StyledWrapper = styled.header<{ isHome?: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  height: ${({ isHome }) => (isHome ? `108px` : `76px`)};
  background: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  z-index: 10;
`;

const Navbar = () => {
  const { siteUrl } = useSiteMetadata();

  return (
    <StyledWrapper isHome={window.location.href === siteUrl}>
      <Logo height={40} />
      <StarEmpty ariaLabel="star" />
    </StyledWrapper>
  );
};

export default Navbar;
