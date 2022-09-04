import * as React from "react";
import styled, { css } from "styled-components";

import { ModalContext } from "./ModalContext";
import { MobileHeader, StyledModalHeader, ModalHeading } from "./ModalHeader";
import { StyledModalFooter } from "./ModalFooter";
import { StyledModalSection } from "./ModalSection";
import ModalCloseButton from "./ModalCloseButton";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import KEY_CODE_MAP from "../common/keyMaps";
import defaultTheme from "../defaultTheme";
import { StyledButtonPrimitive } from "../primitives/ButtonPrimitive";
import media from "../utils/mediaQuery";
import { right } from "../utils/rtl";
import transition from "../utils/transition";
import useRandomId from "../hooks/useRandomId";
import useMediaQuery from "../hooks/useMediaQuery";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";
import usePrevious from "../hooks/usePrevious";
import useLockScrolling from "../hooks/useLockScrolling";
import { Instance, Props } from "./index.d";

const getSizeToken = ({ size, theme }: { size: Props["size"]; theme: typeof defaultTheme }) => {
  const tokens = {
    [SIZES.EXTRASMALL]: "360px",
    [SIZES.SMALL]: theme.orbit.widthModalSmall,
    [SIZES.NORMAL]: theme.orbit.widthModalNormal,
    [SIZES.LARGE]: theme.orbit.widthModalLarge,
    [SIZES.EXTRALARGE]: theme.orbit.widthModalExtraLarge,
  };

  if (!size) return null;

  return tokens[size];
};

const ModalBody = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.orbit.zIndexModalOverlay};
    box-sizing: border-box;
    outline: none;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: ${theme.orbit.fontFamily};
    -webkit-overflow-scrolling: auto;
    ${media.largeMobile(css`
      overflow-y: auto;
      padding: ${theme.orbit.spaceXXLarge};
    `)};
  `}
`;

ModalBody.defaultProps = {
  theme: defaultTheme,
};

const ModalWrapper = styled.div<{
  isMobileFullPage: Props["isMobileFullPage"];
  disableAnimation?: boolean;
  loaded: boolean;
  fixedFooter: Props["fixedFooter"];
  size: Props["size"];
}>`
  ${({ isMobileFullPage, disableAnimation, loaded }) => css`
    box-sizing: border-box;
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    position: fixed;
    width: 100%;
    border-top-left-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    ${disableAnimation
      ? css`
          top: ${!isMobileFullPage && "32px"};
        `
      : css`
          transition: ${transition(["top"], "normal", "ease-in-out")};
          top: ${loaded ? !isMobileFullPage && "32px" : "100%"};
        `}

    ${media.largeMobile(css`
      position: relative;
      top: 0;
      max-width: ${getSizeToken};
      align-items: center;
    `)};
  `}
`;

ModalWrapper.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled.div<{
  scrolled?: boolean;
  fixedClose?: boolean;
  size?: Props["size"];
  isMobileFullPage?: Props["isMobileFullPage"];
  modalWidth?: number;
}>`
  ${({ theme, scrolled, fixedClose, isMobileFullPage, modalWidth, size }) => css`
    display: flex;
    // -ms-page needs to set up for IE on max largeMobile
    ${
      fixedClose || scrolled
        ? css`
            position: fixed;
          `
        : css`
            position: absolute;
          `
    };
    position: ${fixedClose || scrolled ? "fixed" : "absolute"};
    top: ${!isMobileFullPage && (fixedClose || scrolled) ? "32px" : "0"};
    right: 0;
    z-index: 800;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    // TODO create tokens
    height: 52px;
    width: 100%;
    max-width: ${modalWidth ? `${modalWidth}px` : getSizeToken({ size, theme })};
    box-shadow: ${scrolled && theme.orbit.boxShadowFixed};
    background-color: ${scrolled && theme.orbit.paletteWhite};
    border-top-left-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    transition: ${transition(["box-shadow", "background-color"], "fast", "ease-in-out")};
    pointer-events: none;


    ${media.largeMobile(css`
      top: ${(fixedClose || scrolled) && "0"};
      right: ${(fixedClose || scrolled) && "auto"};
      border-radius: 0;
    `)};

    & + ${StyledModalSection}:first-of-type {
      padding-top: 52px;
      border-top: 0;
      margin: 0;
    }

    ${StyledButtonPrimitive} {
      pointer-events: auto;
      margin-${right}: ${theme.orbit.spaceXXSmall};

      & svg {
        transition: ${transition(["color"], "fast", "ease-in-out")};
        color: ${theme.orbit.paletteInkLight};
      }

      &:hover svg {
        color: ${theme.orbit.paletteInkLightHover};
      }

      &:active svg {
        color: ${theme.orbit.paletteInkLightActive};
      }
    }
