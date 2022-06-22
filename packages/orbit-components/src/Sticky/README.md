# Sticky

To implement Sticky component into your project you'll need simply wrap your component into it:

```jsx
import Sticky from "@kiwicom/orbit-components/lib/Sticky";
import Card from "@kiwicom/orbit-components/lib/Card";
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent";
```

After adding import into your project you can use it simply like:

```jsx
<Sticky>
  <Card>
    <CardContent>Hello World!</CardContent>
  </Card>
</Sticky>
```

## Props

Table below contains all types of the props available in ButtonLink component.

| Name     | Type         | Default | Description                         |
| :------- | :----------- | :------ | :---------------------------------- |
| children | `React.Node` |         | The content of the FloatingCard.    |
| offset   | `number`     | `10`    | Sets offset from top during scroll  |
| dataTest | `string`     |         | Optional prop for testing purposes. |
| id       | `string`     |         | Set `id` for `Sticky`               |
