"use client";

import * as React from "react";
import cx from "clsx";

import type { Props as IconProps } from "../Icon/types";
import type * as Common from "../common/types";
import type { Type, Props } from "./types";
import InformationCircle from "../icons/InformationCircle";
import AlertCircle from "../icons/AlertCircle";
import AlertOctagon from "../icons/AlertOctagon";
import CheckCircle from "../icons/CheckCircle";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { TYPE_OPTIONS, CLOSE_BUTTON_DATA_TEST } from "./consts";
import { spaceAfterClasses } from "../common/tailwind";
import { alertDescendantClasses } from "../TextLink/helpers/twClasses";

const COLORS: Record<Type, string> = {
  info: "bg-blue-light border-blue-light-hover lm:border-t-blue-light-hover",
  success: "bg-green-light border-green-light-hover lm:border-t-green-light-hover",
  warning: "bg-orange-light border-orange-light-hover lm:border-t-orange-light-hover",
  critical: "bg-red-light border-red-light-hover lm:border-t-red-light-hover",
};

const ACCENT_BORDER: Record<Type, string> = {
  info: "border-t-blue-normal lm:border-s-blue-normal",
  success: "border-t-green-normal lm:border-s-green-normal",
  warning: "border-t-orange-normal lm:border-s-orange-normal",
  critical: "border-t-red-normal lm:border-s-red-normal",
};

const ICON_COLOR: Record<Type, string> = {
  info: "text-blue-normal",
  success: "text-green-normal",
  warning: "text-orange-normal",
  critical: "text-red-normal",
};

const StyledIcon = ({ icon, type }: Pick<Props, "icon" | "type">) => {
  // Icon should be boolean and TRUE
  if (typeof icon === "boolean" && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <InformationCircle size="small" ariaHidden />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <CheckCircle size="small" ariaHidden />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <AlertCircle size="small" ariaHidden />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <AlertOctagon size="small" ariaHidden />;
    }
  }

  if (React.isValidElement(icon) && typeof icon !== "boolean") {
    // @ts-expect-error TODO
    return React.cloneElement<IconProps>(icon, { size: "small" });
  }

  return <>{icon}</>;
};

const ContentWrapper = ({
  type,
  inlineActions,
  children,
}: {
  inlineActions?: boolean;
  type: Type;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cx(
        "min-h-icon-medium flex items-center",
        !inlineActions && "w-full",
        "[&_.orbit-list-item]:text-ink-dark [&_.orbit-text]:text-ink-dark [&_.orbit-heading]:text-ink-dark",
        ...alertDescendantClasses[type],
      )}
    >
      {children}
    </div>
  );
};

