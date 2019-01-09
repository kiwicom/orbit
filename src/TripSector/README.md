# TripSector

To implement TripSector component into your project you'll need import component itself and pass some other Trip components.

```jsx
import TripSector from "@kiwicom/orbit-components/lib/TripSector";
import TripDate from "@kiwicom/orbit-components/lib/TripSector/TripDate";
import TripLayover from "@kiwicom/orbit-components/lib/TripSector/TripLayover";

import TripSegment from "@kiwicom/orbit-components/lib/TripSegment";
```

After adding import into your project you can use it simply like:

```jsx
<TripSector>
  <TripDate />
  <TripSegment />
  <TripLayover />
</TripSector>
```

## Props

Table below contains all types of the props available in TripSector component.

| Name              | Type                    | Description 
| :---------------- | :---------------------- | :------------------------------ |
| **children**      | `React.Node`            | The content of the TripSector.
| dataTest          | `string`                | Optional prop for testing purposes.

## Subcomponents
There are three components you may use. [TripDate](#tripdate), [TripLayover](#triplayover) and [TripSegment](../TripSegment) also.

### TripDate
```jsx
import TripDate from "@kiwicom/orbit-components/lib/TripSector/TripDate";
```
#### Usage:
```jsx
<TripDate>
  Tue 9 Oct
</TripDate>
```

#### Props
Table below contains all types of the props in TripDate component.

| Name          | Type                    | Description                      |
| :------------ | :---------------------  | :------------------------------- |
| **children**  | `React.Node`            | The content of the TripDate.
| dataTest      | `string`                | Optional prop for testing purposes.

### TripLayover
```jsx
import TripLayover from "@kiwicom/orbit-components/lib/TripSector/TripLayover";

// you might use e.g. List
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
```
#### Usage:
```jsx
<TripLayover>
  <List>
    <ListItem />
    <ListItem />
  </List>
</TripLayover>
```

#### Props
Table below contains all types of the props in TripLayover component.

| Name          | Type                    | Description                      |
| :------------ | :---------------------  | :------------------------------- |
| **children**  | `React.Node`            | The content of the TripDate.
| dataTest      | `string`                | Optional prop for testing purposes.
