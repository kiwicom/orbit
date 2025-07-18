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

| Name      | Type            | Default    | Description                                                                 |
| :-------- | :-------------- | :--------- | :-------------------------------------------------------------------------- |
| dataTest  | `string`        |            | Optional prop for testing purposes.                                         |
| id        | `string`        |            | Set `id` for `ServiceLogo`                                                  |
| grayScale | `boolean`       |            | If `true`, logo will be in gray scale.                                      |
| **name**  | [`enum`](#enum) |            | The name for the displayed service logo.                                    |
| size      | [`enum`](#enum) | `"medium"` | The size of the displayed service logo.                                     |
| alt       | `string`        |            | Optional property for passing own `alt` attribute to the DOM image element. |

### enum

| code                    | size       |
| :---------------------- | :--------- |
| `"AirHelp"`             | `"small"`  |
| `"AirHelpNew"`          | `"medium"` |
| `"AirHelpPlus"`         | `"large"`  |
| `"Alipay"`              |
| `"Amex"`                |
| `"Axa"`                 |
| `"AxaAssistance"`       |
| `"AxaWhite"`            |
| `"Booking"`             |
| `"BusinessInsider"`     |
| `"ChinaUnionPay"`       |
| `"DailyExpress"`        |
| `"DinersClub"`          |
| `"Discover"`            |
| `"Elo"`                 |
| `"GetYourGuide"`        |
| `"JCB"`                 |
| `"MailOnline"`          |
| `"Maestro"`             |
| `"MasterCard"`          |
| `"MIR"`                 |
| `"Mirror"`              |
| `"NewYorkTimes"`        |
| `"NortonSecured"`       |
| `"PayPal"`              |
| `"RentalCars"`          |
| `"Sherpa"`              |
| `"Simtex"`              |
| `"Sofort"`              |
| `"TravelPulse"`         |
| `"Trustly"`             |
| `"UsaToday"`            |
| `"Visa"`                |
| `"VisaHQ"`              |
| `"Zooz"`                |
| `"KiwiGuarantee"`       |
| `"KiwiGuaranteeFull"`   |
| `"KiwiGuaranteeInline"` |
