# SegmentedSwitch

To implement SegmentedSwitch component into your project you'll need to add the import:

```jsx
import SegmentedSwitch from "@kiwicom/orbit-components/lib/SegmentedSwitch";
```

## Usage

```jsx
const Component = () => {
  const [value, setValue] = React.useState("");

  return (
    <SegmentedSwitch
      onChange={ev => setValue(ev.currentTarget.value)}
      help={helpMessage}
      error={errorMessage}
      options={[
        { label: "First option", value: "1" },
        { label: "Second option", value: "2" },
      ]}
    />
  );
};
```

## Props

_Table below contains all types of the props available in the SegmentedSwitch component._

| Name        | Type                                          | Default | Description                         |
| :---------- | :-------------------------------------------- | :------ | :---------------------------------- |
| dataTest    | `string`                                      |         | Optional prop for testing purposes. |
| help        | `React.Node`                                  |         | Optional help message.              |
| error       | `React.Node`                                  |         | Optional error message.             |
| options     | [`Option[]`](#option)                         |         | Array of options.                   |
| onChange    | `(ev: ChangeEvent<HTMLInputElement>) => void` |         | Function for handling change event. |
| onFocus     | `(ev: FocusEvent<HTMLInputElement>) => void`  |         | Function for handling focus event.  |
| label       | `React.Node`                                  |         | Label of the component.             |
| showTooltip | `boolean`                                     | `false` | Show tooltip.                       |

## Option

Table below contains all types of the props available for object in Option array.

| Name           | Type               | Description                                                    |
| :------------- | :----------------- | :------------------------------------------------------------- |
| **value**      | `string \| number` | The value of the Option.                                       |
| label          | `string`           | The label for the Option.                                      |
| defaultChecked | `boolean`          | Set option checked by default.                                 |
| disabled       | `boolean`          | If `true`, the Option will be disabled.                        |
| name           | `string`           | Name of the Option. See [functional specs](#functional-specs). |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.
- The `name` prop in the `Option` object is needed when having more that one SegmentedSwitch in the same form.
