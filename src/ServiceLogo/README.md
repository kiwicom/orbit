# ServiceLogo
To implement ServiceLogo component into your project you'll need to add the import:
```jsx
import ServiceLogo from "@kiwicom/orbit-components/lib/ServiceLogo";
```
After adding import into your project you can use it simply like:
```jsx
<ServiceLogo name="Visa" size="large" />
```
## Props
Table below contains all types of the props available in ServiceLogo component.

| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`                         |                 | Optional prop for testing purposes.
| grayScale     | `boolean`                        |                 | If `true`, logo will be in gray scale.
| **name**      | [`enum`](#enum)                  |                 | The name for the displayed service logo.
| size          | [`enum`](#enum)                  | `"medium"`      | The size of the displayed service logo.

### enum

| code              | size        |
| :---------------- | :---------- |
| `"AirHelp"`       | `"small"`   |
| `"Alipay"`        | `"medium"`  |
| `"Amex"`          | `"large"`   |
| `"AxaAssistance"` |
| `"ChinaUnionPay"` |
| `"DinersClub"`    |
| `"Discover"`      |
| `"JCB"`           |
| `"Maestro"`       |
| `"MasterCard"`    |
| `"MIR"`           |
| `"NewYorkTimes"`  |
| `"NortonSecured"` |
| `"PayPal"`        |
| `"Sofort"`        |
| `"TravelPulse"`   |
| `"Trustly"`       |
| `"UsaToday"`      |
| `"Visa"`          |
| `"VisaHQ"`        |
| `"Zooz"`          |

