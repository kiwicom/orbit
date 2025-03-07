# Select

To implement Select component into your project you'll need to add the import:

```jsx
import Select from "@kiwicom/orbit-components/lib/Select";
```

After adding import into your project you can use it simply like:

```jsx
<Select options={Option} />
```

## Props

Table below contains all types of the props available in the Select component.

| Name            | Type                       | Default | Description                                                                              |
| :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------- |
| dataAttrs       | `Object`                   |         | Optional prop for passing `data-*` attributes to the `input` DOM element.                |
| dataTest        | `string`                   |         | Optional prop for testing purposes.                                                      |
| disabled        | `boolean`                  | `false` | If `true`, the Select will be disabled.                                                  |
| error           | `React.Node`               |         | The error message for the Select. [See Functional specs](#functional-specs)              |
| help            | `React.Node`               |         | The help message for the Select.                                                         |
| id              | `string`                   |         | Adds `id` HTML attribute to an element.                                                  |
| label           | `Translation`              |         | The label for the Select.                                                                |
| inlineLabel     | `boolean`                  |         | If true the label renders on the left side of the Select.                                |
| name            | `string`                   |         | The name for the Select.                                                                 |
| onBlur          | `event => void \| Promise` |         | Function for handling onBlur event.                                                      |
| onChange        | `event => void \| Promise` |         | Function for handling onChange event.                                                    |
| onFocus         | `event => void \| Promise` |         | Function for handling onFocus event.                                                     |
| **options**     | [`Option[]`](#option)      |         | The content of the Select, passed as array of objects.                                   |
| placeholder     | `TranslationString`        |         | The placeholder for the Select.                                                          |
| prefix          | `React.Node`               |         | The prefix component for the Select. [See Functional specs](#functional-specs)           |
| ref             | `func`                     |         | Prop for forwarded ref of the Select. [See Functional specs](#functional-specs)          |
| required        | `boolean`                  | `false` | If true, the label is displayed as required.                                             |
| spaceAfter      | `enum`                     |         | Additional `margin-bottom` after component.                                              |
| tabIndex        | `string \| number`         |         | Specifies the tab order of an element                                                    |
| value           | `string`                   | `""`    | The value of the Select.                                                                 |
| width           | `string`                   | `100%`  | Specifies width of the Select                                                            |
| customValueText | `string`                   |         | The custom text alternative of current value. [See Functional specs](#functional-specs). |
| ariaLabel       | `string`                   |         | Optional prop for `aria-label` value. See Accessibility tab.                             |
| ariaLabelledby  | `string`                   |         | Optional prop for `aria-labelledby` value. See Accessibility tab.                        |

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

Table below contains all types of the props available for object in Option array.

| Name      | Type               | Description                             |
| :-------- | :----------------- | :-------------------------------------- |
| **value** | `string \| number` | The value of the Option.                |
| label     | `string`           | The label for the Option.               |
| key       | `string`           | The key of the Option.                  |
| disabled  | `boolean`          | If `true`, the Option will be disabled. |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- When you have limited space for the `Select`, you can use `customValueText` property to pass an alternative text for the current value. For instance, when the label of the selected option is `Czech Republic (+420)`, you can pass only `+420` to this property and the original label will be visually hidden.

- The `prefix` prop can accept any element. However, it is not recommended to pass it more than an icon (or flag).

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React.ElementRef<*> | null } = React.createRef();

  render() {
    return <Select ref={this.ref} />;
  }
}
```
