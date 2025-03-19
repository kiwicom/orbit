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

| Name     | Type                         | Default          | Description                                                                                                      |
| :------- | :--------------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------- |
| alt      | `string`                     |                  | Optional property for passing own `alt` attribute to the DOM image element. By default, an empty string is used. |
| dataTest | `string`                     |                  | Optional prop for testing purposes.                                                                              |
| id       | `string`                     |                  | Set `id` for IllustrationPrimitive                                                                               |
| **name** | `string`                     |                  | Name for the displayed illustrationPrimitive.                                                                    |
| size     | [`enum`](#enum)              | `"medium"`       | The size of the IllustrationPrimitive.                                                                           |
| margin   | `string \| number \| Object` |                  | Utility property to set margin.                                                                                  |
| role     | `img\|presentation`          | `"presentation"` | Optional property for a role attribute.                                                                          |

### enum

| size           |
| :------------- |
| `"extraSmall"` |
| `"small"`      |
| `"medium"`     |
| `"large"`      |
| `"display"`    |
