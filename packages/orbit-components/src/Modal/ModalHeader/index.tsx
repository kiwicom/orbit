"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../../Text";
import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import type { Props } from "./types";

export const ModalHeaderWrapper = ({
  className,
  suppressed,
  isMobileFullPage,
  dataTest,
  children,
}: {
  className?: string;
  suppressed?: boolean;
  isMobileFullPage?: boolean;
  dataTest?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cx(
        className,
        "orbit-modal-header-container",
        "lm:rounded-t-modal box-border block w-full",
        !isMobileFullPage && "rounded-t-modal-mobile",
        "lm:[&_~_.orbit-modal-section:first-of-type]:rounded-t-none [&_~_.orbit-modal-section:first-of-type]:rounded-t-none",
        suppressed
          ? [
              "bg-cloud-light py-xl px-md lm:p-xl",
              "[&_~_.orbit-modal-section:first-of-type]:border-t-elevation-flat-border-color [&_~_.orbit-modal-section:first-of-type]:!mt-0 [&_~_.orbit-modal-section:first-of-type]:border-t [&_~_.orbit-modal-section:first-of-type]:border-solid",
            ]
          : ["bg-white-normal pt-lg px-md lm:pt-xl lm:px-xl lm:pb-0 pb-0"],
      )}
      data-test={dataTest}
    >
      {children}
    </div>
  );
};

const ModalHeader = ({
  illustration,
  suppressed,
  children,
  description,
  title,
  dataTest,
}: Props) => {
  const { setHasModalTitle, hasMobileHeader, isMobileFullPage, titleID } =
    React.useContext(ModalContext);

  useModalContextFunctions();

  React.useEffect(() => {
    if (title) setHasModalTitle?.(true);
    return () => {
      setHasModalTitle?.(false);
    };
  }, [title, setHasModalTitle]);

  const hasHeader = Boolean(title || description);

  return (
    <ModalHeaderWrapper
      suppressed={suppressed}
      dataTest={dataTest}
      isMobileFullPage={isMobileFullPage}
    >
      {illustration}
      {hasHeader && (
        <div
          className={cx(
            !!illustration && "mt-md",
            "[&_.orbit-modal-heading]:pe-xl de:[&_.orbit-modal-heading]:p-0",
          )}
        >
          {title && (
            <h2
              className="orbit-modal-heading text-heading-title2 font-heading-title2 leading-heading-title2 text-heading-foreground lm:text-heading-title1 lm:font-heading-title1 lm:leading-heading-title1 m-0"
              id={titleID}
            >
              {title}
            </h2>
          )}
          {description && (
            <div className="mt-xs">
              <Text size="large" as="div">
                {description}
              </Text>
            </div>
          )}
        </div>
      )}
      {children && (
        <div className={cx(!hasHeader && !!children ? "mt-0" : [description ? "mt-xl" : "mt-md"])}>
          {children}
        </div>
      )}
      {title && hasMobileHeader && (
        <div
          className={cx(
            "orbit-modal-mobile-header bg-white-normal",
            "font-base font-heading-display text-extra-large text-heading-foreground ps-lg z-overlay invisible fixed end-[48px] start-0 box-border inline-block h-[52px] truncate py-0 pe-0 leading-[52px] opacity-0",
            "lm:start-auto lm:end-auto lm:p-0",
            isMobileFullPage ? "top-0" : "top-[16px]",
          )}
          role="presentation"
        >
          {title}
        </div>
      )}
    </ModalHeaderWrapper>
  );
};

export default ModalHeader;
