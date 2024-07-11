import * as React from "react";
import cx from "clsx";

import Stack from "../Stack";
import Text from "../Text";
import useTheme from "../hooks/useTheme";
import useSwipe from "./hooks/useSwipe";
import type { Toast as Props } from "./types";

const placements = {
  "top-right": "justify-end top-0",
  "top-center": "justify-center top-0",
  "top-left": "justify-start top-0",
  "bottom-right": "justify-end bottom-0",
  "bottom-center": "justify-center bottom-0",
  "bottom-left": "justify-start bottom-0",
};

const ToastMessage = ({
  onMouseEnter,
  onMouseLeave,
  visible,
  onDismiss,
  dismissTimeout,
  placement,
  icon,
  children,
  offset,
  ariaLive,
}: Props) => {
  const theme = useTheme();
  const ref = React.useRef(null);
  const [isPaused, setPaused] = React.useState(false);
  const { swipeOffset, swipeOpacity } = useSwipe(
    ref,
    onDismiss,
    50,
    placement === "top-left" || placement === "bottom-left" ? "left" : "right",
  );

  return (
    <div
      aria-live={ariaLive}
      role="status"
      className={cx(
        "z-onTop duration-normal absolute inset-x-0 flex cursor-grab transition-all ease-in-out will-change-transform",
        "translate-x-[var(--toast-message-offset-x)] translate-y-[var(--toast-message-offset-y)] opacity-[var(--toast-message-opacity)]",
        placements[placement],
      )}
      style={
        {
          "--toast-message-offset-x": `${swipeOffset}px`,
          "--toast-message-offset-y": `${offset}px`,
          "--toast-message-opacity": swipeOpacity,
        } as React.CSSProperties
      }
    >
      <div
        className={cx(
          "rounded-large bg-ink-dark p-xs relative w-full overflow-hidden will-change-transform",
          "lm:max-w-[360px] lm:w-auto lm:p-sm [&_svg]:min-h-icon-medium",
          visible &&
            "pointer-events-auto animate-[toast-fade-in_theme(transitionDuration.normal)_forwards]",
          !visible &&
            "pointer-events-none animate-[toast-fade-out_theme(transitionDuration.normal)_forwards]",
        )}
        style={
          {
            // Tailwind has no class for this yet
            animationPlayState: isPaused ? "paused" : "running",
          } as React.CSSProperties
        }
        ref={ref}
        onMouseEnter={() => {
          onMouseEnter();
          setPaused(true);
        }}
        onMouseLeave={() => {
          onMouseLeave();
          setPaused(false);
        }}
      >
        <div
          className="rounded-large bg-white-normal z-default absolute left-0 top-0 size-full animate-[toast-light_var(--toast-message-duration)_linear] opacity-10 will-change-transform rtl:animate-[toast-light-rtl_var(--toast-message-duration)_linear]"
          style={
            {
              "--toast-message-duration": `${dismissTimeout}ms`,
              // Tailwind has no class for this yet
              animationPlayState: isPaused ? "paused" : "running",
            } as React.CSSProperties
          }
        />

        <Stack flex shrink spacing="XSmall">
          {icon &&
            React.isValidElement(icon) &&
            // @ts-expect-error TODO: fix this
            React.cloneElement(icon, { size: "small", customColor: theme.orbit.paletteWhite })}
          <Text type="white">{children}</Text>
        </Stack>
      </div>
    </div>
  );
};

export default ToastMessage;
