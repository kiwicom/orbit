"use client";

import * as React from "react";
import cx from "clsx";

import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import type { Props } from "./types";

export const ModalSectionWrapper = ({
  className,
  children,
  suppressed,
  closable,
  isMobileFullPage,
  dataTest,
}: {
  className?: string;
  children: React.ReactNode;
  suppressed?: boolean;
  closable?: boolean;
  isMobileFullPage?: boolean;
  dataTest?: string;
}) => {
  return (
    <section
      className={cx(
        className,
        "orbit-modal-section",
        "py-lg px-md lm:p-xl box-border w-full",
        "border-b-elevation-flat-border-color border-b border-solid",
        "lm:last-of-type:rounded-b-modal lm:first-of-type:rounded-t-modal",
        suppressed
          ? [
              "bg-cloud-light",
              "first-of-type:border-t-elevation-flat-border-color lm:first-of-type:mt-xxl first-of-type:border-t first-of-type:border-solid",
              "last-of-type:border-b-elevation-flat-border-color [&_~_.orbit-modal-footer]:last-of-type:mt-md last-of-type:border-b last-of-type:border-solid",
              closable && "first-of-type:mt-lg",
            ]
          : [
              "bg-white-normal",
              "lm:[&_~_.orbit-modal-footer]:last-of-type:pt-0 last-of-type:border-b-0",
            ],
        !isMobileFullPage && ["lm:[&_~_.orbit-modal-footer]:last-of-type:mt-0"],
      )}
      data-test={dataTest}
    >
      {children}
    </section>
  );
};

const ModalSection = ({ children, suppressed, dataTest }: Props) => {
  const { removeHasModalSection, setHasModalSection, isMobileFullPage, closable } =
    React.useContext(ModalContext);

  useModalContextFunctions();

  /*
    Run on every re-render to prevent setting hasModalSection to false when there's more sections
   */
  React.useEffect(() => {
    if (setHasModalSection) setHasModalSection();
  });

  React.useEffect(() => {
    return () => {
      if (removeHasModalSection) removeHasModalSection();
    };
  }, [removeHasModalSection]);

  return (
    <ModalSectionWrapper
      dataTest={dataTest}
      suppressed={suppressed}
      closable={closable}
      isMobileFullPage={isMobileFullPage}
    >
      {children}
    </ModalSectionWrapper>
  );
};

export default ModalSection;
