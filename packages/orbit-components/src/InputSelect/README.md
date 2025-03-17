# InputSelect

To implement the InputSelect component into your project you'll need to add the import:

```jsx
import InputSelect from "@kiwicom/orbit-components/lib/InputSelect";
```

After adding import to your project you can use it simply like:

```jsx
const options = [
  {
    title: "Option 1",
    value: 1,
    description: "Description for option 1",
  },
  {
    title: "Option 2",
    value: 2,
    description: "Description for option 2",
  },
  ...
];

<InputSelect options={options} />;
```

By using the `onOptionSelect` prop you can have access to the selected option to update your app state based on that. This is called with `null` when the input value is cleared or there is no selected option.
Do not rely on the input's `value` attribute to get the selected value.

## Groups

Optionally, each option can have a `group` property. If defined, options are displayed grouped with the name of the group as a label separator.
All groups are displayed first by default. After that, if `showAll` is set to `true` (default), all options are displayed (the ones with a group and the ones without a group, following the order of the array of options). If `showAll` is set to `false`, only the options without a defined group are displayed on that bottom list.
The `showAllLabel` allows to customize the label displayed before the bottom part. If `showAll` is set to `true`, the default value is `"All options"`. If it's set to `false`, the default value is `Other options`.

```jsx
const options = [
  {
    title: "Option 1",
    value: 1,
    description: "Description for option 1",
  },
  {
    title: "Option 2",
    value: 2,
    description: "Description for option 2",
    group: "Group name",
  },
  ...
];
```

If `prevSelected` is defined, a special group is displayed on top of every options, with the options passed to that prop. This prop is optional and its state is **not** controlled by the component.

### Props

The table below contains all types of props available in the InputSelect component.

| Name              | Type                                                                              | Default                            | Description                                                                                                                                                                       |
| :---------------- | :-------------------------------------------------------------------------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **options**       | [`Option[]`](#option)                                                             |                                    | **Required.** The content of the InputSelect, passed as array of objects.                                                                                                         |
| defaultSelected   | `Option`                                                                          |                                    | Default selected option. Must be one of the options passed on the `options` prop.                                                                                                 |
| prevSelected      | `Option`                                                                          |                                    | This displays the previously selected option on top of every other options.                                                                                                       |
| prevSelectedLabel | `string`                                                                          | `"Previously selected"`            | The label to be displayed before the previously selected option.                                                                                                                  |
| dataAttrs         | `Object`                                                                          |                                    | Optional prop for passing `data-*` attributes to the `input` DOM element.                                                                                                         |
| dataTest          | `string`                                                                          |                                    | Optional prop for testing purposes.                                                                                                                                               |
| disabled          | `boolean`                                                                         | `false`                            | If `true`, the InputSelect will be disabled.                                                                                                                                      |
| error             | `React.Node`                                                                      |                                    | The error message for the InputSelect.                                                                                                                                            |
| help              | `React.Node`                                                                      |                                    | The help message for the InputSelect.                                                                                                                                             |
| id                | `string`                                                                          |                                    | Adds `id` HTML attribute to an element.                                                                                                                                           |
| label             | `string`                                                                          |                                    | The label for the InputSelect.                                                                                                                                                    |
| name              | `string`                                                                          |                                    | The name for the InputSelect.                                                                                                                                                     |
| onBlur            | `event => void \| Promise`                                                        |                                    | Function for handling onBlur event.                                                                                                                                               |
| onChange          | `event => void \| Promise`                                                        |                                    | Function for handling onChange event on the text input. For option selection change, use `onOptionSelect`.                                                                        |
| onFocus           | `event => void \| Promise`                                                        |                                    | Function for handling onFocus event.                                                                                                                                              |
| onKeyDown         | `event => void \| Promise`                                                        |                                    | Function for handling onKeyDown event.                                                                                                                                            |
| onKeyUp           | `event => void \| Promise`                                                        |                                    | Function for handling onKeyUp event.                                                                                                                                              |
| onMouseUp         | `event => void \| Promise`                                                        |                                    | Function for handling onMouseUp event.                                                                                                                                            |
| onMouseDown       | `event => void \| Promise`                                                        |                                    | Function for handling onMouseDown event.                                                                                                                                          |
| placeholder       | `TranslationString`                                                               |                                    | The placeholder for the InputSelect.                                                                                                                                              |
| ref               | `func`                                                                            |                                    | Prop for forwarded ref of the InputSelect.                                                                                                                                        |
| required          | `boolean`                                                                         | `false`                            | If true, the label is displayed as required.                                                                                                                                      |
| readOnly          | `boolean`                                                                         |                                    | If true, InputSelect will be readonly.                                                                                                                                            |
| tabIndex          | `string \| number`                                                                |                                    | Specifies the tab order of an element.                                                                                                                                            |
| width             | `string`                                                                          | `100%`                             | Specifies width of the InputSelect.                                                                                                                                               |
| maxWidth          | `string`                                                                          |                                    | Specifies max-width of the InputSelect.                                                                                                                                           |
| maxHeight         | `string`                                                                          | `400px`                            | Specifies max height of the dropdown with results for InputSelect.                                                                                                                |
| onOptionSelect    | `(opt: Option \| null) => void`                                                   |                                    | Callback that fires when an option is selected.                                                                                                                                   |
| onClose           | `(opt: Option \| null) => void`                                                   |                                    | Callback that fires when the list of options is closed by other means than selecting an option. It is called with the value of the selected or null, if nothing is selected.      |
| emptyState        | `React.Node`                                                                      | `"No results found."`              | Message to display when no options are available. If a string is passed, paddings are automatically applied.                                                                      |
| labelClose        | `string`                                                                          | `Close`                            | The label for the close button in the dropdown.                                                                                                                                   |
| showAll           | `boolean`                                                                         | `true`                             | If set to true, it will display all options at the end of the list. If set to false, it will display only the options without a group at the end of the list.                     |
| showAllLabel      | `string`                                                                          | `"All options" \| "Other options"` | The label displayed before showing the last group of options. If `showAll` is true, the default value is `"All options"`. If it is false, the default value is `"Other options"`. |
| insideInputGroup  | `boolean`                                                                         | `false`                            | If true, the InputSelect will be rendered inside InputGroup.                                                                                                                      |
| spaceAfter        | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |                                    | Additional `margin-bottom` after component.                                                                                                                                       |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

## Option

The table below contains all types of props available for the object in the `Option` array.

| Name        | Type                 | Description                                                                                                             |
| :---------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **title**   | `string`             | **Required.** The title of the Option.                                                                                  |
| **value**   | `string   \| number` | **Required.** The value of the Option. Should be unique in each option on the array of options passed to `InputSelect`. |
| description | `string`             | The description of the Option.                                                                                          |
| group       | `string`             | The group of the Option.                                                                                                |
| prefix      | `React.Node`         | A prefix to the title. Can be an icon, flag, etc.                                                                       |
