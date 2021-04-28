# Switch

To implement Switch component into your project you'll need to add the import:

```jsx
import Switch from "@kiwicom/orbit-components/lib/Switch";
```

After adding import into your project you can use it simply like:

```jsx
<Switch checked onChange={handleOnChange} />
```

## Props

Table below contains all types of the props available in StopoverArrow component.

| Name         | Type                    | Default      | Description                            |
| :----------- | :---------------------- | :----------- | :------------------------------------- |
| dataTest     | `string`                |              | Optional prop for testing purposes.    |
| **onChange** | `() => void \| Promise` |              | Function for handling onChange event.  |
| onFocus      | `() => void \| Promise` |              | Function for handling onFocus event.   |
| onBlur       | `() => void \| Promise` |              | Function for handling onBlur event.    |
| **checked**  | `() => void \| Promise` |              | If `true`, the Switch will be checked. |
| icon         | `() => void \| Promise` | `<Circle />` | Optional property for custom icon.     |
