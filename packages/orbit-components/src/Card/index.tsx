"use client";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Card
 *
 * To implement Card component into your project you'll need to the import at least the Card and the [CardSection](#cardsection):
 *
 * ```jsx
 * import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Card>
 *   <CardSection>Hello World!</CardSection>
 * </Card>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Card component.
 *
 * | Name            | Type                         | Default   | Description                                                                                                                                   |
 * | :-------------- | :--------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
 * | actions         | `React.Node`                 |           | Optional prop for Action components in header of Card.                                                                                        |
 * | children        | `React.Node`                 |           | The content of the Card. You can use only [CardSection](#cardsection).                                                                        |
 * | dataTest        | `string`                     |           | Optional prop for testing purposes.                                                                                                           |
 * | id              | `string`                     |           | Set `id` for `Card`.                                                                                                                          |
 * | dataA11ySection | `string`                     |           | Optional prop to link the Card to a `SkipNavigation` component.                                                                               |
 * | description     | `React.Node`                 |           | The description of the Card.                                                                                                                  |
 * | header          | `React.Node`                 |           | The header of the Card. Useful when you need a different layout than the combination of e.g. `title` and `description`.                       |
 * | loading         | `boolean`                    | `false`   | If `true`, a loading animation will be rendered. When `true`, either `loadingTitle` or `loadingHidden` must be provided.                      |
 * | loadingTitle    | `string`                     |           | The title announced by screen readers when the card is in loading state. Required when `loading` is `true` and `loadingHidden` is not `true`. |
 * | loadingHidden   | `boolean`                    |           | If `true`, the loading state will be hidden from screen readers. Required when `loading` is `true` and `loadingTitle` is not provided.        |
 * | onClose         | `() => void \| Promise`      |           | Callback that is triggered when Card is closing.                                                                                              |
 * | title           | `React.Node`                 |           | The title of the Card.                                                                                                                        |
 * | titleAs         | [`enum`](#enum)              | `"div"`   | The element used for the root node of the title of Card. It **does not** impact the visual style of the title.                                |
 * | margin          | `string \| number \| Object` |           | Utility prop to set margin.                                                                                                                   |
 * | labelClose      | `string`                     | `"Close"` | Property for passing translation string to close Button.                                                                                      |
 *
 * ### CardSection
 *
 * ```jsx
 * import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
 * ```
 *
 * #### Usage:
 *
 * ```jsx
 * <Card>
 *   <CardSection>Hello World!</CardSection>
 * </Card>
 * ```
 *
 * #### Props
 *
 * | Name            | Type                       | Default | Description                                                                                                                                                                                                                                 |
 * | :-------------- | :------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | actions         | `React.Node`               |         | Actions which will be rendered on the right side. If used with `expandable` or `onClick`, the rendered elements should not be interactive but can be used to represent states.                                                              |
 * | children        | `React.Node`               |         | The content of the CardSection.                                                                                                                                                                                                             |
 * | dataTest        | `string`                   |         | Optional prop for testing purposes.                                                                                                                                                                                                         |
 * | description     | `React.Node`               |         | The description of the CardSection.                                                                                                                                                                                                         |
 * | expandable      | `boolean`                  | `false` | If `true`, the CardSection will be expandable.                                                                                                                                                                                              |
 * | expanded        | `boolean`                  |         | Can only be used if `expandable` is `true`. If you pass a value, the CardSection component will be controlled and you will have to manage the state via `onExpand` or `onClose`. If you leave it empty, the component will be uncontrolled. |
 * | header          | `React.Node`               |         | The header of the CardSection. Useful when you need a different layout than the combination of e.g. `title` and `description` properties.                                                                                                   |
 * | initialExpanded | `boolean`                  | `false` | Initial state of expandable CardSection when it mounts in uncontrolled variant. Can only be used if `expandable` is `true` and `expanded` is not defined.                                                                                   |
 * | noSeparator     | `Boolean`                  |         | Optional prop to not render the Separator between `header` and `children`.                                                                                                                                                                  |
 * | onClick         | `event => void \| Promise` |         | Function for handling the onClick event.                                                                                                                                                                                                    |
 * | onClose         | `() => void \| Promise`    |         | Callback that is triggered when section is closing. Can be used in both controlled or uncontrolled version.                                                                                                                                 |
 * | onExpand        | `() => void \| Promise`    |         | Callback that is triggered when section is expanding. Can be used in both controlled or uncontrolled version.                                                                                                                               |
 * | title           | `React.Node`               |         | The title of the CardSection.                                                                                                                                                                                                               |
 * | titleAs         | [`enum`](#enum)            | `"div"` | The element used for the root node of the title of CardSection.                                                                                                                                                                             |
 *
 * ### enum
 *
 * | titleAs |
 * | :------ |
 * | `"h1"`  |
 * | `"h2"`  |
 * | `"h3"`  |
 * | `"h4"`  |
 * | `"h5"`  |
 * | `"h6"`  |
 * | `"div"` |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Card component has been designed with accessibility in mind. It can be used with keyboard navigation and includes properties that enhance the experience for users of assistive technologies.
 *
 * ### Card accessibility props
 *
 * | Name            | Type      | Description                                                                                                                                   |
 * | --------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
 * | labelClose      | `string`  | Label for the close button that's announced by screen readers, ensuring users understand the button's purpose.                                |
 * | dataA11ySection | `string`  | Optional identifier for the Card that can be used to improve screen reader navigation and identification of content sections.                 |
 * | titleAs         | `enum`    | Controls the semantic heading level (h1-h6) of the Card title, helping maintain proper document structure and heading hierarchy.              |
 * | loadingTitle    | `string`  | The title announced by screen readers when the card is in loading state. Required when `loading` is `true` and `loadingHidden` is not `true`. |
 * | loadingHidden   | `boolean` | If `true`, the loading state will be hidden from screen readers. Use when loading state is conveyed through other visible text on the page.   |
 *
 * ### CardSection accessibility props
 *
 * | Name    | Type   | Description                                                                                                    |
 * | ------- | :----- | :------------------------------------------------------------------------------------------------------------- |
 * | titleAs | `enum` | Controls the semantic heading level of the CardSection title, allowing proper document hierarchy within Cards. |
 *
 * ### Keyboard navigation
 *
 * #### Card component
 *
 * Cards themselves are not focusable elements, but they may contain interactive elements like buttons, links, or form controls that are part of the card's content. These interactive elements follow standard keyboard navigation:
 *
 * - Interactive elements within cards can be accessed using the `Tab` key
 * - When a Card contains the close button, it can be activated using `Enter` or `Space`
 *
 * #### CardSection component
 *
 * CardSection components have specific keyboard behaviors when they're expandable:
 *
 * - Expandable sections can be toggled with `Enter` or `Space` when focused
 * - Focus is managed automatically when expanding/collapsing sections
 * - When multiple expandable sections exist in a Card, users can navigate between them using `Tab`
 *
 * ### Screen reader experience
 *
 * #### Card component
 *
 * Screen readers will announce:
 *
 * - Card title level as specified by the `titleAs` prop (when provided anything other than `div`)
 * - The Card title as specified by the `title` prop (when provided)
 * - The close button with the custom label specified in `labelClose` prop
 *
 * #### CardSection component
 *
 * Screen readers will announce:
 *
 * - The CardSection title as specified by the `title` prop
 * - The content within the section when expanded
 * - The expanded/collapsed state for expandable sections
 *
 * ### Important restrictions
 *
 * - **CardSection with actions and expandability**: When using a clickable or expandable CardSection (`expandable={true}` or with `onClick` handler), avoid using the `actions` prop. If you must use it, ensure it only contains non-interactive elements. This prevents focus management issues and keyboard navigation confusion. Interactive elements in this context can create conflicts with the expanding functionality, leading to poor accessibility and usability.
 *
 * Example of what to avoid:
 *
 * ```jsx
 * <CardSection
 *   expandable
 *   title="Flight details"
 *   actions={<Button>Edit</Button>} // Avoid interactive elements here
 * >
 *   {/* content *\/}
 * </CardSection>
 * ```
 *
 * Recommended approach:
 *
 * ```jsx
 * <CardSection
 *   expandable
 *   title="Flight details"
 *   actions={<Badge type="info">Economy</Badge>} // Non-interactive element is acceptable
 * >
 *   {/* content *\/}
 * </CardSection>
 * ```
 *
 * Also, Button component can be passed to the `actions` prop, but it should be non-interactive (ie. setting `asComponent="div"` and not defining `onClick`).
 *
 * ```jsx
 * <CardSection
 *   expandable
 *   title="Flight details"
 *   actions={<Button asComponent="div">Open</Button>} // Non-interactive element is acceptable
 * >
 *   {/* content *\/}
 * </CardSection>
 * ```
 *
 * ### Best practices
 *
 * #### Card best practices
 *
 * - Use semantic heading levels with the `titleAs` prop to maintain proper document structure
 * - Provide a descriptive `labelClose` that clearly explains the action (e.g., "Close flight details")
 * - When creating complex page layouts and using SkipNavigation component on the page, you can use the `dataA11ySection` prop connect the Card with this component
 *
 * #### CardSection best practices
 *
 * - Avoid placing interactive elements in the `actions` prop of expandable CardSection components
 * - Maintain logical heading hierarchy between Card titles and CardSection titles
 *
 * ### Loading state accessibility
 *
 * When using the Card's loading state, you must provide either a descriptive loading message or explicitly hide it from screen readers:
 *
 * - Use `loadingTitle` to provide a descriptive message that will be announced to screen readers
 * - Use `loadingHidden` to hide the loading state from screen readers when the loading state is conveyed through other visible text on the page
 *
 * ```jsx
 * // Accessible loading state with descriptive message
 * <Card
 *   loading
 *   loadingTitle="Loading flight details"
 * >
 *   {/* content *\/}
 * </Card>
 *
 * // Loading state hidden from screen readers because loading state
 * // is conveyed through other visible text on the page
 * <Card
 *   loading
 *   loadingHidden
 * >
 *   {/* content *\/}
 * </Card>
 * ```
 *
 * ### Examples with accessibility features
 *
 * #### Basic Card with accessibility props
 *
 * ```jsx
 * <Card
 *   title="Flight details"
 *   titleAs="h3"
 *   dataA11ySection="flight-summary"
 *   labelClose="Close flight details"
 *   onClose={() => {}}
 * >
 *   <CardSection>
 *     <Stack direction="column" spacing="100">
 *       <Text>Prague to Barcelona</Text>
 *       <Text type="secondary">June 21, 2023</Text>
 *     </Stack>
 *   </CardSection>
 * </Card>
 * ```
 *
 * Screen readers will announce heading level 3 of "Flight details", followed by the title of the card ("Flight details"), with a close button labeled "Close flight details", followed by the content of the card.
 *
 * #### Card with expandable sections
 *
 * ```jsx
 * <Card title="Trip itinerary" titleAs="h2" dataA11ySection="trip-details">
 *   <CardSection expandable initialExpanded title="Flight information" titleAs="h3">
 *     <Text>Prague to Barcelona</Text>
 *     <Text type="secondary">June 21, 2023</Text>
 *   </CardSection>
 *   <CardSection expandable title="Hotel details" titleAs="h3">
 *     <Text>Hotel Barcelona</Text>
 *     <Text type="secondary">Check-in: June 21, 2023</Text>
 *   </CardSection>
 * </Card>
 * ```
 *
 * Screen readers will announce a section identified as `trip-details` with a heading level 2 of "Trip itinerary", followed by expandable sections with appropriate heading levels. The first section will be initially expanded.
 *
 *
 * @orbit-doc-end
 */
import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { ELEMENT_OPTIONS } from "../Heading/consts";
import Header from "./components/Header";
import { spaceAfterClasses } from "../common/tailwind";
import Loading from "../Loading";

export { default as CardSection } from "./CardSection";

export default function Card({
  title,
  titleAs = ELEMENT_OPTIONS.DIV,
  actions,
  description,
  children,
  labelClose = "Close",
  dataTest,
  id,
  onClose,
  loading,
  margin,
  header,
  spaceAfter,
  dataA11ySection,
  loadingTitle,
  loadingHidden,
}: Props) {
  const marginStyles = (() => {
    if (margin == null) {
      return {};
    }
    if (typeof margin === "string" || typeof margin === "number") {
      return { margin };
    }
    return {
      marginTop: margin.top,
      marginRight: margin.right,
      marginBottom: margin.bottom,
      marginLeft: margin.left,
    };
  })();

  return (
    <div
      id={id}
      className={cx(
        "orbit-card font-base bg-white-normal *:border-elevation-flat-border-color lm:first:*:rounded-t-100 lm:last:*:rounded-b-100 w-full first:*:border-t",
        spaceAfter != null && spaceAfterClasses[spaceAfter],
      )}
      data-test={dataTest}
      style={marginStyles}
    >
      {(title != null || header != null) && !loading && (
        <div className="p-400 lm:p-600 lm:border-x relative border-b">
          <Header
            description={description}
            dataA11ySection={dataA11ySection}
            actions={actions}
            title={title}
            labelClose={labelClose}
            titleAs={titleAs}
            onClose={onClose}
            header={header}
          />
        </div>
      )}

      {!loading && children}

      {loading && (
        <div className="lm:border-x border-b">
          <Loading
            loading={loading}
            type="boxLoader"
            {...(loadingHidden ? { ariaHidden: true } : { title: loadingTitle })}
          />
        </div>
      )}
    </div>
  );
}
