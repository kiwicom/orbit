# Use unique value for `id` HTML attribute

Rule prevents namespace collisions of the `id` HTML attribute. It often happens, that some elements can have same ids. To prevent it in our codebase, it's better to use `randomID` utility function.

## Rule details

Example of error:

```jsx
const App = () => (
  <>
    <div id="1">first</div>
    <div id="2">second</div>
  </>
);
```

```jsx
import React from "react";
import randomID from "../utils/randomID";

const firstID = randomID("firstID");
const secondID = randomID("secondID");

const App = () => (
  <>
    <div id={firstID}>first</div>
    <div id={secondID}>second</div>
  </>
);
```

## Rule options

```
"orbit-components/unique-id": <enabled>
```
