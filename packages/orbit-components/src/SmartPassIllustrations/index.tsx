/**
 * @orbit-doc-start
 * README
 * ----------
 * # SmartPassIllustration
 *
 * To implement SmartPassIllustration component into your project you'll need to add the import:
 *
 * ```jsx
 * import { SmartPassV1 } from "@kiwicom/orbit-components/lib/SmartPassIllustration";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <SmartPassV1 size="small" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in SmartPassIllustration component.
 *
 * | Name           | Type            | Default    | Description                            |
 * | :------------- | :-------------- | :--------- | :------------------------------------- |
 * | dataTest       | `string`        |            | Optional prop for testing purposes.    |
 * | size           | [`enum`](#enum) | `"medium"` | The size of the SmartPassIllustration. |
 * | ariaLabelledby | `string`        |            | Optional prop for a11y element         |
 * | title          | `string`        |            | Title of svg element                   |
 * | description    | `string`        |            | Description of svg element             |
 * | primary        | `string`        | `"white"`  | Primary color                          |
 * | secondary      | `string`        | `"black"`  | Secondary color                        |
 *
 * ### enum
 *
 * | size           |
 * | :------------- |
 * | `"extraSmall"` |
 * | `"small"`      |
 * | `"medium"`     |
 * | `"large"`      |
 * | `"display"`    |
 *
 *
 * @orbit-doc-end
 */
export { default as SmartPassV1 } from "./illustrations/SmartPassV1";
export { default as SmartPassV2 } from "./illustrations/SmartPassV2";
export { default as SmartPassV3 } from "./illustrations/SmartPassV3";
export { default as SmartPassV4 } from "./illustrations/SmartPassV4";
export { default as SmartPassV5 } from "./illustrations/SmartPassV5";
