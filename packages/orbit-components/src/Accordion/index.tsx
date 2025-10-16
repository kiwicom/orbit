"use client";

import React from "react";
import cx from "clsx";

import { Provider as SectionProvider } from "./AccordionContext";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Accordion
 *
 * To implement Accordion component into your project you'll need to the import the Accordion and the [AccordionSection](#Accordionsection):
 *
 * ```jsx
 * import Accordion, { AccordionSection } from "@kiwicom/orbit-components/lib/Accordion";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Accordion>
 *   <AccordionSection>Hello World!</AccordionSection>
 * </Accordion>
 * ```
 *
 * ## Props
 *
 * | Name            | Type                                                                              | Required | Default | Description                                                                                                                                        |
 * | --------------- | --------------------------------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | children        | `React.ReactNode`                                                                 |          |         | The content of the Accordion. You can use only AccordionSection                                                                                    |
 * | expandedSection | `string \| number`                                                                |          |         | Optional prop to control which AccordionSection (by id) is expanded                                                                                |
 * | loading         | `boolean`                                                                         |          | `false` | If true it will render the Loading component. When `true`, either `loadingTitle` or `loadingHidden` must be provided.                              |
 * | loadingTitle    | `string`                                                                          |          |         | The title announced by screen readers when the accordion is in loading state. Required when `loading` is `true` and `loadingHidden` is not `true`. |
 * | loadingHidden   | `boolean`                                                                         |          |         | If `true`, the loading state will be hidden from screen readers. Required when `loading` is `true` and `loadingTitle` is not provided.             |
 * | onExpand        | `(sectionId: string \| number) => void \| Promise<any>`                           |          |         | Callback (along with sectionId) that is triggered when section is expanding                                                                        |
 * | dataTest        | `string`                                                                          |          |         | Optional prop for testing purposes                                                                                                                 |
 * | id              | `string`                                                                          |          |         | Set `id` for `Accordion`                                                                                                                           |
 * | spaceAfter      | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |          |         | Additional space after the component                                                                                                               |
 *
 * ## AccordionSection
 *
 * ## Props
 *
 * | Name              | Type              | Required | Default | Description                                                                                   |
 * | ----------------- | ----------------- | -------- | ------- | --------------------------------------------------------------------------------------------- |
 * | id                | `string`          |          |         | Unique identifier for the section, used by `expandedSection`                                  |
 * | children          | `React.ReactNode` |          |         | The content of the AccordionSection                                                           |
 * | actions           | `React.ReactNode` |          |         | Additional actions to be displayed in the header                                              |
 * | expandable        | `boolean`         |          | `true`  | Whether the section can be expanded                                                           |
 * | expandOnTileClick | `boolean`         |          | `false` | Enables mobile-first interaction where the entire header area becomes clickable for expansion |
 * | header            | `React.ReactNode` |          |         | The content of the section header                                                             |
 * | footer            | `React.ReactNode` |          |         | Additional content to display at the bottom of an expanded section                            |
 * | dataTest          | `string`          |          |         | Optional prop for testing purposes                                                            |
 *
 * ## Functional specs
 *
 * - By default, the Accordion component operates in an uncontrolled mode. For programmatic control, use the `expandedSection` and `onExpand` props together.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Accordion component has been designed with accessibility in mind, providing collapsible sections that are fully keyboard navigable and screen reader compatible.
 *
 * ### Accessibility Props
 *
 * **Accordion props:**
 *
 * | Name          | Type      | Default | Description                                                                                                                                        |
 * | :------------ | :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | loadingTitle  | `string`  |         | The title announced by screen readers when the accordion is in loading state. Required when `loading` is `true` and `loadingHidden` is not `true`. |
 * | loadingHidden | `boolean` |         | If `true`, the loading state will be hidden from screen readers. Use when loading state is conveyed through other visible text on the page.        |
 *
 * **AccordionSection props:**
 *
 * | Name              | Type      | Default | Description                                                                                                                           |
 * | :---------------- | :-------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------ |
 * | expandOnTileClick | `boolean` | `false` | When `true`, makes the entire header area clickable to expand/collapse the section, improving the touch target size for mobile users. |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes when a section is expandable AND `expandOnTileClick` is true:
 *   - `role="button"` is applied to the header
 *   - `aria-expanded` is set to `true` or `false` based on the section's expanded state
 *   - `aria-controls` associates the header with its controlled content section
 *   - `tabIndex` is set to 0 to include the header in the tab order
 *
 * ### Keyboard Navigation
 *
 * The Accordion component supports the following keyboard interactions:
 *
 * - **Enter/Space:** When focus is on a section header with `expandOnTileClick` enabled, pressing Enter or Space will toggle the expansion state
 * - **Tab:** Moves focus to the next focusable element (header or interactive elements within expanded sections)
 * - **Shift + Tab:** Moves focus to the previous focusable element
 *
 * ### Loading state accessibility
 *
 * When using the Accordion's loading state, you must provide either a descriptive loading message or explicitly hide it from screen readers:
 *
 * - Use `loadingTitle` to provide a descriptive message that will be announced to screen readers
 * - Use `loadingHidden` to hide the loading state from screen readers when the loading state is conveyed through other visible text on the page
 *
 * ```jsx
 * // Accessible loading state with descriptive message
 * <Accordion
 *   loading
 *   loadingTitle="Loading accordion content"
 * >
 *   <AccordionSection header="Section 1">Content 1</AccordionSection>
 *   <AccordionSection header="Section 2">Content 2</AccordionSection>
 * </Accordion>
 *
 * // Loading state hidden from screen readers because loading state
 * // is conveyed through other visible text on the page
 * <Accordion
 *   loading
 *   loadingHidden
 * >
 *   <AccordionSection header="Section 1">Content 1</AccordionSection>
 *   <AccordionSection header="Section 2">Content 2</AccordionSection>
 * </Accordion>
 * ```
 *
 * ### Best Practices
 *
 * - Provide descriptive headers that clearly indicate the content of each section
 * - Consider enabling `expandOnTileClick` for interfaces primarily used on mobile devices
 * - Interactive elements in the main content area should only be accessible when their section is expanded
 *
 * ### Example
 *
 * ```jsx
 * <Accordion id="faq-accordion">
 *   <AccordionSection id="section-1" header="What is Orbit?" expandOnTileClick>
 *     Orbit is Kiwi.com's design system for creating consistent user experiences across products.
 *   </AccordionSection>
 *   <AccordionSection id="section-2" header="How do I use Accordion?" expandOnTileClick>
 *     Import the Accordion and AccordionSection components and nest the sections within the accordion.
 *   </AccordionSection>
 * </Accordion>
 * ```
 *
 * Screen reader announces: "What is Orbit?, button, collapsed" when focusing on the first section header.
 *
 *
 * @orbit-doc-end
 */
const Accordion = ({
  children,
  dataTest,
  id,
  spaceAfter,
  expandedSection,
  loading,
  loadingTitle,
  loadingHidden,
  onExpand,
}: Props) => (
  <div
    className={cx(
      "orbit-accordion font-base relative w-full",
      spaceAfter && spaceAfterClasses[spaceAfter],
    )}
    id={id}
    data-test={dataTest}
  >
    {children
      ? React.Children.map(children, item => {
          if (!item) return null;

          // @ts-expect-error TODO
          const { id: innerId } = item.props;
          // Determine if section is expanded
          const isExpanded = expandedSection === innerId;
          // Callback with section id
          // onExpand is not required prop to have easier loading use case
          const handleExpand = () => onExpand && onExpand(innerId);

          return (
            <SectionProvider
              value={{
                expanded: isExpanded,
                onExpand: handleExpand,
                loading,
                loadingTitle,
                loadingHidden,
              }}
            >
              {item}
            </SectionProvider>
          );
        })
      : null}
  </div>
);

export default Accordion;
export { default as AccordionSection } from "./AccordionSection";
