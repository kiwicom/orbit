# Illustration
To implement Illustration component into your project you'll need to add the import:
```jsx
import Illustration from "@kiwicom/orbit-components/lib/CarrierLogo";
```
After adding import into your project you can use it simply like:
```jsx
<Illustration name="Accommodation" size="small" />
```
## Props
Table below contains all types of the props available in CarrierLogo component.

| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| **name**      | [`enum`](#enum)                  |                 | Name for the displayed illustration.
| size          | [`enum`](#enum)                  | `"medium"`      | The size of the Illustration.

### enum

| name                        | size           |
| :-------------------------- | :------------- |
| `"Accommodation"`           | `"small"`      |
| `"AirportTransport"`        | `"medium"`     |
| `"AirportTransportTaxi"`    |                |
| `"BoardingPass"`            |                |
| `"CabinBaggage"`            |                |
| `"EnjoyApp"`                |                |
| `"Feedback"`                |                |
| `"Help"`                    |                |
| `"Improve"`                 |                |
| `"Insurance"`               |                |
| `"InviteAFriend"`           |                |
| `"Login"`                   |                |
| `"Lounge"`                  |                |
| `"Mailbox"`                 |                |
| `"Meal"`                    |                |
| `"Money"`                   |                |
| `"NetVerify"`               |                |
| `"NoBookings"`              |                |
| `"NoFavoriteFlights"`       |                |
| `"NoNotification"`          |                |
| `"Offline"`                 |                |
| `"OpenSearch"`              |                |
| `"Parking"`                 |                |
| `"PlaceholderAirport"`      |                |
| `"PlaceholderDestination"`  |                |
| `"PlaceholderHotel"`        |                |
| `"PlaneAndMoney"`           |                |
| `"PriorityBoarding"`        |                |
| `"Rating"`                  |                |
| `"ReferAFriend"`            |                |
| `"RentalCar"`               |                |
| `"Time"`                    |                |
| `"TimelineBoarding"`        |                |
| `"TimelineDropBaggage"`     |                |
| `"TimelineLeave"`           |                |
| `"TimelinePick"`            |                |
| `"Tours"`                   |                |
| `"Train"`                   |                |
