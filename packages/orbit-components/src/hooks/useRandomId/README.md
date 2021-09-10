#useRandomId

The `useRandomId` generates unique random id.

In order to use the hook, you can simply import it like:

```jsx
import useRandomId from "@kiwicom/orbit-components/lib/hooks/useRandomId"`
```

example:

```jsx
const App = () => {
  const titleId = useRandomId();

  return (
    <svg aria-labelledBy={titleId}>
      <title id={titleId}>some title</title>
      ...
    </svg>
  );
};
```

if you need to generate multiple ids, there is a hook `useRandomSeedId`:

```jsx
import { useRandomIdSeed } from "@kiwicom/orbit-components/lib/hooks/useRandomId"`
```

which you can use like that:

```jsx
const App = () => {
  const randomId = useRandomIdSeed();
  const titleId = randomId("title");
  const descriptionId = randomId("description");

  return (
    <svg aria-labelledBy={`${titleId} ${descriptionId}`}>
      <title id={titleId}>some title</title>
      <desc id={descriptionId}>some description</desc>
      ...
    </svg>
  );
};
```
