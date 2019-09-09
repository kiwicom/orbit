# Card
To implement Card component into your project you'll need to the import at least the Card and the [CardSection](#cardsection):
```jsx
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
```
After adding import into your project you can use it simply like:
```jsx
<Card>
  <CardSection>
    Hello World!
  </CardSection>
</Card>
```
## Props
Table below contains all types of the props available in the Card component.

| Name          | Type                          | Default         | Description                      |
| :------------ | :---------------------------- | :-------------- | :------------------------------- |
| children      | `React.Node`                  |                 | The content of the Card. [See Subcomponents](#sub-components)
| closable      | `boolean`                     | `false`         | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs)
| dataTest      | `string`                      |                 | Optional prop for testing purposes.
| onClose       | `event => void \| Promise`    |                 | Function for handling onClick event.
| spaceAfter    | `enum`                        |                 | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)

## Functional specs
* By passing the `closable` prop into Card, you will be able to handle `onClose` function and Close icon will be displayed. Also, if you want to select the Close Button element for testing purposes, use [data-test="CardCloseButton"] selector.

## Subcomponents
Card component offers a good flexibility and many variations in its usage. There are four subcomponents which you may use.

### CardHeader
```jsx
import Card, { CardHeader } from "@kiwicom/orbit-components/lib/Card";
```
#### Usage:
```jsx
<Card>
  <CardHeader title="Hello World!" />
</Card>
```

#### Props
Table below contains all types of the props in CardHeader component.

| Name          | Type                    | Default         | Description                      |
| :------------ | :---------------------- | :-------------- | :------------------------------- |
| dataA11ySection | `string`              |                 | ID for a `<SkipNavigation>` component. 
| dataTest        | `string`              |                 | Optional prop for testing purposes.
| icon            | `React.Node`          |                 | Displayed icon.
| **title**       | `React.Node`          |                 | The title of the CardHeader.
| subTitle        | `React.Node`          |                 | The description of the CardHeader.
| actions         | `React.Node`          |                 | Actions in CardHeader especially Buttons


### CardSection
```jsx
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
```
#### Usage:
```jsx
<Card>
  <CardSection>
    Hello World!
  </CardSection>
</Card>
```

#### Props
Table below contains all types of the props in CardSection component.

| Name            | Type                   | Default         | Description                      |
| :---------------| :--------------------- | :-------------- | :------------------------------- |
| **children**    | `React.Node`           |                 | The content of the CardSection.
| expandable      | `boolean`              |                 | CardSection could be expandable
| initialExpanded | `boolean`              |                 | CardSection is expanded by default
| onClose         | `() => void \| Promise`|                 | Callback after close
| onExpand        | `() => void \| Promise`|                 | Callback after expand
| dataTest        | `string`               |                 | Optional prop for testing purposes.


### CardSectionHeader
```jsx
import Card, { CardSection, CardSectionHeader } from "@kiwicom/orbit-components/lib/Card";
```
#### Usage:
```jsx
<Card>
  <CardSection>
    <CardSectionHeader>
      Hello World!
    </CardSectionHeader>
  </CardSection>
</Card>
```

#### Props
Table below contains all types of the props in CardSectionHeader component.

| Name            | Type                  | Default         | Description                      |
| :---------------| :---------------------| :-------------- | :------------------------------- |
| **children**    | `React.Node`          |                 | The content of the CardSection.
| actions         | `React.Node`          |                 | Actions in CardSectionHeader especially Buttons 


### CardSectionContent
```jsx
import Card, { CardSection, CardSectionContent } from "@kiwicom/orbit-components/lib/Card";
```
#### Usage:
```jsx
<Card>
  <CardSection>
    <CardSectionContent>
      Hello World!
    </CardSectionContent>
  </CardSection>
</Card>
```

#### Props
Table below contains all types of the props in CardSectionContent component.

| Name            | Type                  | Default         | Description                      |
| :---------------| :---------------------| :-------------- | :------------------------------- |
| **children**    | `React.Node`          |                 | The content of the CardSection.
| visible         | `boolean`             |                 | If visible is passed and CardSection is expandable, the content will be always shown
