"use client";

import * as React from "react";
import cx from "clsx";

import NewModalCloseButton from "../NewModalCloseButton";
import { CLOSE_BUTTON_DATA_TEST, maxWidthClasses } from "../consts";

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
}) => {
  const cssVars = {
    "--orbit-modal-footer-height": fixedFooter ? `${footerHeight}px` : "0",
    "--orbit-modal-width": `${modalWidth}px`,
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      className={cx(
        "orbit-modal-body",
        "z-overlay font-base fixed inset-0 box-border size-full overflow-y-auto overflow-x-hidden outline-none",
        "p-xxl bg-[black]/50",
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
          "relative top-0 items-center",
          "mx-auto my-0 box-border flex min-h-full w-full",
          maxWidthClasses.largeMobile[size],
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={cx(
            "orbit-modal-wrapper-content",
            "rounded-modal overflow-visible overflow-y-auto overflow-x-hidden",
            "font-base bg-elevation-flat shadow-overlay box-border w-full",
            "relative bottom-auto pb-0",
            "[&_.orbit-modal-section:last-of-type]:pb-xxl [&_.orbit-modal-section:last-of-type:after]:content-none [&_.orbit-modal-section:last-of-type]:mb-[var(--orbit-modal-footer-height,0px)]",
            "[&_.orbit-modal-mobile-header]:w-[calc(var(--orbit-modal-width)-48px-theme(spacing.xxl))]",
            footerHeight && "[&_.orbit-modal-section]:rounded-b-none",
            !hasModalSection &&
              "[&_.orbit-modal-header-container]:mb-[var(--orbit-modal-footer-height,0px)]",
            fixedFooter &&
              footerHeight && [
                "[&_.orbit-modal-footer]:p-md [&_.orbit-modal-footer]:fixed [&_.orbit-modal-footer]:bottom-0",
                "[&_.orbit-modal-footer]:duration-fast [&_.orbit-modal-footer]:transition-shadow [&_.orbit-modal-footer]:ease-in-out",
                fullyScrolled
                  ? "[&_.orbit-modal-footer]:shadow-modal-scrolled"
                  : "[&_.orbit-modal-footer]:shadow-modal [&_.orbit-modal-footer]:rounded-b-none",
                "[&_.orbit-modal-section:last-of-type]:pb-lg [&_.orbit-modal-section:last-of-type]:mb-0",
              ],
            fixedFooter
              ? [
                  "[&_.orbit-modal-footer]:!p-xl",
                  fullyScrolled && "[&_.orbit-modal-footer]:absolute",
                ]
              : "[&_.orbit-modal-footer]:p-xl",
            fullyScrolled && "[&_.orbit-modal-footer]:shadow-none",
            scrolled
              ? [
                  "[&_.orbit-modal-mobile-header]:visible [&_.orbit-modal-mobile-header]:opacity-100",
                  "[&_.orbit-modal-mobile-header]:top-0",
                ]
              : "[&_.orbit-modal-mobile-header]:-top-xxl",
            modalWidth
              ? "[&_.orbit-modal-footer]:max-w-[var(--orbit-modal-width)]"
              : maxWidthClasses.footer[size],
          )}
          style={cssVars as React.CSSProperties}
          ref={modalContentRef}
          onMouseDown={handleMouseDown}
        >
          {hasCloseContainer && (
            <div
              className={cx(
                "z-overlay h-form-box-large pointer-events-none right-0 box-border flex w-full items-center justify-end",
                "duration-fast transition-[shadow,_background-color] ease-in-out",
                "rounded-none",
                fixedClose || scrolled ? "fixed right-auto top-0" : "absolute",
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
