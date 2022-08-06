# Radio

To implement Radio component into your project you'll need to add the import:

```jsx
import Radio from "@kiwicom/orbit-components/lib/Radio";
```

After adding import into your project you can use it simply like:

```jsx
<Radio label="Radio" />
```

## Props

Table below contains all types of the props available in Radio component.

| Name     | Type                       | Default | Description                                                                                               |
| :------- | :------------------------- | :------ | :-------------------------------------------------------------------------------------------------------- |
| checked  | `boolean`                  | `false` | If `true`, the Radio will be checked.                                                                     |
| dataTest | `string`                   |         | Optional prop for testing purposes.                                                                       |
| id       | `string`                   |         | Set `id` for `Radio` input                                                                                |
| disabled | `boolean`                  | `false` | If `true`, the Radio will be set up as disabled.                                                          |
| hasError | `boolean`                  | `false` | If `true`, the border of the Radio will turn red. [See Functional specs](#functional-specs)               |
| info     | `React.Node`               |         | The additional info about the Radio.                                                                      |
| label    | `string`                   |         | The label of the Radio.                                                                                   |
| name     | `string`                   |         | The name for the Radio.                                                                                   |
| onChange | `event => void \| Promise` |         | Function for handling onChange event.                                                                     |
| ref      | `func`                     |         | Prop for forwarded ref of the Radio. [See Functional specs](#functional-specs)                            |
| tabIndex | `string \| number`         |         | Specifies the tab order of an element                                                                     |
| tooltip  | `Element<Tooltip>`         |         | Optional property when you need to attach Tooltip to the Radio. [See Functional specs](#functional-specs) |
| value    | `string`                   |         | The value of the Radio.                                                                                   |
| readOnly | `boolean`                  |         | If `true`, the Radio will be set up as readOnly.                                                          |

## Functional specs

- The`hasError` prop will be visible only when the Radio has `checked` or `disabled` prop set on false.

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React.ElementRef<*> | null } = React.createRef();

  render() {
    return <Radio ref={this.ref} />;
  }
}
```

- The `tooltip` property is useful when you need to visually attach Tooltip component only to the Radio's glyph, not the `label` or other parts of the Radio.
