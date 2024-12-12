import * as React from "react";
import { FloatingPortal } from "@floating-ui/react";

import useRandomId from "../../hooks/useRandomId";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import TooltipContent from "./components/TooltipContent";
import TooltipWrapper from "./components/TooltipWrapper";
import type { Props } from "./types";

const TooltipPrimitive = ({
  children,
  enabled = true,
  tooltipShown,
  tabIndex = "0",
  onShow,
  dataTest,
  id,
  renderInPortal = true,
  size = "small",
  content,
  error,
  help,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
  placement,
  noFlip,
  offset,
}: Props) => {
  const [shown, setShown] = React.useState(false);
  const [referenceElement, setReferenceElement] = React.useState<HTMLSpanElement | null>(null);

  const [render, setRender, setRenderWithTimeout, clearRenderTimeout] =
    useStateWithTimeout<boolean>(false, 200);

  const tooltipId = useRandomId();

  const handleEsc = React.useCallback(
    (ev: { key: string }) => {
      if (ev.key === "Escape") {
        setShown(false);
        setRenderWithTimeout(false);
        document.removeEventListener("keydown", handleEsc);
      }
    },
    [setRenderWithTimeout],
  );

  const handleOut = React.useCallback(() => {
    setShown(false);
    setRenderWithTimeout(false);
    document.removeEventListener("keydown", handleEsc);
  }, [handleEsc, setRenderWithTimeout]);

  const handleIn = React.useCallback(() => {
    setRender(true);
    setShown(true);
    if (onShow) onShow();
    clearRenderTimeout();
    document.addEventListener("keydown", handleEsc);
  }, [setRender, onShow, clearRenderTimeout, handleEsc]);

  const handleClick = React.useCallback(
    (ev: React.MouseEvent<HTMLSpanElement | HTMLDivElement>) => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
    },
    [stopPropagation],
  );

  React.useEffect(() => {
    if (tooltipShown) {
      handleIn();
    } else {
      handleOut();
    }
  }, [tooltipShown, handleIn, handleOut]);

  const handleOutMobile = React.useCallback(() => {
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

  if (!enabled) return <>{children}</>;

  const tooltip = (
    <TooltipContent
      parent={children}
      dataTest={dataTest}
      id={id}
      shown={shown}
      size={size}
      error={error}
      help={help}
      tooltipId={id || tooltipId}
      onClick={handleClick}
      onClose={handleOut}
      onCloseMobile={handleOutMobile}
      onEnter={handleIn}
      placement={placement}
      noFlip={noFlip}
      offset={offset}
      referenceElement={referenceElement}
    >
      {content}
    </TooltipContent>
  );

  return (
    <>
      <TooltipWrapper
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleClick}
        onFocus={handleIn}
        onBlur={handleOut}
        ref={setReferenceElement}
        aria-describedby={enabled ? id || tooltipId : undefined}
        tabIndex={enabled ? Number(tabIndex) : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        block={block}
      >
        {children}
      </TooltipWrapper>
      {enabled &&
        render &&
        (renderInPortal ? <FloatingPortal id="tooltips">{tooltip}</FloatingPortal> : tooltip)}
    </>
  );
};

export default TooltipPrimitive;
