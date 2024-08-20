import * as React from "react";
import cx from "clsx";

interface Props {
  readonly children: React.ReactNode;
}

const ModalFooter = ({ children }: Props) => {
  const childrenLength = React.Children.toArray(children).length;

  return (
    <div
      className={cx(
        "orbit-modal-footer",
        // "z-overlay",
        "bg-white-normal px-400 pb-400 lm:p-800 box-border flex w-full pt-0",
        "duration-fast transition-shadow ease-in-out",
        "sm:max-lm:[&_.orbit-button-primitive]:h-form-box-normal sm:max-lm:[&_.orbit-button-primitive]:text-button-normal",
        "lm:rounded-b-modal",
        childrenLength > 1 ? "lm:justify-between" : "lm:justify-end",
        "[&_.orbit-modal-footer-child:last-of-type]:p-0",
      )}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
