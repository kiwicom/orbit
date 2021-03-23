import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import { mediaQueries, useMediaQuery } from "@kiwicom/orbit-components";

import Logo from "../images/orbit.svg";
import LogoGlyph from "../images/orbit-glyph.svg";
import Input from "./SearchInput";
import Bookmarks from "./Bookmarks";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";
import { StyledAsideHeader, StyledOpenButton as StyledSidenavToggle } from "./Sidenav";

const CONTENT_HEIGHT = "52px"; // safely above the search input height
const paddingMixin = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${mediaQueries.tablet(css`
    padding-top: 1rem;
    padding-bottom: 1rem;
  `)}
  ${mediaQueries.desktop(css`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `)}
`;

const StyledWrapper = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  ${paddingMixin};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);

  ${StyledAsideHeader} {
    height: ${CONTENT_HEIGHT};
    ${paddingMixin};
    box-sizing: content-box;
  }

  ${mediaQueries.tablet(css`
    ${StyledSidenavToggle} {
      padding: ${CONTENT_PADDING};
      margin: -${CONTENT_PADDING} 0;
    }
  `)}
`;

const StyledInner = styled.div`
  flex: 1;
  max-width: ${MAX_CONTENT_WIDTH};
  padding: 0 ${CONTENT_PADDING};
  box-sizing: content-box;
  height: ${CONTENT_HEIGHT};
  margin: 0 auto;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-gap: 20px;
  align-items: center;
`;

interface Props {
  location: WindowLocation;
}

const Navbar = ({ location }: Props) => {
  const { isMediumMobile, isTablet } = useMediaQuery();
  const isHome = location && location.pathname === "/";

  return (
    <StyledWrapper>
      <StyledInner>
        <Link to="/">
          {isMediumMobile ? <Logo width={175} height={40} /> : <LogoGlyph width={40} height={40} />}
        </Link>
        {isHome ? <div /> : <Input />}
        {!isTablet && <Bookmarks />}
      </StyledInner>
      {isTablet && <Bookmarks />}
    </StyledWrapper>
  );
};

export default Navbar;
