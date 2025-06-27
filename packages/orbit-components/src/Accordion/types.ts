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

/** If loading is true it will render the Loading component */
type LoadingProps =
  | {
      loading?: false;
      loadingTitle?: never;
      loadingHidden?: never;
    }
  | {
      loading: true;
      loadingTitle: string;
      loadingHidden?: false;
    }
  | {
      loading: true;
      loadingTitle?: never;
      loadingHidden: true;
    };

interface BaseProps extends Common.Globals, Common.SpaceAfter {
  /** The content of the Accordion. You can use only AccordionSection */
  readonly children?: React.ReactNode;
  /** Optional prop to control which AccordionSection (by id) is expanded */
  readonly expandedSection?: string | number;
  /** Callback (along with sectionId) that is triggered when section is expanding */
  readonly onExpand?: (sectionId: string | number) => void | Promise<void>;
}

export type Props = BaseProps & LoadingProps;
