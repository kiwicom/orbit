import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import {
  Stack,
  Button,
  Hide,
  Portal,
  ModalHeader,
  ModalSection,
  Badge,
  Modal,
  mediaQueries as mq,
} from "@kiwicom/orbit-components";
import { MenuHamburger, StarEmpty, Logout } from "@kiwicom/orbit-components/icons";
// import GitHubButton from "react-github-btn";

import Logo from "../../images/orbit-logo.svg";
import Glyph from "../../images/orbit-glyph.svg";
import Bookmarks from "../Bookmarks";
import Search from "../Search";
import { useBookmarks } from "../../services/bookmarks";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../../consts";
import { useKeyboard } from "../../services/KeyboardProvider";
import SearchNavbarButton from "../Search/SearchNavbarButton";
import { isLoggedIn, logout } from "../../services/auth";
import NavigationLinks from "./Links";

const StyledWrapper = styled.header`
  position: relative;
  z-index: 10;
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  ${mq.tablet(css`
    padding: 1rem 0;
  `)}
  ${mq.desktop(css`
    padding: 1.5rem 0;
  `)}
`;

const StyledInner = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  padding: 0 ${CONTENT_PADDING};
  height: 52px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  display: none;
  ${mq.mediumMobile(css`
    display: block;
  `)};
`;
const StyledLogoGlyph = styled(Glyph)`
  display: block;
  ${mq.mediumMobile(css`
    display: none;
  `)};
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTabList = styled.div`
  ${({ theme }) => `
    font-size: 1rem; /* hack back to regular size because it's in ModalHeader title */
    display: flex;
    height: 44px;
    border-radius: 22px;
    padding: 2px;
    background: ${theme.orbit.paletteCloudLight};
    box-shadow: 0px 1px 4px 0px #252A311F inset, 0px 0px 2px 0px #252A3129 inset;
  `}
`;
const StyledTab = styled.button`
  ${({ theme }) => `
    flex: 1;
    display: block;
    height: 100%;
    &[aria-selected=true] {
      border-radius: 22px;
      background: ${theme.orbit.paletteWhite};
      box-shadow: 0px 4px 8px 0px #252A311F, 0px 1px 4px 0px #252A3129;
    }
  `};
`;

interface Props {
  location: WindowLocation;
  docNavigation?: React.ReactNode;
}

