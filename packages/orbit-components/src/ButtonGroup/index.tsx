import * as React from "react";

import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # ButtonGroup
 *
 * To implement ButtonGroup component into your project you'll need to add the import:
 *
 * ```jsx
 * import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <ButtonGroup>
 *   <Button>Hello</Button>
 *   <Button>World!</Button>
 * </ButtonGroup>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in ButtonGroup component.
 *
 * | Name         | Type         | Default | Description                                                            |
 * | :----------- | :----------- | :------ | :--------------------------------------------------------------------- |
 * | **children** | `React.Node` |         | The content of the ButtonGroup, normally **Button** or **ButtonLink**. |
 * | dataTest     | `string`     |         | Optional prop for testing purposes.                                    |
 *
 *
 * @orbit-doc-end
 */
const ButtonGroup = ({ children, dataTest }: Props) => (
  <div
    data-test={dataTest}
    className="tb:first:[&>.orbit-button-primitive]:rounded-s-100 tb:last:[&>.orbit-button-primitive]:rounded-e-100 first:[&>.orbit-button-primitive]:rounded-s-150 last:[&>.orbit-button-primitive]:rounded-e-150 flex space-x-px rtl:space-x-reverse [&>.orbit-button-primitive]:rounded-none"
  >
    {children}
  </div>
);

export default ButtonGroup;
