import * as React from "react";
import cx from "clsx";

import type * as Common from "../../../common/types";
import Button from "../../../Button";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import useLockScrolling from "../../../hooks/useLockScrolling";

interface Props extends Common.Globals {
  shown: boolean;
  lockScrolling?: boolean;
  dialogId: string;
  labelClose: React.ReactNode;
  children: React.ReactNode;
  onClose: (ev: React.SyntheticEvent<HTMLElement>) => void;
}

const DialogContent = ({
  dataTest,
  shown,
  lockScrolling = true,
  labelClose,
  dialogId,
  children,
  onClose,
}: Props) => {
  const overlay = React.useRef(null);
  const dialog = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(dialog, lockScrolling);
  const handleClickOutside = React.useCallback(
    ev => {
      ev.stopPropagation();
      if (ev.target === overlay.current) {
        onClose(ev);
      }
    },
    [onClose],
  );
  const handleInnerClick = React.useCallback(
    ev => {
      if (dialog.current) {
        const focusableElements = dialog.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose(ev);
        }
      }
    },
    [onClose],
  );
  return (
    <div className="w-full" role="dialog" id={dialogId} data-test={dataTest}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={cx(
          "fixed inset-0 z-[10011] size-full bg-[rgba(23,27,30,0.6)]",
          "[transition:opacity_theme(transitionDuration.normal)_ease-in-out,_visibility_theme(transitionDuration.fast)_linear]",
          shown ? "visible opacity-100" : "duration-normal invisible opacity-0",
        )}
        ref={overlay}
        onClick={handleClickOutside}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className={cx(
          "bg-ink-dark shadow-raised-reverse p-md bottom-md inset-x-md fixed z-[10012] box-border max-h-[calc(100%-theme(spacing.xl))] w-[calc(100%-theme(spacing.xl))] overflow-y-scroll rounded-[12px]",
          "[transition:transform_theme(transitionDuration.normal)_ease-in-out,_visibility_theme(transitionDuration.fast)_linear]",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_img]:max-w-full",
          shown
            ? "visible translate-y-0 opacity-100"
            : "duration-normal invisible translate-y-[calc(100%+theme(spacing.md))] opacity-0",
        )}
        ref={dialog}
        role="tooltip"
        aria-hidden={!shown}
        onClick={handleInnerClick}
      >
        <div className="font-base text-normal text-white-normal mb-md [&_.orbit-text]:text-normal [&_.orbit-list-item]:text-normal [&_.orbit-text]:text-white-normal [&_.orbit-list-item]:text-white-normal [&_.orbit-text-link]:text-white-normal font-normal leading-normal [&_.orbit-list-item]:font-normal [&_.orbit-text]:font-normal">
          {children}
        </div>
        <Button type="secondary" fullWidth onClick={onClose}>
          {labelClose}
        </Button>
      </div>
    </div>
  );
};

export default DialogContent;
