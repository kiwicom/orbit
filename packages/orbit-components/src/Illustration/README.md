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

The table below contains all types of props available in the Illustration component.

| Name       | Type                | Default          | Description                                                                                                      |
| :--------- | :------------------ | :--------------- | :--------------------------------------------------------------------------------------------------------------- |
| alt        | `string`            |                  | Optional property for passing own `alt` attribute to the DOM image element. By default, an empty string is used. |
| dataTest   | `string`            |                  | Optional prop for testing purposes.                                                                              |
| id         | `string`            |                  | Set `id` for `Illustration`                                                                                      |
| **name**   | [`enum`](#enum)     |                  | Name for the displayed illustration.                                                                             |
| size       | [`enum`](#enum)     | `"medium"`       | The size of the Illustration.                                                                                    |
| spaceAfter | `enum`              |                  | Additional `margin-bottom` after component.                                                                      |
| role       | `img\|presentation` | `"presentation"` | Optional property for a role attribute.                                                                          |

### enum

| name                            | size           | spaceAfter   |
| :------------------------------ | :------------- | :----------- |
| `"Accommodation"`               | `"extraSmall"` | `"none"`     |
| `"AirHelp"`                     | `"small"`      | `"smallest"` |
| `"AirportTransport"`            | `"medium"`     | `"small"`    |
| `"AirportTransportTaxi"`        | `"large"`      | `"normal"`   |
| `"AirportShuttle"`              | `"display"`    | `"medium"`   |
| `"Ambulance"`                   |                | `"large"`    |
| `"AppQRCode"`                   |                | `"largest"`  |
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
| `"Chatbot"`                     |
| `"Cancelled"`                   |
| `"CompassTravelPlan"`           |
| `"CompassSaveOnBooking"`        |
| `"Damage"`                      |
| `"DepartureBoard"`              |
| `"DepartureBoardBadge"`         |
| `"DepartureBoardLounge"`        |
| `"DesktopSearch"`               |
| `"EnjoyApp"`                    |
| `"EVisa"`                       |
| `"Error"`                       |
| `"Error404"`                    |
| `"FastTrack"`                   |
| `"FareLock"`                    |
| `"FareLockSuccess"`             |
| `"FastTrackMan"`                |
| `"Feedback"`                    |
| `"FlexibleDates"`               |
| `"FlightChange"`                |
| `"FlightDisruptions"`           |
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
| `"NoFlightChange"`              |
| `"Nomad"`                       |
| `"NomadNeutral"`                |
| `"NoNotification"`              |
| `"NoResults"`                   |
| `"Offline"`                     |
| `"OnlineCheckIn"`               |
| `"OpenSearch"`                  |
| `"Parking"`                     |
| `"PassportUpdate"`              |
| `"Pets"`                        |
| `"PlaceholderAirport"`          |
| `"PlaceholderDestination"`      |
| `"PlaceholderHotel"`            |
| `"PlaceholderTours"`            |
| `"PlaneAndMoney"`               |
| `"PlaneDelayed"`                |
| `"PriceChange"`                 |
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
| `"Wheelchair"`                  |
| `"WomanWithPhone"`              |
