# InputFile

To implement InputFile component into your project you'll need to add the import:

```jsx
import InputFile from "@kiwicom/orbit-components/lib/InputFile";
```

After adding import into your project you can use it simply like:

```jsx
<InputFile />
```

## Props

Table below contains all types of the props available in the InputFile component.

| Name             | Type                       | Default              | Description                                                                                                                                     |
| :--------------- | :------------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| allowedFileTypes | `string \| string[]`       |                      | You can specify allow file types. [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers)   |
| buttonLabel      | `Translation`              | `"Select file"`      | The label for the Button inside InputFile. [See Functional specs](#functional-specs)                                                            |
| dataTest         | `string`                   |                      | Optional prop for testing purposes.                                                                                                             |
| error            | `React.Node`               |                      | The error message for the Select. [See Functional specs](#functional-specs)                                                                     |
| fileName         | `string`                   |                      | The name of selected file.                                                                                                                      |
| help             | `React.Node`               |                      | The help message for the InputFile.                                                                                                             |
| label            | `Translation`              |                      | The label for the InputFile.                                                                                                                    |
| name             | `string`                   |                      | The name for the InputFile.                                                                                                                     |
| onBlur           | `event => void \| Promise` |                      | Function for handling onBlur event.                                                                                                             |
| onChange         | `event => void \| Promise` |                      | Function for handling onChange event.                                                                                                           |
| onFocus          | `event => void \| Promise` |                      | Function for handling onFocus event.                                                                                                            |
| onRemoveFile     | `() => void \| Promise`    |                      | Function for handling file name removing.                                                                                                       |
| placeholder      | `TranslationString`        | `"No file selected"` | The placeholder for the InputFile. [See Functional specs](#functional-specs)                                                                    |
| ref              | `func`                     |                      | Prop for forwarded ref of the InputFile. [See Functional specs](#functional-specs)                                                              |
| spaceAfter       | `enum`                     |                      | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| tabIndex         | `string`                   |                      | Specifies the tab order of an element                                                                                                           |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- If you pass some `string` into **placeholder** it will be used as its placeholder.

- If you pass some `string` into **buttonLabel** it will be used for button content.

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return <InputFile ref={this.ref} />;
  }
}
```
