"use client";

import * as React from "react";
import cx from "clsx";

import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import type { Props } from "./types";

const getChildFlex = (flex: Props["flex"], key: number) => {
  if (Array.isArray(flex)) {
    return flex.length !== 1 ? flex[key] || flex[0] : flex[0];
  }

  return flex;
};

const wrappedChildren = (children: React.ReactNode, flex: Props["flex"]) => {
  if (!Array.isArray(children)) return children;

  return React.Children.map(children, (child, key) => {
    if (!React.isValidElement(child)) return null;
    return (
      <div
        className="orbit-modal-footer-child pe-xs box-border p-0"
        style={{ flex: getChildFlex(flex, key) }}
        data-test="footer-el-wrapper"
      >
        {React.cloneElement(child, {
          // @ts-expect-error React.cloneElement  issue
          ref: child.ref
            ? node => {
                // Call the original ref, if any
                // @ts-expect-error React.cloneElement  issue
                const { ref } = child;
                if (typeof ref === "function") {
                  ref(node);
                } else if (ref !== null) {
                  ref.current = node;
                }
              }
            : null,
        })}
      </div>
    );
  });
};

const ModalFooter = ({ dataTest, children, flex = "0 1 auto" }: Props) => {
  const { setFooterHeight } = React.useContext(ModalContext);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const childrenLength = React.Children.toArray(children).length;

  useModalContextFunctions();

  React.useEffect(() => {
    function transitionEndHandler() {
      if (setFooterHeight && containerRef.current) {
        setFooterHeight(containerRef.current.clientHeight);
      }
    }
    const containerEl = containerRef.current;
    containerEl?.addEventListener("transitionend", transitionEndHandler);
    return () => {
      containerEl?.removeEventListener("transitionend", transitionEndHandler);
    };
  }, [setFooterHeight]);

  return (
    <div
      className={cx(
        "orbit-modal-footer",
        "z-overlay bg-white-normal px-md pb-md box-border flex w-full pt-0",
        "duration-fast transition-shadow ease-in-out",
        "sm:max-lm:[&_.orbit-button-primitive]:h-form-box-normal sm:max-lm:[&_.orbit-button-primitive]:text-button-normal",
        childrenLength > 1 ? "lm:justify-between" : "lm:justify-end",
        "[&_.orbit-modal-footer-child:last-of-type]:p-0",
      )}
      ref={containerRef}
      data-test={dataTest}
    >
      {flex && wrappedChildren(children, flex)}
    </div>
  );
};

export default ModalFooter;
