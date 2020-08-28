# ButtonMobileStore

To implement ButtonMobileStore component into your project you'll need to add the import:

```jsx
import ButtonMobileStore from "@kiwicom/orbit-components/lib/ButtonMobileStore";
```

After adding import into your project you can use it simply like:

```jsx
<ButtonMobileStore type="appStore" />
```

## Props

Table below contains all types of the props available in the ButtonMobileStore component.

| Name            | Type                       | Default | Description                                                                                                     |
| :-------------- | :------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------- |
| alt             | `string`                   |         | Optional property for passing own `alt` attribute to the DOM image element.                                     |
| dataTest        | `string`                   |         | Optional prop for testing purposes.                                                                             |
| href            | `string`                   |         | The URL to link when the ButtonMobileStore is clicked.                                                          |
| onClick         | `event => void \| Promise` |         | Function for handling onClick event.                                                                            |
| stopPropagation | `boolean`                  |         | If `true` the click event won't bubble. Useful when you use ButtonMobileStore inside another clickable element. |
| **type**        | [`enum`](#enum)            |         | The type of the ButtonMobileStore.                                                                              |
| variant         | [`enum`](#enum)            | `dark`  | The type of variant                                                                                             |

### enum

| type           | variant   |
| :------------- | :-------- |
| `"appStore"`   | `"dark"`  |
| `"googlePlay"` | `"light"` |
