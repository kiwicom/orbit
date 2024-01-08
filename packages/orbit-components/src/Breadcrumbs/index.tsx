"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import type { Props as BreadcrumbsItemProps } from "./BreadcrumbsItem/types";
import ChevronBackward from "../icons/ChevronBackward";
import Hide from "../Hide";
import TextLink from "../TextLink";
import { spaceAfterClasses } from "../common/tailwind";

const Breadcrumbs = ({
  children,
  dataTest,
  onGoBack,
  goBackTitle = "Back",
  spaceAfter,
  backHref,
  id,
}: Props) => {
  const childEls = React.Children.toArray(children) as React.ReactElement<BreadcrumbsItemProps>[];

  return (
    <div>
      <Hide on={["smallMobile", "mediumMobile"]}>
        <nav
          className={cx("font-base text-small", spaceAfter && spaceAfterClasses[spaceAfter])}
          aria-label="Breadcrumb"
          id={id}
          data-test={dataTest}
        >
          <ol
            className="m-0 flex list-none flex-wrap p-0"
            itemScope
            itemType="http://schema.org/BreadcrumbList"
          >
            {React.Children.map(childEls, (item, key) => {
              if (!React.isValidElement(item)) return null;
              return React.cloneElement<BreadcrumbsItemProps>(item, {
                active: key === React.Children.count(children) - 1,
                contentKey: key + 1,
              });
            })}
          </ol>
        </nav>
      </Hide>
      <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
        {onGoBack || Boolean(backHref) ? (
          <TextLink
            standAlone
            type="secondary"
            id={id}
            iconLeft={<ChevronBackward reverseOnRtl />}
            dataTest="BreadcrumbsBack"
            onClick={onGoBack}
            href={backHref}
          >
            {goBackTitle}
          </TextLink>
        ) : null}
      </Hide>
    </div>
  );
};

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
export default Breadcrumbs;
