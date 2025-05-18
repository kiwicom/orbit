"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import createRel from "../primitives/ButtonPrimitive/common/createRel";
import { sizeClasses, typeClasses } from "./helpers/twClasses";

function filterAriaDataProps(props: object) {
  return Object.keys(props).reduce((acc, key) => {
    if (key.startsWith("data-") || key.startsWith("aria-")) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

const getComponent = (href: string | undefined, asComponent: Props["asComponent"]) => {
  if (asComponent) return asComponent;
  if (href) return "a";
  return "button";
};

const IconContainer = ({ children, size }) => {
  if (!children) return null;
  return (
    <span
      className={cx("flex items-center", {
        "[&_svg]:w-icon-large [&_svg]:h-icon-large": size === SIZE_OPTIONS.LARGE,
        "[&_svg]:w-icon-small [&_svg]:h-icon-small": size === SIZE_OPTIONS.SMALL,
        "[&_svg]:w-icon-medium [&_svg]:h-icon-medium":
          !size || (size !== SIZE_OPTIONS.SMALL && size !== SIZE_OPTIONS.LARGE),
      })}
    >
      {children}
    </span>
  );
};

const TextLink = ({
  ariaCurrent,
  type = TYPE_OPTIONS.PRIMARY,
  size,
  children,
  href,
  external = false,
  rel,
  iconLeft,
  iconRight,
  onClick,
  dataTest,
  download,
  id,
  tabIndex,
  asComponent,
  stopPropagation = false,
  title,
  standAlone,
  noUnderline,
  ...props
}: Props) => {
  const onClickHandler = (ev: React.SyntheticEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev);
  };

  const filteredAriaDataProps = filterAriaDataProps(props);
  const Component = getComponent(href, asComponent);

  return (
    <Component
      aria-current={ariaCurrent}
      id={id}
      href={href}
      target={external ? "_blank" : undefined}
      rel={createRel({ href, external, rel })}
      onClick={onClickHandler}
      data-test={dataTest}
      tabIndex={tabIndex}
      type={Component === "button" ? "button" : undefined}
      role={!href && onClick ? "button" : undefined}
      title={title}
      download={download}
      className={cx(
        "orbit-text-link font-base duration-fast inline-flex cursor-pointer items-center font-medium transition-colors delay-0 ease-in-out hover:no-underline hover:outline-none active:no-underline active:outline-none",
        type === "secondary" && "orbit-text-link--secondary",
        standAlone && "h-form-box-normal",
        typeClasses[type],
        size != null && sizeClasses[size],
        noUnderline ? "no-underline" : "underline",
      )}
      {...filteredAriaDataProps}
    >
      <IconContainer size={size}>{iconLeft}</IconContainer>
      {children}
      <IconContainer size={size}>{iconRight}</IconContainer>
    </Component>
  );
};

export default TextLink;
