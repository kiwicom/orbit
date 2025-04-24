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

| Name            | Type                         | Default | Description                                                                                                             |
| :-------------- | :--------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------- |
| actions         | `React.Node`                 |         | Optional prop for Action components in header of Card.                                                                  |
| children        | `React.Node`                 |         | The content of the Card. You can use only [CardSection](#cardsection).                                                  |
| dataTest        | `string`                     |         | Optional prop for testing purposes.                                                                                     |
| id              | `string`                     |         | Set `id` for `Card`.                                                                                                    |
| dataA11ySection | `string`                     |         | Optional prop to link the Card to a `SkipNavigation` component.                                                         |
| description     | `React.Node`                 |         | The description of the Card.                                                                                            |
| header          | `React.Node`                 |         | The header of the Card. Useful when you need a different layout than the combination of e.g. `title` and `description`. |
| loading         | `boolean`                    |         | If `true`, a loading animation will be rendered.                                                                        |
| onClose         | `() => void \| Promise`      |         | Callback that is triggered when Card is closing.                                                                        |
| title           | `React.Node`                 |         | The title of the Card.                                                                                                  |
| titleAs         | [`enum`](#enum)              | `"div"` | The element used for the root node of the title of Card. It **does not** impact the visual style of the title.          |
| margin          | `string \| number \| Object` |         | Utility prop to set margin.                                                                                             |
| labelClose      | `string`                     | `Close` | Property for passing translation string to close Button.                                                                |

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

| Name            | Type                       | Default | Description                                                                                                                                                                                                                                 |
| :-------------- | :------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| actions         | `React.Node`               |         | Actions which will be rendered on the right side. If used with `expandable` or `onClick`, the rendered elements should not be interactive but can be used to represent states.                                                              |
| children        | `React.Node`               |         | The content of the CardSection.                                                                                                                                                                                                             |
| dataTest        | `string`                   |         | Optional prop for testing purposes.                                                                                                                                                                                                         |
| description     | `React.Node`               |         | The description of the CardSection.                                                                                                                                                                                                         |
| expandable      | `boolean`                  | `false` | If `true`, the CardSection will be expandable.                                                                                                                                                                                              |
| expanded        | `boolean`                  |         | Can only be used if `expandable` is `true`. If you pass a value, the CardSection component will be controlled and you will have to manage the state via `onExpand` or `onClose`. If you leave it empty, the component will be uncontrolled. |
| header          | `React.Node`               |         | The header of the CardSection. Useful when you need a different layout than the combination of e.g. `title` and `description` properties.                                                                                                   |
| initialExpanded | `boolean`                  | `false` | Initial state of expandable CardSection when it mounts in uncontrolled variant. Can only be used if `expandable` is `true` and `expanded` is not defined.                                                                                   |
| noSeparator     | `Boolean`                  |         | Optional prop to not render the Separator between `header` and `children`.                                                                                                                                                                  |
| onClick         | `event => void \| Promise` |         | Function for handling the onClick event.                                                                                                                                                                                                    |
| onClose         | `() => void \| Promise`    |         | Callback that is triggered when section is closing. Can be used in both controlled or uncontrolled version.                                                                                                                                 |
| onExpand        | `() => void \| Promise`    |         | Callback that is triggered when section is expanding. Can be used in both controlled or uncontrolled version.                                                                                                                               |
| title           | `React.Node`               |         | The title of the CardSection.                                                                                                                                                                                                               |
| titleAs         | [`enum`](#enum)            | `"div"` | The element used for the root node of the title of CardSection.                                                                                                                                                                             |

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
