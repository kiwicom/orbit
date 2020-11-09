# Inline

To implement Inline component into your project you'll need to add the import:

```jsx
import Inline from "@kiwicom/orbit-components/lib/Inline";
```

After adding import into your project you can use it simply like:

```jsx
<Inline>Hello World!</Inline>
```

## Props

Table below contains all types of the props available in the Inline component.

| Name         | Type                             | Default | Description                                                     |
| :----------- | :------------------------------- | :------ | :-------------------------------------------------------------- |
| as           | `string`                         | `"div"` | Render as element.                                              |
| className    | `string`                         | `"div"` | Optional className of component.                                |
| children     | `React.Node`                     |         | The children of the Inline.                                     |
| dataTest     | `string`                         |         | Optional prop for testing purposes.                             |
| spacing      | [`spacingToken`](#spacingToken)  |         | The spacing between children elements of the Inline             |
| align        | [`enum`](#enum)                  |         | The `align-items` of the Inline                                 |
| justify      | [`enum`](#enum)                  |         | The `justify-content` of the Inline                             |
| largeDesktop | [`MediaQueries`](#media-queries) |         | Object for setting up properties for the largeDesktop viewport. |
| desktop      | [`MediaQueries`](#media-queries) |         | Object for setting up properties for the desktop viewport.      |
| tablet       | [`MediaQueries`](#media-queries) |         | Object for setting up properties for the tablet viewport.       |
| largeMobile  | [`MediaQueries`](#media-queries) |         | Object for setting up properties for the largeMobile viewport.  |
| mediumMobile | [`MediaQueries`](#media-queries) |         | Object for setting up properties for the mediumMobile viewport. |

### Media Queries

When you need to specify some different behaviour of the Inline component on different viewport, you can use properties for it.
There are `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop` available and it behaves the same as [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery) functions.
All this properties - objects have the some own properties and none is required.

| Name    | Type                            | Default | Description                                         |
| :------ | :------------------------------ | :------ | :-------------------------------------------------- |
| spacing | [`spacingToken`](#spacingToken) |         | The spacing between children elements of the Inline |
| align   | [`enum`](#enum)                 |         | The `align-items` of the Inline                     |
| justify | [`enum`](#enum)                 |         | The `justify-content` of the Inline                 |

### enum

| justify     | align      |
| :---------- | :--------- |
| `"start"`   | `"start"`  |
| `"end"`     | `"end"`    |
| `"center"`  | `"center"` |
| `"between"` |            |
| `"around"`  |            |

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
