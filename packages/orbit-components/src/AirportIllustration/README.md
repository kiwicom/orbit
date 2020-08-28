# AirportIllustration

To implement AirportIllustration component into your project you'll need to add the import:

```jsx
import AirportIllustration from "@kiwicom/orbit-components/lib/AirportIllustration";
```

After adding import into your project you can use it simply like:

```jsx
<AirportIllustration name="Accommodation" size="small" />
```

## Props

Table below contains all types of the props available in AirportIllustration component.

| Name       | Type            | Default    | Description                                                                                                                                                    |
| :--------- | :-------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt        | `string`        |            | Optional property for passing own `alt` attribute to the DOM image element. Bby default, the `name` of illustration is used.                                   |
| dataTest   | `string`        |            | Optional prop for testing purposes.                                                                                                                            |
| **name**   | [`enum`](#enum) |            | Name for the displayed Airportillustration.                                                                                                                    |
| size       | [`enum`](#enum) | `"medium"` | The size of the AirportIllustration.                                                                                                                           |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### enum

| name             | size           |
| :--------------- | :------------- |
| `"BGYFastTrack"` | `"extraSmall"` |
| `"BUDFastTrack"` | `"small"`      |
| `"MRSSmartPass"` | `"medium"`     |
| `"NCEFastTrack"` | `"large"`      |
| `"PRGSmartPass"` | `"displays"`   |
| `"VCESmartPass"` |
