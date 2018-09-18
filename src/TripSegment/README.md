# TripSegment

To implement TripSegment component into your project you'll need import component itself and pass any other component you want as children.
(#trips):

```jsx
import TripSegment from "@kiwicom/orbit-components/lib/TripSegment";
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
```

After adding import into your project you can use it simply like:

```jsx
<TripSegment>
  <List>
    <ListItem>Hello, World!</ListItem>
    <ListItem>Lorem Ipsum</ListItem>
  </List>
</TripSegment>
```

## Props

Table below contains all types of the props available in the Modal component.

| Name          | Type                              | Default     | Description                                              |
| :-------      | :-----------------------------    | :------     | :------------------------------------------------------- |
| children      | `React.Node`                      |             | The content of the toggled component.
| carrier       | [`Carrier[]`](#carrier)           |             |
| duration      | `string \| number`                  |             | Flight duration.
| departure     | [`Airport{}`](#airport)           |             | Departure data of a flight.
| arrival       | [`Airport{}`](#airport)           |             | Arrival data of a flight.
| departureTime | `string`                          |             | Departure data of a flight.
| arrivalTime   | `string`                          |             | Departure data of a flight.
| type          | [`enum`](#enum)                   | 'airline'   | One of the carrier types: airline, train, bus. Defines which  icon to render in Milestone.
| onClick       | `func \| Promise<any>`              |             | Function for handling onClick event.



### Carrier
Table below contains all types of the props available for object in Carrier array.

| Name     | Type             | Description                      |
| :------- | :--------------- | :------------------------------- |
| **code** | `string`         | The code of the Carrier, defines which logo will be rendered.
| name     | `string`         | The name of the Carrier, mainly for information.
| type     | [`enum`](#enum)  | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs)


### enum

| type (Carrier) |
| :------------- |
| `"airline"`    |
| `"bus"`        |
| `"train"`      |

### Airport

Table below contains all types of the props available for the Airport type.

| Name     | Type     | Description                                  |
| :------- | :------- | :------------------------------------------- |
| **code** | `string` | The code of the arrival or departure airport |
| city     | `string` | The name of the city                         |
