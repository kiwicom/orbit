/**
 * @orbit-doc-start
 * README
 * ----------
 * # Toast
 *
 * The Toast component consists of `ToastRoot` and `createToast`/`createToastPromise`:
 *
 * ```jsx
 * import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
 * ```
 *
 * It's better to use ToastRoot once at the root of your application with your other context providers and you can use `createToast` from anywhere after. The `createToast` function accepts two arguments. The first is required and is the message to be displayed on the toast. The second is an object. This object contains the `icon` key that receives the icon to be rendered on the toast as well as the `ariaProps` key that receives another object, with the `role` and `aria-live` keys and corresponding attributes as values.
 *
 * ```jsx
 * import React from "react";
 * import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
 * import Notification from "@kiwicom/orbit-components/lib/icons/Notification";
 *
 * const notify = () =>
 *   createToast("Here is your toast", {
 *     icon: <Notification />,
 *     ariaProps: {
 *       role: "alert",
 *       "aria-live": "assertive",
 *     },
 *   });
 * const App = () => {
 *   return (
 *     <div>
 *       <button onClick={notify}>Make me a toast</button>
 *       <ToastRoot />
 *     </div>
 *   );
 * };
 * ```
 *
 * You can also use the `createToastPromise` function. The notification toast will be updated automatically, when the promise is resolved or rejected. The function receives two mandatory arguments and one optional. The first is the promise, the second is the message on the different statuses and the third one controls the icon displayed on each status (or all).
 *
 * ```jsx
 * const notify = () =>
 *   createPromiseToast(
 *     promise,
 *     {
 *       loading: "...Loading",
 *       success: "Got the data",
 *       error: "Error when fetching",
 *     },
 *     {
 *       success: {
 *         icon: <Notification />,
 *       },
 *     },
 *   );
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available for `ToastRoot` component
 *
 * | Name                | Type                      | Default | Description                                                                                                                                                                 |
 * | :------------------ | :------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | dataTest            | `string`                  |         | optional prop for testing purposes.                                                                                                                                         |
 * | id                  | `string`                  |         | Set `id` for `Toast` wrapper                                                                                                                                                |
 * | topOffset           | `number`                  | `8`     | top offset for toast container                                                                                                                                              |
 * | leftOffset          | `number`                  | `8`     | left offset for toast container                                                                                                                                             |
 * | rightOffset         | `number`                  | `8`     | right offset for toast container                                                                                                                                            |
 * | bottomOffset        | `number`                  | `8`     | bottom offset for toast container                                                                                                                                           |
 * | gutter              | `number`                  | `8`     | distance between toast notifications                                                                                                                                        |
 * | dismissTimeout      | `number`                  | `5000`  | timeout until toast will be dismissed                                                                                                                                       |
 * | placement           | [`Placement`](#Placement) |         | position for toast container                                                                                                                                                |
 * | useTopSafeAreaInset | `boolean`                 | `false` | When enabled, the Toast container will respect mobile device top safe area to prevent notifications from being obscured by system UI elements like the notch or status bar. |
 *
 * ### Placement
 *
 * | Placement       |
 * | :-------------- |
 * | "top-left"      |
 * | "top-center"    |
 * | "top-right"     |
 * | "bottom-left"   |
 * | "bottom-center" |
 * | "bottom-right"  |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Toast component has been designed with accessibility in mind, providing a non-intrusive way to display temporary notifications to users. It follows accessibility best practices to ensure all users, including those using assistive technologies, can perceive and understand these notifications.
 *
 * ### Accessibility props
 *
 * | Name      | Type                               | Description                                                                                                                      |
 * | :-------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
 * | role      | `"status" \| "alert"`              | The ARIA role for the toast. Use `"alert"` for important notifications requiring immediate attention                             |
 * | aria-live | `"polite" \| "assertive" \| "off"` | Controls how urgently screen readers announce the content. The difference between values is described in Best practices section. |
 *
 * These attributes are passed through the `ariaProps` object in the second argument of the `createToast` function:
 *
 * ```jsx
 * createToast("Your message", {
 *   ariaProps: {
 *     role: "alert",
 *     "aria-live": "assertive",
 *   },
 * });
 * ```
 *
 * ### Automatic accessibility features
 *
 * - **Focus management**: Toasts do not steal focus from the user's current task, maintaining keyboard navigation flow
 * - **Animation pausing**: Hover over toasts pauses the dismissal countdown, giving users more time to read lengthy messages
 *
 * ### Keyboard and screen reader experience
 *
 * - **Visual notifications**: Toasts appear visually and are automatically announced to screen readers
 * - **Keyboard focus**: Toasts don't steal keyboard focus, allowing users to continue their current task
 * - **Mouse hover**: Pauses the toast dismissal timer
 * - **Mouse leave**: Resumes the toast dismissal timer
 *
 * ### Best practices
 *
 * - **Keep messages concise**: Use clear, brief messages that can be quickly read and understood
 * - **Use appropriate roles**:
 *   - Use `role="status"` for non-critical information (default)
 *   - Use `role="alert"` only for important messages requiring immediate attention
 * - **Set appropriate aria-live values**:
 *   - Use `aria-live="assertive"` only for critical messages, interrupts the current task to announce the message
 *   - Use `aria-live="polite"` for most messages (default), waits for finish of prioritized announcements
 *   - Use `aria-live="off"` for toasts that are not so urgent, announces the message once current task is finished and trigger element still has focus (if exists)
 * - **Avoid too many toasts**: Limit the number of simultaneous toast notifications to prevent overwhelming users
 * - **Consider message duration**: Set an appropriate `dismissTimeout` based on message length and importance
 * - **Provide context**: Ensure messages make sense when announced out of context by screen readers
 * - **Translation**: Ensure all toast content is properly localized for international users
 *
 * ### Examples
 *
 * #### Basic informational toast
 *
 * ```jsx
 * import { createToast } from "@kiwicom/orbit-components/lib/Toast";
 *
 * createToast("Your changes have been saved");
 * ```
 *
 * Screen reader announces: "Your changes have been saved" (with default `role="status"` and `aria-live="polite"`)
 *
 * #### Critical error toast
 *
 * ```jsx
 * import { createToast } from "@kiwicom/orbit-components/lib/Toast";
 * import AlertCircle from "@kiwicom/orbit-components/lib/icons/AlertCircle";
 *
 * createToast("Payment unsuccessful. Please try again.", {
 *   icon: <AlertCircle />,
 *   ariaProps: {
 *     role: "alert",
 *     "aria-live": "assertive",
 *   },
 * });
 * ```
 *
 * Screen reader announces immediately: "Payment unsuccessful. Please try again."
 *
 * #### Promise-based toast
 *
 * ```jsx
 * import { createToastPromise } from "@kiwicom/orbit-components/lib/Toast";
 *
 * createToastPromise(
 *   saveDataPromise,
 *   {
 *     loading: "Saving your changes...",
 *     success: "Changes saved successfully",
 *     error: "Failed to save changes",
 *   },
 *   {
 *     // Global aria props for all states
 *     ariaProps: {
 *       role: "status",
 *       "aria-live": "polite",
 *     },
 *     // Override aria props for error state
 *     error: {
 *       ariaProps: {
 *         role: "alert",
 *         "aria-live": "assertive",
 *       },
 *     },
 *   },
 * );
 * ```
 *
 * Screen reader announces the appropriate message based on the promise state, with the error state having higher priority.
 *
 *
 * @orbit-doc-end
 */
import { toast } from "react-hot-toast";

import type {
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
} from "./types";
import ToastRoot from "./ToastRoot";

const createToast: createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: createToastPromiseType = (content, messages, options?) =>
  toast.promise(content, messages, options);

export { ToastRoot, createToast, createToastPromise };
