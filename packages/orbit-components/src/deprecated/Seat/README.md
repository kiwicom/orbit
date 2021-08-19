# Seat

To implement Seat component into your project you'll need to add the import:

```jsx
import Seat from "@kiwicom/orbit-components/lib/Seat";
```

After adding import into your project you can use it simply like:

```jsx
<Seat />
```

## Props

Table below contains all types of the props available in Radio component.

| Name     | Type                  | Default   | Description                         |
| :------- | :-------------------- | :-------- | :---------------------------------- |
| dataTest | `string`              |           | Optional prop for testing purposes. |
| size     | [`enum`](#modal-enum) | `medium`  | Size of Seat component.             |
| type     | [`enum`](#modal-enum) | `default` | Visual type of Seat                 |

### enum

| size       | type            |
| :--------- | :-------------- |
| `"small"`  | `"default"`     |
| `"medium"` | `"legroom"`     |
|            | `"selected"`    |
|            | `"unavailable"` |
