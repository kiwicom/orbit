# Card

To implement Card component into your project you'll need to the import at least the Card and the [CardSection](#cardsection):

```jsx
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
```

After adding import into your project you can use it simply like:

```jsx
<Card>
  <CardSection>Hello World!</CardSection>
</Card>
```

## Props

Table below contains all types of the props available in the Card component.

| Name        | Type                    | Default | Description                                                                                                                                                    |
| :---------- | :---------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actions     | `React.Node`            |         | Optional prop for Action components in header of Card                                                                                                          |
| children    | `React.Node`            |         | The content of the Card. You can use only [CardSection](#cardsection)                                                                                          |
| dataTest    | `string`                |         | Optional prop for testing purposes                                                                                                                             |
| id          | `string`                |         | Set `id` for `Card`                                                                                                                                            |
| description | `React.Node`            |         | The description of the Card                                                                                                                                    |
| header      | `React.Node`            |         | The header of the Card. Useful when you need different layout then combination of eg `title` and `description`                                                 |
| icon        | `React.Node`            |         | Display icon on the left                                                                                                                                       |
| loading     | `boolean`               |         | If `true` `Loading` will be rendered                                                                                                                           |
| onClose     | `() => void \| Promise` |         | Callback that is triggered when Card is closing                                                                                                                |
| spaceAfter  | `enum`                  |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| title       | `React.Node`            |         | The title of the Card                                                                                                                                          |
| titleAs     | [`enum`](#enum)         | `"h2"`  | The element used for the root node of the title of Card.                                                                                                       |

### CardSection

```jsx
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
```

#### Usage:

```jsx
<Card>
  <CardSection>Hello World!</CardSection>
</Card>
```

#### Props

| Name            | Type                       | Default | Description                                                                                                                                                |
| :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actions         | `React.Node`               |         | Actions which will be rendered on the right side                                                                                                           |
| children        | `React.Node`               |         | The content of the CardSection.                                                                                                                            |
| dataTest        | `string`                   |         | Optional prop for testing purposes.                                                                                                                        |
| description     | `React.Node`               |         | The description of the CardSection                                                                                                                         |
| expandable      | `boolean`                  | `false` | If `true`, the CardSection will be expandable.                                                                                                             |
| expanded        | `boolean`                  |         | If you pass either `true` or `false` the CardSection component will controlled component and you will have to manage the state via `onExpand` or `onClose` |
| header          | `React.Node`               |         | The header of the CardSection. Useful when you need different layout than combination of e.g. `title` and `description` properties.                        |
| icon            | `React.Node`               |         | Displayed icon on the left side of the CardSection.                                                                                                        |
| initialExpanded | `boolean`                  | `false` | Initial state of expandable CardSection when it mounts in uncontrolled variant                                                                             |
| noSeparator     | `Boolean`                  |         | Optional prop to turn off Separator between `header` and `children`                                                                                        |
| onClick         | `event => void \| Promise` |         | Function for handling the onClick event.                                                                                                                   |
|                 |
| onClose         | `() => void \| Promise`    |         | Callback that is triggered when section is closing                                                                                                         |
| onExpand        | `() => void \| Promise`    |         | Callback that is triggered when section is expanding                                                                                                       |
| title           | `React.Node`               |         | The title of the CardSection                                                                                                                               |
| titleAs         | [`enum`](#enum)            | `"h2"`  | The element used for the root node of the title of CardSection.                                                                                            |

### enum

| titleAs |
| :------ |
| `"h1"`  |
| `"h2"`  |
| `"h3"`  |
| `"h4"`  |
| `"h5"`  |
| `"h6"`  |
| `"div"` |
