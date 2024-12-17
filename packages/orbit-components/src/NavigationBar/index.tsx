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

  const handleNavigationBarPosition = React.useCallback(() => {
    const currentScrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop);

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
  }, [prevScrollPosition, setShown, hideOnScroll]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavigationBarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavigationBarPosition);
    };
  });

  return (
    <nav
      data-test={dataTest}
      id={id}
      className={cx(
        "bg-white-normal p-300 z-navigation-bar fixed inset-x-0 top-0 box-border flex w-full translate-x-0 items-center",
        "duration-normal transform-gpu transition-transform ease-in-out",
        "tb:h-1600 h-1300", // As defined on the const above
        shown ? "translate-y-0" : "tb:-translate-y-1600 -translate-y-1300", // As defined on the const above
        bottomStyle === "shadow" && "shadow-fixed",
        bottomStyle === "border" && "border-cloud-normal border-b",
      )}
      aria-label={ariaLabel}
    >
      <div className="me-200 block w-full">{children}</div>
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
