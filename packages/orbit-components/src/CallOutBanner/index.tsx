"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import Stack from "../Stack";
import Text from "../Text";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # CallOutBanner
 *
 * To implement CallOutBanner component into your project you'll need to add the import:
 *
 * ```jsx
 * import CallOutBanner from "@kiwicom/orbit-components/lib/CallOutBanner";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <CallOutBanner>Hello World!</CallOutBanner>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the CallOutBanner component.
 *
 * | Name         | Type                                 | Default | Description                                                                            |
 * | :----------- | :----------------------------------- | :------ | :------------------------------------------------------------------------------------- |
 * | actions      | `React.Node`                         |         | Actions - especially Buttons of the CallOutBanner that will be rendered on the bottom. |
 * | children     | `React.Node`                         |         | The children of the CallOutBanner.                                                     |
 * | dataTest     | `string`                             |         | Optional prop for testing purposes.                                                    |
 * | id           | `string`                             |         | Set `id` for `CallOutBanner`                                                           |
 * | description  | `Translation`                        |         | The displayed description of the CallOutBanner.                                        |
 * | illustration | `React.Element<typeof Illustration>` |         | The displayed Illustration of the CallOutBanner.                                       |
 * | onClick      | `() => void \| Promise`              |         | Function for handling onClick callback. See [functional specs](#functional-specs).     |
 * | tabIndex     | `string \| number`                   |         | Specifies the tab order of an element.                                                 |
 * | **title**    | `Translation`                        |         | The displayed title of the CallOutBanner.                                              |
 *
 * ## Functional specs
 *
 * - When you pass some `onClick` callback, the CallOutBanner will be actionable. That means that it will be possible to click on it and it will have proper elevation level.
 *
 * - By default, the `tabIndex` is null, so it's not possible to focus it. If you either pass `onClick` or specify custom `tabIndex`, the CallOutBanner will be focus-able.
 *
 *
 * @orbit-doc-end
 */
const CallOutBanner = ({
  children,
  illustration,
  actions,
  title,
  onClick,
  tabIndex,
  description,
  dataTest,
  id,
}: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className={cx(
      "orbit-call-out-banner bg-white-normal rounded-50 p-400 lm:flex-row lm:p-600 flex flex-col items-start justify-start border border-solid text-start",
      onClick
        ? "shadow-level1 duration-fast hover:shadow-level2 active:shadow-level2 cursor-pointer border-transparent transition-shadow ease-in-out hover:outline-none active:outline-none"
        : "border-cloud-normal",
    )}
    role="button"
    onClick={onClick}
    tabIndex={(onClick || Number(tabIndex)) && (Number(tabIndex) || 0)}
    data-test={dataTest}
    id={id}
  >
    {illustration && <div className="pb-400 lm:pe-600 lm:pb-0">{illustration}</div>}
    <Stack spacing="400">
      <Stack spacing="200">
        <Stack spacing="100">
          {title && <Heading type="title3">{title}</Heading>}
          {description && <Text>{description}</Text>}
        </Stack>
        {children}
      </Stack>
      {actions}
    </Stack>
  </div>
);

export default CallOutBanner;
