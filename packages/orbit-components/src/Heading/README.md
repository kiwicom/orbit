# Heading

To implement the Heading component into your project you'll need to add the import:

```jsx
import Heading from "@kiwicom/orbit-components/lib/Heading";
```

After adding import to your project you can use it simply like:

```jsx
<Heading>Hello World!</Heading>
```

## Props

The table below contains all types of props available in the Heading component.

| Name            | Type                       | Default    | Description                                                                                                                       |
| :-------------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| as              | [`enum`](#enum)            | `"div"`    | Defines the HTML element to be rendered. See Accessibility tab.                                                                   |
| role            | `"heading"`                |            | The role attribute of the element. Can only be defined if `as="div"`. If defined, `level` must be defined. See Accessibility tab. |
| level           | `number`                   |            | The level of the Heading. Required if `role` is defined as `"heading"`. See Accessibility tab.                                    |
| children        | `React.Node`               |            | The content of the Heading.                                                                                                       |
| dataTest        | `string`                   |            | Optional prop for testing purposes.                                                                                               |
| align           | [`enum`](#enum)            | `start`    | `text-align` of the Heading component.                                                                                            |
| dataA11ySection | `string`                   |            | ID for a SkipNavigation component. See Accessibility tab.                                                                         |
| id              | `string`                   |            | Adds `id` HTML attribute to an element. Expects a unique ID.                                                                      |
| inverted        | `boolean`                  |            | If `true`, the Heading color will be white.                                                                                       |
| spaceAfter      | `enum`                     |            | Additional `margin-bottom` after component.                                                                                       |
| type            | [`enum`](#enum)            | `"title0"` | The size type of the Heading.                                                                                                     |
| mediumMobile    | [`Object`](#media-queries) |            | Object for setting up properties for the mediumMobile viewport. [See Media queries](#media-queries)                               |
| largeMobile     | [`Object`](#media-queries) |            | Object for setting up properties for the largeMobile viewport. [See Media queries](#media-queries)                                |
| tablet          | [`Object`](#media-queries) |            | Object for setting up properties for the tablet viewport. [See Media queries](#media-queries)                                     |
| desktop         | [`Object`](#media-queries) |            | Object for setting up properties for the desktop viewport. [See Media queries](#media-queries)                                    |
| largeDesktop    | [`Object`](#media-queries) |            | Object for setting up properties for the largeDesktop viewport. [See Media queries](#media-queries)                               |

### enum

| as      | type                | align     | spaceAfter   |
| :------ | :------------------ | :-------- | :----------- |
| `"h1"`  | `"display"`         | `start`   | `"none"`     |
| `"h2"`  | `"displaySubtitle"` | `end`     | `"smallest"` |
| `"h3"`  | `"title0"`          | `center`  | `"small"`    |
| `"h4"`  | `"title1"`          | `justify` | `"normal"`   |
| `"h5"`  | `"title2"`          |           | `"medium"`   |
| `"h6"`  | `"title3"`          |           | `"large"`    |
| `"div"` | `"title4"`          |           | `"largest"`  |
|         | `"title5"`          |           |
|         | `"title6"`          |           |

### Media Queries

To make Heading responsive you can use props `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop`,
which match
the [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery)
functions and contain the following properties:

| Name       | Type            | Default    | Description                                 |
| :--------- | :-------------- | :--------- | :------------------------------------------ |
| type       | [`enum`](#enum) | `"title0"` | The size type of Heading.                   |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. |
