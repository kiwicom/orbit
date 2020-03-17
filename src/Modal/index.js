// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { StyledButtonLink } from "../ButtonLink";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import media, { getBreakpointWidth } from "../utils/mediaQuery";
import { StyledModalFooter } from "./ModalFooter";
import { MobileHeader, StyledModalHeader, ModalHeading } from "./ModalHeader";
import { StyledModalSection } from "./ModalSection";
import { right } from "../utils/rtl";
import transition from "../utils/transition";
import { ModalContext } from "./ModalContext";
import { QUERIES } from "../utils/mediaQuery/consts";
import randomID from "../utils/randomID";
import useTheme from "../hooks/useTheme";
import ModalCloseButton from "./components/ModalCloseButton";
import isFullyScrolled from "./helpers/isFullyScrolled";
import useFocusTrap from "../hooks/useFocusTrap";

import type { Props, Handlers } from "./index";

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
    `${(!isMobileFullPage ? parseInt(theme.orbit.spaceXLarge, 10) : 0) +
      (fixedFooter && !!footerHeight ? footerHeight : 0)}px`};
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

const getScrollTopPoint = (ref, mobile) => {
  const content = ref.current;
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

const Modal = React.forwardRef<Props, Handlers>(
  (
    {
      dataTest,
      size = SIZES.NORMAL,
      isMobileFullPage = false,
      fixedFooter = false,
      onClose,
      children,
      preventOverlayClose = false,
    },
    ref,
  ) => {
    const [scrolled, setScrolled] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);
    const [fixedClose, setFixedClose] = React.useState(false);
    const [fullyScrolled, setFullyScrolled] = React.useState(false);
    const [hasModalSection, setHasModalSection] = React.useState(false);
    const [modalWidth, setModalWidth] = React.useState(0);
    const [footerHeight, setFooterHeight] = React.useState(0);
    const modalContent = React.useRef(null);
    const modalBody = React.useRef(null);
    const clickedModalBody = React.useRef(false);

    const theme = useTheme();

    const setDimensions = React.useCallback(() => {
      const content = modalContent.current;
      if (content) {
        const footerEl = content.querySelector(`${StyledModalFooter}`);
        const contentDimensions = content.getBoundingClientRect();
        setModalWidth(contentDimensions.width);
        setFooterHeight(footerEl?.clientHeight);
      }
    }, []);

    const decideFixedFooter = React.useCallback(() => {
      setFullyScrolled(isFullyScrolled(modalContent, modalBody));
    }, []);

    const resolveAndSetStates = (
      target: HTMLElement,
      fullScrollOffset: number,
      fixCloseOffset: number,
      scrollBegin: ?number,
      mobile?: boolean,
    ) => {
      const content = modalContent.current;
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
        setScrolled(target.scrollTop >= scrollBegin + (!mobile ? target.scrollTop : 0));
        setFixedClose(target.scrollTop >= fixCloseOffset);
        setFullyScrolled(
          fixedFooter &&
            // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
            target.scrollTop >= scrollHeight - target.clientHeight - fullScrollOffset,
        );
      }
    };

    const handleMobileScroll = ev => {
      if (ev.target instanceof HTMLDivElement && ev.target === modalContent.current) {
        resolveAndSetStates(ev.target, 10, 1, getScrollTopPoint(modalContent, true), true);
      }
    };

    const handleScroll = (ev: Event) => {
      if (ev.target instanceof HTMLDivElement && ev.target === modalBody.current) {
        resolveAndSetStates(ev.target, 40, 40, getScrollTopPoint(modalContent));
      }
    };

    const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
      if (onClose && ev.key === "Escape") {
        ev.stopPropagation();
        onClose(ev);
      }
    };

    const handleMouseDown = () => {
      /*
        This is due to issue where it's was possible to close Modal,
        even though click started (onMouseDown) in ModalWrapper.
      */
      clickedModalBody.current = true;
    };

    const handleClickOutside = ev => {
      if (
        onClose &&
        preventOverlayClose === false &&
        !clickedModalBody.current &&
        modalContent.current &&
        ev.target instanceof Element &&
        !modalContent.current.contains(ev.target) &&
        /ModalBody|ModalWrapper/.test(ev.target.className)
      ) {
        // If is clicked outside of modal
        onClose(ev);
      }
      clickedModalBody.current = false;
    };
    const handleResize = React.useCallback(() => {
      setDimensions();
      decideFixedFooter();
    }, [setDimensions, decideFixedFooter]);

    React.useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [handleResize]);

    React.useEffect(() => {
      const setFirstFocus = () => {
        if (modalBody.current) modalBody.current.focus();
      };
      const timeout = setTimeout(() => {
        setLoaded(true);
        decideFixedFooter();
        setDimensions();
        setFirstFocus();
      }, 15);
      return () => {
        clearTimeout(timeout);
      };
    }, [decideFixedFooter, setDimensions]);

    React.useEffect(() => {
      decideFixedFooter();
      setDimensions();
    }, [children, decideFixedFooter, setDimensions]);

    React.useImperativeHandle<Handlers>(ref, () => ({
      setScrollPosition: value => {
        if (window?.innerWidth >= getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
          if (modalBody.current) {
            modalBody.current.scrollTop = value;
          }
        } else if (modalContent.current) {
          modalContent.current.scrollTop = value;
        }
      },
    }));

    useFocusTrap(modalBody);

    const modalID = React.useMemo(() => randomID("modalID"), []);

    const addModalSection = React.useCallback(() => {
      setHasModalSection(true);
    }, []);

    const removeModalSection = React.useCallback(() => {
      setHasModalSection(false);
    }, []);

    return (
      <ModalBody
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onClick={handleClickOutside}
        data-test={dataTest}
        ref={modalBody}
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalID}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={handleMobileScroll}
          fixedFooter={fixedFooter}
          id={modalID}
          isMobileFullPage={isMobileFullPage}
        >
          <ModalWrapperContent
            size={size}
            fixedFooter={fixedFooter}
            scrolled={scrolled}
            ref={modalContent}
            fixedClose={fixedClose}
            fullyScrolled={fullyScrolled}
            modalWidth={modalWidth}
            footerHeight={footerHeight}
            hasModalSection={hasModalSection}
            isMobileFullPage={isMobileFullPage}
            onMouseDown={handleMouseDown}
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
                setDimensions,
                decideFixedFooter,
                setHasModalSection: addModalSection,
                removeHasModalSection: removeModalSection,
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
  },
);

export default Modal;

export { default as ModalHeader } from "./ModalHeader";
export { default as ModalSection } from "./ModalSection";
export { default as ModalFooter } from "./ModalFooter";
