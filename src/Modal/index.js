// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import ButtonLink, { StyledButtonLink } from "../ButtonLink";
import Close from "../icons/Close";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import media, { breakpoints } from "../utils/mediaQuery";
import { StyledModalFooter } from "./ModalFooter";
import { MobileHeader, StyledModalHeader } from "./ModalHeader";
import { StyledModalSection } from "./ModalSection";
import { StyledHeading } from "../Heading";
import { right } from "../utils/rtl";
import transition from "../utils/transition";
import { ModalContext } from "./ModalContext";
import { DEVICES_WIDTH } from "../utils/mediaQuery/consts";

import type { Props, State } from "./index";

const getSizeToken = () => ({ size, theme }) => {
  const tokens = {
    // TODO: create tokens widthModalSmall,...
    [SIZES.SMALL]: theme.orbit.widthModalSmall,
    [SIZES.NORMAL]: theme.orbit.widthModalNormal,
    [SIZES.LARGE]: theme.orbit.widthModalLarge,
  };

  return tokens[size];
};

// media query only for IE 10+, not Edge
const onlyIE = (style, breakpoint = "all") =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

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
  -webkit-overflow-scrolling: auto;
  ${media.largeMobile(css`
    overflow-y: auto;
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};
  `)};
  ${onlyIE(css`
    position: -ms-page;
  `)};
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

  ${onlyIE(css`
    /* IE flex bug, the content won't be centered if there is not 'height' property
    https://github.com/philipwalton/flexbugs/issues/231 */
    height: 1px;
  `)};

  ${media.largeMobile(css`
    position: relative;
    top: 0;
    max-width: ${getSizeToken};
    align-items: center;
  `)};
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
  
  ${media.largeMobile(css`
    top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "0"};
    right: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "auto"};
  `)};
  
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

  ${media.largeMobile(css`
    position: relative;
    bottom: auto;
    border-radius: 9px;
    padding-bottom: 0;
    height: auto;
    overflow: visible;
    max-height: 100%;
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
  `)};

  ${onlyIE(
    css`
      ${StyledModalFooter} {
        // -ms-page must be used for mobile devices
        position: ${({ fixedFooter }) => fixedFooter && "-ms-page"};
      }
    `,
  )};

  ${onlyIE(
    css`
      ${StyledModalFooter} {
        // we need to apply static position for IE only when fullyScrolled and fixedFooter
        // or fixed when fixedFooter (overwrite -ms-page)
        position: ${({ fullyScrolled, fixedFooter }) =>
          (fullyScrolled && fixedFooter && "static") || (fixedFooter && "fixed")};
      }
      // also we need to clear not wanted margins
      ${({ fullyScrolled, fixedFooter }) =>
        fullyScrolled &&
        fixedFooter &&
        css`
          ${StyledModalSection}:last-of-type {
            margin-bottom: 0;
          }
          ${StyledModalHeader} {
            margin-bottom: ${({ hasModalSection }) => !hasModalSection && "0"};
          }
        `};
    `,
    breakpoints.largeMobile,
  )};
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

  setScrollPosition = (value: number) => {
    const { modalContent, modalBody } = this;
    if (window?.innerWidth >= DEVICES_WIDTH.largeMobile) {
      if (modalBody?.current) {
        modalBody.current.scrollTop = value;
      }
    } else if (modalContent?.current) {
      modalContent.current.scrollTop = value;
    }
  };

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

  setHasModalSection = () => {
    if (!this.state.hasModalSection) {
      this.setState({ hasModalSection: true });
    }
  };

  removeHasModalSection = () => {
    if (this.state.hasModalSection) this.setState({ hasModalSection: false });
  };

  decideFixedFooter = () => {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
    const content = this.modalContent.current;
    const body = this.modalBody.current;
    // when scrollHeight + topPadding - scrollingElementHeight is smaller or even than window height
    const fullyScrolled = content?.scrollHeight + 40 - body?.scrollTop <= window.innerHeight;
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
                setHasModalSection: this.setHasModalSection,
                removeHasModalSection: this.removeHasModalSection,
                hasModalSection,
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

export { default as ModalHeader } from "./ModalHeader";
export { default as ModalSection } from "./ModalSection";
export { default as ModalFooter } from "./ModalFooter";
