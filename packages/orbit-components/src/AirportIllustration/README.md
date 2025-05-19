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

| Name       | Type                | Default          | Description                                                                                                                             |
| :--------- | :------------------ | :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| alt        | `string`            |                  | Optional property for passing own `alt` attribute to the DOM image element. By default, an empty string is used. See Accessibility tab. |
| dataTest   | `string`            |                  | Optional prop for testing purposes.                                                                                                     |
| id         | `string`            |                  | Set `id` for `Illustration`.                                                                                                            |
| **name**   | [`enum`](#enum)     |                  | Name for the displayed Airportillustration.                                                                                             |
| size       | [`enum`](#enum)     | `"medium"`       | The size of the AirportIllustration.                                                                                                    |
| spaceAfter | `enum`              |                  | Additional `margin-bottom` after component.                                                                                             |
| role       | `img\|presentation` | `"presentation"` | Optional property for a role attribute. See Accessibility tab.                                                                          |

### enum

| name             | size           | spaceAfter   |
| :--------------- | :------------- | :----------- |
| `"BGYFastTrack"` | `"extraSmall"` | `"none"`     |
| `"BUDFastTrack"` | `"small"`      | `"smallest"` |
| `"MRSSmartPass"` | `"medium"`     | `"small"`    |
| `"NCEFastTrack"` | `"large"`      | `"normal"`   |
| `"PRGSmartPass"` | `"displays"`   | `"medium"`   |
| `"VCESmartPass"` |                | `"large"`    |
|                  |                | `"largest"`  |
