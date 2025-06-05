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
  dataTest,
  children,
}: {
  className?: string;
  suppressed?: boolean;
  dataTest?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cx(
        className,
        "orbit-modal-header-container",
        "rounded-t-modal box-border block w-full",
        "lm:[&_~_.orbit-modal-section]:rounded-t-none",
        suppressed
          ? [
              "bg-cloud-light py-800 px-400 lm:p-800",
              "[&_~_.orbit-modal-section:first-of-type]:border-t-elevation-flat-border-color [&_~_.orbit-modal-section:first-of-type]:!mt-0 [&_~_.orbit-modal-section:first-of-type]:border-t [&_~_.orbit-modal-section:first-of-type]:border-solid",
            ]
          : ["bg-white-normal pt-600 px-400 lm:pt-800 lm:px-800 lm:pb-0 pb-0"],
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
  const {
    setHasModalTitle,
    setHasModalDescription,
    hasMobileHeader,
    isMobileFullPage,
    titleID,
    descriptionID,
    useTopSafeAreaInset,
  } = React.useContext(ModalContext);

  useModalContextFunctions();

  React.useEffect(() => {
    if (title) setHasModalTitle?.(true);
    return () => {
      setHasModalTitle?.(false);
    };
  }, [title, setHasModalTitle]);

  React.useEffect(() => {
    if (description) setHasModalDescription?.(true);
    return () => {
      setHasModalDescription?.(false);
    };
  }, [description, setHasModalDescription]);

  const hasHeader = Boolean(title || description);

  return (
    <ModalHeaderWrapper suppressed={suppressed} dataTest={dataTest}>
      {illustration}
      {hasHeader && (
        <div
          className={cx(
            !!illustration && "mt-400",
            "[&_.orbit-modal-heading]:pe-800 de:[&_.orbit-modal-heading]:p-0",
          )}
        >
          {title && (
            <h2
              className="orbit-modal-heading text-heading-title2 font-heading-title2 leading-heading-title2 text-heading-foreground lm:text-heading-title0 lm:font-heading-title0 lm:leading-heading-title0 m-0"
              id={titleID}
            >
              {title}
            </h2>
          )}
          {description && (
            <div className="mt-200">
              <Text size="large" as="div" id={descriptionID}>
                {description}
              </Text>
            </div>
          )}
        </div>
      )}
      {children && (
        <div
          className={cx(!hasHeader && !!children ? "mt-0" : [description ? "mt-800" : "mt-400"])}
        >
          {children}
        </div>
      )}
      {title && hasMobileHeader && (
        <div
          className={cx(
            "orbit-modal-mobile-header bg-white-normal",
            "font-base font-heading-display text-extra-large text-heading-foreground ps-600 z-overlay end-1200 h-1300 invisible fixed start-0 box-border inline-block truncate py-0 pe-0 leading-[52px] opacity-0",
            "lm:start-auto lm:end-auto lm:p-0",
            isMobileFullPage && !useTopSafeAreaInset && "top-0",
            isMobileFullPage && useTopSafeAreaInset && "top-safe-top",
            !isMobileFullPage && "top-400",
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
