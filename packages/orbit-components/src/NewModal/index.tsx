"use client";

import * as React from "react";

import { NewModalContext } from "./NewModalContext";
import KEY_CODE_MAP from "../common/keyMaps";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";
import useLockScrolling from "../hooks/useLockScrolling";
import useMediaQuery from "../hooks/useMediaQuery";
import usePrevious from "../hooks/usePrevious";
import useRandomId from "../hooks/useRandomId";
import NewModalDesktop from "./NewModalDesktop";
import NewModalMobile from "./NewModalMobile";
import { SIZES, OFFSET } from "./consts";
import type { Instance, Props } from "./types";
// import { CLOSE_BUTTON_DATA_TEST } from "../Modal/consts";

const NewModal = React.forwardRef<Instance, Props>(
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
      onScroll,
      hasCloseButton = true,
      mobileHeader = true,
      disableAnimation = false,
      dataTest,
      id,
      labelClose = "Close",
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
    // const theme = useTheme();

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

      const footerEl = content.querySelector(".orbit-modal-footer");
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

    const manageFocus = React.useCallback(() => {
      if (!focusTriggered || !modalContent.current) return;

      const focusableElements = modalContent.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_ELEMENT_SELECTORS,
      );

      if (focusableElements.length > 0) {
        setFirstFocusableEl(focusableElements[0]);
        setLastFocusableEl(focusableElements[focusableElements.length - 1]);
      }
    }, [focusTriggered]);

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
        event.target.className &&
        /orbit-modal-wrapper|orbit-modal-body/.test(event.target.className);

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

      setScrolled(target.scrollTop >= Number(scrollBegin) + (!mobile ? target.scrollTop : 0));
      setFixedClose(target.scrollTop >= fixCloseOffset);
      // set fullyScrolled state sooner than the exact end of the scroll (with fullScrollOffset value)
      setFullyScrolled(
        fixedFooter && target.scrollTop >= scrollHeight - target.clientHeight - fullScrollOffset,
      );
    };

    const getScrollTopPoint = (mobile?: boolean) => {
      const content = modalContent.current;

      if (!content) return null;

      const headingEl = content.querySelector(".orbit-modal-heading");

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
        if (onScroll) onScroll(event);
        setScrollStates(event.target, OFFSET, OFFSET, getScrollTopPoint());
      }
    };

    const handleMobileScroll: React.UIEventHandler<HTMLDivElement> = event => {
      if (onScroll) onScroll(event);
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

    const callContextFunctions = React.useCallback(() => {
      setDimensions();
      decideFixedFooter();
      manageFocus();
    }, [manageFocus]);

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

    const value = React.useMemo(
      () => ({
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
      }),
      [
        callContextFunctions,
        hasModalSection,
        isMobileFullPage,
        mobileHeader,
        onClose,
        modalTitleID,
      ],
    );

    const commonProps = {
      size,
      handleKeyDown,
      handleScroll,
      handleClickOutside,
      dataTest,
      id,
      modalBodyRef,
      autoFocus,
      hasModalTitle,
      modalTitleID,
      fixedFooter,
      footerHeight,
      modalWidth,
      hasModalSection,
      scrolled,
      fullyScrolled,
      modalContentRef,
      handleMouseDown,
      onClose,
      hasCloseButton,
      hasCloseContainer,
      fixedClose,
      labelClose,
    };

    if (isLargeMobile) {
      return (
        <NewModalDesktop {...commonProps}>
          <NewModalContext.Provider value={value}>{children}</NewModalContext.Provider>
        </NewModalDesktop>
      );
    }

    return (
      <NewModalMobile
        {...commonProps}
        isMobileFullPage={isMobileFullPage}
        disableAnimation={disableAnimation}
        loaded={loaded}
        handleMobileScroll={handleMobileScroll}
      >
        <NewModalContext.Provider value={value}>{children}</NewModalContext.Provider>
      </NewModalMobile>
    );
  },
);

NewModal.displayName = "NewModal";
export default NewModal;
