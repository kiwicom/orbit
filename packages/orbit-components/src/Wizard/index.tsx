"use client";

import * as React from "react";
import cx from "clsx";

import WizardStep from "./WizardStep";
import { WizardStepContextProvider } from "./WizardContext";
import Button from "../Button";
import Stack from "../Stack";
import ChevronDown from "../icons/ChevronDown";
import Portal from "../Portal";
import Modal from "../Modal";
import { CardSection } from "../Card";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props, WizardStepProps } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Wizard
 *
 * During larger tasks such as purchasing tickets or setting up an account, it helps users to know how much progress they’ve made and what’s left to do. Nudge them to complete the task by using a wizard to clearly show all of the steps done and what’s coming next.
 *
 * To implement a Wizard you need to import components `Wizard` and `WizardStep`, then use `Wizard` as a container for multiple `WizardStep`s:
 *
 * ```jsx
 * import Wizard, { WizardStep } from "@kiwicom/orbit-components/lib/Wizard";
 * ```
 *
 * Then use `Wizard` as the container for multiple `WizardStep`s:
 *
 * ```jsx
 * <Wizard id="wizard" completedSteps={3} activeStep={3} onChangeStep={() => {}}>
 *   <WizardStep title="Search" />
 *   <WizardStep title="Passenger details" />
 *   <WizardStep title="Ticket fare" />
 *   <WizardStep title="Customize your trip" />
 *   <WizardStep title="Overview & Payment" />
 * </Wizard>
 * ```
 *
 * ## Wizard props
 *
 * | Name             | Type                                                      | Default   | Description                                                                                                                          |
 * | :--------------- | :-------------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
 * | `id`             | `string`                                                  |           | Unique identifier for the wizard, required for accessibility.                                                                        |
 * | `activeStep`     | `number`                                                  |           | Zero-based index marking the current Wizard step. Should be lower than or equal to the value of `completedSteps`.                    |
 * | `children`       | `React.ChildrenArray<React.Element<WizardStepComponent>>` |           | `WizardStep` elements.                                                                                                               |
 * | `completedSteps` | `number`                                                  |           | Number of completed steps, ranging from 0 to total number of steps.                                                                  |
 * | `onChangeStep`   | `(stepIndex: number) => void \| Promise<any>`             |           | Function which handles when a Wizard step is clicked. It's called with the step index, so you can use it to change `activeStep`.     |
 * | `lockScrolling`  | `boolean`                                                 | `true`    | Whether to prevent scrolling of the rest of the page while Modal is open. This is on by default to provide a better user experience. |
 * | `direction`      | `row \| column`                                           | `row`     | Allows to use `column` direction on desktop                                                                                          |
 * | `dataTest`       | `string`                                                  |           | Optional prop for testing purposes.                                                                                                  |
 * | `labelClose`     | `string`                                                  | `"Close"` | Property for passing translation string to close Button title                                                                        |
 * | `labelProgress`  | `React.Node`                                              |           | Property for passing translation string to progress text                                                                             |
 *
 * ## WizardStep props
 *
 * | Name          | Type                            | Default | Description                         |
 * | :------------ | :------------------------------ | :------ | :---------------------------------- |
 * | `title`       | `string`                        |         | Name of the step.                   |
 * | `onClick`     | `event => void \| Promise<any>` |         | Function which handles click event. |
 * | `isCompleted` | `boolean`                       |         | Marks current step as completed.    |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Wizard component has been designed with accessibility in mind, providing a step-by-step navigation pattern that is fully keyboard accessible and screen reader compatible.
 *
 * ### Accessibility Props
 *
 * **Wizard props:**
 *
 * | Name          | Type         | Description                                                                                                                                               |
 * | :------------ | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | id            | `string`     | Required. Provides a unique identifier for the wizard, used for ARIA relationships between the toggle button and wizard content in compact (mobile) mode. |
 * | labelClose    | `string`     | Specifies the accessible label for the close button in compact mode. Default is "Close".                                                                  |
 * | labelProgress | `React.Node` | Provides progress information that is announced by screen readers in compact mode, typically showing current step and total steps (e.g., "Step 2 of 5").  |
 *
 * **WizardStep props:**
 *
 * | Name        | Type      | Description                                                                                                                                                                                                             |
 * | :---------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | title       | `string`  | Required. Provides the accessible name for each step, announced by screen readers when navigating through the wizard.                                                                                                   |
 * | isCompleted | `boolean` | When true, displays a visual checkmark icon instead of the step number. This is purely visual and does not affect screen reader announcements. This is useful when you want to indicate that a step has been completed. |
 *
 * ### Automatic Accessibility Features
 *
 * **Wizard component:**
 *
 * - The component automatically manages ARIA attributes in compact mode:
 *   - `aria-controls` connects the toggle button to the wizard content
 *   - `aria-expanded` reflects the open/closed state of the wizard
 * - Focus management is handled automatically:
 *   - In desktop mode, focus is properly managed when navigating through the wizard
 *   - In compact mode, focus is properly managed when opening/closing the wizard
 * - Semantic structure is handled automatically:
 *   - The component renders as a semantic `<nav>` element with an unordered list structure
 *   - In compact mode, the wizard opens in a modal with proper focus trapping and focus management
 *
 * **WizardStep component:**
 *
 * - The component automatically manages ARIA attributes:
 *   - `aria-current="step"` is applied to the currently active step to indicate the user's position in the wizard
 *   - `role="button"` and `tabIndex="0"` are applied to clickable steps in desktop mode
 * - Focus management is handled automatically:
 *   - Interactive steps are included in the tab order and can be activated with keyboard
 * - State management is handled automatically:
 *   - Step status (completed, available, disabled) is communicated through visual styling and ARIA states
 *
 * ### Best Practices
 *
 * - Always provide a descriptive `labelProgress` that clearly indicates the user's position in the process (e.g., "Step 2 of 5").
 * - Use clear and concise step titles that describe the content or action for each step.
 * - Ensure the `id` prop is unique across the page to avoid conflicts with ARIA relationships.
 * - Consider the step sequence carefully - users should be able to understand their progress and what comes next.
 * - In compact mode, the wizard opens in a modal, so ensure the rest of your interface can handle the modal overlay appropriately.
 *
 * ### Keyboard Navigation
 *
 * The Wizard component supports the following keyboard interactions:
 *
 * **Desktop mode:**
 *
 * - **Tab:** Moves focus to the next available (clickable) step
 * - **Shift + Tab:** Moves focus to the previous available step
 * - **Enter:** Activates the focused step and triggers the `onChangeStep` callback
 *
 * **Compact (mobile) mode:**
 *
 * - **Tab:** Moves focus to the wizard toggle button
 * - **Enter/Space:** Opens the wizard modal
 * - **Tab (within modal):** Navigates through available steps and the close button
 * - **Enter/Space (on step):** Selects the step and closes the modal
 * - **Enter/Space (on close button):** Closes the modal
 * - **Escape:** Closes the modal (handled by the Modal component)
 *
 * ### Example
 *
 * ```jsx
 * <Wizard
 *   id="booking-wizard"
 *   activeStep={1}
 *   completedSteps={2}
 *   labelProgress="Step 2 of 5"
 *   onChangeStep={stepIndex => setActiveStep(stepIndex)}
 * >
 *   <WizardStep title="Search flights" />
 *   <WizardStep title="Passenger details" />
 *   <WizardStep title="Select seats" />
 *   <WizardStep title="Add extras" />
 *   <WizardStep title="Payment" />
 * </Wizard>
 * ```
 *
 * Screen reader announces, when focused on the active step in desktop mode: "Passenger details, current step, button"
 * Screen reader announces, when focused on the toggle button in compact mode: "Step 2 of 5, Passenger details, collapsed, button, group"
 * Screen reader announces, when focused on the active step in compact mode: "Passenger details, current step, button, group"
 *
 *
 * @orbit-doc-end
 */