`}
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const ModalWrapperContent = styled.div<{
  isMobileFullPage: Props["isMobileFullPage"];
  fixedFooter: Props["fixedFooter"];
  footerHeight: number;
  fullyScrolled?: boolean;
  scrolled?: boolean;
  fixedClose?: boolean;
  size: Props["size"];
  modalWidth: number;
  hasModalSection?: boolean;
}>`
  ${({
    theme,
    isMobileFullPage,
    fixedFooter,
    footerHeight,
    size,
    fullyScrolled,
    scrolled,
    modalWidth,
    hasModalSection,
  }) => css`
    position: absolute;
    box-sizing: border-box;
    border-top-left-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${!isMobileFullPage && "12px"}; // TODO: create token
    background-color: ${theme.orbit.backgroundModal};
    font-family: ${theme.orbit.fontFamily};
    width: 100%;
    ${isMobileFullPage
      ? css`
          max-height: 100%;
          top: 0;
        `
      : css`
          max-height: calc(
            100% - ${theme.orbit.spaceXLarge} -
              ${`${fixedFooter && Boolean(footerHeight) ? footerHeight : 0}px`}
          );
        `};
    bottom: ${`${
      (!isMobileFullPage ? parseInt(theme.orbit.spaceXLarge, 10) : 0) +
      (fixedFooter && Boolean(footerHeight) ? footerHeight : 0)
    }px`};
    box-shadow: ${theme.orbit.boxShadowOverlay};
    overflow-y: auto;
    overflow-x: hidden;

    ${fixedFooter &&
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
      top: ${!isMobileFullPage && scrolled && theme.orbit.spaceXLarge};
      opacity: ${scrolled && "1"};
      visibility: ${scrolled && "visible"};
      transition: ${scrolled &&
      css`
        ${transition(["top"], "normal", "ease-in-out")},
        ${transition(["opacity", "visibility"], "fast", "ease-in-out")}
      `};
    }

    ${StyledModalHeader} {
      margin-bottom: ${!hasModalSection && theme.orbit.spaceXLarge};
    }

    ${media.largeMobile(css`
      position: relative;
      bottom: auto;
      border-radius: ${!isMobileFullPage && "9px"};
      padding-bottom: 0;
      height: auto;
      overflow: visible;
      max-height: 100%;
      ${StyledModalSection}:last-of-type {
        padding-bottom: ${theme.orbit.spaceXXLarge};
        margin-bottom: ${fixedFooter ? `${footerHeight}px` : "0"};
        &::after {
          content: none;
        }
      }
      ${StyledModalHeader} {
        margin-bottom: ${!hasModalSection && fixedFooter ? `${footerHeight}px` : "0"};
      }
      ${StyledModalFooter} {
        padding: ${fixedFooter
          ? `${theme.orbit.spaceXLarge} ${theme.orbit.spaceXLarge}!important`
          : theme.orbit.spaceXLarge};
        max-width: ${modalWidth ? `${modalWidth}px` : getSizeToken({ size, theme })};
        position: ${fixedFooter && fullyScrolled && "absolute"};
        box-shadow: ${fullyScrolled && "none"};
      }
      ${MobileHeader} {
        top: ${scrolled ? "0" : `-${theme.orbit.spaceXXLarge}`};
        width: ${`calc(${modalWidth}px - 48px - ${theme.orbit.spaceXXLarge})`};
      }
    `)};
  `}
