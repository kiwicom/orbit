import * as React from "react";
import cx from "clsx";
import { FloatingPortal } from "@floating-ui/react";

import useRandomId from "../../hooks/useRandomId";
import TooltipContent from "./components/TooltipContent";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import type { Props } from "./types";

export const TooltipWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLProps<HTMLSpanElement> & {
    block?: Props["block"];
    enabled?: Props["enabled"];
    removeUnderlinedText?: Props["removeUnderlinedText"];
  }
>(({ block, enabled, removeUnderlinedText, ...props }, ref) => {
  return (
    <span
      className={cx(
        "orbit-tooltip-wrapper",
        "max-w-full cursor-auto",
        "focus:outline-none active:outline-none [&_:disabled]:pointer-events-none",
        block ? "flex" : "inline-flex",
        enabled &&
          !removeUnderlinedText &&
          "[&_.orbit-text]:inline-block [&_.orbit-text]:underline [&_.orbit-text]:decoration-current [&_.orbit-text]:decoration-dotted",
      )}
      ref={ref}
      role="button"
      {...props}
    />
  );
});

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

  const handleIn = React.useCallback(() => {
    setRender(true);
    setShown(true);
    if (onShow) onShow();
    clearRenderTimeout();
  }, [clearRenderTimeout, setRender, onShow]);

  const handleOut = React.useCallback(() => {
    setShown(false);
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

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
        // eslint-disable-next-line orbit-components/unique-id
        (renderInPortal ? <FloatingPortal id="tooltips">{tooltip}</FloatingPortal> : tooltip)}
    </>
  );
};

export default TooltipPrimitive;
