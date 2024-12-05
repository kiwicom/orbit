"use client";

import * as React from "react";
import cx from "clsx";

import MenuHamburger from "../icons/MenuHamburger";
import ButtonLink from "../ButtonLink";
import useStateWithCallback from "../hooks/useStateWithCallback";
import type { Props } from "./types";

const NAVBAR_HEIGHT = { MOBILE: 52, DESKTOP: 64 };

const NavigationBar = ({
  onMenuOpen,
  children,
  dataTest,
  openTitle = "Open navigation menu",
  id,
  onShow,
  onHide,
  hideOnScroll = true,
  bottomStyle = "shadow",
  ariaLabel = "navigation",
  transparentBgAtTop = false,
}: Props) => {
  const resolveCallback = React.useCallback(
    state => {
      if (onHide && !state) onHide();
      if (onShow && state) onShow();
    },
    [onHide, onShow],
  );
  const [shown, setShown] = useStateWithCallback<boolean>(true, resolveCallback);

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [isTransparentBg, setTransparentBg] = React.useState(transparentBgAtTop);

  const handleNavigationBarPosition = React.useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);

    if (transparentBgAtTop) {
      setTransparentBg(currentScrollPosition <= 0);
    }

    if (!hideOnScroll) return;

    if (
      prevScrollPosition < currentScrollPosition &&
      currentScrollPosition > NAVBAR_HEIGHT.DESKTOP
    ) {
      setShown(false);
    } else {
      setShown(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, setShown, hideOnScroll, transparentBgAtTop, setTransparentBg]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });

  React.useEffect(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);
    if (transparentBgAtTop) {
      setTransparentBg(currentScrollPosition <= 0);
    } else {
      setTransparentBg(false);
    }
  }, [transparentBgAtTop]);

  React.useEffect(() => {
    if (!hideOnScroll) {
      setShown(true);
    }
  }, [hideOnScroll, setShown]);

  return (
    <nav
      data-test={dataTest}
      id={id}
      className={cx(
        "px-400 py-300 tb:p-300 z-navigation-bar fixed inset-x-0 top-0 box-border flex w-full translate-x-0 items-center",
        "duration-normal transform-gpu ease-in-out",
        "tb:h-1600 h-1300", // As defined on the const above
        shown ? "translate-y-0" : "tb:-translate-y-1600 -translate-y-1300", // As defined on the const above
        transparentBgAtTop
          ? "transition-[transform,background-color,border-color]"
          : "transition-transform",
        !isTransparentBg && bottomStyle === "shadow" && "shadow-fixed",
        isTransparentBg && bottomStyle === "border" && "border-transparent", // important for the transition to work well
        !isTransparentBg && bottomStyle === "border" && "border-cloud-normal border-b",
        isTransparentBg ? "bg-transparent" : "bg-white-normal",
      )}
      aria-label={ariaLabel}
    >
      <div className={cx("block w-full", onMenuOpen && "me-200")}>{children}</div>
      {onMenuOpen && (
        <ButtonLink
          type="secondary"
          onClick={onMenuOpen}
          iconLeft={<MenuHamburger />}
          title={openTitle}
        />
      )}
    </nav>
  );
};

export default NavigationBar;
