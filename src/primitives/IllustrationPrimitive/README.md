# IllustrationPrimitive

To implement IllustrationPrimitive component into your project you'll need to add the import:

```jsx
import IllustrationPrimitive from "@kiwicom/orbit-components/lib/IllustrationPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<IllustrationPrimitive name="Accommodation" size="small" />
```

## Ussage

As with every primitive, you should have a good reason to use `IllustrationPrimitive`, prefer ussage of `Illustration` and `AirportIllustration` as they are typed more strictly.

## Props

Table below contains all types of the props available in IllustrationPrimitive component.

| Name       | Type            | Default    | Description                                                                                                                                     |
| :--------- | :-------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| dataTest   | `string`        |            | Optional prop for testing purposes.                                                                                                             |
| **name**   | `string`        |            | Name for the displayed illustrationPrimitive.                                                                                                   |
| size       | [`enum`](#enum) | `"medium"` | The size of the IllustrationPrimitive.                                                                                                          |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |

### enum

| size        |
| :---------- |
| `"small"`   |
| `"medium"`  |
| `"large"`   |
| `"display"` |
