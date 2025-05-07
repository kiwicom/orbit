// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

/*
  DOCS:
  To implement Accordion component into your project you'll need to the import the Accordion and the [AccordionSection](#Accordionsection):
  ```jsx
  import Accordion, { AccordionSection } from "@kiwicom/orbit-components/lib/Accordion";
  ```

  After adding import into your project you can use it simply like:

  ```jsx
  <Accordion>
    <AccordionSection>Hello World!</AccordionSection>
  </Accordion>
  ```
*/

export interface Props extends Common.Globals, Common.SpaceAfter {
  /** The content of the Accordion. You can use only AccordionSection */
  readonly children?: React.ReactNode;
  /** Optional prop to control which AccordionSection (by id) is expanded */
  readonly expandedSection?: string | number;
  /** If true it will render the Loading component */
  readonly loading?: boolean;
  /** Callback (along with sectionId) that is triggered when section is expanding */
  readonly onExpand?: (sectionId: string | number) => void | Promise<void>;
}