const AlertCloseButton = ({
  hasChildren,
  dataTest,
  onClick,
  labelClose,
  icon,
}: {
  hasChildren: boolean;
  dataTest: string;
  labelClose?: string;
  onClick?: Common.Callback;
  icon: React.ReactNode;
}) => {
  return (
    <div className={cx("end-0", hasChildren && "top-0")}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        iconLeft={icon}
        type="secondary"
        title={labelClose}
      />
    </div>
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Alert
 *
 * To implement Alert component into your project you'll need to add the import:
 *
 * ```jsx
 * import Alert from "@kiwicom/orbit-components/lib/Alert";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Alert>Hello World!</Alert>
 * ```
 *
 * ## Props
 *
 * The table below contains all types of the props available in Alert component.
 *
 * | Name          | Type                            | Default  | Description                                                                            |
 * | :------------ | :------------------------------ | :------- | :------------------------------------------------------------------------------------- |
 * | children      | `React.Node`                    |          | The content of the Alert.                                                              |
 * | closable      | `boolean`                       | `false`  | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs) |
 * | dataTest      | `string`                        |          | Optional prop for testing purposes.                                                    |
 * | id            | `string`                        |          | Set `id` for `Alert`.                                                                  |
 * | icon          | `React.Element<any> \| boolean` |          | The displayed icon. [See Functional specs](#functional-specs)                          |
 * | inlineActions | `React.Node`                    |          | Renders action to a right side of a Alert. [See Functional specs](#functional-specs)   |
 * | onClose       | `() => void \| Promise`         |          | Function for handling Alert onClose.                                                   |
 * | spaceAfter    | `enum`                          |          | Additional `margin-bottom` after component.                                            |
 * | title         | `string`                        |          | The title of the Alert.                                                                |
 * | **type**      | [`enum`](#enum)                 | `"info"` | The type of Alert.                                                                     |
 * | suppressed    | `boolean`                       |          | If `suppressed` is on, Alert will not have colored background.                         |
 * | labelClose    | `string`                        |          | The label of the close button. **Required** when `closable` is `true`.                 |
 *
 * ### enum
 *
 * | type         | spaceAfter   |
 * | :----------- | :----------- |
 * | `"info"`     | `"none"`     |
 * | `"success"`  | `"smallest"` |
 * | `"warning"`  | `"small"`    |
 * | `"critical"` | `"normal"`   |
 * |              | `"medium"`   |
 * |              | `"large"`    |
 * |              | `"largest"`  |
 *
 * ## Functional specs
 *
 * - By passing the `closable` prop into Alert, you will be able to handle `onClose` function and Close icon will be displayed. When `closable` is `true`, the `labelClose` prop is required for accessibility. Also, if you want to select the Close Button element for testing purposes, use [data-test="AlertCloseButton"] selector.
 *
 * - When the Alert has a `title` prop, if you pass an `icon` prop as `true`, the Alert will have its own icon based on the selected `type`. If you want to use a different icon, just pass it to the `icon` prop as a `React.Element`. Alerts without a `title` or with a `title` but without an `icon` prop don't have an icon.
 *
 * - Passing a `inlineActions` will cause `children` to be ignored. `inlineActions` should be used for displaying buttons inside short alerts which only have a `title`.
 *
 * ## Subcomponents
 *
 * ### AlertButton
 *
 * To implement AlertButton component into your project you'll need to add the import:
 *
 * ```jsx
 * import AlertButton from "@kiwicom/orbit-components/lib/Alert/AlertButton";
 * // or
 * import { AlertButton } from "@kiwicom/orbit-components/lib/Alert";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <AlertButton type="info">Hello World!</AlertButton>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in AlertButton component.
 *
 * | Name         | Type                       | Default     | Description                                                                         |
 * | :----------- | :------------------------- | :---------- | :---------------------------------------------------------------------------------- |
 * | ariaControls | `string`                   |             | Id of the element the button controls.                                              |
 * | ariaExpanded | `boolean`                  |             | Tells screen reader the controlled element from `ariaControls` is expanded          |
 * | asComponent  | `string \| React.Element`  | `"button"`  | The component used for the root node.                                               |
 * | fullWidth    | `boolean`                  | `false`     | If `true`, the AlertButton grows to the full width of its container.                |
 * | circled      | `boolean`                  | `false`     | If `true`, the AlertButton is circular.                                             |
 * | children     | `React.Node`               |             | The content of the AlertButton.                                                     |
 * | dataTest     | `string`                   |             | Optional prop for testing purposes.                                                 |
 * | disabled     | `boolean`                  | `false`     | If `true`, the AlertButton is disabled.                                             |
 * | external     | `boolean`                  | `false`     | If `true`, the AlertButton opens link in a new tab.                                 |
 * | href         | `string`                   |             | The URL of the link to open when AlertButton is clicked.                            |
 * | iconLeft     | `React.Node`               |             | The displayed icon on the left.                                                     |
 * | iconRight    | `React.Node`               |             | The displayed icon on the right.                                                    |
 * | loading      | `boolean`                  | `false`     | If `true`, the loading glyph is displayed.                                          |
 * | onClick      | `event => void \| Promise` |             | Function for handling onClick event.                                                |
 * | ref          | `func`                     |             | Prop for forwarded ref of the AlertButton.                                          |
 * | role         | `string`                   |             | Specifies the role of an element.                                                   |
 * | spaceAfter   | `enum`                     |             | Additional `margin-bottom` after component.                                         |
 * | submit       | `boolean`                  | `false`     | If `true`, the Button has the `type="submit"` attribute, otherwise `type="button"`. |
 * | tabIndex     | `string \| number`         |             | Specifies the tab order of an element.                                              |
 * | title        | `string`                   |             | Adds `aria-label`.                                                                  |
 * | **type**     | [`enum`](#button-enum)     | `"primary"` | The type of AlertButton.                                                            |
 * | width        | `string`                   |             | The width of the AlertButton. Can be any string - `100px`, `20%`.                   |
 *
 * ### Button enum
 *
 * | type               | spaceAfter   |
 * | :----------------- | :----------- |
 * | `"info"`           | `"none"`     |
 * | `"success"`        | `"smallest"` |
 * | `"warning"`        | `"small"`    |
 * | `"critical"`       | `"normal"`   |
 * | `"infoSubtle"`     | `"medium"`   |
 * | `"successSubtle"`  | `"large"`    |
 * | `"warningSubtle"`  | `"largest"`  |
 * | `"criticalSubtle"` |
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Alert
 *
 * The Alert component has been designed with accessibility in mind.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your Alert component:
 *
 * | Prop       | Type     | Description                                                              |
 * | :--------- | :------- | :----------------------------------------------------------------------- |
 * | labelClose | `string` | Defines accessible text for the close button when the alert is closable. |
 *
 * When the `closable` prop is set to `true`, the `labelClose` prop is required. It provides the text that screen readers will announce when focusing on the close button, helping users understand its purpose.
 *
 * The `labelClose` text should be properly translated.
 *
 * ### Best practices
 *
 * - When using the `icon` prop, follow the accessibility guidelines documented in the Icon component's accessibility documentation to ensure that the icon is properly accessible or visually hidden from screen readers when it is purely decorative.
 *
 * ### Code examples
 *
 * #### Using labelClose with closable alert
 *
 * ```jsx
 * <Alert
 *   type="info"
 *   title="Notification"
 *   closable
 *   labelClose="Close notification" // Should be a translated string
 *   onClose={() => {
 *     // handle close action
 *   }}
 * >
 *   This is an important update for your upcoming flight.
 * </Alert>
 * ```
 *
 * In this example, screen readers would announce "Close notification" when focusing on the close button.
 *
 * #### Non-closable alert (no accessibility props required)
 *
 * ```jsx
 * <Alert type="success" title="Success">
 *   Your booking has been confirmed.
 * </Alert>
 * ```
 *
 * In this example, the alert doesn't require additional accessibility props as it doesn't have interactive elements that need labels.
 *
 * ## AlertButton
 *
 * The AlertButton component also includes several accessibility features:
 *
 * ### Accessibility props
 *
 * | Prop           | Type      | Description                                                                                      |
 * | :------------- | :-------- | :----------------------------------------------------------------------------------------------- |
 * | title          | `string`  | Adds `aria-label` to the button, providing a description for screen readers.                     |
 * | ariaControls   | `string`  | Identifies the element controlled by the button, establishing a relationship for screen readers. |
 * | ariaExpanded   | `boolean` | Indicates to screen readers whether the controlled element is expanded.                          |
 * | ariaLabelledby | `string`  | References the ID of an element that labels the button.                                          |
 *
 * ### Best practices
 *
 * - The `title` prop should be used when the button's purpose isn't clear from its content alone or when additional context would help screen reader users.
 * - When the AlertButton controls the visibility of another element (like a collapsible section), use `ariaControls` with the ID of that element and `ariaExpanded` to indicate its state.
 * - Always translate accessibility-related text to match the user's language.
 * - Use the `asComponent` prop to change the rendered element when the AlertButton is used inside another interactive element (like another button or a link). This helps avoid accessibility violations from nesting interactive elements, which can confuse screen readers and keyboard navigation.
 * - When using `iconLeft` or `iconRight` props, follow the accessibility guidelines documented in the Icon component's accessibility documentation to ensure that icons are properly accessible or visually hidden from screen readers when they are purely decorative.
 *
 * You can find additional accessibility guidance in the Button accessibility documentation.
 *
 * ### Code example
 *
 * ```jsx
 * <Alert type="warning" title="Flight delay information">
 *   <p>Your flight has been delayed by 2 hours.</p>
 *   <AlertButton
 *     type="warning"
 *     ariaControls="details-panel"
 *     ariaExpanded={detailsVisible}
 *     onClick={() => setDetailsVisible(!detailsVisible)}
 *   >
 *     {detailsVisible ? "Hide details" : "Show details"}
 *   </AlertButton>
 *   <div id="details-panel" style={{ display: detailsVisible ? "block" : "none" }}>
 *     Detailed information about the delay...
 *   </div>
 * </Alert>
 * ```
 *
 * In this example, screen readers would announce the button text along with information about what element it controls and whether that element is currently expanded.
 *
 *
 * @orbit-doc-end
 */
const Alert = (props: Props) => {
  const {
    type = TYPE_OPTIONS.INFO,
    title,
    icon,
    closable,
    onClose,
    children,
    dataTest,
    id,
    spaceAfter,
    suppressed,
    inlineActions,
    labelClose,
  } = props;
  return (
    <div
      className={cx(
        "orbit-alert",
        "rounded-150 text-ink-dark font-base text-normal p-300 relative box-border flex w-full border border-t-[3px] leading-normal",
        "lm:border-s-[3px] lm:border-t",
        "tb:rounded-100",
        Boolean(inlineActions) && "items-center",
        suppressed ? "bg-cloud-light border-cloud-normal lm:border-t-cloud-normal" : COLORS[type],
        ACCENT_BORDER[type],
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      id={id}
      data-test={dataTest}
    >
      {icon && (
        <div
          className={cx(
            "me-200 m-0 shrink-0 leading-none",
            Boolean(inlineActions) && "lm:mt-150 flex items-center self-baseline",
            ICON_COLOR[type],
            "tb:me-200 tb:[&_svg]:size-icon-medium",
          )}
        >
          <StyledIcon type={type} icon={icon} />
        </div>
      )}
      <div
        className={cx(
          "flex flex-1",
          title && inlineActions ? "flex-row" : "flex-col",
          !title && "items-center",
          Boolean(inlineActions) && "justify-between",
        )}
      >
        {title && (
          <div
            className={cx(
              "text-ink-dark min-h-icon-medium flex items-center font-bold",
              !!children && (inlineActions ? "mb-0" : "mb-100"),
              Boolean(inlineActions) && "grow basis-0",
            )}
          >
            {title}
          </div>
        )}
        {children && !inlineActions && <ContentWrapper type={type}>{children}</ContentWrapper>}
        {inlineActions && (
          <ContentWrapper type={type} inlineActions={!!inlineActions}>
            {inlineActions}
          </ContentWrapper>
        )}
      </div>
      {closable && (
        <AlertCloseButton
          hasChildren={!!children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          labelClose={labelClose}
          icon={<Close size="small" color={type} ariaHidden />}
        />
      )}
    </div>
  );
};

export { default as AlertButton } from "./AlertButton";

export default Alert;
