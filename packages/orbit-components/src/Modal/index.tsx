"use client";

import * as React from "react";
import cx from "clsx";

import { ModalContext } from "./ModalContext";
import ModalCloseButton from "./ModalCloseButton";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "./consts";
import useRandomId from "../hooks/useRandomId";
import useMediaQuery from "../hooks/useMediaQuery";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";
import usePrevious from "../hooks/usePrevious";
import useLockScrolling from "../hooks/useLockScrolling";
import type { Instance, Props } from "./types";
import useTheme from "../hooks/useTheme";

const maxWidthClasses: {
  [K in SIZES | "largeMobile" | "footer"]: K extends SIZES ? string : Record<SIZES, string>;
} = {
  [SIZES.EXTRASMALL]: "max-w-modal-extra-small",
  [SIZES.SMALL]: "max-w-modal-small",
  [SIZES.NORMAL]: "max-w-modal-normal",
  [SIZES.LARGE]: "max-w-modal-large",
  [SIZES.EXTRALARGE]: "max-w-modal-extra-large",
  largeMobile: {
    [SIZES.EXTRASMALL]: "lm:max-w-modal-extra-small",
    [SIZES.SMALL]: "lm:max-w-modal-small",
    [SIZES.NORMAL]: "lm:max-w-modal-normal",
    [SIZES.LARGE]: "lm:max-w-modal-large",
    [SIZES.EXTRALARGE]: "lm:max-w-modal-extra-large",
  },
  footer: {
    [SIZES.EXTRASMALL]: "lm:[&_.orbit-modal-footer]:max-w-modal-extra-small",
    [SIZES.SMALL]: "lm:[&_.orbit-modal-footer]:max-w-modal-small",
    [SIZES.NORMAL]: "lm:[&_.orbit-modal-footer]:max-w-modal-normal",
    [SIZES.LARGE]: "lm:[&_.orbit-modal-footer]:max-w-modal-large",
    [SIZES.EXTRALARGE]: "lm:[&_.orbit-modal-footer]:max-w-modal-extra-large",
  },
};

const OFFSET = 40;

