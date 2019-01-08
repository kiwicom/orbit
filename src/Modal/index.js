// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import ButtonLink, { StyledButtonLink } from "../ButtonLink";
import Close from "../icons/Close";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import media from "../utils/media";
import { StyledModalFooter } from "./ModalFooter";
import { MobileHeader, StyledModalHeader } from "./ModalHeader";
import ModalSection, { StyledModalSection } from "./ModalSection";
import { StyledHeading } from "../Heading";
import { right } from "../utils/rtl";
import transition from "../utils/transition";
import { ModalContext } from "./ModalContext";

import type { Props, State } from "./index";

const getSizeToken = () => ({ size }) => {
  const tokens = {
    // TODO: create tokens widthModalSmall,...
    [SIZES.SMALL]: "540px",
    [SIZES.NORMAL]: "740px",
    [SIZES.LARGE]: "1280px",
  };

  return tokens[size];
};

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.orbit.zIndexModalOverlay};
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.orbit.fontfamily};

  ${media.desktop`
    overflow-y: auto;
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};
 `};
`;

ModalBody.defaultProps = {
  theme: defaultTokens,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;

  position: fixed;
  width: 100%;
  border-top-left-radius: 9px; // TODO: create token
  border-top-right-radius: 9px; // TODO: create token
  transition: ${transition(["top"], "normal", "ease-in-out")};
  top: ${({ loaded }) => (loaded ? "32px" : "100%")};

  ${media.desktop`
    position: relative;
    top: 0;
    max-width: ${getSizeToken};
    align-items: center;
  `};
`;

ModalWrapper.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled.div`
  display: flex;
  position: ${({ scrolled, fixedClose }) => (fixedClose || scrolled ? "fixed" : "absolute")};
  top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled ? "32px" : "0")};
  right: 0;
  z-index: 10;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  // TODO create tokens
  height: 52px;
  width: 100%;
  max-width: ${({ modalWidth }) => `${modalWidth}px`};
  box-shadow: ${({ scrolled }) => scrolled && `0 2px 4px 0 rgba(23, 27, 30, 0.1)`};
  background-color: ${({ theme, scrolled }) => scrolled && theme.orbit.paletteWhite};
  border-top-left-radius: 9px; // TODO: create token
  border-top-right-radius: 9px; // TODO: create token
  transition: ${transition(["box-shadow", "background-color"], "fast", "ease-in-out")};
  
  ${media.desktop`
    top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "0"};
    right: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "initial"};
  `};
  
  & + ${StyledModalSection}:first-of-type {
    padding-top: 52px;
    border-top: 0;
    margin: 0;
  }

  ${StyledButtonLink} {
    margin-${right}: ${({ theme }) => theme.orbit.spaceXXSmall};

    & svg {
      transition: ${transition(["color"], "fast", "ease-in-out")};
      color: ${({ theme }) => theme.orbit.paletteInkLight};
    }
    &:hover svg {
      color: ${({ theme }) => theme.orbit.paletteInkLightHover};
    }

    &:active svg {
      color: ${({ theme }) => theme.orbit.paletteInkLightActive};
    }
  }
`;

CloseContainer.defaultProps = {
  theme: defaultTokens,
};

const ModalWrapperContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-top-left-radius: 9px; // TODO: create token
  border-top-right-radius: 9px; // TODO: create token
  background-color: ${({ theme }) => theme.orbit.backgroundModal};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  max-height: calc(
    100% - ${({ theme }) => theme.orbit.spaceXLarge} -
      ${({ fixedFooter, footerHeight }) => `${fixedFooter && !!footerHeight ? footerHeight : 0}px`}
  );
  bottom: ${({ fixedFooter, footerHeight }) =>
    `${32 + (fixedFooter && !!footerHeight ? footerHeight : 0)}px`};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowModal};
  overflow-y: auto;
  overflow-x: hidden;

  ${({ fixedFooter, theme }) =>
    fixedFooter &&
    css`
      ${StyledModalFooter} {
        padding: ${theme.orbit.spaceMedium};
        box-shadow: ${({ fullyScrolled }) =>
          fullyScrolled
            ? `inset 0 1px 0 ${theme.orbit.paletteCloudNormal}, 0 -2px 4px 0 rgba(23, 27, 30, 0)`
            : `inset 0 0 0 transparent, 0 -2px 4px 0 rgba(23, 27, 30, 0.1)`};
        position: fixed;
        transition: ${transition(["box-shadow"], "fast", "ease-in-out")};
      }
      ${StyledModalSection}:last-of-type {
        padding-bottom: ${theme.orbit.spaceLarge};
        margin-bottom: 0;
      }
    `};

  ${MobileHeader} {
    top: ${({ scrolled, theme }) => scrolled && theme.orbit.spaceXLarge};
    opacity: ${({ scrolled }) => scrolled && "1"};
    visibility: ${({ scrolled }) => scrolled && "visible"};
    transition: ${({ scrolled, theme }) =>
      scrolled &&
      `top ${theme.orbit.durationNormal} ease-in-out,
    opacity ${theme.orbit.durationFast} ease-in-out,
    visibility ${theme.orbit.durationFast} ease-in-out ${theme.orbit.durationFast}`};
  }

  ${StyledModalHeader} {
    margin-bottom: ${({ hasModalSection, theme }) => !hasModalSection && theme.orbit.spaceXLarge};
  }

  ${media.desktop`
    position: relative;
    bottom: initial;
    border-radius: 9px;
    padding-bottom: 0;
    height: auto;
    overflow: visible;
    ${StyledModalSection}:last-of-type {
      padding-bottom: ${({ theme }) => theme.orbit.spaceXXLarge};
      margin-bottom: ${({ fixedFooter, footerHeight }) =>
        fixedFooter ? `${footerHeight}px` : "0"};
      &::after {
        content: none;
      }
    }
    ${StyledModalHeader} {
      margin-bottom: ${({ hasModalSection, fixedFooter, footerHeight }) =>
        !hasModalSection && fixedFooter ? `${footerHeight}px` : "0"};
    }
    ${StyledModalFooter} {
      padding: ${({ theme, fixedFooter }) =>
        fixedFooter
          ? `${theme.orbit.spaceXLarge} ${theme.orbit.spaceXXLarge}!important`
          : theme.orbit.spaceXXLarge};
      max-width: ${({ modalWidth }) => `${modalWidth}px`};
      position: ${({ fullyScrolled, fixedFooter }) => fixedFooter && fullyScrolled && "absolute"};
      box-shadow: ${({ fullyScrolled }) => fullyScrolled && "none"};
    }
    ${MobileHeader} {
      top: ${({ scrolled, theme }) => (scrolled ? "0" : `-${theme.orbit.spaceXXLarge}`)};
      width: ${({ modalWidth, theme }) =>
        `calc(${modalWidth}px - 48px - ${theme.orbit.spaceXXLarge})`};
    }
  `};
