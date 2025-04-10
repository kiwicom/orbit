# Switch

To implement the Switch component into your project you'll need to add the import:

```jsx
import Switch from "@kiwicom/orbit-components/lib/Switch";
```

After adding import to your project you can use it simply like:

```jsx
<Switch checked={isChecked} onChange={handleOnChange} />
```

## Props

The table below contains all types of the props available in the Switch component.

| Name           | Type                    | Default      | Description                                |
| :------------- | :---------------------- | :----------- | :----------------------------------------- |
| dataTest       | `string`                |              | Optional prop for testing purposes.        |
| id             | `string`                |              | Set `id` for `Switch` input.               |
| **onChange**   | `() => void \| Promise` |              | Function for handling onChange event.      |
| onFocus        | `() => void \| Promise` |              | Function for handling onFocus event.       |
| onBlur         | `() => void \| Promise` |              | Function for handling onBlur event.        |
| **checked**    | `boolean`               |              | If `true`, the Switch will be checked.     |
| icon           | `React.Node`            | `<Circle />` | Optional property for custom icon.         |
| disabled       | `boolean`               | `false`      | If `true`, the Switch will be disabled.    |
| ariaControls   | `string`                |              | Optional prop for `aria-controls` value.   |
| ariaLabel      | `string`                |              | Optional prop for `aria-label` value.      |
| ariaLabelledby | `string`                |              | Optional prop for `aria-labelledby` value. |
