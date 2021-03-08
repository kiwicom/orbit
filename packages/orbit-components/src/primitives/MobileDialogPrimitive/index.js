// @flow
import React, { useCallback, useMemo } from "react";

import randomID from "../../utils/randomID";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import Portal from "../../Portal";
import { StyledTooltipChildren } from "../TooltipPrimitive";
import DialogContent from "./components/DialogContent";

import type { Props } from "./index";

const MobileDialog = ({
  children,
  enabled = true,
  tabIndex = "0",
  dataTest,
  content,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
}: Props) => {
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);
  const [shown, setshown, setshownWithTimeout] = useStateWithTimeout<boolean>(false, 200);
  const mobileDialogID = useMemo(() => randomID("mobileDialogID"), []);

  const handleInMobile = useCallback(
    ev => {
      ev.preventDefault();
      if (stopPropagation) {
        ev.stopPropagation();
      }

      setRender(true);
      setshownWithTimeout(true);
      clearRenderTimeout();
    },
    [clearRenderTimeout, setRender, setshownWithTimeout, stopPropagation],
  );

  const handleOutMobile = useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
      setshown(false);
      setRenderWithTimeout(false);
    },
    [setRenderWithTimeout, setshown, stopPropagation],
  );

  if (!enabled) return children;

  return (
    <>
      <StyledTooltipChildren
        onClick={handleInMobile}
        aria-describedby={enabled ? mobileDialogID : undefined}
        tabIndex={enabled ? tabIndex : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        block={block}
      >
        {children}
      </StyledTooltipChildren>
      {enabled && render && (
        <Portal renderInto="dialogs">
          <DialogContent
            dataTest={dataTest}
            shown={shown}
            dialogId={mobileDialogID}
            onClose={handleOutMobile}
          >
            {content}
          </DialogContent>
        </Portal>
      )}
    </>
  );
};

export default MobileDialog;
