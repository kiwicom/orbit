// @flow
import * as React from "react";
import styled, { css, withTheme } from "styled-components";

import defaultTheme, { type ThemeProps } from "../defaultTheme";
import ButtonLink from "../ButtonLink";
import { StyledButtonPrimitive } from "../primitives/ButtonPrimitive";
import Close from "../icons/Close";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";
import KEY_CODE_MAP from "../common/keyMaps";
import media, { getBreakpointWidth } from "../utils/mediaQuery";
import { StyledModalFooter } from "./ModalFooter";
import { MobileHeader, StyledModalHeader, ModalHeading } from "./ModalHeader";
import { StyledModalSection } from "./ModalSection";
import { right } from "../utils/rtl";
import transition from "../utils/transition";
import { ModalContext } from "./ModalContext";
import { QUERIES } from "../utils/mediaQuery/consts";
import randomID from "../utils/randomID";
import useTranslate from "../hooks/useTranslate";
import onlyIE from "../utils/onlyIE";

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
  theme: defaultTheme,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;

  position: fixed;
  width: 100%;
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  transition: ${transition(["top"], "normal", "ease-in-out")};
  top: ${({ loaded, isMobileFullPage }) => (loaded ? !isMobileFullPage && "32px" : "100%")};

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
  theme: defaultTheme,
};

