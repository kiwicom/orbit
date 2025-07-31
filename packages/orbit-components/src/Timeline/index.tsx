"use client";

import * as React from "react";
import cx from "clsx";

import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepProvider } from "./TimelineContext";
import { spaceAfterClasses } from "../common/tailwind";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Timeline
 *
 * To implement the `Timeline` component into your project you'll need to add the import:
 *
 * ```jsx
 * import Timeline, { TimelineStep } from "@kiwicom/orbit-components/lib/Timeline";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Timeline>
 *   <TimelineStep label="In Progress" type="success">
 *     We'll wait for the carrier(s) to send us the refund and contact them again if necessary.
 *   </TimelineStep>
 * </Timeline>
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the **Timeline** component.
 *
 * | Name         | Type                | Default | Description                                                                               |
 * | :----------- | :------------------ | :------ | :---------------------------------------------------------------------------------------- |
 * | **children** | `React.Node`        |         | List of [`TimelineStep`](#TimelineStep) components.                                       |
 * | dataTest     | `string`            |         | Optional prop for testing purposes.                                                       |
 * | id           | `string`            |         | Set `id` for `Timeline`.                                                                  |
 * | spaceAfter   | [`enum`](#enum)     |         | Additional `margin-bottom` after component.                                               |
 * | direction    | `"column" \| "row"` |         | Allows to set direction, by default on desktop is `row` and on mobile is set to `column`. |
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
 * ## Subcomponents
 *
 * ### TimelineStep
 *
 * ```jsx
 * import TimelineStep from "@kiwicom/orbit-components/lib/Timeline/TimelineStep";
 * ```
 *
 * #### Props
 *
 * The table below contains all types of the props in **TimelineStep** component.
 *
 * | Name         | Type            | Default | Description                                 |
 * | :----------- | :-------------- | :------ | :------------------------------------------ |
 * | **children** | `React.Node`    |         | Optional. The content of the `TimelineStep` |
 * | label        | `React.Node`    |         | Text for `label` component inside.          |
 * | subLabel     | `React.Node`    |         | Text for `subLabel` component inside.       |
 * | type         | [`enum`](#enum) |         | Type of current process step.               |
 * | active       | `boolean`       |         | Controlled state of the step.               |
 * | spaceAfter   | [`enum`](#enum) |         | Additional `margin-bottom` after component. |
 *
 * #### enum
 *
 * | type       |
 * | :--------- |
 * | "success"  |
 * | "warning"  |
 * | "critical" |
 * | "info"     |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Timeline component has been designed with accessibility in mind, providing visual progress indication that communicates the current state to screen readers.
 *
 * ### Accessibility Props
 *
 * **TimelineStep props:**
 *
 * | Name   | Type      | Description                                                                         |
 * | :----- | :-------- | :---------------------------------------------------------------------------------- |
 * | active | `boolean` | Controls whether the step is marked as the current step with `aria-current="step"`. |
 *
 * ### Automatic Accessibility Features
 *
 * - **aria-current="step"**: Automatically applied to active timeline steps based on the `active` prop
 * - **aria-hidden**: Applied to decorative visual elements (icons, progress lines) that don't convey meaning to screen readers
 * - Content is announced in document order, providing logical progression through the timeline
 *
 * ### Best Practices
 *
 * - Use descriptive labels that clearly indicate the purpose of each timeline step
 * - Only mark one step as active at a time to avoid confusion for screen reader users
 * - Ensure timeline content follows a logical sequence that makes sense when read linearly
 *
 * ### Examples
 *
 * #### Basic Timeline with Active Step
 *
 * ```jsx
 * <Timeline>
 *   <TimelineStep label="Processing check-in" type="success" />
 *   <TimelineStep label="Boarding pass ready" type="info" active>
 *     You can now print your boarding pass.
 *   </TimelineStep>
 * </Timeline>
 * ```
 *
 * Screen reader announces: "Processing check-in. Boarding pass ready, current step. You can now print your boarding pass."
 *
 *
 * @orbit-doc-end
 */
const Timeline = ({ children, spaceAfter, direction, dataTest, id }: Props) => {
  const childrenArr = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();

  const getDirection = () => {
    if (direction) return direction;
    return isDesktop ? "row" : "column";
  };

  const hasSubLabelMargin = React.useMemo(
    () =>
      childrenArr.some(
        child =>
          React.isValidElement<{ subLabel?: React.ReactNode }>(child) && child.props.subLabel,
      ),
    [childrenArr],
  );

  return childrenArr && childrenArr.length > 0 ? (
    <div
      className={cx(
        "orbit-timeline relative overflow-hidden",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      data-test={dataTest}
      id={id}
    >
      <Stack flex shrink direction={getDirection()} as="ol">
        <TimelineStatusProvider direction={direction}>
          {React.Children.map(childrenArr, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepProvider
                  index={i}
                  last={i + 1 === childrenArr.length}
                  hasSubLabelMargin={hasSubLabelMargin}
                >
                  {child}
                </TimelineStepProvider>
              );
            }
            return null;
          })}
        </TimelineStatusProvider>
      </Stack>
    </div>
  ) : null;
};

export default Timeline;
export { default as TimelineStep } from "./TimelineStep";