`;

ModalWrapperContent.defaultProps = {
  theme: defaultTheme,
};

const OFFSET = 40;

const Modal = React.forwardRef<Instance, Props>(
  (
    {
      size = SIZES.NORMAL,
      scrollingElementRef,
      children,
      onClose,
      autoFocus = true,
      fixedFooter = false,
      isMobileFullPage = false,
      preventOverlayClose = false,
      hasCloseButton = true,
      mobileHeader = true,
      disableAnimation = false,
      dataTest,
      id,
      lockScrolling = true,
    }: Props,
    ref,
  ) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const [fullyScrolled, setFullyScrolled] = React.useState<boolean>(false);
    const [hasModalTitle, setHasModalTitle] = React.useState<boolean>(false);
    const [hasModalSection, setHasModalSection] = React.useState<boolean>(false);
    const [clickedModalBody, setClickedModalBody] = React.useState<boolean>(false);
    const [fixedClose, setFixedClose] = React.useState<boolean>(false);
    const [focusTriggered, setFocusTriggered] = React.useState<boolean>(false);
    const [modalWidth, setModalWidth] = React.useState<number>(0);
    const [footerHeight, setFooterHeight] = React.useState<number>(0);
    const [firstFocusableEl, setFirstFocusableEl] = React.useState<HTMLElement | null>(null);
    const [lastFocusableEl, setLastFocusableEl] = React.useState<HTMLElement | null>(null);

    const modalContent = React.useRef<HTMLElement | null>(null);
    const modalBody = React.useRef<HTMLElement | null>(null);
    const modalTitleID = useRandomId();

    const { isLargeMobile } = useMediaQuery();
    const scrollingElement = React.useRef<HTMLElement | null>(null);
    const setScrollingElementRefs = React.useCallback(
      node => {
        scrollingElement.current = node;
        if (scrollingElementRef) {
          if (typeof scrollingElementRef === "function") {
            scrollingElementRef(node);
          } else {
            // @ts-expect-error TODO
            // eslint-disable-next-line no-param-reassign
            scrollingElementRef.current = node;
          }
        }
      },
      [scrollingElementRef],
    );

    useLockScrolling(scrollingElement, lockScrolling, [isLargeMobile]);

    const modalContentRef = React.useCallback(
      node => {
        modalContent.current = node;
        if (!isLargeMobile) setScrollingElementRefs(node);
      },
      [isLargeMobile, setScrollingElementRefs],
    );
    const modalBodyRef = React.useCallback(
      node => {
        modalBody.current = node;
        if (isLargeMobile) setScrollingElementRefs(node);
      },
      [isLargeMobile, setScrollingElementRefs],
    );

    const prevChildren = usePrevious(children);

    const setDimensions = () => {
      const content = modalContent.current;

      if (!content) return;

      // added in 4.0.3, interpolation of styled component return static className
      // $FlowFixMe
      const footerEl = content.querySelector(`${StyledModalFooter}`);
      const contentDimensions = content.getBoundingClientRect();

      setModalWidth(contentDimensions.width);

      if (footerEl?.clientHeight) {
        setFooterHeight(footerEl.clientHeight);
      }
    };

    const setFirstFocus = () => {
      if (modalBody.current && autoFocus) {
        modalBody.current.focus();
      }
    };

    const decideFixedFooter = () => {
      if (!modalContent.current || !modalBody.current) return;
      // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
      const content = modalContent.current;
      const body = modalBody.current;
      const contentHeight =
        content.scrollHeight > content.offsetHeight + OFFSET
          ? content.offsetHeight
          : content.scrollHeight;

      // when scrollHeight + topPadding - scrollingElementHeight is smaller than or equal to window height
      setFullyScrolled(contentHeight + OFFSET - body.scrollTop <= window.innerHeight);
    };

    const manageFocus = () => {
      if (!focusTriggered || !modalContent.current) return;

      const focusableElements = modalContent.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);

      if (focusableElements.length > 0) {
        setFirstFocusableEl(focusableElements[0]);
        setLastFocusableEl(focusableElements[focusableElements.length - 1]);
      }
    };

    const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.keyCode !== KEY_CODE_MAP.TAB) return;

      if (!focusTriggered) {
        setFocusTriggered(true);
        manageFocus();
      }

      if (
        event.shiftKey &&
        (document.activeElement === firstFocusableEl ||
          document.activeElement === modalBody.current)
      ) {
        event.preventDefault();
        lastFocusableEl?.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusableEl) {
        event.preventDefault();
        firstFocusableEl?.focus();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClose && event.key === "Escape") {
        event.stopPropagation();
        onClose(event);
      }

      keyboardHandler(event);
    };

    const handleClickOutside = (event: React.SyntheticEvent<HTMLDivElement>) => {
      const clickedOutside =
        onClose &&
        preventOverlayClose === false &&
        !clickedModalBody &&
        modalContent.current &&
        event.target instanceof Element &&
        !modalContent.current.contains(event.target) &&
        /ModalBody|ModalWrapper/.test(event.target.className);

      if (clickedOutside && onClose) onClose(event);

      setClickedModalBody(false);
    };

    const setScrollStates = (
      target: HTMLElement,
      fullScrollOffset: number,
      fixCloseOffset: number,
      scrollBegin: number | null | boolean,
      mobile?: boolean,
    ) => {
      const content = modalContent.current;

      if (!content) return;

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

      // @ts-expect-error TODO
      setScrolled(target.scrollTop >= scrollBegin + (!mobile ? target.scrollTop : 0));
      setFixedClose(target.scrollTop >= fixCloseOffset);
      // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
      setFullyScrolled(
        fixedFooter && target.scrollTop >= scrollHeight - target.clientHeight - fullScrollOffset,
      );
    };

    const getScrollTopPoint = (mobile?: boolean) => {
      const content = modalContent.current;

      if (!content) return null;

      const headingEl = content.querySelector(`${ModalHeading}`);

      if (headingEl) {
        const { top } = headingEl.getBoundingClientRect();
        return top;
      }

      if (mobile) return OFFSET;

      const { top } = content.getBoundingClientRect();

      return top;
    };

    const handleScroll: React.UIEventHandler<HTMLDivElement> = event => {
      if (event.target instanceof HTMLDivElement && event.target === modalBody.current) {
        setScrollStates(event.target, OFFSET, OFFSET, getScrollTopPoint());
      }
    };

    const handleMobileScroll: React.UIEventHandler<HTMLDivElement> = event => {
      if (event.target instanceof HTMLDivElement && event.target === modalContent.current) {
        setScrollStates(event.target, 10, 1, getScrollTopPoint(true), true);
      }
    };

    const handleMouseDown = () => {
      /*
      This is due to issue where it was possible to close Modal,
      even though click started (onMouseDown) in ModalWrapper.
    */
      setClickedModalBody(true);
    };

    const callContextFunctions = () => {
      setDimensions();
      decideFixedFooter();
      manageFocus();
    };

    const getScrollPosition = () => {
      if (scrollingElement.current) {
        return scrollingElement.current.scrollTop;
      }
      return null;
    };

    const setScrollPosition = value => {
      if (scrollingElement.current) {
        scrollingElement.current.scrollTop = value;
      }
    };

    React.useImperativeHandle(ref, () => ({
      getScrollPosition,
      setScrollPosition,
      modalBody,
      modalContent,
    }));

    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
      if (disableAnimation) {
        decideFixedFooter();
        setDimensions();
        setFirstFocus();
      } else {
        const timer: NodeJS.Timeout = setTimeout(() => {
          setLoaded(true);
          decideFixedFooter();
          setDimensions();
          setFirstFocus();
        }, 15);

        return () => {
          clearTimeout(timer);
        };
      }
      // the Modal can only transition in on mount
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
      const handleResize = () => {
        setDimensions();
        decideFixedFooter();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    React.useEffect(() => {
      if (children !== prevChildren) {
        decideFixedFooter();
        setDimensions();
      }
    }, [children, prevChildren]);

    const hasCloseContainer = mobileHeader && (hasModalTitle || (onClose && hasCloseButton));

    return (
      <ModalBody
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onClick={handleClickOutside}
        data-test={dataTest}
        id={id}
        ref={modalBodyRef}
        role="dialog"
        // @ts-expect-error TODO
        autoFocus={autoFocus}
        aria-modal="true"
        aria-labelledby={hasModalTitle ? modalTitleID : null}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={handleMobileScroll}
          fixedFooter={fixedFooter}
          isMobileFullPage={isMobileFullPage}
          disableAnimation={disableAnimation}
        >
          <ModalWrapperContent
            size={size}
            fixedFooter={fixedFooter}
            scrolled={scrolled}
            ref={modalContentRef}
            fixedClose={fixedClose}
            fullyScrolled={fullyScrolled}
            modalWidth={modalWidth}
            footerHeight={footerHeight}
            hasModalSection={hasModalSection}
            isMobileFullPage={isMobileFullPage}
            onMouseDown={handleMouseDown}
          >
            {hasCloseContainer && (
              <CloseContainer
                data-test="CloseContainer"
                modalWidth={modalWidth}
                size={size}
                scrolled={scrolled}
                fixedClose={fixedClose}
                isMobileFullPage={isMobileFullPage}
              >
                {onClose && hasCloseButton && (
                  <ModalCloseButton onClick={onClose} dataTest={CLOSE_BUTTON_DATA_TEST} />
                )}
              </CloseContainer>
            )}
            <ModalContext.Provider
              value={{
                setHasModalTitle,
                setHasModalSection: () => setHasModalSection(true),
                removeHasModalSection: () => setHasModalSection(false),
                callContextFunctions,
                setFooterHeight,
                hasModalSection,
                hasMobileHeader: mobileHeader,
                isMobileFullPage,
                closable: Boolean(onClose),
                isInsideModal: true,
                titleID: modalTitleID,
              }}
            >
              {children}
            </ModalContext.Provider>
          </ModalWrapperContent>
        </ModalWrapper>
      </ModalBody>
    );
  },
);

Modal.displayName = "Modal";
export default Modal;

export { default as ModalHeader } from "./ModalHeader";
export { default as ModalSection } from "./ModalSection";
export { default as ModalFooter } from "./ModalFooter";
