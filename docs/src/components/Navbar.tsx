import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import { Button, mediaQueries as mq } from "@kiwicom/orbit-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";

import Logo from "../images/orbit.svg";
import Bookmarks from "./Bookmarks";
import Search from "./Search";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";

const StyledWrapper = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  ${mq.tablet(css`
    padding: 1rem 0;
  `)}
  ${mq.desktop(css`
    padding: 1.5rem 0;
  `)}
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
`;

const StyledInner = styled.div`
  flex: 1;
  max-width: ${MAX_CONTENT_WIDTH};
  padding: 0 ${CONTENT_PADDING};
  box-sizing: content-box;
  height: 52px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 10px;
  }
`;

const FullWidth = styled.div`
  flex: 1;
`;

interface Props {
  location: WindowLocation;
}

const Navbar = ({ location }: Props) => {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const isHome = location && location.pathname === "/";

  return (
    <StyledWrapper>
      <StyledInner>
        <Link to="/">
          <Logo width={175} height={40} />
        </Link>
        <FullWidth />
        {!isHome && (
          <Button
            type="white"
            circled
            title="Search…"
            iconLeft={<SearchIcon />}
            onClick={() => setSearchOpen(true)}
          />
        )}
        {searchOpen && !isHome && <Search onClose={() => setSearchOpen(false)} />}
        <Bookmarks />
      </StyledInner>
    </StyledWrapper>
  );
};

export default Navbar;
