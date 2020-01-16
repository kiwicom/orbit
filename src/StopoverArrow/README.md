# StopoverArrow

To implement StopoverArrow component into your project you'll need to add the import:

```jsx
import StopoverArrow from "@kiwicom/orbit-components/lib/StopoverArrow";
```

After adding import into your project you can use it simply like:

```jsx
<StopoverArrow stops="2" dataTest="test" />
```

## Props

Table below contains all types of the props available in StopoverArrow component.

| Name     | Type            | Default | Description                                         |
| :------- | :-------------- | :------ | :-------------------------------------------------- |
| dataTest | `string`        |         | Optional prop for testing purposes.                 |
| stops    | [`enum`](#enum) | `"0"`   | Specify how many stops should the component render. |

### enum

| stops |
| :---- |
| `"0"` |
| `"1"` |
| `"2"` |
| `"3"` |
