import * as React from "react";

import useRandomId from "../../hooks/useRandomId";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import Portal from "../../Portal";
import { StyledTooltipChildren } from "../TooltipPrimitive";
import DialogContent from "./components/DialogContent";
import type { Props } from "./types";

const MobileDialog = ({
  children,
  enabled = true,
  onShow,
  renderInPortal = true,
  tabIndex = 0,
  dataTest,
  content,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
  lockScrolling,
}: Props) => {
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);
  const [shown, setShown, setShownWithTimeout] = useStateWithTimeout<boolean>(false, 200);
  const mobileDialogID = useRandomId();

  const handleInMobile = React.useCallback(
    ev => {
      ev.preventDefault();
      if (stopPropagation) {
        ev.stopPropagation();
      }

      setRender(true);
      if (onShow) onShow();
      setShownWithTimeout(true);
      clearRenderTimeout();
    },
    [clearRenderTimeout, setRender, setShownWithTimeout, stopPropagation],
  );

  const handleOutMobile = React.useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
      setShown(false);
      setRenderWithTimeout(false);
    },
    [setRenderWithTimeout, setShown, stopPropagation],
  );

  if (!enabled && children) return <>{children}</>;

  const dialog = (
    <DialogContent
      dataTest={dataTest}
      shown={shown}
      lockScrolling={lockScrolling}
      dialogId={mobileDialogID}
      onClose={handleOutMobile}
    >
      {content}
    </DialogContent>
  );

  return (
    <>
      <StyledTooltipChildren
        onClick={handleInMobile}
        aria-describedby={enabled ? mobileDialogID : undefined}
        tabIndex={enabled ? Number(tabIndex) : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        block={block}
      >
        {children}
      </StyledTooltipChildren>
      {enabled &&
        render &&
        (renderInPortal ? <Portal renderInto="dialogs">{dialog}</Portal> : dialog)}
    </>
  );
};

export default MobileDialog;
