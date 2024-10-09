import * as React from "react";
import cx from "clsx";

import type * as Common from "../../common/types";
import Text from "../../Text";
import { ModalContext } from "../ModalContext";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly illustration?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly suppressed?: boolean;
}

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
        suppressed
          ? ["bg-cloud-light py-800 px-400 lm:p-800"]
          : ["bg-white-normal pt-600 px-400 lm:pt-800 lm:px-800 pb-0"],
      )}
      data-test={dataTest}
    >
      {children}
    </div>
  );
};

const ModalHeader = ({
  description,
  title,
  illustration,
  suppressed,
  dataTest,
  children,
}: Props) => {
  const { setHasModalHeader, setIsModalHeaderSuppressed } = React.useContext(ModalContext);

  React.useEffect(() => {
    if (setHasModalHeader) setHasModalHeader(true);
  });

  React.useEffect(() => {
    if (suppressed) setIsModalHeaderSuppressed?.(true);
    return () => {
      setIsModalHeaderSuppressed?.(true);
    };
  }, [suppressed, setIsModalHeaderSuppressed]);

  const hasHeader = Boolean(title || description);

  return (
    <ModalHeaderWrapper suppressed={suppressed} dataTest={dataTest}>
      {illustration}
      {title && (
        <h2
          className={cx(
            "orbit-modal-heading",
            illustration ? "mt-400" : "mt-0",
            "pe-800 de:p-0",
            "text-heading-title2 font-heading-title2 leading-heading-title2 text-heading-foreground",
            "lm:text-heading-title0 lm:font-heading-title0 lm:leading-heading-title0",
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <div className={cx(title ? "mt-200" : [illustration ? "mt-400" : "mt-0"])}>
          <Text size="large" as="div">
            {description}
          </Text>
        </div>
      )}
      {children && (
        <div
          className={cx(!illustration && !hasHeader ? "mt-0" : [description ? "mt-800" : "mt-400"])}
        >
          {children}
        </div>
      )}
      {/* TODO: mobileHeader */}
    </ModalHeaderWrapper>
  );
};

export default ModalHeader;
