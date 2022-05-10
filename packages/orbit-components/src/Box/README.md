# Box

To implement Box component into your project you'll need to add the import:

```jsx
import Box from "@kiwicom/orbit-components/lib/Box";
```

After adding import into your project you can use it simply like:

```jsx
<Box>Hello World!</Box>
```

## Props

Table below contains all types of the props available in the Box component.

| Name         | Type                                                                 | Default | Description                                                     |
| :----------- | :------------------------------------------------------------------- | :------ | :-------------------------------------------------------------- |
| as           | `string`                                                             | `"div"` | Render as element.                                              |
| className    | `string`                                                             |         | The optional className of Box.                                  |
| children     | `React.Node`                                                         |         | The children of the Box.                                        |
| dataTest     | `string`                                                             |         | Optional prop for testing purposes.                             |
| display      | [`enum`](#enum)                                                      |         | The `display` of the Box                                        |
| padding      | [`spacingObject`](#spacingobject) \| [`spacingToken`](#spacingtoken) |         | The `padding` of the Box                                        |
| margin       | [`spacingObject`](#spacingobject) \| [`spacingToken`](#spacingtoken) |         | The `margin` of the Box                                         |
| wrap         | [`enum`](#enum)                                                      |         | The `flex-wrap` of the Box                                      |
| shrink       | `number`                                                             |         | The `flex-shrink` of the Box                                    |
| grow         | `number`                                                             |         | The `flex-grow` of the Box                                      |
| align        | [`enum`](#enum)                                                      |         | The `align-items` of the Box                                    |
| justify      | [`enum`](#enum)                                                      |         | The `justify-content` of the Box                                |
| direction    | [`enum`](#enum)                                                      |         | The `flex-direction` of the Box                                 |
| width        | [`enum`](#enum)                                                      |         | The `width` of the Box                                          |
| minWidth     | `string`                                                             |         | The `min-width` of the Box                                      |
| maxWidth     | `string`                                                             |         | The `max-width` of the Box                                      |
| height       | [`enum`](#enum)                                                      |         | The `height` of the Box                                         |
| maxHeight    | `string`                                                             |         | The `max-height` of the Box                                     |
| position     | [`position`](#position)                                              |         | The `position` of the Box                                       |
| left         | `string`                                                             |         | The `left` of the Box                                           |
| zIndex       | `number`                                                             |         | The `z-index` of the Box                                        |
| top          | `string`                                                             |         | The `top` of the Box                                            |
| right        | `string`                                                             |         | The `right` of the Box                                          |
| bottom       | `string`                                                             |         | The `bottom` of the Box                                         |
| textAlign    | [`textAlign`](#textAlign)                                            |         | The `text-align` of the Box                                     |
| elevation    | [`elevation`](#elevation)                                            |         | The `box-shadow` of the Box                                     |
| color        | `string`                                                             |         | The `color` of the Box                                          |
| background   | `string`                                                             |         | The `background` of the Box                                     |
| borderRadius | [`borderRadius`](#borderRadius)                                      |         | The `border-radius` of the Box                                  |
| overflow     | [`overflow`](#overflow)                                              |         | The `overflow` of the Box                                       |
| largeDesktop | [`MediaQueries`](#media-queries)                                     |         | Object for setting up properties for the largeDesktop viewport. |
| desktop      | [`MediaQueries`](#media-queries)                                     |         | Object for setting up properties for the desktop viewport.      |
| tablet       | [`MediaQueries`](#media-queries)                                     |         | Object for setting up properties for the tablet viewport.       |
| largeMobile  | [`MediaQueries`](#media-queries)                                     |         | Object for setting up properties for the largeMobile viewport.  |
| mediumMobile | [`MediaQueries`](#media-queries)                                     |         | Object for setting up properties for the mediumMobile viewport. |

### Media Queries

When you need to specify some different behavior of the Box component on different viewport, you can use properties for it.
There are `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop` available and it behaves the same as [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery) functions.
All this properties - objects have the some own properties and none is required.

| Name         | Type                                                                 | Default | Description                      |
| :----------- | :------------------------------------------------------------------- | :------ | :------------------------------- |
| padding      | [`spacingObject`](#spacingobject) \| [`spacingToken`](#spacingtoken) |         | The `padding` of the Box         |
| margin       | [`spacingObject`](#spacingobject) \| [`spacingToken`](#spacingtoken) |         | The `margin` of the Box          |
| wrap         | [`enum`](#enum)                                                      |         | The `flex-wrap` of the Box       |
| shrink       | `number`                                                             |         | The `flex-shrink` of the Box     |
| grow         | `number`                                                             |         | The `flex-grow` of the Box       |
| align        | [`enum`](#enum)                                                      |         | The `align-items` of the Box     |
| justify      | [`enum`](#enum)                                                      |         | The `justify-content` of the Box |
| direction    | [`enum`](#enum)                                                      |         | The `flex-direction` of the Box  |
| width        | [`enum`](#enum)                                                      |         | The `width` of the Box           |
| maxWidth     | `string`                                                             |         | The `max-width` of the Box       |
| height       | [`enum`](#enum)                                                      |         | The `height` of the Box          |
| maxHeight    | `string`                                                             |         | The `max-height` of the Box      |
| position     | [`position`](#position)                                              |         | The `position` of the Box        |
| left         | `string`                                                             |         | The `left` of the Box            |
| top          | `string`                                                             |         | The `top` of the Box             |
| right        | `string`                                                             |         | The `right` of the Box           |
| bottom       | `string`                                                             |         | The `bottom` of the Box          |
| textAlign    | [`textAlign`](#textAlign)                                            |         | The `text-align` of the Box      |
| elevation    | [`elevation`](#elevation)                                            |         | The `box-shadow` of the Box      |
| color        | `string`                                                             |         | The `color` of the Box           |
| background   | `string`                                                             |         | The `background` of the Box      |
| borderRadius | [`borderRadius`](#borderRadius)                                      |         | The `border-radius` of the Box   |
| overflow     | [`overflow`](#overflow)                                              |         | The `overflow` of the Box        |

### enum

| display          | justify     | direction          | align       | wrap       | width    | height   |
| :--------------- | :---------- | :----------------- | :---------- | :--------- | :------- | :------- |
| `"none"`         | `"start"`   | `"row"`            | `"start"`   | `"nowrap"` | `"full"` | `"full"` |
| `"flex"`         | `"end"`     | `"column"`         | `"end"`     | `"wrap"`   | `"auto"` | `"auto"` |
| `"inline-flex"`  | `"center"`  | `"row-reverse"`    | `"center"`  |            | `string` | `string` |
| `"block"`        | `"between"` | `"column-reverse"` | `"stretch"` |            |          |          |
| `"inline"`       | `"around"`  |                    |             |            |          |          |
| `"inline-block"` |             |                    |             |            |          |          |
| `"list-item"`    |             |                    |             |            |          |          |

### position

| position     |
| :----------- |
| `"relative"` |
| `"absolute"` |
| `"fixed"`    |

### textAlign

| textAlign  |
| :--------- |
| `"left"`   |
| `"center"` |
| `"right"`  |

### borderRadius

| borderRadius |
| :----------- |
| `"small"`    |
| `"normal"`   |
| `"large"`    |
| `"circle"`   |

### overflow

| overflow    |
| :---------- |
| `"auto"`    |
| `"hidden"`  |
| `"scroll"`  |
| `"visible"` |

### elevation

| elevation   |
| :---------- |
| `"action"`  |
| `"fixed"`   |
| `"overlay"` |
| `"raised"`  |

### spacingObject

| key        | value                           |
| :--------- | :------------------------------ |
| `"top"`    | [`spacingToken`](#spacingtoken) |
| `"right"`  | [`spacingToken`](#spacingtoken) |
| `"left"`   | [`spacingToken`](#spacingtoken) |
| `"bottom"` | [`spacingToken`](#spacingtoken) |

If you want to define `spacingObject`, you can define specific directions like this:
`<Box margin={{ top: "XXSmall", bottom: "XXSmall" }} />`

### spacingToken

| spacingToken |
| :----------- |
| `"none"`     |
| `"XXXSmall"` |
| `"XXSmall"`  |
| `"XSmall"`   |
| `"small"`    |
| `"medium"`   |
| `"large"`    |
| `"XLarge"`   |
| `"XXLarge"`  |
| `"XXXLarge"` |
