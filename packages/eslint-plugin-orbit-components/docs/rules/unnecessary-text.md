# unnecessary-text

Wrapping children of `Button` or `Heading` component into `Text` component is not necessary and breaks visual style of typography of these components. If you need to explicitly wrap it's children into some DOM element, use e.g. `<span />` instead.

## Rule details

The following patterns are considered errors:

```jsx
import Button from "@kiwicom/orbit-components/lib/Button";
import OrbitText from "@kiwicom/orbit-components/lib/Text";

const Example = () => (
  <Button>
    <OrbitText>Hello World!</OrbitText>
  </Button>
);
```

```jsx
import Heading from "@kiwicom/orbit-components/lib/Heading";
import OrbitText from "@kiwicom/orbit-components/lib/Text";

const Example = () => (
  <Heading>
    <OrbitText>Hello World!</OrbitText>
  </Heading>
);
```

## Rule options

```
"orbit-components/unnecessary-text": <enabled>
```
