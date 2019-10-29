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

| Name        | Type         | Default | Description                                                                                                                                     |
| :---------- | :----------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| actions     | `React.Node` |         | Optional prop for Action components in header of Card                                                                                           |
| children    | `React.Node` |         | The content of the Card.                                                                                                                        |
| dataTest    | `string`     |         | Optional prop for testing purposes.                                                                                                             |
| description | `React.Node` |         | Optional prop to add description                                                                                                                |
| header      | `React.Node` |         | Optional prop for custom header                                                                                                                 |
| icon        | `React.Node` |         | Optional prop to add Icon in Card header                                                                                                        |
| loading     | `boolean`    |         | Optional prop to turn on Loading component inside                                                                                               |
| spaceAfter  | `enum`       |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| title       | `React.Node` |         | Optional prop to add title                                                                                                                      |

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

| Name            | Type                    | Default | Description                                                                                                                                                |
| :-------------- | :---------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**    | `React.Node`            |         | Optional prop. The content of the CardSection.                                                                                                             |
| actions         | `React.Node`            |         | Optional prop for Action components in header of Card                                                                                                      |
| dataTest        | `string`                |         | Optional prop for testing purposes.                                                                                                                        |
| description     | `React.Node`            |         | Optional prop to add description                                                                                                                           |
| expandable      | `boolean`               |         | Optional prop, CardSection could be expandable                                                                                                             |
| expanded        | `boolean`               |         | If you pass either `true` or `false` the CardSection component will controlled component and you will have to manage the state via `onExpand` or `onClose` |
| header          | `React.Node`            |         | Optional prop for custom header                                                                                                                            |
| icon            | `React.Node`            |         | Optional prop to add Icon                                                                                                                                  |
| initialExpanded | `React.Node`            |         | Optional prop, sets CardSection open with first render                                                                                                     |
| noSeparator     | `Boolean`               |         | Optional prop to turn off Separator between Header and Content                                                                                             |
| onClose         | `() => void \| Promise` |         | Callback after close                                                                                                                                       |
| onExpand        | `() => void \| Promise` |         | Callback after expand                                                                                                                                      |
| title           | `React.Node`            |         | Optional prop to add title                                                                                                                                 |
