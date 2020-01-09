# DestinationCard

To implement DestinationCard component into your project you'll need to add the import:

```jsx
import DestinationCard from "@kiwicom/orbit-components/lib/DestinationCard";
```

After adding import into your project you can use it simply like:

```jsx
<DestinationCard image="dubai_ae" destinationCity="Dubai" />
```

## Props

Table below contains all types of the props available in DestinationCard component.

| Name                   | Type                    | Default | Description                                                                        |
| :--------------------- | :---------------------- | :------ | :--------------------------------------------------------------------------------- |
| dataTest               | `string`                |         | Optional prop for testing purposes.                                                |
| **departureCity**      | `Translation`           |         | The name of departure city.                                                        |
| **destinationCity**    | `Translation`           |         | The name of destination city.                                                      |
| **destinationCountry** | `Translation`           |         | The name of destination country.                                                   |
| height                 | `number`                | `300`   | The height of the DestinationCard. [See Functional specs](#functional-specs)       |
| **image**              | `string`                |         | The image name of the destination. [See Functional specs](#functional-specs)       |
| inbound                | [`Inbound`](#inbound)   |         | The inbound information about the trip. [See Functional specs](#functional-specs)  |
| onClick                | `onClick`               |         | Function for handling onClick event.                                               |
| **outbound**           | [`Outbound`](#outbound) |         | The outbound information about the trip. [See Functional specs](#functional-specs) |
| **price**              | `Translation`           |         | The price of the trip.                                                             |
| tabIndex               | `string`                | `"0"`   | Specifies the tab order of an element                                              |
| timeOfStay             | `Translation`           |         | The time of the stay for the trip. [See Functional specs](#functional-specs)       |

### Inbound

Table below contains all types of the props available in `inbound` object.

| Name         | Type          | Description                                    |
| :----------- | :------------ | :--------------------------------------------- |
| **date**     | `Translation` | The date of the inbound flight.                |
| **duration** | `Translation` | The duration of the inbound flight.            |
| **type**     | `Translation` | The type of the inbound flight, e.g. `Direct`. |

### Outbound

Table below contains all types of the props available in `outbound` object.

| Name         | Type          | Description                                                                          |
| :----------- | :------------ | :----------------------------------------------------------------------------------- |
| **date**     | `Translation` | The date of the inbound flight.                                                      |
| **duration** | `Translation` | The duration of the inbound flight.                                                  |
| text         | `Translation` | The text for the outbound, e.g. `One-way`. [See Functional specs](#functional-specs) |
| **type**     | `Translation` | The type of the inbound flight, e.g. `Direct`.                                       |

## Functional specs

- The minimum `height` of the DestinationCard needs to be more than 175 (px) due to the hover transition.

- You don't have to pass entire src of the image. Just `dubai_ae`, `paris_fr` etc. is enough.

- `OnClick` is also called on `Enter` and `Space` keypresses.

- If the DestinationCard should be used for one-way trip, don't use `inbound`, only `outbound` prop. The code may look like this:

```jsx
<DestinationCard
  departureCity="Prague"
  destinationCity="Dubai"
  destinationCountry="United Arab Emirates"
  image="dubai_ae"
  price="5,563 Kč"
  outbound={{ text: "One-way", type: "Direct", duration: "6h 10m" }}
/>
```

- If the DestinationCard should be used for return , use `inbound` and `outbound` prop concurrently. You will not use `text` prop `outbound`, but `date`. The code may look like this:

```jsx
<DestinationCard
  departureCity="Prague"
  destinationCity="Dubai"
  destinationCountry="United Arab Emirates"
  image="dubai_ae"
  price="5,563 Kč"
  timeOfStay="10 nights"
  outbound={{ date: "Wed 31 Oct", type: "Direct", duration: "6h 10m" }}
  inbound={{ date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" }}
/>
```
