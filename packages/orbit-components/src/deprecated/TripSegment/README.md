# TripSegment

To implement TripSegment component into your project you'll need import component itself and pass any other component you want as children.

```jsx
import TripSegment from "@kiwicom/orbit-components/lib/TripSegment";

// e.g. List component
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

| Name              | Type                    | Default | Description                                                                                                                                                                                          |
| :---------------- | :---------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **arrival**       | `Translation`           |         | The arrival city name and short code.                                                                                                                                                                |
| **arrivalTime**   | `Translation`           |         | The arrival time.                                                                                                                                                                                    |
| **carrier**       | `Carrier`               |         | It's used to render proper icon in the Milestone, by Carrier type. [`See Carrier type`](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/CarrierLogo#user-content-carrier) |
| **children**      | `React.Node`            |         | The content of the component.                                                                                                                                                                        |
| **departure**     | `Translation`           |         | The departure city and short code.                                                                                                                                                                   |
| **departureTime** | `Translation`           |         | The departure time.                                                                                                                                                                                  |
| **duration**      | `Translation`           |         | The flight duration.                                                                                                                                                                                 |
| initialExpanded   | `boolean`               | `false` | If `true`, the children will be displayed by default.                                                                                                                                                |
| onClick           | `() => void \| Promise` |         | Function for handling onClick event.                                                                                                                                                                 |
| tabIndex          | `string \| number`      | `"0"`   | Specifies the tab order of an element                                                                                                                                                                |
