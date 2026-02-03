"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import ChevronDown from "../icons/ChevronDown";
import Slide from "../utils/Slide";
import { useRandomIdSeed } from "../hooks/useRandomId";
import useBoundingRect from "../hooks/useBoundingRect";
import type { Props } from "./types";

const AnimatedIcon = ({ expanded }: { expanded?: boolean }) => {
  return (
    <ChevronDown
      className={cx("duration-fast transition-transform ease-in-out", expanded && "rotate-180	")}
      color="secondary"
      ariaHidden
    />
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Collapse
 *
 * To implement Collapse component into your project you'll need to add the import:
 *
 * ```jsx
 * import Collapse from "@kiwicom/orbit-components/lib/Collapse";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Collapse label="Duration">
 *   <Slider defaultValue={5} onChange={value => doSomething(value)} />
 * </Collapse>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Collapse component.
 *
 * | Name                | Type                                | Default | Description                                                                                                             |
 * | :------------------ | :---------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------- |
 * | actions             | `React.Node`                        |         | Actions which will be render next to arrow.                                                                             |
 * | **children**        | `React.Node`                        |         | The children that should be collapsed.                                                                                  |
 * | id                  | `string`                            |         | Set `id` for `Collapse`.                                                                                                |
 * | dataTest            | `string`                            |         | Optional prop for testing purposes.                                                                                     |
 * | expanded            | `boolean`                           |         | Passing `true` or `false` makes Collapse a controlled component, requiring you to manage its state via `onClick`.       |
 * | initialExpanded     | `boolean`                           | `false` | If `true` the Collapse component will be expanded on the initial render. To be used when the component is uncontrolled. |
 * | label               | `string`                            |         | The rendered label of the Collapse. See accessibility tab.                                                              |
 * | customLabel         | `React.Node`                        |         | Allows for rendering any component as a label. See accessibility tab.                                                   |
 * | onClick             | `(event, state) => void \| Promise` |         | Callback for handling onClick event.                                                                                    |
 * | expandButtonLabel   | `string`                            |         | Required prop for accessible label of the button when the content is collapsed. See accessibility tab.                  |
 * | collapseButtonLabel | `string`                            |         | Required prop for accessible label of the button when the content is expanded. See accessibility tab.                   |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Collapse component has been designed with accessibility in mind, providing collapsible content that is fully keyboard accessible and screen reader compatible.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your Collapse component:
 *
 * | Name                | Type       | Description                                                                                                                                 |
 * | :------------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
 * | expandButtonLabel   | string     | Specifies the accessible label of the button when the content is collapsed. This should clearly indicate the action to expand the content.  |
 * | collapseButtonLabel | string     | Specifies the accessible label of the button when the content is expanded. This should clearly indicate the action to collapse the content. |
 * | label               | string     | Defines the visible heading that also serves as the accessible name for the collapsible section.                                            |
 * | customLabel         | React.Node | Allows replacing the default heading with custom content while maintaining the click target for keyboard accessibility.                     |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - `aria-expanded` is automatically set to `true` or `false` based on the current state.
 *   - `aria-controls` is automatically set to reference the collapsible content.
 *
 * ### Best Practices
 *
 * - Always provide descriptive `expandButtonLabel` and `collapseButtonLabel` that clearly indicate the action.
 * - Use clear and concise labels that describe the content being collapsed.
 * - When using `customLabel`, ensure it includes text that can be announced by screen readers.
 * - If the collapsed content includes interactive elements, make sure they're not focusable when collapsed.
 * - All label texts should always be translated to the user's language.
 * - When using the `actions` prop, ensure all action buttons have descriptive labels and are keyboard accessible to maintain a logical tab order in the component.
 *
 * ### Focus Management
 *
 * - When expanded, focus moves from the label to the button to the content inside.
 * - When collapsed, focus will skip over any focusable elements inside the collapsed content.
 *
 * ### Keyboard Navigation
 *
 * - **Tab**: Moves focus to the collapse label or expand/collapse button.
 * - **Enter** or **Space**: When focus is on the label or button, toggles the collapsed state.
 * - Focus order: Focus moves from the label to the button to the content inside (when expanded).
 * - When collapsed, focus will skip over any focusable elements inside the collapsed content.
 *
 * ### Examples
 *
 * #### Basic Usage with Required Accessibility Labels
 *
 * ```jsx
 * import { Collapse, Text } from "@kiwicom/orbit-components";
 *
 * <Collapse
 *   label="Flight Information"
 *   expandButtonLabel="Show flight details"
 *   collapseButtonLabel="Hide flight details"
 * >
 *   <Text>Flight number: KL1234</Text>
 *   <Text>Departure: 10:00</Text>
 *   <Text>Arrival: 12:30</Text>
 * </Collapse>;
 * ```
 *
 * Screen reader announces: "Flight Information, collapsed, button" when focused on the label and "Show flight details, collapsed, button" when focused on the button.
 *
 * #### Expanded State
 *
 * ```jsx
 * import { Collapse, Text } from "@kiwicom/orbit-components";
 *
 * <Collapse
 *   label="Passenger Details"
 *   expandButtonLabel="Show passenger details"
 *   collapseButtonLabel="Hide passenger details"
 *   expanded={true}
 * >
 *   <Text>Name: John Smith</Text>
 *   <Text>Passport: AB123456</Text>
 * </Collapse>;
 * ```
 *
 * Screen reader announces: "Passenger Details, expanded, button" when focused on the label and "Hide passenger details, expanded, button" when focused on the button.
 *
 * #### With Actions
 *
 * ```jsx
 * import { Collapse, Button, Text } from "@kiwicom/orbit-components";
 *
 * <Collapse
 *   label="Filter Options"
 *   expandButtonLabel="Show filters"
 *   collapseButtonLabel="Hide filters"
 *   actions={
 *     <Button type="white" size="small">
 *       Reset
 *     </Button>
 *   }
 * >
 *   <Text>Filter controls...</Text>
 * </Collapse>;
 * ```
 *
 * Screen reader announces: "Filter Options, collapsed, button" when focused on the label, "Reset, button" when focused on the reset button, and "Show filters, collapsed, button" when focused on the button.
 *
 * #### With Custom Label
 *
 * ```jsx
 * import { Collapse, Badge, Text } from "@kiwicom/orbit-components";
 *
 * <Collapse
 *   customLabel={<Badge type="info">2 baggages</Badge>}
 *   expandButtonLabel="Show baggage details"
 *   collapseButtonLabel="Hide baggage details"
 * >
 *   <Text>Cabin baggage: 1 × 8kg</Text>
 *   <Text>Checked baggage: 1 × 23kg</Text>
 * </Collapse>;
 * ```
 *
 * Screen reader announces: "Two baggages collapsed, button" when focused on the custom label and "Show baggage details, collapsed, button" when focused on the button.
 *
 *
 * @orbit-doc-end
 */
const Collapse = ({
  initialExpanded = false,
  customLabel,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  id,
  onClick,
  actions,
  expandButtonLabel,
  collapseButtonLabel,
}: Props) => {
  const isControlledComponent = expandedProp != null;
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [{ height }, node] = useBoundingRect<HTMLDivElement>({ height: expanded ? null : 0 });

  const randomId = useRandomIdSeed();
  const slideID = randomId("slideID");
  const labelID = randomId("labelID");

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }

        setExpandedState(!expanded);
      } else if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <div
      className="border-b-cloud-normal pb-300 mb-400 block w-full border-b border-solid last:m-0 last:border-none"
      data-test={dataTest}
      id={id}
    >
      <div className="flex items-center justify-between">
        {label || customLabel ? (
          <div
            className="flex w-full self-stretch"
            id={labelID}
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
            aria-controls={slideID}
            onClick={handleClick}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(e);
              }
            }}
          >
            <Stack justify="between" align="center">
              {label && !customLabel && <Heading type="title4">{label}</Heading>}
              {customLabel}
            </Stack>
          </div>
        ) : (
          <div className="flex w-full self-stretch" />
        )}
        <Stack inline grow={false} align="center" spacing="none">
          {actions && <div className="mx-300 flex items-center">{actions}</div>}
          <ButtonLink
            iconLeft={<AnimatedIcon expanded={expanded} />}
            size="small"
            type="secondary"
            title={expanded ? collapseButtonLabel : expandButtonLabel}
            onClick={handleClick}
            ariaControls={slideID}
            ariaExpanded={expanded}
          />
        </Stack>
      </div>
      <Slide maxHeight={height} expanded={expanded} id={slideID}>
        <div className="my-300 mx-0" ref={node as React.RefObject<HTMLDivElement | null>}>
          {children}
        </div>
      </Slide>
    </div>
  );
};

export default Collapse;