`;

ModalWrapperContent.defaultProps = {
  theme: defaultTokens,
};

class Modal extends React.PureComponent<Props, State> {
  state = {
    scrolled: false,
    loaded: false,
    fixedClose: false,
    fullyScrolled: false,
    modalWidth: 0,
    footerHeight: 0,
    hasModalSection: false,
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        loaded: true,
      });
      this.decideFixedFooter();
      this.setDimensions();
    }, 15);
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.children !== prevProps.children) {
      this.decideFixedFooter();
      this.setDimensions();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setDimensions = () => {
    const content = this.modalContent.current;
    if (content) {
      // added in 4.0.3, interpolation of styled component return static className
      const footerEl = content.querySelector(`${StyledModalFooter}`);
      const headingEl = content.querySelector(`${StyledHeading}`);
      this.offset = headingEl?.clientHeight + headingEl?.offsetTop;
      const contentDimensions = content.getBoundingClientRect();
      const modalWidth = contentDimensions.width;
      const footerHeight = footerEl?.clientHeight;
      this.setState({ modalWidth, footerHeight });
    }
  };

  decideFixedFooter = () => {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
    const content = this.modalContent.current;
    // what is 40 value?
    const fullyScrolled = content?.scrollHeight + 40 <= window.innerHeight;
    this.setState({ fullyScrolled });
  };

  handleResize = () => {
    this.setDimensions();
    this.decideFixedFooter();
  };

  resolveAndSetStates = (target: HTMLElement, fullScrollOffset: number, fixCloseOffset: number) => {
    this.setState({
      scrolled: target.scrollTop >= this.offset,
      fixedClose: target.scrollTop >= fixCloseOffset,
      fullyScrolled:
        this.props.fixedFooter &&
        // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
        target.scrollTop >= target.scrollHeight - target.clientHeight - fullScrollOffset,
    });
  };

  handleMobileScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalContent.current) {
      this.resolveAndSetStates(ev.target, 10, 1);
    }
  };

  handleScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalBody.current) {
      this.resolveAndSetStates(ev.target, 40, 40);
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    const { onClose } = this.props;
    if (onClose && ev.key === "Escape") {
      ev.stopPropagation();
      onClose(ev);
    }
  };

  handleClickOutside = (ev: MouseEvent) => {
    const { onClose } = this.props;
    if (
      onClose &&
      this.modalContent?.current &&
      ev.target instanceof Node &&
      !this.modalContent.current.contains(ev.target)
    ) {
      // If is clicked outside of modal
      onClose(ev);
    }
  };

  decideModalSection = () => {
    const children = React.Children.toArray(this.props.children);
    const hasModalSection =
      children.map(child => child.type.displayName).indexOf(ModalSection.displayName) !== -1;

    this.setState({ hasModalSection });
  };

  modalContent: { current: any | HTMLElement } = React.createRef();
  modalBody: { current: any | HTMLElement } = React.createRef();
  timeout: TimeoutID;
  offset = 40;

  render() {
    const { onClose, children, size = SIZES.NORMAL, fixedFooter = false, dataTest } = this.props;
    const {
      scrolled,
      loaded,
      fixedClose,
      fullyScrolled,
      modalWidth,
      footerHeight,
      hasModalSection,
    } = this.state;
    return (
      <ModalBody
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onScroll={this.handleScroll}
        onClick={this.handleClickOutside}
        data-test={dataTest}
        ref={this.modalBody}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={this.handleMobileScroll}
          fixedFooter={fixedFooter}
        >
          <ModalWrapperContent
            size={size}
            fixedFooter={fixedFooter}
            scrolled={scrolled}
            ref={this.modalContent}
            fixedClose={fixedClose}
            fullyScrolled={fullyScrolled}
            modalWidth={modalWidth}
            footerHeight={footerHeight}
            hasModalSection={hasModalSection}
          >
            <CloseContainer modalWidth={modalWidth} scrolled={scrolled} fixedClose={fixedClose}>
              {onClose && (
                <ButtonLink
                  onClick={onClose}
                  size="normal"
                  icon={<Close />}
                  transparent
                  dataTest={CLOSE_BUTTON_DATA_TEST}
                />
              )}
            </CloseContainer>
            <ModalContext.Provider
              value={{
                setDimensions: this.setDimensions,
                decideFixedFooter: this.decideFixedFooter,
                decideModalSection: this.decideModalSection,
              }}
            >
              {children}
            </ModalContext.Provider>
          </ModalWrapperContent>
        </ModalWrapper>
      </ModalBody>
    );
  }
}

export default Modal;
