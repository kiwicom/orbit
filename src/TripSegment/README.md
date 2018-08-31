# TripSegment

To implement TripSegment component into your project you'll need import component itself and pass any other component you want as children.

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

Table below contains all types of the props available in TripSegment component.

| Name              | Type                    | Default     | Description
| :---------------- | :---------------------- | :---------- | :---------------------------------------------------------------------------------------- |
| **arrival**       | `string`                |             | Arrival city and short code.
| **arrivalTime**   | `string`                |             | Arrival time.
| **carrier**       | `Carrier`               |             | It's needed to specify the type of the Carrier. It's used to render proper icon in the Milestone. [`See Carrier type`](https://github.com/kiwicom/orbit-components/tree/master/src/CarrierLogo#user-content-carrier)
| **children**      | `React.Node`            |             | The content of the component.
| **departure**     | `string`                |             | Departure city and short code.
| **departureTime** | `string`                |             | Departure time.
| **duration**      | `string \| number`      |             | Flight duration.
| onClick           | `func \| Promise<any>`  |             | Function for handling onClick event.
| shown             | `boolean`               | `false`     | If `true`, the children will be displayed by default.
