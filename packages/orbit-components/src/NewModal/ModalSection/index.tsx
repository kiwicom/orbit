import * as React from "react";
import cx from "clsx";

import type * as Common from "../../common/types";
import type { Props as ModalContextProps } from "../ModalContext";
import { ModalContext } from "../ModalContext";

export interface Props extends Common.Globals, ModalContextProps {
  readonly children: React.ReactNode;
  readonly suppressed?: boolean;
}

export const ModalSectionWrapper = ({
  className,
  children,
  suppressed,
  // closable,
  isMobileFullPage,
  dataTest,
  hasModalHeader,
  isModalHeaderSuppressed,
}: {
  className?: string;
  children: React.ReactNode;
  suppressed?: boolean;
  // closable?: boolean;
  isMobileFullPage?: boolean;
  dataTest?: string;
  hasModalHeader?: boolean;
  isModalHeaderSuppressed?: boolean;
}) => {
  return (
    <section
      className={cx(
        className,
        "orbit-modal-section",
        "py-600 px-400 lm:p-800 box-border w-full",
        "border-b-elevation-flat-border-color border-b border-solid",
        "lm:last-of-type:rounded-b-modal lm:first-of-type:rounded-t-modal",
        hasModalHeader && "lm:first-of-type:rounded-t-none",
        isModalHeaderSuppressed && "first-of-type:!mt-0",
        suppressed
          ? [
              "bg-cloud-light",
              "first-of-type:border-t-elevation-flat-border-color lm:first-of-type:mt-1000 first-of-type:border-t first-of-type:border-solid",
              "last-of-type:border-b-elevation-flat-border-color [&_~_.orbit-modal-footer]:last-of-type:mt-400 last-of-type:border-b last-of-type:border-solid",
              // closable &&
              "first-of-type:mt-600",
            ]
          : [
              "bg-white-normal",
              // "lm:[&_~_.orbit-modal-footer]:last-of-type:pt-0 last-of-type:border-b-0",
              "last-of-type:border-b-0",
            ],
        !isMobileFullPage && ["lm:[&_~_.orbit-modal-footer]:last-of-type:mt-0"],
      )}
      data-test={dataTest}
    >
      {children}
    </section>
  );
};

const ModalSection = ({ suppressed, children, dataTest }: Props) => {
  const { hasModalHeader, isModalHeaderSuppressed, removeHasModalSection, setHasModalSection } =
    React.useContext(ModalContext);

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
      hasModalHeader={hasModalHeader}
      isModalHeaderSuppressed={isModalHeaderSuppressed}
    >
      {children}
    </ModalSectionWrapper>
  );
};

export default ModalSection;
