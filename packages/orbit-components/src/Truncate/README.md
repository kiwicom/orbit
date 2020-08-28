# Truncate

To implement Truncate component into your project you'll need to add the import:

```jsx
import Truncate from "@kiwicom/orbit-components/lib/Truncate";
```

After adding import into your project you can use it simply like:

```jsx
<Truncate>
  Proin mattis lacinia justo. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Class
  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis ante
  orci, molestie vitae vehicula venenatis, tincidunt ac pede.
</Truncate>
```

## Props

Table below contains all types of the props available in the Truncate component.

| Name         | Type         | Default | Description                                                                      |
| :----------- | :----------- | :------ | :------------------------------------------------------------------------------- |
| dataTest     | `string`     |         | Optional property for testing purposes.                                          |
| **children** | `React.Node` |         | The content that should be truncated. See [functional specs](#functional-specs). |
| maxWidth     | `string`     | `100%`  | Optional property when you need to explicitly setup `max-width` of the component |

## Functional specs

- The Truncate component renders only one, single line of truncated content.

- When you need to use combination of `Truncate` and `Text` component, pass the `Text` as children, e.g. like this:

```jsx
import Truncate from "@kiwicom/orbit-components/lib/Truncate";
import Text from "@kiwicom/orbit-components/lib/Text";

const TruncatedText = ({ children }) => (
  <Truncate>
    <Text type="secondary">Text to truncate</Text>
  </Truncate>
);
```

- It's also possible to use this component inside `Stack`. By default, it will inherit the width of it with use of `max-width: 100%`. If you need to stack two truncates or some combination differently, use `maxWidth` property for that, e.g. like this:

```jsx
import Truncate from "@kiwicom/orbit-components/lib/Truncate";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const TruncatedStacking = () => (
  <Stack direction="row">
    <Truncate maxWidth="20%">Text to truncate</Truncate>
    // second Truncate will take 80 % of space, by default
    <Truncate>Another text to truncate</Truncate>
  </Stack>
);
```