const Navbar = ({ location, docNavigation }: Props) => {
  const [isSearchOpen, setSearchOpen] = useKeyboard();
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState<"navigation" | "bookmarks">("navigation");
  const isHome = location && location.pathname === "/";
  const isThemer = location && location.pathname === "/themer/";
  const shouldHaveNavLinks = isHome || isThemer;
  const { bookmarks } = useBookmarks();

  return (
    <StyledWrapper>
      <StyledInner>
        <Stack inline shrink align="center" spacing="small">
          <Link to="/" aria-label="Back to home page">
            <StyledLogo width={192} height={44} />
            <StyledLogoGlyph width={44} height={44} />
          </Link>
          {/* <Hide on={["smallMobile", "mediumMobile"]}>
            <Stack inline align="center">
              <span>&sdot;</span>
              <div
                css={css`
                  height: 22px;
                `}
              >
                <GitHubButton
                  href="https://github.com/kiwicom/orbit"
                  data-show-count
                  data-icon="star"
                  title="kiwicom/orbit"
                  aria-label="orbit github"
                />
              </div>
            </Stack>
          </Hide> */}
        </Stack>

        <StyledRight>
          <Stack inline spacing="XXSmall" align="center">
            {shouldHaveNavLinks ? (
              <NavigationLinks />
            ) : (
              <SearchNavbarButton onClick={() => setSearchOpen(true)} />
            )}

            {isSearchOpen && !isHome && <Search onClose={() => setSearchOpen(false)} />}
            {docNavigation ? (
              <>
                <Hide block on={["largeDesktop"]}>
                  <Button
                    type="white"
                    circled
                    title="Menu"
                    iconLeft={<MenuHamburger />}
                    onClick={() => setMenuOpen(true)}
                  />
                </Hide>
                <Hide
                  block
                  on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}
                >
                  <Button
                    type="white"
                    iconLeft={<StarEmpty />}
                    circled
                    title="Open bookmarks"
                    onClick={() => setMenuOpen(true)}
                  />
                </Hide>
              </>
            ) : (
              <>
                <Button
                  type="white"
                  iconLeft={<StarEmpty />}
                  circled
                  title="Open bookmarks"
                  onClick={() => setMenuOpen(true)}
                />
              </>
            )}
            {isLoggedIn() && (
              <Button title="logout" iconLeft={<Logout />} type="white" circled onClick={logout} />
            )}
          </Stack>
          {menuOpen && (
            <Portal>
              <div
                css={css`
                  > * > * > * {
                    /* keep modal at full width between tabs */
                    height: 100%;
                  }
                  ${mq.largeMobile(css`
                    /* align modal to the top */
                    > * > * {
                      align-items: flex-start;
                    }

                    > * > * > * {
                      height: auto;
                      align-self: stretch;
                    }
                  `)}
                  ${mq.desktop(css`
                    > * > * > * {
                      align-self: auto;
                    }
                  `)}
                `}
              >
                <Modal fixedFooter onClose={() => setMenuOpen(false)}>
                  {docNavigation ? (
                    <>
                      <ModalHeader
                        title={
                          <>
                            <Hide block on={["largeDesktop"]}>
                              <Stack flex direction="column" align="stretch" spacing="large">
                                {/* TODO: ensure that tabs are accessible, code below is just guesswork */}
                                <StyledTabList role="tablist">
                                  <StyledTab
                                    role="tab"
                                    aria-selected={activeTab === "navigation"}
                                    aria-controls="navbar-tabpanel-navigation"
                                    // eslint-disable-next-line orbit-components/unique-id
                                    id="navbar-tab-navigation"
                                    type="button"
                                    onClick={() => setActiveTab("navigation")}
                                  >
                                    Navigation
                                  </StyledTab>
                                  <StyledTab
                                    role="tab"
                                    aria-selected={activeTab === "bookmarks"}
                                    aria-controls="navbar-tabpanel-bookmarks"
                                    // eslint-disable-next-line orbit-components/unique-id
                                    id="navbar-tab-bookmarks"
                                    type="button"
                                    onClick={() => setActiveTab("bookmarks")}
                                  >
                                    Bookmarks
                                  </StyledTab>
                                </StyledTabList>
                                {activeTab === "bookmarks" && (
                                  <Stack flex align="center">
                                    <div>Your bookmarks</div>
                                    <Badge type="infoInverted">
                                      {bookmarks ? Object.keys(bookmarks).length : 0}
                                    </Badge>
                                  </Stack>
                                )}
                              </Stack>
                            </Hide>
                            <Hide
                              block
                              on={[
                                "smallMobile",
                                "mediumMobile",
                                "largeMobile",
                                "tablet",
                                "desktop",
                              ]}
                            >
                              <Stack flex align="center">
                                <div>Your bookmarks</div>
                                <Badge type="infoInverted">
                                  {bookmarks ? Object.keys(bookmarks).length : 0}
                                </Badge>
                              </Stack>
                            </Hide>
                          </>
                        }
                      />
                      <ModalSection>
                        <Hide block on={["largeDesktop"]}>
                          {activeTab === "navigation" && (
                            <div
                              tabIndex={0}
                              role="tabpanel"
                              // eslint-disable-next-line orbit-components/unique-id
                              id="navbar-tabpanel-navigation"
                              aria-labelledby="navbar-tab-navigation"
                            >
                              {docNavigation}
                            </div>
                          )}
                          {activeTab === "bookmarks" && <Bookmarks />}
                        </Hide>
                        <Hide
                          block
                          on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}
                        >
                          <Bookmarks />
                        </Hide>
                      </ModalSection>
                    </>
                  ) : (
                    <>
                      <ModalHeader
                        title={
                          <Stack flex align="center">
                            <div>Your bookmarks</div>
                            <Badge type="infoInverted">
                              {bookmarks ? Object.keys(bookmarks).length : 0}
                            </Badge>
                          </Stack>
                        }
                      />
                      <ModalSection>
                        <Bookmarks />
                      </ModalSection>
                    </>
                  )}
                </Modal>
              </div>
            </Portal>
          )}
        </StyledRight>
      </StyledInner>
    </StyledWrapper>
  );
};

export default Navbar;
