# Illustration

To implement Illustration component into your project you'll need to add the import:

```jsx
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
```

After adding import into your project you can use it simply like:

```jsx
<Illustration name="Accommodation" size="small" />
```

## Props

Table below contains all types of the props available in Illustration component.

| Name       | Type            | Default    | Description                                                                                                                                                    |
| :--------- | :-------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt        | `string`        |            | Optional property for passing own `alt` attribute to the DOM image element. Bby default, the `name` of illustration is used.                                   |
| dataTest   | `string`        |            | Optional prop for testing purposes.                                                                                                                            |
| **name**   | [`enum`](#enum) |            | Name for the displayed illustration.                                                                                                                           |
| size       | [`enum`](#enum) | `"medium"` | The size of the Illustration.                                                                                                                                  |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### enum

| name                            | size           |
| :------------------------------ | :------------- |
| `"Accommodation"`               | `"extraSmall"` |
| `"AirHelp"`                     | `"small"`      |
| `"AirportTransport"`            | `"medium"`     |
| `"AirportTransportTaxi"`        | `"large"`      |
| `"AirportShuttle"`              | `"display"`    |
| `"AppQRCode"`                   |
| `"BaggageDrop"`                 |
| `"Boarding"`                    |
| `"BoardingPass"`                |
| `"BusinessTravel"`              |
| `"CabinBaggage"`                |
| `"CompassCollectPoints"`        |
| `"CompassDemoted"`              |
| `"CompassEmailAdventurer"`      |
| `"CompassEmailCaptain"`         |
| `"CompassEmailPromoted"`        |
| `"CompassEmailPromotedCaptain"` |
| `"CompassEmailScout"`           |
| `"CompassPoints"`               |
| `"CompassTravelPlan"`           |
| `"CompassSaveOnBooking"`        |
| `"DesktopSearch"`               |
| `"EnjoyApp"`                    |
| `"Error"`                       |
| `"Error404"`                    |
| `"ExclusiveOffers"`             |
| `"FastTrack"`                   |
| `"Feedback"`                    |
| `"Help"`                        |
| `"Improve"`                     |
| `"Insurance"`                   |
| `"InviteAFriend"`               |
| `"GroundTransport404"`          |
| `"Login"`                       |
| `"Lounge"`                      |
| `"Mailbox"`                     |
| `"Meal"`                        |
| `"MobileApp"`                   |
| `"Money"`                       |
| `"MusicalInstruments"`          |
| `"NetVerify"`                   |
| `"NoBookings"`                  |
| `"NoFavoriteFlights"`           |
| `"Nomad"`                       |
| `"NomadNeutral"`                |
| `"NoNotification"`              |
| `"NoResults"`                   |
| `"Offline"`                     |
| `"OnlineCheckIn"`               |
| `"OpenSearch"`                  |
| `"Parking"`                     |
| `"Pets"`                        |
| `"PlaceholderAirport"`          |
| `"PlaceholderDestination"`      |
| `"PlaceholderHotel"`            |
| `"PlaceholderTours"`            |
| `"PlaneAndMoney"`               |
| `"PriorityBoarding"`            |
| `"Rating"`                      |
| `"ReferAFriend"`                |
| `"RentalCar"`                   |
| `"Seating"`                     |
| `"SpecialAssistance"`           |
| `"SportsEquipment"`             |
| `"Success"`                     |
| `"Time"`                        |
| `"TicketFlexi"`                 |
| `"TimelineBoarding"`            |
| `"TimelineDropBaggage"`         |
| `"TimelineLeave"`               |
| `"TimelinePick"`                |
| `"Tours"`                       |
| `"Train"`                       |
| `"TransportBus"`                |
| `"TransportTaxi"`               |
| `"WomanWithPhone"`              |