const CloseContainer = styled.div`
  display: flex;
  // -ms-page needs to set up for IE on max largeMobile
  ${({ scrolled, fixedClose, theme }) =>
    fixedClose || scrolled
      ? css`
          position: fixed;
          ${onlyIE(
            css`
              position: -ms-page;
            `,
            `(max-width:${+getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px)`,
          )};
        `
      : css`
          position: absolute;
        `};
  position: ${({ scrolled, fixedClose }) => (fixedClose || scrolled ? "fixed" : "absolute")};
  top: ${({ scrolled, fixedClose, isMobileFullPage }) =>
    !isMobileFullPage && (fixedClose || scrolled) ? "32px" : "0"};
  right: 0;
  z-index: 800;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  // TODO create tokens
  height: 52px;
  width: 100%;
  max-width: ${({ modalWidth }) => (modalWidth ? `${modalWidth}px` : getSizeToken)};
  box-shadow: ${({ scrolled, theme }) => scrolled && theme.orbit.boxShadowFixed};
  background-color: ${({ theme, scrolled }) => scrolled && theme.orbit.paletteWhite};
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  transition: ${transition(["box-shadow", "background-color"], "fast", "ease-in-out")};
  pointer-events: none;


  ${media.largeMobile(css`
    top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "0"};
    right: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "auto"};
    border-radius: 0;
  `)};

  & + ${StyledModalSection}:first-of-type {
    padding-top: 52px;
    border-top: 0;
    margin: 0;
  }

  ${StyledButtonPrimitive} {
    pointer-events: auto;
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
  theme: defaultTheme,
};

const ModalWrapperContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && "12px"}; // TODO: create token
  background-color: ${({ theme }) => theme.orbit.backgroundModal};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  ${({ theme, fixedFooter, footerHeight, isMobileFullPage }) =>
    isMobileFullPage
      ? css`
          max-height: 100%;
          top: 0;
        `
      : css`
          max-height: calc(
            100% - ${theme.orbit.spaceXLarge} -
              ${`${fixedFooter && !!footerHeight ? footerHeight : 0}px`}
          );
        `};
  bottom: ${({ fixedFooter, footerHeight, isMobileFullPage, theme }) =>
    `${
      (!isMobileFullPage ? parseInt(theme.orbit.spaceXLarge, 10) : 0) +
      (fixedFooter && !!footerHeight ? footerHeight : 0)
    }px`};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowOverlay};
  overflow-y: auto;
  overflow-x: hidden;

  ${({ fixedFooter, theme, footerHeight, fullyScrolled }) =>
    fixedFooter &&
    footerHeight &&
    css`
      ${StyledModalFooter} {
        bottom: 0;
        padding: ${theme.orbit.spaceMedium};
        box-shadow: ${fullyScrolled
          ? `inset 0 1px 0 ${theme.orbit.paletteCloudNormal}, ${theme.orbit.boxShadowFixedReverse}`
          : `inset 0 0 0 transparent, ${theme.orbit.boxShadowFixedReverse}`};
        position: fixed;
        transition: ${transition(["box-shadow"], "fast", "ease-in-out")};
      }
      ${StyledModalSection}:last-of-type {
        padding-bottom: ${theme.orbit.spaceLarge};
        margin-bottom: 0;
      }
    `};

  ${MobileHeader} {
    top: ${({ scrolled, theme, isMobileFullPage }) =>
      !isMobileFullPage && scrolled && theme.orbit.spaceXLarge};
    opacity: ${({ scrolled }) => scrolled && "1"};
    visibility: ${({ scrolled }) => scrolled && "visible"};
    transition: ${({ scrolled }) =>
      scrolled &&
      css`
        ${transition(["top"], "normal", "ease-in-out")},
        ${transition(["opacity", "visibility"], "fast", "ease-in-out")}
      `};

    ${({ scrolled }) =>
      scrolled &&
      onlyIE(css`
        ${MobileHeader} {
          position: -ms-page;
        }
      `)}
  }

  ${StyledModalHeader} {
    margin-bottom: ${({ hasModalSection, theme }) => !hasModalSection && theme.orbit.spaceXLarge};
  }

  ${media.largeMobile(css`
    position: relative;
    bottom: auto;
    border-radius: ${({ isMobileFullPage }) => !isMobileFullPage && "9px"};
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
      max-width: ${({ modalWidth }) => (modalWidth ? `${modalWidth}px` : getSizeToken)};
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

  ${({ theme }) =>
    onlyIE(
      css`
        ${StyledModalFooter} {
          // we need to apply static position for IE only when fullyScrolled and fixedFooter
          // or fixed when fixedFooter (overwrite -ms-page)
          position: ${({ fullyScrolled, fixedFooter }) =>
            (fullyScrolled && fixedFooter && "static") || (fixedFooter && "fixed")};
          // for IE there's need to be added inset box-shadow with same background as footer has
          box-shadow: ${({ fixedFooter }) =>
            !fixedFooter && `inset 0 0 0 1px ${theme.orbit.paletteWhite}`};
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
      getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    )};
`;

ModalWrapperContent.defaultProps = {
  theme: defaultTheme,
};

const ModalCloseButton = ({ onClick, dataTest }) => {
  const translate = useTranslate();
  return (
    <ButtonLink
      onClick={onClick}
      size="normal"
      iconLeft={<Close />}
      dataTest={dataTest}
      type="secondary"
      title={translate("button_close")}
    />
  );
};

export class PureModal extends React.PureComponent<Props & ThemeProps, State> {
  state = {
    scrolled: false,
    loaded: false,
    fixedClose: false,
    fullyScrolled: false,
    modalWidth: 0,
    footerHeight: 0,
    hasModalSection: false,
  };

  modalContent: { current: any | HTMLElement } = React.createRef();

  modalBody: { current: any | HTMLElement } = React.createRef();

  offset = 40;

  focusTriggered = false;

  modalID: string = randomID("modalID");

  firstFocusableEl: HTMLElement;

  lastFocusableEl: HTMLElement;

  timeout: TimeoutID;

  clickedModalBody: boolean = false;

  static defaultProps = {
    theme: defaultTheme,
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        loaded: true,
      });
      this.decideFixedFooter();
      this.setDimensions();
      this.setFirstFocus();
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
    if (window?.innerWidth >= getBreakpointWidth(QUERIES.LARGEMOBILE, this.props.theme, true)) {
      if (modalBody.current) {
        modalBody.current.scrollTop = value;
      }
    } else if (modalContent.current) {
      modalContent.current.scrollTop = value;
    }
  };

  setDimensions = () => {
    const content = this.modalContent.current;
    if (content) {
      // added in 4.0.3, interpolation of styled component return static className
      const footerEl = content.querySelector(`${StyledModalFooter}`);
      const headingEl = content.querySelector(`${ModalHeading}`);
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

  setFirstFocus() {
    if (this.modalBody.current) this.modalBody.current.focus();
  }

  removeHasModalSection = () => {
    if (this.state.hasModalSection) this.setState({ hasModalSection: false });
  };

  decideFixedFooter = () => {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
    const content = this.modalContent.current;
    const body = this.modalBody.current;
    const contentHeight =
      content?.scrollHeight > content?.offsetHeight + 40
        ? content?.offsetHeight
        : content?.scrollHeight;
    // when scrollHeight + topPadding - scrollingElementHeight is smaller or even than window height
    const fullyScrolled = contentHeight + 40 - body?.scrollTop <= window.innerHeight;
    this.setState({ fullyScrolled });
  };

  handleResize = () => {
    this.setDimensions();
    this.decideFixedFooter();
  };

  resolveAndSetStates = (
    target: HTMLElement,
    fullScrollOffset: number,
    fixCloseOffset: number,
    scrollBegin: ?number,
    mobile?: boolean,
  ) => {
    const content = this.modalContent.current;
    if (content) {
      const { height: contentHeight } = content.getBoundingClientRect();
      /*
        Only for desktop, we need to check if the scrollHeight of content is bigger than actual height
        if so, we need to you use the contentHeight + padding as bottom scroll point,
        otherwise actual scrollHeight of the target is enough.
       */
      const scrollHeight =
        !mobile && target.scrollHeight > contentHeight + 80
          ? contentHeight + 80
          : target.scrollHeight;
      this.setState({
        scrolled: target.scrollTop >= scrollBegin + (!mobile ? target.scrollTop : 0),
        fixedClose: target.scrollTop >= fixCloseOffset,
        fullyScrolled:
          this.props.fixedFooter &&
          // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
          target.scrollTop >= scrollHeight - target.clientHeight - fullScrollOffset,
      });
    }
  };

  getScrollTopPoint = (mobile?: boolean) => {
    const content = this.modalContent.current;
    if (content) {
      const headingEl = content.querySelector(`${ModalHeading}`);
      if (headingEl) {
        const { top } = headingEl.getBoundingClientRect();
        return top;
      }
      if (mobile) {
        return 40;
      }
      const { top } = content.getBoundingClientRect();
      return top;
    }
    return null;
  };

  handleMobileScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalContent.current) {
      this.resolveAndSetStates(ev.target, 10, 1, this.getScrollTopPoint(true), true);
    }
  };

  handleScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalBody.current) {
      this.resolveAndSetStates(ev.target, 40, 40, this.getScrollTopPoint());
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    const { onClose } = this.props;
    if (onClose && ev.key === "Escape") {
      ev.stopPropagation();
      onClose(ev);
    }
    this.keyboardHandler(ev);
  };

  handleClickOutside = (ev: MouseEvent) => {
    const { onClose, preventOverlayClose = false } = this.props;
    if (
      onClose &&
      preventOverlayClose === false &&
      !this.clickedModalBody &&
      this.modalContent.current &&
      ev.target instanceof Element &&
      !this.modalContent.current.contains(ev.target) &&
      /ModalBody|ModalWrapper/.test(ev.target.className)
    ) {
      // If is clicked outside of modal
      onClose(ev);
    }
    this.clickedModalBody = false;
  };

  handleMouseDown = () => {
    /*
      This is due to issue where it's was possible to close Modal,
      even though click started (onMouseDown) in ModalWrapper.
    */
    this.clickedModalBody = true;
  };

  keyboardHandler = (e: SyntheticKeyboardEvent<HTMLElement>) => {
    if (e.keyCode === KEY_CODE_MAP.TAB) {
      // Rotate Focus
      if (!this.focusTriggered) {
        this.focusTriggered = true;
        this.manageFocus();
      }
      if (
        e.shiftKey &&
        (document.activeElement === this.firstFocusableEl ||
          document.activeElement === this.modalBody.current)
      ) {
        e.preventDefault();
        this.lastFocusableEl.focus();
      } else if (!e.shiftKey && document.activeElement === this.lastFocusableEl) {
        e.preventDefault();
        this.firstFocusableEl.focus();
      }
    }
  };

  manageFocus = () => {
    if (this.focusTriggered) {
      const focusableElements = this.modalContent.current.querySelectorAll(
        FOCUSABLE_ELEMENT_SELECTORS,
      );

      if (focusableElements.length > 0) {
        const firstFocusableEl = focusableElements[0];
        const lastFocusableEl = focusableElements[focusableElements.length - 1];

        this.firstFocusableEl = firstFocusableEl;
        this.lastFocusableEl = lastFocusableEl;
      }
    }
  };

  callContextFunctions = () => {
    if (this.setDimensions) this.setDimensions();
    if (this.decideFixedFooter) this.decideFixedFooter();
    if (this.manageFocus) this.manageFocus();
  };

  render() {
    const {
      onClose,
      children,
      size = SIZES.NORMAL,
      fixedFooter = false,
      dataTest,
      isMobileFullPage = false,
    } = this.props;

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
        role="dialog"
        aria-modal="true"
        aria-labelledby={this.modalID}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={this.handleMobileScroll}
          fixedFooter={fixedFooter}
          id={this.modalID}
          isMobileFullPage={isMobileFullPage}
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
            isMobileFullPage={isMobileFullPage}
            onMouseDown={this.handleMouseDown}
          >
            {onClose && (
              <CloseContainer
                modalWidth={modalWidth}
                size={size}
                scrolled={scrolled}
                fixedClose={fixedClose}
                isMobileFullPage={isMobileFullPage}
              >
                <ModalCloseButton onClick={onClose} dataTest={CLOSE_BUTTON_DATA_TEST} />
              </CloseContainer>
            )}
            <ModalContext.Provider
              value={{
                setHasModalSection: this.setHasModalSection,
                removeHasModalSection: this.removeHasModalSection,
                callContextFunctions: this.callContextFunctions,
                hasModalSection,
                isMobileFullPage,
                closable: !!onClose,
                isInsideModal: true,
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

const ThemedModal = withTheme(PureModal);
ThemedModal.displayName = "Modal";
export default ThemedModal;

export { default as ModalHeader } from "./ModalHeader";
export { default as ModalSection } from "./ModalSection";
export { default as ModalFooter } from "./ModalFooter";