const Modal = React.forwardRef<Instance, Props>(
  (
    {
      size = SIZES.NORMAL,
      scrollingElementRef,
      children,
      onClose,
      triggerRef,
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
      ariaLabel,
      ariaLabelledby,
      ariaDescribedby,
    }: Props,
    ref,
  ) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const [fullyScrolled, setFullyScrolled] = React.useState<boolean>(false);
    const [hasModalTitle, setHasModalTitle] = React.useState<boolean>(false);
    const [hasModalDescription, setHasModalDescription] = React.useState<boolean>(false);
    const [hasModalSection, setHasModalSection] = React.useState<boolean>(false);
    const [clickedModalBody, setClickedModalBody] = React.useState<boolean>(false);
    const [fixedClose, setFixedClose] = React.useState<boolean>(false);
    const [modalWidth, setModalWidth] = React.useState<number>(0);
    const [footerHeight, setFooterHeight] = React.useState<number>(0);
    const focusableElements = React.useRef<HTMLElement[]>([]);

    const modalContent = React.useRef<HTMLElement | null>(null);
    const modalBody = React.useRef<HTMLElement | null>(null);
    const modalTitleID = useRandomId();
    const modalDescriptionID = useRandomId();
    const theme = useTheme();

    const { isLargeMobile } = useMediaQuery();
    const scrollingElement = React.useRef<HTMLElement | null>(null);
    const setScrollingElementRefs = React.useCallback(
      node => {
        scrollingElement.current = node;
        if (scrollingElementRef) {
          if (typeof scrollingElementRef === "function") {
            scrollingElementRef(node);
          } else {
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

    React.useEffect(() => {
      focusableElements.current = Array.from(
        modalContent.current?.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTORS) || [],
      );

      if (focusableElements.current.length) {
        focusableElements.current[0].focus();
      }
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClose && event.key === "Escape") {
        event.stopPropagation();
        onClose(event);
      }

      const firstElement = focusableElements.current[0];
      const lastElement = focusableElements.current[focusableElements.current.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
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
    }, []);

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
      } else {
        const timer: NodeJS.Timeout = setTimeout(() => {
          setLoaded(true);
          decideFixedFooter();
          setDimensions();
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

    React.useEffect(() => {
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        triggerRef?.current?.focus();
      };
    }, [triggerRef]);

    const hasCloseContainer = mobileHeader && (hasModalTitle || (onClose && hasCloseButton));

    const value = React.useMemo(
      () => ({
        setHasModalTitle,
        setHasModalDescription,
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
        descriptionID: modalDescriptionID,
      }),
      [
        callContextFunctions,
        hasModalSection,
        isMobileFullPage,
        mobileHeader,
        onClose,
        modalTitleID,
        modalDescriptionID,
      ],
    );

    const cssVars = {
      ...(!isLargeMobile
        ? {
            maxHeight: isMobileFullPage
              ? "100%"
              : `calc(100% - ${theme.orbit.space800} - ${
                  fixedFooter && Boolean(footerHeight) ? footerHeight : 0
                }px)`,
            bottom: `${
              (!isMobileFullPage ? parseInt(theme.orbit.space800, 10) : 0) +
              (fixedFooter && Boolean(footerHeight) ? footerHeight : 0)
            }px`,
          }
        : {
            "--orbit-modal-footer-height": fixedFooter ? `${footerHeight}px` : "0",
          }),
      "--orbit-modal-width": `${modalWidth}px`,
    };

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <div
        className={cx(
          "orbit-modal-body",
          "z-overlay font-base fixed inset-0 box-border size-full overflow-x-hidden outline-none",
          !isMobileFullPage && "bg-[black]/50",
          "lm:overflow-y-auto lm:p-1000 lm:bg-[black]/50",
        )}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onClick={handleClickOutside}
        data-test={dataTest}
        id={id}
        ref={modalBodyRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby || (hasModalTitle ? modalTitleID : undefined)}
        aria-describedby={ariaDescribedby || (hasModalDescription ? modalDescriptionID : undefined)}
      >
        <div
          className={cx(
            "orbit-modal-wrapper",
            "fixed mx-auto my-0 box-border flex min-h-full w-full items-start",
            disableAnimation
              ? !isMobileFullPage && "top-800"
              : [
                  "duration-normal transition-[top] ease-in-out",
                  loaded ? !isMobileFullPage && "top-800" : "top-full",
                ],
            "lm:relative lm:top-0 lm:items-center",
            maxWidthClasses.largeMobile[size],
          )}
        >
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className={cx(
              "orbit-modal-wrapper-content",
              "lm:rounded-modal lm:overflow-visible overflow-y-auto overflow-x-hidden",
              "font-base bg-elevation-flat shadow-level4 absolute box-border w-full",
              "lm:relative lm:bottom-auto lm:pb-0",
              "lm:[&_.orbit-modal-section:last-of-type]:pb-1000 lm:[&_.orbit-modal-section:last-of-type:after]:content-none lm:[&_.orbit-modal-section:last-of-type]:mb-[var(--orbit-modal-footer-height,0px)]",
              "lm:[&_.orbit-modal-mobile-header]:w-[calc(var(--orbit-modal-width)-48px-theme(spacing.1000))]",
              "lm:[&:has(.orbit-modal-header-container:last-child)]:pb-1000",
              footerHeight && "lm:[&_.orbit-modal-section]:rounded-b-none",
              !hasModalSection &&
                "[&_.orbit-modal-header-container]:mb-800 lm:[&_.orbit-modal-header-container]:mb-[var(--orbit-modal-footer-height,0px)]",
              isMobileFullPage
                ? "top-0 max-h-full"
                : [
                    "rounded-t-modal",
                    scrolled && "[&_.orbit-modal-mobile-header]:rounded-tl-modal",
                    scrolled && "[&_.orbit-modal-mobile-header]:top-800",
                  ],

              fixedFooter &&
                footerHeight && [
                  "[&_.orbit-modal-footer]:p-400 [&_.orbit-modal-footer]:fixed [&_.orbit-modal-footer]:bottom-0",
                  "[&_.orbit-modal-footer]:duration-fast [&_.orbit-modal-footer]:transition-shadow [&_.orbit-modal-footer]:ease-in-out",
                  fullyScrolled
                    ? "[&_.orbit-modal-footer]:shadow-modal-scrolled"
                    : "[&_.orbit-modal-footer]:shadow-modal lm:[&_.orbit-modal-footer]:rounded-b-none",
                  "[&_.orbit-modal-section:last-of-type]:pb-600 [&_.orbit-modal-section:last-of-type]:mb-0",
                ],
              fixedFooter
                ? [
                    "lm:[&_.orbit-modal-footer]:!p-800",
                    fullyScrolled && "lm:[&_.orbit-modal-footer]:absolute",
                  ]
                : "lm:[&_.orbit-modal-footer]:p-800",
              fullyScrolled && "lm:[&_.orbit-modal-footer]:shadow-none",
              scrolled
                ? [
                    "[&_.orbit-modal-mobile-header]:visible [&_.orbit-modal-mobile-header]:opacity-100",
                    "lm:[&_.orbit-modal-mobile-header]:top-0",
                  ]
                : "lm:[&_.orbit-modal-mobile-header]:-top-1000",
              modalWidth
                ? "lm:[&_.orbit-modal-footer]:max-w-[var(--orbit-modal-width)]"
                : maxWidthClasses.footer[size],
            )}
            style={cssVars as React.CSSProperties}
            onScroll={handleMobileScroll}
            ref={modalContentRef}
            onMouseDown={handleMouseDown}
          >
            {hasCloseContainer && (
              <div
                className={cx(
                  "z-overlay h-form-box-large pointer-events-none right-0 box-border flex w-full items-center justify-end",
                  "duration-fast transition-[shadow,_background-color] ease-in-out",
                  "lm:rounded-none",
                  fixedClose || scrolled ? "lm:top-0 lm:right-auto fixed" : "absolute",
                  !isMobileFullPage && (fixedClose || scrolled) ? "top-800" : "top-0",
                  !isMobileFullPage && "rounded-t-modal",
                  modalWidth ? "max-w-[var(--orbit-modal-width)]" : maxWidthClasses[size],
                  scrolled && "shadow-fixed bg-white-normal",
                  "[&_+_.orbit-modal-section:first-of-type]:pt-1300 [&_+_.orbit-modal-section:first-of-type]:m-0 [&_+_.orbit-modal-section:first-of-type]:border-t-0",
                  "[&_.orbit-button-primitive]:me-100 [&_.orbit-button-primitive]:pointer-events-auto",
                  "[&_.orbit-button-primitive_svg]:duration-fast [&_.orbit-button-primitive_svg]:text-ink-normal [&_.orbit-button-primitive_svg]:transition-[color] [&_.orbit-button-primitive_svg]:ease-in-out",
                  "[&_.orbit-button-primitive:hover_svg]:text-ink-light-hover [&_.orbit-button-primitive:active_svg]:text-ink-light-active",
                )}
                data-test="CloseContainer"
              >
                {onClose && hasCloseButton && (
                  <ModalCloseButton
                    onClick={onClose}
                    dataTest={CLOSE_BUTTON_DATA_TEST}
                    title={labelClose}
                  />
                )}
              </div>
            )}
            <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";
export default Modal;

export { default as ModalHeader } from "./ModalHeader";
export { default as ModalSection } from "./ModalSection";
export { default as ModalFooter } from "./ModalFooter";
