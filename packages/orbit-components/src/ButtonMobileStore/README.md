# ButtonMobileStore

To implement ButtonMobileStore component into your project you'll need to add the import:

```jsx
import ButtonMobileStore from "@kiwicom/orbit-components/lib/ButtonMobileStore";
```

After adding import into your project you can use it simply like:

```jsx
<ButtonMobileStore alt="Download on the App Store" type="appStore" />
```

## Props

Table below contains all types of the props available in the ButtonMobileStore component.

| Name            | Type                       | Default      | Description                                                                   |
| :-------------- | :------------------------- | :----------- | :---------------------------------------------------------------------------- |
| **alt**         | `string`                   |              | Required property for passing `alt` attribute to the DOM image element.       |
| title           | `string`                   |              | Optional property for passing own `title` attribute to the DOM image element. |
| dataTest        | `string`                   |              | Optional prop for testing purposes.                                           |
| id              | `string`                   |              | Set `id` for `ButtonMobileStore`.                                             |
| href            | `string`                   |              | The URL to link when the ButtonMobileStore is clicked.                        |
| onClick         | `event => void \| Promise` |              | Function for handling onClick event.                                          |
| stopPropagation | `boolean`                  |              | If `true` the click event won't bubble.                                       |
| type            | [`enum`](#enum)            | `"appStore"` | The type of the ButtonMobileStore.                                            |
| lang            | [`enum`](#enum)            | `EN`         | The language of the image displayed on the button.                            |

### enum

| type           | lang   |
| :------------- | :----- |
| `"appStore"`   | `"EN"` |
| `"googlePlay"` | `"ZH"` |
|                | `"BG"` |
|                | `"CS"` |
|                | `"DA"` |
|                | `"DE"` |
|                | `"ES"` |
|                | `"FI"` |
|                | `"FR"` |
|                | `"HU"` |
|                | `"IT"` |
|                | `"JA"` |
|                | `"KO"` |
|                | `"NL"` |
|                | `"PL"` |
|                | `"PT"` |
|                | `"RO"` |
|                | `"RU"` |
|                | `"SK"` |
|                | `"SR"` |
|                | `"SV"` |
