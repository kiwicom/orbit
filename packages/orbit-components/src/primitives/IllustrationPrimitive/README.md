# IllustrationPrimitive

To implement IllustrationPrimitive component into your project you'll need to add the import:

```jsx
import IllustrationPrimitive from "@kiwicom/orbit-components/lib/primitives/IllustrationPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<IllustrationPrimitive name="Accommodation" size="small" />
```

## Usage

As with every primitive, you should have a good reason to use `IllustrationPrimitive`, prefer usage of `Illustration` and `AirportIllustration` as they are typed more strictly.

## Props

Table below contains all types of the props available in IllustrationPrimitive component.

| Name       | Type               | Default    | Description                                                                                                                                                    |
| :--------- | :----------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt        | `string`           |            | Optional property for passing own `alt` attribute to the DOM image element. By default, the `name` of illustration is used.                                    |
| dataTest   | `string`           |            | Optional prop for testing purposes.                                                                                                                            |
| id         | `string`           |            | Set `id` for IllustrationPrimitive                                                                                                                             |
| **name**   | `string`           |            | Name for the displayed illustrationPrimitive.                                                                                                                  |
| size       | [`enum`](#enum)    | `"medium"` | The size of the IllustrationPrimitive.                                                                                                                         |
| spaceAfter | `enum`             |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| margin     | `string \| Object` |            | Utility property to set margin.                                                                                                                                |

### enum

| size           |
| :------------- |
| `"extraSmall"` |
| `"small"`      |
| `"medium"`     |
| `"large"`      |
| `"display"`    |
