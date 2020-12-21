import React from "react";
import styled from "styled-components";
import Logo from "../images/orbit.svg";
import { Link } from "gatsby";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import Inline from "@kiwicom/orbit-components/lib/Inline";
import NavigationLinks from "./Navigation";
import Input from "./SearchInput";
import Sidenav from "./Sidenav";

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
  onBookmarks?: () => void;
  onSideNav?: () => void;
}

const Navbar = ({ onBookmarks, onSideNav }: Props) => {
  const { isDesktop } = useMediaQuery();
  const [isHomePage, setHomePage] = React.useState(false);

  React.useEffect(() => {
    if (`${window.location.origin}/` === window.location.href) {
      setHomePage(true);
    }
  }, [setHomePage]);

  return (
    <StyledWrapper isHomePage={isHomePage}>
      <Link to="/">
        <Logo height={40} />
      </Link>
      {!isHomePage && <Input />}
      <Inline justify="end" align="center" spacing="medium" desktop={{ spacing: "large" }}>
        {isDesktop ? (
          <NavigationLinks />
        ) : (
          <Sidenav>
            <NavigationLinks />
          </Sidenav>
        )}
        <button type="button" onClick={onBookmarks}>
          <StarEmpty ariaLabel="star" />
        </button>
      </Inline>
    </StyledWrapper>
  );
};

export default Navbar;
