# CallOutBanner

To implement CallOutBanner component into your project you'll need to add the import:

```jsx
import CallOutBanner from "@kiwicom/orbit-components/lib/CallOutBanner";
```

After adding import into your project you can use it simply like:

```jsx
<CallOutBanner>Hello World!</CallOutBanner>
```

## Props

Table below contains all types of the props available in the CallOutBanner component.

| Name         | Type                                 | Default | Description                                                                            |
| :----------- | :----------------------------------- | :------ | :------------------------------------------------------------------------------------- |
| actions      | `React.Node`                         |         | Actions - especially Buttons of the CallOutBanner that will be rendered on the bottom. |
| children     | `React.Node`                         |         | The children of the CallOutBanner.                                                     |
| dataTest     | `string`                             |         | Optional prop for testing purposes.                                                    |
| description  | `Translation`                        |         | The displayed description of the CallOutBanner.                                        |
| illustration | `React.Element<typeof Illustration>` |         | The displayed Illustration of the CallOutBanner.                                       |
| onClick      | `() => void \| Promise`              |         | Function for handling onClick callback. See [functional specs](#functional-specs).     |
| tabIndex     | `string \| number`                   |         | Specifies the tab order of an element.                                                 |
| **title**    | `Translation`                        |         | The displayed title of the CallOutBanner.                                              |

## Functional specs

- When you pass some `onClick` callback, the CallOutBanner will be actionable. That means that it will be possible to click on it and it will have proper elevation level.

- By default, the `tabIndex` is null, so it's not possible to focus it. If you either pass `onClick` or specify custom `tabIndex`, the CallOutBanner will be focus-able.
