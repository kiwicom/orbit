# Dictionary

We added support to our own dictionary. It handles common translations in components like `Close`

You have available our dictionary in `@kiwicom/orbit-components/lib/data/dictionary/...`
There are files which contains our own translations.

**Example:**

```jsx
import en_GB from "@kiwicom/orbit-components/lib/data/dictionary/en-GB.json";
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
import Heading from "@kiwicom/orbit-components/lib/Heading";

const App = () => (
  <OrbitProvider dictionary={en_GB}>
    <Tooltip content="Write your text here. If it’s longer than three li…">
      <Heading>Orbit design system</Heading>
    </Tooltip>
  </OrbitProvider>
);
```

## Fallbacks

- If translation key not exists in your language the fallback is `en_GB` which is our default lang
- If translation key not exists in both files (your language, default language), the translation key will be rendered e.g. `button_close`

## Your own dictionary

There is option to add your own dictionary, just pass object containing keys and values.

```jsx
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";

const App = () => (
  <OrbitProvider
    dictionary={{
      button_close: "My own translation",
    }}
  >
    <Button type="secondary" size="large" />
  </OrbitProvider>
);
```
