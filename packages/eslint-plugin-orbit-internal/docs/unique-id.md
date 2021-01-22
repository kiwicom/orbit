# unique ids

Rule prevents id namespace collisions. It often happens, that some elements can have same ids. To prevent it in our codebase, it's better to use `randomID`utility function.

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
import React, { useMemo } from "react";
import randomID from "../utils/randomID";

const firstID = useMemo(() => randomID("firstID"), []);
const secondID = useMemo(() => randomID("secondID"), []);

const App = () => (
  <>
    <div id={firstID}>first</div>
    <div id={secondID}>second</div>
  </>
);
```

## Rule options

```
"orbit-internal/unique-id": <enabled>
```
