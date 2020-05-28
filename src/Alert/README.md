# Alert

To implement Alert component into your project you'll need to add the import:

```jsx
import Alert from "@kiwicom/orbit-components/lib/Alert";
```

After adding import into your project you can use it simply like:

```jsx
<Alert>Hello World!</Alert>
```

## Functional specs

- By passing the `closable` prop into Alert, you will be able to handle `onClose` function and Close icon will be displayed. Also, if you want to select the Close Button element for testing purposes, use [data-test="AlertCloseButton"] selector.

- When the Alert has a `title` prop, if you pass an `icon` prop as `true`, the Alert will have its own icon based on the selected `type`. If you want to use a different icon, just pass it to the `icon` prop as a `React.Element`. Alerts without a `title` or with a `title` but without an `icon` prop don't have an icon.

- Passing a `inlineActions` will cause `children` to be ignored. `inlineActions` should be used for displaying buttons inside short alerts which only have a `title`.

**Props**
| Name | Type | Default | Description |
| ------------- | --------------------------------------------------- | ------- | ----------- |
| type | `Type` | | |
| children | `React.Node` | | |
| title | `React$Element<React$ComponentType<any>> \| string` | | |
| icon | `React.Element<any> \| boolean` | | |
| closable | `boolean` | | |
| inlineActions | `React$Node` | | |
| onClose | `() => void \| Promise<any>;` | | |
| dataTest | `string` | | |
| spaceAfter | `[`enum`](#enum)` | | |

| **Type**                                    |
| ------------------------------------------- |
| "info" , "success" , "warning" , "critical" |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

**AlertButton**

| Name         | Type                                                              | Default | Description |
| ------------ | ----------------------------------------------------------------- | ------- | ----------- |
| type         | `Type`                                                            |         |             |
| ariaControls | `string`                                                          |         |             |
| ariaExpanded | `boolean`                                                         |         |             |
| children     | `React.Node`                                                      |         |             |
| circled      | `boolean`                                                         |         |             |
| disabled     | `boolean`                                                         |         |             |
| external     | `boolean`                                                         |         |             |
| fullWidth    | `boolean`                                                         |         |             |
| href         | `string`                                                          |         |             |
| iconLeft     | `React.Node`                                                      |         |             |
| iconRight    | `React.Node`                                                      |         |             |
| loading      | `boolean`                                                         |         |             |
| onClick      | `(e: SyntheticEvent<HTMLButtonElement>) => void \| Promise<any>;` |         |             |
| role         | `string`                                                          |         |             |
| Size         | `[`enum`](#enum)`                                                 |         |             |
| submit       | `boolean`                                                         |         |             |
| title        | `string \| ((any) => string)`                                     |         |             |
| tabIndex     | `string`                                                          |         |             |
| width        | `string`                                                          |         |             |
| dataTest     | `string`                                                          |         |             |
| spaceAfter   | `[`enum`](#enum)`                                                 |         |             |

| **Type**                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------- |
| "info" , "success" , "warning" , "critical" , "infoSubtle" , "successSubtle" , "warningSubtle" , "criticalSubtle" |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |
