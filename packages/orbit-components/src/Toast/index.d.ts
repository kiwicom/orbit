import * as React from "react";

import * as Common from "../common/common";

/** DOCS:
  Toast shows a brief message that’s clear & understandable.
  It’s shown temporarily, which means that it shouldn’t be used for error messages that block the user in continuing the flow.
  Toast component is used for feedback from the app to the users for informing or warning them about different states.
  Toast should only be used if there are no other ways of providing the feedback.

```jsx
import { Toast } from "@kiwicom/orbit-components";
```

After adding import into your project you can use it simply like:

```jsx
  <Toast iconLeft={<CheckCircle customColor="white" size="small" />}>
    <Text>Some text</Text>
  </Toast>
```
*/

interface Props extends Common.Global, Common.SpaceAfter {
  /** Content of Toast component */
  readonly children: React.ReactNode;
  /** Optional prop to add icon on the left side of Toast */
  readonly iconLeft?: React.ReactNode;
  /** Optional prop to turn off / on animation  */
  readonly animate?: boolean;
  /** Optional prop to change horizontal position of Toast */
  readonly offsetX?: string;
  /** Optional prop to change vertical position of Toast */
  readonly offsetY?: string;
}

declare const Toast: React.FunctionComponent<Props>;
export { Toast, Toast as default };