const Wizard = ({
  dataTest,
  lockScrolling = true,
  direction,
  id,
  labelClose = "Close",
  labelProgress,
  completedSteps,
  activeStep,
  children,
  onChangeStep,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  const [open, setOpen] = React.useState(false);
  const toggle = React.useRef(null);
  const isCompact = !isLargeMobile;
  const childrenArray = React.Children.toArray(children) as React.ReactElement<WizardStepProps>[];
  const stepStatuses = childrenArray.map((step, index) => {
    if (index < completedSteps) return "completed";
    if (index === completedSteps) return "available";
    return "disabled";
  });

  const activeStepTitle = childrenArray.find((_, index) => index === activeStep)?.props.title;
  const stepsCount = React.Children.count(children);

  const steps = React.Children.map(children, (step, index) => (
    <WizardStepContextProvider
      index={index}
      status={stepStatuses[index]}
      isLastStep={index === stepsCount - 1}
      isColumnOnDesktop={direction === "column"}
      nextStepStatus={stepStatuses[index + 1]}
      isCompact={isCompact}
      isActive={activeStep === index}
      onChangeStep={onChangeStep}
      onClose={() => setOpen(false)}
    >
      {step}
    </WizardStepContextProvider>
  ));

  if (isCompact) {
    return (
      <>
        <Button
          ref={toggle}
          dataTest={dataTest}
          ariaControls={id}
          ariaExpanded={open}
          type="secondary"
          fullWidth
          iconRight={<ChevronDown ariaHidden />}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Stack as="span" inline align="center">
            {typeof labelProgress !== "undefined" && <b className="text-nowrap">{labelProgress}</b>}
            <span className="font-normal">{activeStepTitle}</span>
          </Stack>
        </Button>
        <Portal>
          <div id={id}>
            {open && (
              <Modal
                hasCloseButton={false}
                lockScrolling={lockScrolling}
                onClose={() => {
                  setOpen(false);
                }}
              >
                {/* matching padding-top to ModalBody's border-radius */}
                <nav className="orbit-wizard pt-[9px]">
                  <ul>
                    {steps}
                    <li>
                      <CardSection>
                        <Button
                          type="secondary"
                          fullWidth
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {labelClose}
                        </Button>
                      </CardSection>
                    </li>
                  </ul>
                </nav>
              </Modal>
            )}
          </div>
        </Portal>
      </>
    );
  }

  return (
    <nav className="orbit-wizard">
      <ul
        className={cx("flex", direction === "column" ? "flex-col" : "flex-row")}
        data-test={dataTest}
      >
        {steps}
      </ul>
    </nav>
  );
};

export default Wizard;
export { WizardStep };
