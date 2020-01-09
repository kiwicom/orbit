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

| Name            | Type                       | Default    | Description                                                                                                                                     |
| :-------------- | :------------------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| customValueText | `Translation`              |            | The custom text alternative of current value. [See Functional specs](#functional-specs)                                                         |
| dataTest        | `string`                   |            | Optional prop for testing purposes.                                                                                                             |
| disabled        | `boolean`                  | `false`    | If `true`, the Select will be disabled.                                                                                                         |
| error           | `React.Node`               |            | The error message for the Select. [See Functional specs](#functional-specs)                                                                     |
| help            | `React.Node`               |            | The help message for the Select.                                                                                                                |
| id              | `string`                   |            | Adds `id` HTML attribute to an element.                                                                                                         |
| label           | `Translation`              |            | The label for the Select.                                                                                                                       |
| name            | `string`                   |            | The name for the Select.                                                                                                                        |
| onBlur          | `event => void \| Promise` |            | Function for handling onBlur event.                                                                                                             |
| onChange        | `event => void \| Promise` |            | Function for handling onChange event.                                                                                                           |
| onFocus         | `event => void \| Promise` |            | Function for handling onFocus event.                                                                                                            |
| **options**     | [`Option[]`](#option)      |            | The content of the Select, passed as array of objects.                                                                                          |
| placeholder     | `TranslationString`        |            | The placeholder for the Select.                                                                                                                 |
| prefix          | `React.Node`               |            | The prefix component for the Select. [See Functional specs](#functional-specs)                                                                  |
| ref             | `func`                     |            | Prop for forwarded ref of the Select. [See Functional specs](#functional-specs)                                                                 |
| required        | `boolean`                  | `false`    | If true, the label is displayed as required.                                                                                                    |
| size            | [`enum`](#enum)            | `"normal"` | The size of the Select.                                                                                                                         |
| spaceAfter      | `enum`                     |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| tabIndex        | `string`                   |            | Specifies the tab order of an element                                                                                                           |
| value           | `string`                   | `""`       | The value of the Select.                                                                                                                        |

## Option

Table below contains all types of the props available for object in Option array.

| Name      | Type               | Description                             |
| :-------- | :----------------- | :-------------------------------------- |
| **value** | `string \| number` | The value of the Option.                |
| label     | `string`           | The label for the Option.               |
| disabled  | `boolean`          | If `true`, the Option will be disabled. |

### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- When you have limited space of `Select`, you can use `customValueText` property where you can pass text alternative of the current value. For instance, when label of selected option has `Czech Republic (+420)`, you can pass only `+420` into this property and the original label will be visually hidden.

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return <Select ref={this.ref} />;
  }
}
```
