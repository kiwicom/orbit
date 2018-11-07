// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";

import AAAAAA from "./index";

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem.";

storiesOf("AAAAAA", module).add("Primary text", () => <AAAAAA>{customText}</AAAAAA>);
