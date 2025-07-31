"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import type { Props as BreadcrumbsItemProps } from "./BreadcrumbsItem/types";
import ChevronBackward from "../icons/ChevronBackward";
import Hide from "../Hide";
import TextLink from "../TextLink";
import { spaceAfterClasses } from "../common/tailwind";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Breadcrumbs
 *
 * To implement the Button component into your project you'll need to add the import:
 *
 * ```jsx
 * import Breadcrumbs, { BreadcrumbsItem } from "@kiwicom/orbit-components/lib/Breadcrumbs";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Breadcrumbs>
 *   <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
 * </Breadcrumbs>
 * ```
 *
 * ## Props
 *
 * The Table below contains all types of props available in the Breadcrumbs component.
 *
 * | Name         | Type                       | Default  | Description                                                                                                                |
 * | :----------- | :------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
 * | dataTest     | `string`                   |          | Optional prop for testing purposes.                                                                                        |
 * | id           | `string`                   |          | Set `id` for `Breadcrumbs`.                                                                                                |
 * | **children** | `React.Node`               |          | The content of the Breadcrumbs, normally [`BreadcrumbsItem`](#breadcrumbsitem).                                            |
 * | onGoBack     | `event => void \| Promise` |          | Callback for handling back button action. If present the back button is visible.                                           |
 * | backHref     | `string`                   |          | The location for the back button to direct to. Turns the back button into a link when present (renders as an `a` element). |
 * | goBackTitle  | `React.Node`               | `"Back"` | Translation string for the go back link on mobile, defined when onGoBack is defined.                                       |
 * | spaceAfter   | `enum`                     |          | Additional `margin-bottom` after component.                                                                                |
 * | ariaLabel    | `string`                   |          | Optional prop for `aria-label`.                                                                                            |
 *
 * ### enum
 *
 * | spaceAfter   |
 * | :----------- |
 * | `"none"`     |
 * | `"smallest"` |
 * | `"small"`    |
 * | `"normal"`   |
 * | `"medium"`   |
 * | `"large"`    |
 * | `"largest"`  |
 *
 * ## Functional specs
 *
 * - The last BreadcrumbsItem will have the stronger `font-weight` automatically. Also, all meta-information is automatically rendered too, so you don't have to specify it explicitly.
 *
 * ## Subcomponents
 *
 * Breadcrumbs requires one subcomponent - BreadcrumbsItem.
 *
 * ### BreadcrumbsItem
 *
 * ```jsx
 * import BreadcrumbsItem from "@kiwicom/orbit-components/lib/Breadcrumbs/BreadcrumbsItem";
 * ```
 *
 * #### Usage:
 *
 * ```jsx
 * <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
 * ```
 *
 * #### Props
 *
 * The Table below contains all types of props available in BreadcrumbsItem component.
 *
 * | Name         | Type                       | Default         | Description                                          |
 * | :----------- | :------------------------- | :-------------- | :--------------------------------------------------- |
 * | **children** | `string`                   |                 | The content of the BreadcrumbsItem.                  |
 * | dataTest     | `string`                   |                 | Optional prop for testing purposes.                  |
 * | **href**     | `string`                   |                 | The URL to link when the BreadcrumbsItem is clicked. |
 * | id           | `string`                   |                 | HTML `id` attribute for BreadcrumbsItem.             |
 * | onClick      | `event => void \| Promise` |                 | Function for handling the onClick event.             |
 * | component    | `string \| React.Element`  | `a` or `button` | Allows to customize the element to be rendered.      |
 *
 *
 * @orbit-doc-end
 */
const Breadcrumbs = ({
  children,
  dataTest,
  onGoBack,
  goBackTitle = "Back",
  spaceAfter,
  backHref,
  id,
  ariaLabel = "Breadcrumb",
}: Props) => {
  const childEls = React.Children.toArray(children) as React.ReactElement<BreadcrumbsItemProps>[];

  return (
    <div>
      <Hide on={["smallMobile", "mediumMobile"]}>
        <nav
          className={cx("font-base text-small", spaceAfter && spaceAfterClasses[spaceAfter])}
          aria-label={ariaLabel}
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
            iconLeft={<ChevronBackward ariaHidden reverseOnRtl />}
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
