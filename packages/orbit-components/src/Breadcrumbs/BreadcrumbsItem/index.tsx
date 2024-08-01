"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import ChevronForward from "../../icons/ChevronForward";

const Component = ({
  href,
  onClick,
  component: Comp,
  children,
  ...props
}: Props &
  Pick<
    React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>,
    "itemScope" | "itemType" | "itemProp" | "itemID" | "className"
  >) => {
  const isClickable = onClick != null || href != null;
  if (!isClickable) return <div {...props}>{children}</div>;

  if (Comp != null)
    return (
      <Comp {...props} onClick={onClick} href={href}>
        {children}
      </Comp>
    );

  if (href == null)
    return (
      <button type="button" {...props} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );
};

const BreadcrumbsItem = ({
  active = false,
  children,
  dataTest,
  onClick,
  href,
  contentKey,
  component,
  id,
  ...props
}: Props) => {
  return (
    <li
      data-test={dataTest}
      aria-current={active ? "page" : undefined}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
      className="flex items-center"
    >
      <Component
        href={href}
        component={component}
        onClick={onClick}
        itemScope
        itemType="http://schema.org/WebPage"
        itemProp="item"
        itemID={id ?? href}
        {...props}
        className={cx(
          "text-ink-dark",
          active ? "font-bold" : "font-medium",
          (onClick != null || href != null) && [
            active ? "no-underline" : "underline",
            "cursor-pointer",
            "border-none",
            "p-0",
            "outline-offset-1",
            "duration-fast transition-colors ease-in-out",
            "hover:no-underline",
            "hover:text-product-normal-hover",
          ],
        )}
      >
        <span itemProp="name">{children}</span>
      </Component>

      <meta itemProp="position" content={String(contentKey)} />

      {!active && (
        <ChevronForward
          ariaHidden
          reverseOnRtl
          size="small"
          color="tertiary"
          className="mx-100 my-0"
        />
      )}
    </li>
  );
};

export default BreadcrumbsItem;
