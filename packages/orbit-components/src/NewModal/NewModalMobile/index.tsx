"use client";

import * as React from "react";
import cx from "clsx";

import NewModalCloseButton from "../NewModalCloseButton";
import { CLOSE_BUTTON_DATA_TEST, maxWidthClasses } from "../consts";
import useTheme from "../../hooks/useTheme";

const NewModalDesktop = ({
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
  children,
  isMobileFullPage,
  disableAnimation,
  loaded,
  handleMobileScroll,
}) => {
  const theme = useTheme();

  const cssVars = {
    ...{
      maxHeight: isMobileFullPage
        ? "100%"
        : `calc(100% - ${theme.orbit.spaceXLarge} - ${
            fixedFooter && Boolean(footerHeight) ? footerHeight : 0
          }px)`,
      bottom: `${
        (!isMobileFullPage ? parseInt(theme.orbit.spaceXLarge, 10) : 0) +
        (fixedFooter && Boolean(footerHeight) ? footerHeight : 0)
      }px`,
    },
    "--orbit-modal-width": `${modalWidth}px`,
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      className={cx(
        "orbit-modal-body",
        "z-overlay font-base fixed inset-0 box-border size-full overflow-x-hidden outline-none",
        !isMobileFullPage && "bg-[black]/50",
      )}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onScroll={handleScroll}
      onClick={handleClickOutside}
      data-test={dataTest}
      id={id}
      ref={modalBodyRef}
      role="dialog"
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      aria-modal="true"
      aria-labelledby={hasModalTitle ? modalTitleID : ""}
    >
      <div
        className={cx(
          "orbit-modal-wrapper",
          "fixed mx-auto my-0 box-border flex min-h-full w-full items-start",
          disableAnimation
            ? !isMobileFullPage && "top-xl"
            : [
                "duration-normal transition-[top] ease-in-out",
                loaded ? !isMobileFullPage && "top-xl" : "top-full",
              ],
          maxWidthClasses.largeMobile[size],
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={cx(
            "orbit-modal-wrapper-content",
            "overflow-y-auto overflow-x-hidden",
            "font-base bg-elevation-flat shadow-overlay absolute box-border w-full",
            !hasModalSection && "[&_.orbit-modal-header-container]:mb-xl",
            isMobileFullPage
              ? "top-0 max-h-full"
              : [
                  "rounded-t-modal",
                  scrolled && "[&_.orbit-modal-mobile-header]:rounded-tl-modal",
                  scrolled && "[&_.orbit-modal-mobile-header]:top-xl",
                ],

            fixedFooter &&
              footerHeight && [
                "[&_.orbit-modal-footer]:p-md [&_.orbit-modal-footer]:fixed [&_.orbit-modal-footer]:bottom-0",
                "[&_.orbit-modal-footer]:duration-fast [&_.orbit-modal-footer]:transition-shadow [&_.orbit-modal-footer]:ease-in-out",
                fullyScrolled
                  ? "[&_.orbit-modal-footer]:shadow-modal-scrolled"
                  : "[&_.orbit-modal-footer]:shadow-modal",
                "[&_.orbit-modal-section:last-of-type]:pb-lg [&_.orbit-modal-section:last-of-type]:mb-0",
              ],
            scrolled &&
              "[&_.orbit-modal-mobile-header]:visible [&_.orbit-modal-mobile-header]:opacity-100",
            !modalWidth && maxWidthClasses.footer[size],
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
                fixedClose || scrolled ? "fixed" : "absolute",
                !isMobileFullPage && (fixedClose || scrolled) ? "top-xl" : "top-0",
                !isMobileFullPage && "rounded-t-modal",
                modalWidth ? "max-w-[var(--orbit-modal-width)]" : maxWidthClasses[size],
                scrolled && "shadow-fixed bg-white-normal",
                "[&_+_.orbit-modal-section:first-of-type]:pt-xxxl [&_+_.orbit-modal-section:first-of-type]:m-0 [&_+_.orbit-modal-section:first-of-type]:border-t-0",
                "[&_.orbit-button-primitive]:me-xxs [&_.orbit-button-primitive]:pointer-events-auto",
                "[&_.orbit-button-primitive_svg]:duration-fast [&_.orbit-button-primitive_svg]:text-ink-normal [&_.orbit-button-primitive_svg]:transition-[color] [&_.orbit-button-primitive_svg]:ease-in-out",
                "[&_.orbit-button-primitive:hover_svg]:text-ink-light-hover [&_.orbit-button-primitive:active_svg]:text-ink-light-active",
              )}
              data-test="CloseContainer"
            >
              {onClose && hasCloseButton && (
                <NewModalCloseButton
                  onClick={onClose}
                  dataTest={CLOSE_BUTTON_DATA_TEST}
                  title={labelClose}
                />
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewModalDesktop;
